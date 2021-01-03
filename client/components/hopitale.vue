<template>
  <div id="hopitale">

    <div class="container">
      <div class="row h-100 d-flex align-items-center">

        <div class="col-sm-7">
          <div class="row">
            <div class="col-sm-12">Chercher un patient</div>
          </div>
          <form @submit.prevent="chercherPatient">
            <input type="text" placeholder="nom du patient" v-model="chercher.nom">
            <input type="text" placeholder="prénom du patient" v-model="chercher.prenom">
            <button type="submit">Rechercher</button>
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

        <div class="col-sm-5">
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

  #hopitale {
    
  }

  #resultats-recherche {
    height: 300px;
    overflow-y: scroll;
  }

</style>
