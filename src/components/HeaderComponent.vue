<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <p class="h1">BuyOrderNG</p>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="isLoggedIn" text> My Orders </v-btn>

      <v-btn v-if="!isLoggedIn" @click="$emit('showLoginForm', true)" text>
        Login
      </v-btn>
      <v-btn v-else @click="logout" text> Log Out </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      const token = localStorage.getItem("narrative-token");

      return token ? true : false;
    },
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.go();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>