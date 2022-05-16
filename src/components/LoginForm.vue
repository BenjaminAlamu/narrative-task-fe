<template>
  <v-dialog
    v-model="showForm"
    max-width="600px"
    class="overflow-hidden form__wrapper"
  >
    <v-card class="px-4">
      <v-card-title class="text-h5 pl-0">Login</v-card-title>

      <nio-text-field
        v-model="data.email"
        :label="'Email'"
        type="email"
      ></nio-text-field>

      <nio-text-field
        v-model="data.password"
        :label="'Password'"
        type="password"
      ></nio-text-field>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          @click.prevent="$emit('showLoginForm', false)"
          color="red lighten-3"
          text
        >
          Cancel
        </v-btn>

        <v-btn
          :loading="loading"
          color="blue darken-5"
          text
          @click.prevent="loginUser"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { login } from "../services/auth";
export default {
  props: ["shouldShowLoginForm"],
  computed: {
    showForm() {
      return this.shouldShowLoginForm;
    },
  },
  data() {
    return {
      data: {},
      loading: false,
    };
  },
  methods: {
    async loginUser() {
      this.loading = true;
      try {
        const res = await login(this.data);
        this.$toast.success("Login successful");
        localStorage.setItem("narrative-token", res.data.data.token);
        localStorage.setItem(
          "narrative-user",
          JSON.stringify(res.data.data.user)
        );
        this.$emit("showLoginForm", false);
        this.$router.go();
      } catch (e) {
        this.$toast.error(e.response.data.message);
      }

      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form__wrapper {
  font-family: "Sora", sans-serif !important;
}
</style>