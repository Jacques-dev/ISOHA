
<template>
	<div id="accueil">

		<div id="title">ISOHA</div>

    <div id="accueil-background"></div>

		<div class="container d-flex align-items-center">
			<div class="row" id="context">
				<div class="col-lg-12">
					Le centre hospitalier d'Efrei Paris a ouvert ce nouveau portail
					permettant au personnel hospitalier de suivre le dossier médical
					des personnes étant sujettes à la malalide d'Alzheimer.
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row" id="representation">
				<div class="col-lg-4">
						<h3>Confiance</h3>
						<div id="img1" class="backgrounds"></div>
				</div>
				<div class="col-lg-4">
						<h3>Suivi</h3>
						<div id="img2" class="backgrounds"></div>
				</div>
				<div class="col-lg-4">
						<h3>Professionalisme</h3>
						<div id="img3" class="backgrounds"></div>
				</div>
			</div>
		</div>

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

	#accueil #title {
		position: absolute;
		top: 25vh;
		right: 15vw;
		font: normal 100px 'Cookie', cursive;
		padding: 25px;
		color: var(--c4);

		border: 5px solid hsl(0, 0%, 40%);

	  background: hsl(0, 0%, 20%);

	  outline: 5px solid hsl(0, 0%, 60%);

	  box-shadow: 0 0 0 10px hsl(0, 0%, 80%), 0 0 0 15px hsl(0, 0%, 90%);
  }

	#accueil #accueil-background {
    width: 100%;
    height: 100vh;
    background-image: url("../images/accueil/1.jpg");
    background-position: center top;
	  background-size:cover;
	}

	#accueil #context {
		background: rgba(245, 245, 245, 0.5);
		padding: 50px 0;
		margin: 50px 0;
		text-align: center;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	#accueil #representation {
		text-align: center;
		margin-bottom: 50px;
	}

	#accueil #representation .backgrounds {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		width: auto;
		height: 250px; /* You must set a specified height */
	  background-position: center; /* Center the image */
	  background-repeat: no-repeat; /* Do not repeat the image */
	  background-size: cover; /* Resize the background image to cover the entire container */
		opacity: 0.5;
		transition: 0.25s ease;
	}
	#accueil #representation .backgrounds:hover {
		opacity: 1;
	}
	#accueil #representation #img1 {
		background-image: url("../images/accueil/2.jpg");
	}
	#accueil #representation #img2 {
		background-image: url("../images/accueil/3.jpg");
	}
	#accueil #representation #img3 {
		background-image: url("../images/accueil/4.jpg");
	}

	#accueil #map {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		width: 100%;
		height: 300px;
		margin-bottom: 25px;
	}

	@media (max-width: 640px) {
		#accueil #map {
			margin-bottom: 150px;
		}
	}


</style>
