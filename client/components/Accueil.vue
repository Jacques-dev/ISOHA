
<template>
	<div id="accueil">

		<main id="main">
			<form method="post" enctype="multipart/form-data">

				<label for="file" id="button">
					<i class="fas fa-search"></i>
				</label>
				<input type="file" name="file" id="file" accept=".jpg, .jpeg, .png" required/>

			</form>
		</main>

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

	main {
	  position: absolute;
	  top: 25vh;
	  left: 50%;
	  transform: translateX(-50%);
	  background: var(--c1);
	  border-radius: 15px;
	  padding: 25px;
	  box-shadow: 0px 0px 5px 3px black;
	}

	input[type="file"] {
	  display: none;
	}

	#button {
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

	#button::before {
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

	#button:hover::before {
	  transform: scale(1.1);
	  box-shadow: 0 0 15px var(--c4);
	}

	#button:hover {
	  color: var(--c4);
	  box-shadow: 0 0 5px var(--c4);
	  text-shadow: 0 0 5px var(--c4);
	}

	#button i {
	  font-size: 50px;
	}

</style>
