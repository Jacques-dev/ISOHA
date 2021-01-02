<template>
  <div id="patient">

    <div class="container">
      <div class="row h-100 d-flex align-items-center">

        <div class="col-sm-6 ml-sm-auto mr-sm-auto" id="colonne-gauche">
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
                <form id="formulaire_modification_profil" @submit.prevent="sendEditProfil">

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Nom :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="nom" :placeholder="user.nom" type="text" v-model="editingProfile.nom">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Prenom :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="prenom" :placeholder="user.prenom" type="text" v-model="editingProfile.prenom">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Email :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="email" :placeholder="user.email" type="text" v-model="editingProfile.email">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Telephone :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="telephone" :placeholder="user.telephone" type="text" v-model="editingProfile.telephone">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Taille :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="telephone" :placeholder="user.taille" type="text" v-model="editingProfile.taille">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Poids :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="telephone" :placeholder="user.poids" type="text" v-model="editingProfile.poids">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Date de naissance :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="telephone" :placeholder="user.dateNaissance" type="text" v-model="editingProfile.dateNaissance">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Age :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="telephone" :placeholder="user.age" type="text" v-model="editingProfile.age">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3 ml-sm-auto">
                      Profession :
                    </div>
                    <div class="col-sm-5 mr-sm-auto">
                      <input name="telephone" :placeholder="user.profession" type="text" v-model="editingProfile.profession">
                    </div>
                  </div>
                  <br>
                  <div class="row">
                    <div class="col-sm-12" align="center">
                      <button type="submit" class="slide_page_commander">Modifier</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>

        <div class="col-sm-6 ml-sm-auto mr-sm-auto h-50" id="colonne-droite">
          <div class="container-fluid">

            <div class="row">
              <div class="col-sm-12">
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

  #patient img {
    border-radius: 3px;
  }

  #patient ul {
    display: block;
    list-style: none;
    width: 100%;
  }

  #patient button {
    border: 1px solid #007cd6;
    border-radius: 3px;
  }

  #patient .content {
    background-color: #96d3ff;
    border-radius: 3px;
  }

</style>
