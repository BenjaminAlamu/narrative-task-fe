<template>
  <v-app id="app">
    <HeaderComponent @showLoginForm="handleLoginForm($event)" />
    <router-view class="boxed__container py-12" />
    <LoginForm
      :shouldShowLoginForm="showLoginForm"
      @showLoginForm="handleLoginForm($event)"
    />
  </v-app>
</template>

<script>
/* eslint-disable vue/no-mutating-props */
export default {
  name: "App",
  components: {
    HeaderComponent: () => import("@/components/HeaderComponent.vue"),
    LoginForm: () => import("@/components/LoginForm.vue"),
  },
  data: () => ({
    showLoginForm: false,
  }),
  methods: {
    handleLoginForm(value) {
      this.showLoginForm = value;
    },
  },
};
</script>


 