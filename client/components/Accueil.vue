
<template>
	<div id="accueil">
		<div class="container-fluid">

			<div class="row h-100 d-flex align-items-center">

				<video autoplay loop controls muted id="video" class="col-sm-4" align="center">
		    	<source src="../videos/video.mp4" type="video/mp4">
				</video>

				<div class="col-sm-1 ml-sm-auto mr-sm-auto column_design" align="center">
					<form enctype="multipart/form-data" id="fileUpload">

						<label for="file" id="button">
							<i class="fas fa-search"></i>
						</label>

						<input @change="radioSauvegarde($event)" onclick="animationChargement()" onchange="analyse()" id="file" type="file" name="file" accept=".jpg, .jpeg, .png" required/>
					</form>
				</div>

				<div class="col-sm-4" align="center">
					<div class="column_design" :style="{ background: result.color }">
						<div class="cs-loader-inner">
							<label id="animation1">●</label>
							<label id="animation2">●</label>
							<label id="animation3">●</label>
							<label id="animation4">●</label>
							<label id="animation5">●</label>
							<label id="animation6">●</label>
						</div>
						<img :src="radio" id="radio">
						<div id="analyse-content">
							<div id="analyse-en-cours">
								Analyse en cours
							</div>
							<div id="analyse"></div>
							<div id="analyse-resulat" class="column_design">
								{{ result.text }}
							</div>
						</div>

					</div>
				</div>

			</div>

		</div>
		<img src="../images/efrei.png" id="efrei">
	</div>
</template>

<script>
	module.exports = {
		props: {
			radio: { type: String },
			result: { type: String }
		},
		data () {
			return {

			}
		},
		methods: {
			radioSauvegarde (e) {
				const selectFile = e.target.files[0]
				this.$emit('sauvegarde-radio', URL.createObjectURL(selectFile))
	    }
		}
	}
</script>

<style scoped>

	#accueil {
		margin: 0;
	}

	#accueil #efrei {
		position: absolute;
		bottom: 25px;
		right: 25px;
		width: 200px;
	}

	#accueil #video {
		z-index: 3;
	}

	#accueil .column_design {
		padding: 25px 0;
	  background: var(--c1);
	  border-radius: 15px;
	  box-shadow: 0px 0px 5px 3px black;
	}

	#accueil #radio {
		border: 1px solid black;
		width: 200px;
	}

	#accueil form {
	  margin: 0;
	}

	#accueil input[type="file"] {
	  display: none;
	}

	#accueil #button {
	  position: relative;
	  display: table-cell;
	  vertical-align: middle;
	  text-align: center;
	  width: 100px;
	  height: 100px;
	  margin: auto;
	  box-shadow: inset 0 0 50px 50px rgba(255, 255, 255, 1);
	  background-color: rgba(255, 255, 255, 0.75);
	  border: 1px solid var(--c5);
	  border-radius: 50%;
	  color: var(--c5);
	  transition: 0.5s;
	}

	#accueil #button::before {
	  content: "";
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  border-radius: 50%;
	  box-shadow: inset 0 0 50px 50px rgba(178, 177, 217, 1);
	  background-color: rgba(178, 177, 217, 0.75);
	  border: 1px solid var(--c2);
	  transition: 0.5s;
	  z-index: -1;
	  }

	#accueil #button:hover::before {
	  transform: scale(1.1);
	  box-shadow: 0 0 15px var(--c4);
	}

	#accueil #button:hover {
	  color: var(--c4);
	  box-shadow: 0 0 5px var(--c4);
	  text-shadow: 0 0 5px var(--c4);
	}

	#accueil #button i {
	  font-size: 50px;
	}

	.cs-loader-inner label {
		opacity: 0;
    display:inline-block;
	}

	@keyframes chargement {
		0% {
			opacity: 0;
			transform: translateX(-250px);
	    rotate 0
		}
		33% {
			opacity: 1;
			transform: translateX(0px);
	    rotatate: 90
		}
		66% {
			opacity: 1;
			transform: translateX(0px);
	    rotate: 180
		}
		100% {
			opacity: 0;
			transform: translateX(250px);
	    rotate: -90
		}
	}
	#animation1 {
		animation: chargement 3s infinite ease-in-out;
	}

	#animation2 {
		-webkit-animation: chargement 3s 100ms infinite ease-in-out;
		animation: chargement 3s 100ms infinite ease-in-out;
	}

	#animation3 {
		-webkit-animation: chargement 3s 200ms infinite ease-in-out;
		animation: chargement 3s 200ms infinite ease-in-out;
	}

	#animation4 {
		-webkit-animation: chargement 3s 300ms infinite ease-in-out;
		animation: chargement 3s 300ms infinite ease-in-out;
	}

	#animation5 {
		-webkit-animation: chargement 3s 400ms infinite ease-in-out;
		animation: chargement 3s 400ms infinite ease-in-out;
	}

	#animation6 {
		-webkit-animation: chargement 3s 500ms infinite ease-in-out;
		animation: chargement 3s 500ms infinite ease-in-out;
	}

	#analyse-content {
		display: none;
	}

	#analyse-en-cours {
		display: none;
	}

	#analyse {
	  width: 100px;
	  height: 100px;
	  border-radius: 50%;
	  border: 5px solid #adbcdf;
	  border-top-color: #002245;
	  animation: chargement2 1s infinite linear;
		display: none;
	}

	@keyframes chargement2 {
	  0% { transform: rotate(0deg); }
	  100% { transform: rotate(360deg); }
	}

	#analyse-resultat {
		display: none;
	}

</style>
