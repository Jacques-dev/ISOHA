<template>
  <div id="medecin">

    <div class="container">
      <div class="row h-100 d-flex align-items-center">

        <div class="col-sm-3 ml-sm-auto mr-sm-auto" id="colonne-gauche">
          <div class="container-fluid">

            <div class="row">
              <div class="col-sm-12" align="center">
                <h2>Mon profil</h2>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12" align="center">
                <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640" alt="Avatar" width="140px" height="140px">
              </div>
            </div>

            <div class="row content">
              <div class="col-sm-12">
                <ul>
                  <li>Nom :</li>
                  <li>Prénom :</li>
                  <li>Identifiant :</li>
                  <li>Date de naissance :</li>
                  <li>Taille :</li>
                  <li>Poids :</li>
                  <li>Sexe :</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div class="col-sm-7 ml-sm-auto mr-sm-auto h-50" id="colonne-droite">
          <div class="container-fluid">

            <div class="row">
              <div class="col-sm-12">
                <h2>Mon profil</h2>
              </div>
            </div>

            <div class="row content h-100">

            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  module.exports = {
    props: {

    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>

  #medecin #colonne-gauche .row {
    margin: 25px 0;
  }

  #medecin img {
    border-radius: 3px;
  }

  #medecin ul {
    display: block;
    list-style: none;
    width: 100%;
  }

  #medecin button {
    border: 1px solid #007cd6;
    border-radius: 3px;
  }

  #medecin .content {
    background-color: #96d3ff;
    border-radius: 3px;
  }

</style>
