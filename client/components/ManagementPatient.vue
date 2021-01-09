<template>
  <div id="managementPatient">

    <div class="container">
      <div class="row h-100 d-flex align-items-center">

        <div class="col-sm-7 column_design">
          <form @submit.prevent="chercherPatient(recherches)" id="chercherPatientForm">
            <div class="row">
              <div class="col-sm-7">
                <h2>Chercher un patient</h2>
              </div>
              <div class="col-lg-2 ml-sm-auto mr-sm-auto">
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
              <form class="row">

                <div class="col-lg-6">
                  <div class="row wrapper">
                    <input @Change="ajouterRadio($event, patient.email)" type="file" name="file" id="file" accept=".jpg, .jpeg, .png"/>
                    <label for="file" class="btn-3">
                      <span>Ajouter une radio</span>
                    </label>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="row wrapper">
                    <input @Click="analyserRadio($event, patient.email)" type="button" name="button"/>
                    <label for="button" class="btn-3">
                      <span>Analyser radio</span>
                    </label>
                  </div>
                </div>

              </form>

            </div>
          </div>
        </div>

        <div class="col-sm-4 ml-sm-auto column_design">
          <ajouter-patient @ajouter-patient="ajouterPatient"></ajouter-patient>
        </div>

        <!-- <div v-if="nouveauPatient">
          <ajouter-radio @ajouter-radio="ajouterRadio"></ajouter-radio>
        </div> -->

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
      chercherPatient (recherches) {
        var found = false
        for(var i = 0; i < recherches.length; i++) {
            if (recherches[i].nom == this.chercher.nom) {
                found = true
                break
            }
        }
        if (!found) {
          this.$emit('chercher-patient', this.chercher)
        }
      },
      ajouterRadio (e, email) {
        let file = document.getElementById("file").files[0]
        let data = new FormData();
        data.append('file', file, file.fileName);


        axios.post('/api/upload/' + email, data, {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          }
        }).then((response) => {
          //handle success
        }).catch((error) => {
          asAlertMsg({
            type: "warning",
            title: "Attention",
            message: "Une radio est déjà enregistré",
            timer: 2000,
          })
        });
      }
		}
  }
</script>

<style scoped>

  @media (max-width: 640px) {
    #ajouterPatient {
      margin-bottom: 150px
    }
  }

  #managementPatient .input {
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

  #managementPatient .wrapper {
    margin: 0;
    padding: 2rem;
    width: 100%;
    text-align: center;
  }

  #managementPatient [type=file],
  #managementPatient [type=button] {
    height: 0;
    overflow: hidden !important;
    width: 0;
    padding: 0;
    border: none;
  }

  #managementPatient [type=file] + label,
  #managementPatient [type=button] + label {
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    font-weight: 500;
    margin-bottom: 1rem;
    outline: none;
    padding: 1rem 50px;
    position: relative;
    transition: all 0.3s;
    vertical-align: middle;
  }

  #managementPatient [type=file] + label:hover,
  #managementPatient [type=button] + label:hover {
    background-color: var(--c5);
  }
  #managementPatient [type=file] + label.btn-3,
  #managementPatient [type=button] + label.btn-3 {
    background-color: var(--c4);
    border-radius: 0;
    overflow: hidden;
  }
  #managementPatient [type=file] + label.btn-3 span,
  #managementPatient [type=button] + label.btn-3 span {
    display: inline-block;
    height: 100%;
    transition: all 0.3s;
    width: 100%;
  }
  #managementPatient [type=file] + label.btn-3::before,
  #managementPatient [type=button] + label.btn-3::before {
    color: var(--c1);
    font-family: "Font Awesome 5 Pro";
    font-size: 130%;
    height: 100%;
    left: 0;
    line-height: 2.6;
    position: absolute;
    top: -180%;
    transition: all 0.3s;
    width: 100%;
  }
  #managementPatient [type=file] + label.btn-3::before {
    content: "";
  }
  #managementPatient [type=button] + label.btn-3::before {
    content: "";
  }
  #managementPatient [type=file] + label.btn-3:hover,
  #managementPatient [type=button] + label.btn-3:hover {
    background-color: #ae144f;
  }
  #managementPatient [type=file] + label.btn-3:hover span,
  #managementPatient [type=button] + label.btn-3:hover span {
    transform: translateY(300%);
  }
  #managementPatient [type=file] + label.btn-3:hover::before,
  #managementPatient [type=button] + label.btn-3:hover::before {
    top: 0;
  }

</style>
