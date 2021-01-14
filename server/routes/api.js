  const express = require('express')
  const router = express.Router()
  const bcrypt = require('bcrypt')
  const multer = require('multer')
  const { Client } = require('pg')

  const client = new Client({
   user: 'postgres',
   host: 'localhost',
   password: 'Analytics',
   database: 'Isoha'
  })

  client.connect()

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'server/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

  var upload = multer({ storage: storage })

  router.post('/register', async (req, res) => {
    const nom = req.body.nom
    const prenom = req.body.prenom
    const email = req.body.email
    const password = req.body.password
    const telephone = req.body.telephone
    const dateNaissance = req.body.dateNaissance
    const age = req.body.age
    const taille = req.body.taille
    const poids = req.body.poids
    const sexe = req.body.sexe
    const profession = req.body.profession

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
        insert_patient_medecin = "INSERT INTO patient (nom, prenom, email, telephone, datenaissance, age, taille, poids, sexe, profession) "
        insert_patient_medecin += "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)"
        await client.query({
          text: insert_patient_medecin,
          values: [nom, prenom, email, telephone, dateNaissance, age, taille, poids, sexe, profession]
        })
        res.send()

      } else if (email.match(/(medecin-)+[a-z]+(-)+[a-z]+(-efrei_2023)/gm)) {
        insert_patient_medecin = "INSERT INTO medecin (email, nom, prenom, telephone) VALUES ($1, $2, $3, $4)"
        await client.query({
          text: insert_patient_medecin,
          values: [email, nom, prenom, telephone]
        })
        res.send()
      } else {
        res.status(404).json({ message: "this email is not correct" })
      }

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
          select_patient_medecin = "SELECT nom, prenom, email, telephone, datenaissance, age, taille, poids, sexe, profession FROM patient WHERE email=$1"

          const result2 = await client.query({
            text: select_patient_medecin,
            values: [email]
          })

          req.session.patient = true
          req.session.userName = result2.rows[0].nom
          req.session.userFirstName = result2.rows[0].prenom
          req.session.userEmail = result2.rows[0].email
          req.session.userTelephone = result2.rows[0].telephone
          req.session.userDateNaissance = result2.rows[0].datenaissance
          req.session.userAge = result2.rows[0].age
          req.session.userTaille = result2.rows[0].taille
          req.session.userPoids = result2.rows[0].poids
          req.session.userSexe = result2.rows[0].sexe
          req.session.userProfession = result2.rows[0].profession

          select_radio = "SELECT image, result FROM radios WHERE email=$1"

          const result3 = await client.query({
            text: select_radio,
            values: [email]
          })

          req.session.userRadio = result3.rows[0].image
          req.session.userRadioResult = result3.rows[0].result
          res.send()

        } else if (email.match(/(medecin-)+[a-z]+(-)+[a-z]+(-efrei_2023)/gm)) {
          select_patient_medecin = "SELECT email, nom, prenom, telephone FROM medecin WHERE email=$1"

          const result2 = await client.query({
            text: select_patient_medecin,
            values: [email]
          })

          req.session.medecin = true
          req.session.userName = result2.rows[0].nom
          req.session.userFirstName = result2.rows[0].prenom
          req.session.userEmail = result2.rows[0].email
          req.session.userTelephone = result2.rows[0].telephone

          res.send()

        } else {
          res.status(404).json({ message: "this email is not correct" })
        }

      } else {
        res.status(400).json({ message: "wrong password" })
      }

    } else {
      res.status(400).json({ message: "no such user exist" })
    }
  })

  router.post('/logout', (req, res) => {
    req.session.patient = null
    req.session.medecin = null
    req.session.userName = null
    req.session.userFirstName = null
    req.session.userEmail = null
    req.session.userTelephone = null
    req.session.userDateNaissance = null
    req.session.userAge = null
    req.session.userTaille = null
    req.session.userPoids = null
    req.session.userSexe = null
    req.session.userProfession = null
    req.session.userRadio = null
    req.session.userRadioResult = null
    req.session.radio = null

    user = {
      nom: req.session.userName,
      prenom: req.session.userFirstName,
      email: req.session.userEmail,
      telephone: req.session.userTelephone,
      dateNaissance: req.session.userDateNaissance,
      age: req.session.userAge,
      taille: req.session.userTaille,
      poids: req.session.userPoids,
      sexe: req.session.userSexe,
      profession: req.session.userProfession,
      radio: req.session.userRadio,
      resultRadio: req.session.userRadioResult
    }
    const log = {
      patient: req.session.patient,
      medecin: req.session.medecin,
      user: user,
      radio: req.session.radio
    }
    res.json(log)
  })

  router.get('/me', async (req, res) => {

    if (req.session.userEmail) {

      var user
      if (req.session.patient) {
        user = {
          nom: req.session.userName,
          prenom: req.session.userFirstName,
          email: req.session.userEmail,
          telephone: req.session.userTelephone,
          dateNaissance: req.session.userDateNaissance,
          age: req.session.userAge,
          taille: req.session.userTaille,
          poids: req.session.userPoids,
          sexe: req.session.userSexe,
          profession: req.session.userProfession,
          radio: req.session.userRadio,
          resultRadio: req.session.userRadioResult
        }
      } else {
        user = {
          nom: req.session.userName,
          prenom: req.session.userFirstName,
          email: req.session.userEmail,
          telephone: req.session.userTelephone,
        }
      }

      const log = {
        patient: req.session.patient,
        medecin: req.session.medecin,
        user: user,
        radio: req.session.radio
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
    var dateNaissance = req.body.dateNaissance

    var conditionEmail = true
    var conditionDate = true
    if (email) {
      if (!email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
        conditionEmail = false
      }
    }

    if (dateNaissance && req.session.patient) {
      if (!dateNaissance.match(/([0-9]{2}[\/])([0-9]{2}[\/])([0-9]{4})+/i)) {
        conditionDate = false
      }
    }

    if (conditionEmail && conditionDate) {
      var telephone = req.body.telephone
      var age = req.body.age
      var taille = req.body.taille
      var poids = req.body.poids
      var sexe = req.body.sexe
      var profession = req.body.profession

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
      if (!dateNaissance) {
        dateNaissance = req.session.userDateNaissance
      }
      if (!age) {
        age = req.session.userAge
      }
      if (!taille) {
        taille = req.session.userTaille
      }
      if (!poids) {
        poids = req.session.userPoids
      }
      if (!sexe) {
        sexe = req.session.userSexe
      }
      if (!profession) {
        profession = req.session.userProfession
      }
      req.session.userName = nom
      req.session.userFirstName = prenom
      req.session.userEmail = email
      req.session.userTelephone = telephone
      req.session.userDateNaissance = dateNaissance
      req.session.userAge = age
      req.session.userTaille = taille
      req.session.userPoids = poids
      req.session.userSexe = sexe
      req.session.userProfession = profession

      if (req.session.patient) {
        var update = "UPDATE patient SET nom = $1, prenom = $2, email = $3, telephone = $4, "
        update += "datenaissance = $5, age = $6, taille = $7, poids = $8, sexe = $9, profession = $10 "
        update += "WHERE email=$3"
        await client.query({
          text: update,
          values: [nom, prenom, email, telephone, dateNaissance, age, taille, poids, sexe, profession]
        })
        res.send()
      } else {
        var update = "UPDATE medecin SET nom = $1, prenom = $2, email = $3, telephone = $4 "
        update += "WHERE email=$3"
        await client.query({
          text: update,
          values: [nom, prenom, email, telephone]
        })
        res.send()
      }

      var update2 = "UPDATE utilisateur SET email = $1 WHERE email = $1"
      await client.query({
        text: update2,
        values: [email]
      })
      res.send()
    } else {
      res.status(404).json({ message: "email or dateNaissance correct" })
    }
  })

  router.post('/recherche', async (req, res) => {
    const nom = req.body.nom
    const prenom = req.body.prenom

    sql = "SELECT nom, prenom, email, telephone FROM patient WHERE nom = $1 AND prenom = $2"

    const result = await client.query({
      text: sql,
      values: [nom, prenom]
    })

    if (result.rowCount == 1) {
      const log = {
        nom: result.rows[0].nom,
        prenom: result.rows[0].prenom,
        email: result.rows[0].email,
        telephone: result.rows[0].telephone,
      }

      res.json(log)
    } else {
      res.status(400).json({ message: "no such user exist" })
    }
  })

  router.post('/loadRadio', async (req, res) => {
    const email = req.body.email

    select = "SELECT image FROM radios WHERE email=$1"

    const result = await client.query({
      text: select,
      values: [email]
    })

    req.session.radio = result.rows[0].image
    res.send()
  })

  router.post('/saveRadioResult', async (req, res) => {
    const email = req.body.email
    const result = req.body.result

    var update = "UPDATE radios SET result = $2 WHERE email = $1"
    await client.query({
      text: update,
      values: [email, result]
    })
    res.send()
  })

  router.post('/upload/:email', upload.single('file'), async (req, res) => {
    const email = req.params.email
    const image = req.file.originalname

    select = "SELECT image FROM radios WHERE email=$1"

    const result = await client.query({
      text: select,
      values: [email]
    })

    if (result.rows == 0) {

      const insert = "INSERT INTO radios (email, image) VALUES ($1, $2)"
      await client.query({
        text: insert,
        values: [email, image]
      })
      res.send({})

    } else {
      res.status(404).json({ message: "not logged" })
    }


  })

module.exports = router
