<template>
  <div id="patient">

    <div class="container">
      <div class="row h-100 d-flex align-items-center">

        <div class="col-lg-6 ml-lg-auto mr-lg-auto" id="colonne-gauche">
          <div class="container-fluid">

            <div class="row">
              <div class="col-lg-12" align="center">
                <h2>Mon profil</h2>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12" align="center">
                <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640" alt="Avatar" width="140px" height="140px">
              </div>
            </div>

            <div class="row content">
              <div class="col-lg-12">
                <form id="modificationProfilPatientForm" @submit.prevent="sendEditProfil">

                  <div class="row">
                    <div class="col-lg-3 ml-lg-auto">
                      Nom :
                    </div>
                    <div class="col-lg-9 mr-lg-auto">
                      <input class="input" name="nom" :placeholder="user.nom" type="text" v-model="editingProfile.nom">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 ml-lg-auto">
                      Prenom :
                    </div>
                    <div class="col-lg-9 mr-lg-auto">
                      <input class="input" name="prenom" :placeholder="user.prenom" type="text" v-model="editingProfile.prenom">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 ml-lg-auto">
                      Email :
                    </div>
                    <div class="col-lg-9 mr-lg-auto">
                      <input class="input" name="email" :placeholder="user.email" type="text" v-model="editingProfile.email">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 ml-lg-auto">
                      Telephone :
                    </div>
                    <div class="col-lg-9 mr-lg-auto">
                      <input class="input" name="telephone" :placeholder="user.telephone" type="text" v-model="editingProfile.telephone">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 ml-lg-auto">
                      Taille :
                    </div>
                    <div class="col-lg-9 mr-lg-auto">
                      <input class="input" name="telephone" :placeholder="user.taille" type="text" v-model="editingProfile.taille">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 ml-lg-auto">
                      Poids :
                    </div>
                    <div class="col-lg-9 mr-lg-auto">
                      <input class="input" name="telephone" :placeholder="user.poids" type="text" v-model="editingProfile.poids">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 ml-lg-auto">
                      Date de naissance :
                    </div>
                    <div class="col-lg-9 mr-lg-auto">
                      <input class="input" name="telephone" :placeholder="user.dateNaissance" type="text" v-model="editingProfile.dateNaissance">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 ml-lg-auto">
                      Age :
                    </div>
                    <div class="col-lg-9 mr-lg-auto">
                      <input class="input" name="telephone" :placeholder="user.age" type="text" v-model="editingProfile.age">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 ml-lg-auto">
                      Sexe :
                    </div>
                    <div class="col-lg-9 mr-lg-auto">
                      <select class="col-lg-12" v-model="editingProfile.sexe">
                        <option value="" disabled selected>{{user.sexe}}</option>
                        <option value="Femme">Femme</option>
                        <option value="Homme">Homme</option>
                        <option value="Transgenre">Transgenre</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 ml-lg-auto">
                      Profession :
                    </div>
                    <div class="col-lg-9 mr-lg-auto">
                      <input class="input" name="telephone" :placeholder="user.profession" type="text" v-model="editingProfile.profession">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12" align="center">
                      <button type="submit" class="btn">Modifier</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>

        <div class="col-lg-6 ml-lg-auto mr-lg-auto h-50" id="colonne-droite">
          <div class="container-fluid">

            <div class="row">
              <div class="col-lg-12">
                <h2>Mes radios</h2>
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
      user: {type: Object },
    },
    data () {
      return {
        editingProfile: {
          nom:'',
          prenom:'',
          email:'',
          telephone:'',
          dateNaissance:'',
          age:'',
          taille:'',
          poids:'',
          sexe:'',
          profession:''
        }
      }
    },
    methods: {
      // Envoie un nouveau profil (modifié)
      sendEditProfil(){
        this.$emit('update-profile', this.editingProfile)
        this.abortEditProfil()
      },
      // Annule la modification d'un profil
      abortEditeProfil(){
        this.editingProfile={
          nom:'',
          prenom:'',
          email:'',
          telephone:'',
          dateNaissance:'',
          age:'',
          taille:'',
          poids:'',
          sexe:'',
          profession:''
        }
      }
    }
  }
</script>

<style scoped>

  #patient #colonne-gauche .row {
    margin: 25px 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    #colonne-droite .container-fluid {
      margin-bottom: 150px !important;
    }
  }

  #patient img {
    border-radius: 3px;
  }

  #patient ul {
    display: block;
    list-style: none;
    width: 100%;
  }

  #patient .content {
    background-color: #96d3ff;
    border-radius: 3px;
  }

  #patient .content {
    background-color: #96d3ff;
    border-radius: 3px;
  }

</style>
