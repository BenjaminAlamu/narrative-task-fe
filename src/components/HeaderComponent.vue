<template>
  <div class="header__wrapper">
    <v-app-bar app color="primary" dark>
      <v-btn text depressed @click="$router.push('/')" class=""
        >BuyOrderNG</v-btn
      >

      <v-spacer></v-spacer>

      <v-btn
        v-if="isLoggedIn"
        color="primary"
        depressed
        @click="$router.push('/list')"
        class=""
        >My Orders</v-btn
      >

      <v-btn v-if="!isLoggedIn" @click="$emit('showLoginForm', true)" text>
        Login
      </v-btn>
      <v-btn v-if="!isLoggedIn" @click="$emit('showRegisterForm', true)" text>
        Register
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
      this.$router.go("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.header__wrapper {
  font-family: "Sora", sans-serif !important;
}
</style>