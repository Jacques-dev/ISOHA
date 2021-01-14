<template>

  <div v-if="checkIfLogged(user.email)"></div>

</template>

<script>
  module.exports = {
		mounted() {
			if (this.radio.image) {
				this.radio.image = null
			}
		},
    props: {
      radio: { type: String },
      user: {type: Object }
    },
    data () {
      return {

      }
    },
    methods: {
      checkIfLogged(user) {
        this.$emit('logout');
      }
    }
  }
</script>

<style scoped></style>
