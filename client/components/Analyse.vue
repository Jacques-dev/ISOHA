
<template>
	<div id="analyse">
		<div class="container-fluid">

			<div class="row h-100 d-flex align-items-center">

				<div class="col-lg-1 ml-sm-auto mr-sm-auto column_design" align="center">
					<form enctype="multipart/form-data" id="fileUpload" @submit.prevent="uploadSelectedFile($event)">

						<label for="file" id="button">
							<i class="fas fa-search"></i>
						</label>

						<input @change="selectFileToPreview($event)" onclick="animationChargement()" onchange="analyse()" id="file" type="file" name="file" accept=".jpg, .jpeg, .png" required/>
						<!-- <button type="submit" class="btn" id="upload">Analyser</button> -->

					</form>
				</div>

				<div class="col-lg-4 mr-sm-auto" align="center">
					<div class="column_design" :style="{ background: result.color }">
						<div class="cs-loader-inner">
							<label id="animation1">●</label>
							<label id="animation2">●</label>
							<label id="animation3">●</label>
							<label id="animation4">●</label>
							<label id="animation5">●</label>
							<label id="animation6">●</label>
						</div>

						<img v-if="radio" :src="radio" id="radio">
						<img v-else :src="file" id="radio">

						<div id="analyse-content">
							<div id="analyse-en-cours">
								Analyse en cours
							</div>
							<div id="analyse-animation"></div>
							<div id="analyse-resulat" class="column_design">
								{{ result.text }}
							</div>
						</div>

					</div>
				</div>

			</div>

		</div>
	</div>
</template>

<script>

	module.exports = {
		props: {
			radio: { type: String },
			result: { type: Object }
		},
		data () {
			return {
				file: ''
			}
		},
		methods: {
			selectFileToPreview (e) {
				this.radio = null
			 	const selectFile = e.target.files[0]
				this.file = URL.createObjectURL(selectFile)
	    },
			async uploadSelectedFile(e) {
				let file = document.getElementById("file").files[0]

				let data = new FormData();
				data.append('file', file, file.fileName);

				axios.post('/api/upload', data, {
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
		},
		mounted(){
			if(this.radio){
				animationChargement()
				analyse()
			}
		},
	}

</script>

<style scoped>

	#analyse {
		margin: 0;
	}

	#analyse #upload {
		margin-top: 15px;
	}

	#analyse #radio {
		border: 1px solid black;
		width: 200px;
	}

	#analyse form {
	  margin: 0;
	}

	#analyse input[type="file"] {
	  display: none;
	}

	#analyse #button {
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

	#analyse #button::before {
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

	#analyse #button:hover::before {
	  transform: scale(1.1);
	  box-shadow: 0 0 15px var(--c4);
	}

	#analyse #button:hover {
	  color: var(--c4);
	  box-shadow: 0 0 5px var(--c4);
	  text-shadow: 0 0 5px var(--c4);
	}

	#analyse #button i {
	  font-size: 50px;
	}

	#analyse .cs-loader-inner label {
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
	#analyse #animation1 {
		animation: chargement 3s infinite ease-in-out;
	}

	#analyse #animation2 {
		-webkit-animation: chargement 3s 100ms infinite ease-in-out;
		animation: chargement 3s 100ms infinite ease-in-out;
	}

	#analyse #animation3 {
		-webkit-animation: chargement 3s 200ms infinite ease-in-out;
		animation: chargement 3s 200ms infinite ease-in-out;
	}

	#analyse #animation4 {
		-webkit-animation: chargement 3s 300ms infinite ease-in-out;
		animation: chargement 3s 300ms infinite ease-in-out;
	}

	#analyse #animation5 {
		-webkit-animation: chargement 3s 400ms infinite ease-in-out;
		animation: chargement 3s 400ms infinite ease-in-out;
	}

	#analyse #animation6 {
		-webkit-animation: chargement 3s 500ms infinite ease-in-out;
		animation: chargement 3s 500ms infinite ease-in-out;
	}

	#analyse #analyse-content {
		display: none;
	}

	#analyse #analyse-en-cours {
		display: none;
	}

	#analyse #analyse-animation {
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

	#analyse #analyse-resultat {
		display: none;
	}

</style>
