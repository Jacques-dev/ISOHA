<template>
  <div id="hopitale">

    <div class="container">
      <div class="row h-100 d-flex align-items-center">

        <div class="col-sm-7 column_design">
          <form @submit.prevent="chercherPatient" id="chercherPatientForm">
            <div class="row">
              <div class="col-sm-7">
                <h2>Chercher un patient</h2>
              </div>
              <div class="col-sm-2 ml-sm-auto mr-sm-auto">
                <button type="submit" class="btn">Rechercher</button>
              </div>
            </div>

            <input class="input" type="text" placeholder="nom du patient" v-model="chercher.nom">
            <input class="input" type="text" placeholder="prénom du patient" v-model="chercher.prenom">

          </form>
          <div id="resultats-recherche">
            <div v-for="patient in recherches" :key="patient.email">
              <div class="row">
                <div class="col-sm-2">
                  {{ patient.nom }}
                </div>
                <div class="col-sm-2">
                  {{ patient.prenom }}
                </div>
                <div class="col-sm-4">
                  {{ patient.email }}
                </div>
                <div class="col-sm-4">
                  {{ patient.telephone }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-4 ml-sm-auto column_design">
          <ajouter-patient @ajouter-patient="ajouterPatient"></ajouter-patient>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  const AjouterPatient = window.httpVueLoader('./components/AjouterPatient.vue');
  module.exports = {
    components: {
      AjouterPatient,
    },
    props: {
      recherches: { type: Array, default: [] },
    },
    data () {
			return {
        chercher: {
          nom: '',
          prenom: ''
        },
			}
		},
		methods: {
      chercherPatient () {
        this.$emit('chercher-patient', this.chercher)
      },
      ajouterPatient (newPatient) {
        this.$emit('ajouter-patient', newPatient)
      }
		}
  }
</script>

<style scoped>

  #hopitale .input {
    width: 80%;
    border: none;
    border-bottom: solid 2px var(--c2) !important;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, var(--c1) 4%);
    color: var(--c2);
    margin: 7.5px 0;
  }

  #resultats-recherche {
    height: 300px;
    overflow-y: scroll;
  }

</style>
