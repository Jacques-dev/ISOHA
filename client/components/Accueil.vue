
<template>
	<div id="accueil">
		<div class="container-fluid">

			<div class="row h-100 d-flex align-items-center">

				<video autoplay loop controls muted id="video" class="col-sm-4" align="center">
		    	<source src="../videos/video.mp4" type="video/mp4">
				</video>

				<div class="col-sm-1 ml-sm-auto mr-sm-auto column_design" align="center">
					<form method="post" enctype="multipart/form-data">

						<label for="file" id="button">
							<i class="fas fa-search"></i>
						</label>
						<input type="file" name="file" id="file" accept=".jpg, .jpeg, .png" required/>

					</form>
				</div>

				<div class="col-sm-4" align="center">
					<div class="column_design">
						les résultats de l'algo ici
					</div>
				</div>

			</div>

		</div>
		<img src="../images/efrei.png" id="efrei">
	</div>
</template>

<script>
	module.exports = {
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

</style>
