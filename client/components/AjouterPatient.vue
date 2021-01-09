<template>
  <div id="ajouterPatient">

    <form @submit.prevent="ajouterPatient($event)" id="ajouterPatientForm" enctype="multipart/form-data">
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

      <div class="row wrapper">
        <input type="file" name="file" id="file" accept=".jpg, .jpeg, .png"/>
        <label for="file" class="btn-3">
          <span>Ajouter une radio (optionnel)</span>
        </label>
      </div>


      <div class="row">
        <button class="col-sm-12 btn" type="submit">Ajouter patient</button>
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
      async ajouterPatient (e) {
        var email = document.getElementById("email").value
        var date = document.getElementById("date").value
        let file = document.getElementById("file").files[0]

        if (file !== undefined) {
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
            //handle error
          });
        }

        if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
          if (date.match(/([0-9]{2}[\/])([0-9]{2}[\/])([0-9]{4})+/i)) {
            try {
              var route = 'nom=' + this.newPatient.nom + '&prenom=' + this.newPatient.prenom + '&email=' + this.newPatient.email + '&password=' + this.newPatient.password + '&telephone=' + this.newPatient.telephone
              route += '&dateNaissance=' + this.newPatient.dateNaissance + '&age=' + this.newPatient.age + '&taille=' + this.newPatient.taille + '&poids=' + this.newPatient.poids + '&sexe=' + this.newPatient.sexe
              route += '&profession=' + this.newPatient.profession
              await axios.post('/api/register/', route)
              if (this.newPatient.email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
              } else {
                router.push('/connexion')
              }
            } catch (e) {
              asAlertMsg({
                type: "warning",
                title: "Attention",
                message: "Vous vous êtes déjà enregistré",
                timer: 2000,
              })
            }
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

  #ajouterPatientForm .wrapper {
    margin: 0;
    padding: 2rem;
    width: 100%;
    text-align: center;
  }

  #ajouterPatientForm [type=file] {
    height: 0;
    overflow: hidden;
    width: 0;
  }

  #ajouterPatientForm [type=file] + label {
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
  #ajouterPatientForm [type=file] + label:hover {
    background-color: var(--c5);
  }
  #ajouterPatientForm [type=file] + label.btn-3 {
    background-color: var(--c4);
    border-radius: 0;
    overflow: hidden;
  }
  #ajouterPatientForm [type=file] + label.btn-3 span {
    display: inline-block;
    height: 100%;
    transition: all 0.3s;
    width: 100%;
  }
  #ajouterPatientForm [type=file] + label.btn-3::before {
    color: var(--c1);
    content: "";
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
  #ajouterPatientForm [type=file] + label.btn-3:hover {
    background-color: #ae144f;
  }
  #ajouterPatientForm [type=file] + label.btn-3:hover span {
    transform: translateY(300%);
  }
  #ajouterPatientForm [type=file] + label.btn-3:hover::before {
    top: 0;
  }

</style>
