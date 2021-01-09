

<template>
	<div id="tuto">

    <div class="container">
      <div class="row h-100 d-flex align-items-center">

        <video autoplay loop controls muted id="video" class="col-lg-6 ml-lg-auto mr-lg-auto" align="center">
          <source src="../videos/tuto.mp4" type="video/mp4">
        </video>

        <div class="col-lg-4 ml-lg-auto mr-lg-auto column_design">
          Voici une déponstration des fonctinnalités de ISOHA en vidéo
        </div>

      </div>
    </div>



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

	#tuto #video {
    z-index: 3;
  }

</style>
