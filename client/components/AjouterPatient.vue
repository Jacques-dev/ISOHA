<template>
  <div id="ajouterPatient">

    <form @submit.prevent="ajouterPatient" id="ajouterPatientForm">
      <div class="row">
        <div class="col-sm-12"><h2>Nouveau patient</h2></div>
      </div>

      <div class="row">
        <input class="col-sm-12 input"  type="text" v-model="newPatient.nom" placeholder="Nom" required>
      </div>

      <div class="row">
        <input class="col-sm-12 input"  type="text" v-model="newPatient.prenom" placeholder="Prénom" required>
      </div>

      <div class="row">
        <input class="col-sm-12 input"  type="text" v-model="newPatient.email" placeholder="Email" id="email" required>
      </div>

      <div class="row">
        <input class="col-sm-12 input"  type="text" v-model="newPatient.password" placeholder="Mot de passe" required>
      </div>

      <div class="row">
        <input class="col-sm-12 input"  type="text" v-model="newPatient.telephone" placeholder="Téléphone" required>
      </div>

      <div class="row">
        <input class="col-sm-12 input"  type="text" v-model="newPatient.dateNaissance" placeholder="Date de naissane : ../../...." id="date" required>
      </div>

      <div class="row">
        <input class="col-sm-12 input"  type="text" v-model="newPatient.age" placeholder="Age" required>
      </div>

      <div class="row">
        <input class="col-sm-12 input"  type="text" v-model="newPatient.taille" placeholder="Taille" required>
      </div>

      <div class="row">
        <input class="col-sm-12 input"  type="text" v-model="newPatient.poids" placeholder="poids" required>
      </div>

      <div class="row">
        <select class="col-sm-12" v-model="newPatient.sexe">
          <option value="" disabled selected>Genre</option>
          <option value="Femme">Femme</option>
          <option value="Homme">Homme</option>
          <option value="Transgenre">Transgenre</option>
        </select>
      </div>

      <div class="row">
        <input class="col-sm-12 input"  type="text" v-model="newPatient.profession" placeholder="Profession">
      </div>

      <div class="row">
        <button class="col-sm-12 btn" type="submit">Ajouter</button>
      </div>

    </form>


  </div>
</template>

<script>
  module.exports = {
    data () {
      return {
        newPatient: {
          nom: '',
          prenom: '',
          email: '',
          password: '',
          telephone: '',
          dateNaissance: '',
          age: '',
          taille: '',
          poids: '',
          sexe: '',
          profession: ''
        }
      }
    },
    methods: {
      // Envoie la valeur des champs du formulaire
      ajouterPatient () {
        var email = document.getElementById("email").value
        var date = document.getElementById("date").value
        if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
          if (date.match(/([0-9]{2}[\/])([0-9]{2}[\/])([0-9]{4})+/i)) {
            this.$emit('ajouter-patient', this.newPatient)
          } else {
            asAlertMsg({
              type: "warning",
              title: "Attention",
              message: "La date de naissance que vous avez entré n'est pas correct"
            })
          }
        } else {
          asAlertMsg({
            type: "warning",
            title: "Attention",
            message: "Le mail que vous avez entré n'est pas correct"
          })
        }
      }
    }
  }
</script>

<style>



</style>
