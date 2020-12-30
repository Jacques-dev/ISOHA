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

    const sql = "SELECT * FROM users WHERE email=$1"

    const result = await client.query({
      text: sql,
      values: [email]
    })

    if (result.rowCount == 1) {
      res.status(400).json({ message: "this user already exist" })
    } else {
      const hash = await bcrypt.hash(password, 10)
      const insert = "INSERT INTO users (nom ,prenom, telephone, email, password) VALUES ($1, $2, $3, $4, $5)"

      const result2 = await client.query({
        text: insert,
        values: [nom, prenom, telephone, email, hash]
      })
      res.send()
    }
  })

  router.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const sql = "SELECT password FROM users WHERE email=$1"
    const result = await client.query({
      text: sql,
      values: [email]
    })

    if (result.rowCount == 1) {

      const sqlId = "SELECT id, nom, prenom, email, telephone FROM users WHERE email=$1"
      const result2 = await client.query({
        text: sqlId,
        values: [email]
      })

      req.session.userId = result2.rows[0].id

      req.session.userName = result2.rows[0].nom
      req.session.userEmail = result2.rows[0].email
      req.session.userFirstName = result2.rows[0].prenom
      req.session.userTelephone = result2.rows[0].telephone

      res.status(200).json({ message: "well logged as user" })

    } else {
      res.status(400).json({ message: "no such user exist" })
    }
  })

  router.post('/logout', async (req, res) => {
    req.session.destroy();

    const log = {
      id: req.session.userId,
      email: req.session.userEmail,
      nom: req.session.userName,
      prenom: req.session.userFirstName,
      telephone: req.session.userTelephone
    }
    res.json(log)
  })

  router.get('/me', async (req, res) => {

    if (req.session.userId || req.session.adminId) {

      var reserv = []

      if (req.session.userId) {
        const select = "SELECT * FROM reservation WHERE client=$1"
        const result = await client.query({
          text: select,
          values: [req.session.userId]
        })

        for (let i = 0; i < result.rows.length; i++) {
          result.rows[i].date = new Date(result.rows[i].date).toString().slice(0,15)
        }
        reserv = result.rows
      }

      const log = {
        admin: req.session.adminId,
        user: req.session.userId,
        nom: req.session.userName,
        email: req.session.userEmail,
        prenom: req.session.userFirstName,
        telephone: req.session.userTelephone,
        reservations: reserv
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

  router.use((req, res, next) => {
    if (typeof req.session.panier === 'undefined') {
      req.session.panier = new Panier()
    }
    next()
  })

module.exports = router
