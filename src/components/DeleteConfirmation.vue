<template>
  <v-dialog
    v-model="showForm"
    max-width="600px"
    class="overflow-hidden form__wrapper"
  >
    <v-card class="px-4">
      <v-card-title class="text-h5 pl-0">Confirm Delete</v-card-title>

      <p>Are you sure you want to delete this buy order</p>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="red"
          outlined
          depressed
          @click.prevent="$emit('shouldShowDeleteConfirmation', false)"
          class=""
          >Cancel</v-btn
        >

        <v-btn
          :loading="loading"
          color="primary"
          depressed
          @click.prevent="deleteOrder"
          class=""
          >Delete</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { deleteBuyOrder } from "../services/buyOrder";
export default {
  props: ["shouldShowDeleteConfirmation", "activeBuyOrder"],
  computed: {
    showForm() {
      return this.shouldShowDeleteConfirmation;
    },
  },
  data() {
    return {
      data: {},
      loading: false,
    };
  },
  methods: {
    async deleteOrder() {
      this.loading = true;
      try {
        await deleteBuyOrder(this.activeBuyOrder._id);
        this.$toast.success("Deleted successfully");
        this.$emit("shouldShowDeleteConfirmation", { value: false });
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