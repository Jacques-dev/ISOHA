

<template>
	<div id="tuto">

    <div class="container">
      <div class="row h-100 d-flex align-items-center">

				<div class="col-lg-12 ml-lg-auto mr-lg-auto column_design">
          Voici une démonstration des fonctionnalités d'Isoha en vidéo
        </div>

        <video autoplay loop controls muted id="video" class="col-lg-12 ml-lg-auto mr-lg-auto" align="center">
          <source src="../video/Demonstration.mp4" type="video/mp4">
        </video>

      </div>
    </div>



	</div>
</template>

<script>
	module.exports = {
		props: {
			radio: { type: String },
		},
		mounted() {
			if (this.radio.image) {
				this.radio.image = null
			}
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

</style>
