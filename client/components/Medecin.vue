<template>
  <div id="medecin">

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
                <form id="modificationProfilMedecinForm" @submit.prevent="sendEditProfil">

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
                    <div class="col-lg-12" align="center">
                      <button type="submit" class="btn">Modifier</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>

        <!-- <div class="col-lg-6 ml-lg-auto mr-lg-auto h-50" id="colonne-droite">
          <div class="container-fluid">

            <div class="row">
              <div class="col-lg-12">
                <h2>Jsp encore</h2>
              </div>
            </div>

            <div class="row content h-100">

            </div>

          </div>
        </div> -->

      </div>
    </div>

  </div>
</template>

<script>
  module.exports = {
    props: {
      user: {type: Object },
			radio: { type: String },
		},
		mounted() {
			if (this.radio.image) {
				this.radio.image = null
			}
		},
    data () {
      return {
        editingProfile: {
          nom:'',
          prenom:'',
          email:'',
          telephone:''
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
          telephone:''
        }
      }
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

  #medecin .content {
    background-color: #96d3ff;
    border-radius: 3px;
  }

</style>
