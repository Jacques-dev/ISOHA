<template>

  <div v-if="checkIfLogged(user.email)"></div>

</template>

<script>
  module.exports = {
    props: {
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
