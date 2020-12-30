  const express = require('express')
  const router = express.Router()
  const bcrypt = require('bcrypt')
  const { Client } = require('pg')

  const client = new Client({
   user: 'postgres',
   host: 'localhost',
   password: 'Analytics',
   database: 'Isoha'
  })

  client.connect()

  router.post('/register', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const prenom = req.body.prenom
    const nom = req.body.nom
    const telephone = req.body.telephone

    const sql = "SELECT * FROM utilisateur WHERE email=$1"

    const result = await client.query({
      text: sql,
      values: [email]
    })

    if (result.rowCount > 0) {
      res.status(404).json({ message: "this user already exist" })
    } else {

      var insert_patient_medecin

      if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i) ) {
        insert_patient_medecin = "INSERT INTO patient (email, nom, prenom, telephone) VALUES ($1, $2, $3, $4)"
      } else if (email.match(/(medecin-)+[a-z]+(-)+[a-z]+(-efrei_2023)/gm)) {
        insert_patient_medecin = "INSERT INTO medecin (email, nom, prenom, telephone) VALUES ($1, $2, $3, $4)"
      } else {
        res.status(404).json({ message: "this email is not correct" })
      }

      await client.query({
        text: insert_patient_medecin,
        values: [email, nom, prenom, telephone]
      })
      res.send()

      const hash = await bcrypt.hash(password, 10)

      const insert_user = "INSERT INTO utilisateur (email, password) VALUES ($1, $2)"
      await client.query({
        text: insert_user,
        values: [email, hash]
      })
      res.send()
    }
  })

  router.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const sql = "SELECT password FROM utilisateur WHERE email=$1"
    const result = await client.query({
      text: sql,
      values: [email]
    })

    if (result.rowCount == 1) {

      const hashedPassword = result.rows[0].password

      if (await bcrypt.compare(password, hashedPassword)) {

        var select_patient_medecin

        if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i) ) {
          select_patient_medecin = "SELECT email, nom, prenom, telephone FROM patient WHERE email=$1"
          req.session.patient = true
        } else if (email.match(/(medecin-)+[a-z]+(-)+[a-z]+(-efrei_2023)/gm)) {
          select_patient_medecin = "SELECT email, nom, prenom, telephone FROM medecin WHERE email=$1"
          req.session.medecin = true
        } else {
          res.status(404).json({ message: "this email is not correct" })
        }

        const result2 = await client.query({
          text: select_patient_medecin,
          values: [email]
        })

        req.session.userName = result2.rows[0].nom
        req.session.userEmail = result2.rows[0].email
        req.session.userFirstName = result2.rows[0].prenom
        req.session.userTelephone = result2.rows[0].telephone

        res.send()

      } else {
        res.status(400).json({ message: "wrong password" })
      }

    } else {
      res.status(400).json({ message: "no such user exist" })
    }
  })

  router.post('/logout', (req, res) => {
    console.log('JE SUIS LA')
    req.session.patient = null
    req.session.medecin = null
    req.session.userName = null
    req.session.userEmail = null
    req.session.userFirstName = null
    req.session.userTelephone = null

    const log = {
      patient: req.session.patient,
      medecin: req.session.medecin,
      nom: req.session.userName,
      email: req.session.userEmail,
      prenom: req.session.userFirstName,
      telephone: req.session.userTelephone,
    }

    res.json(log)
  })

  router.get('/me', async (req, res) => {

    if (req.session.userEmail) {

      const log = {
        patient: req.session.patient,
        medecin: req.session.medecin,
        nom: req.session.userName,
        email: req.session.userEmail,
        prenom: req.session.userFirstName,
        telephone: req.session.userTelephone,
      }
      res.json(log)
    } else {
      res.status(401).json({ message: "not logged" })
    }
  })

  router.put('/user', async (req, res) => {
    var nom = req.body.nom
    var prenom = req.body.prenom
    var email = req.body.email
    var telephone = req.body.telephone

    if (!nom) {
      nom = req.session.userName
    }
    if (!prenom) {
      prenom = req.session.userFirstName
    }
    if (!email) {
      email = req.session.userEmail
    }
    if (!telephone) {
      telephone = req.session.userTelephone
    }

    req.session.userName = nom
    req.session.userFirstName = prenom
    req.session.userEmail = email
    req.session.userTelephone = telephone

    const update = "UPDATE users SET nom = $1, prenom = $2, email = $3, telephone = $4 WHERE email=$3"
    const result = await client.query({
      text: update,
      values: [nom, prenom, email, telephone]
    })

    res.send()
  })

module.exports = router
