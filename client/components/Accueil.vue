
<template>
	<div id="accueil">

    <div id="accueil-background"></div>

    <iframe id="map" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10509.980210663041!2d2.523417553381348!3d48.810615137862165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60c4b397dfd4b%3A0x613841f63d109a60!2zSMO0cGl0YWwgcHJpdsOpIFBhdWwgZCfDiWdpbmUgLSBSYW1zYXkgU2FudMOp!5e0!3m2!1sfr!2sfr!4v1610108866566!5m2!1sfr!2sfr"></iframe>

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

	#accueil {

  }

	#accueil #accueil-background {
    width: 100%;
    height: 100vh;
    background-image: url("../images/accueil/1.jpg");
    background-position: center top;
	  background-size:cover;
	}

	#accueil #map {
		width: 100%;
		height: 300px;
	}

	@media (max-width: 640px) {
		#accueil #map {
			margin-bottom: 150px;
		}
	}


</style>
