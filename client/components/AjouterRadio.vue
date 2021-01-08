<template>
  <div id="ajouterRadio" class="column_design">

    <form enctype="multipart/form-data">
      <input @change="ajouterRadio($event)" id="radio-a-enregistrer" type="file" accept=".jpg, .jpeg, .png" required/>
      <input type="submit" value="Je n'ai rien à ajouter">
    </form>

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
      // Envoie la valeur des champs du formulaire
      ajouterRadio (e) {
        const email = document.getElementById("email").value
				const selectFile = e.target.files[0]
        const image = URL.createObjectURL(selectFile)

        if (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
          const newRadio = {
            email: email,
            image: image
          }
          this.$emit('ajouter-radio', newRadio)
        } else {
          asAlertMsg({
            type: "warning",
            title: "Attention",
            message: "Le mail que vous avez entré n'est pas correct",
            timer: 2000,
          })
        }
      }
    }
  }
</script>

<style>

  #ajouterRadio {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 250px;
    height: 250px;
  }

</style>
