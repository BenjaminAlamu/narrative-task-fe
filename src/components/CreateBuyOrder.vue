<template>
  <v-dialog
    v-model="showForm"
    max-width="600px"
    class="overflow-hidden form__wrapper"
  >
    <v-card class="px-4">
      <v-card-title class="text-h5 pl-0">Create Order</v-card-title>

      <nio-text-field
        class="my-4"
        v-model="data.name"
        :label="'Buy Order Name'"
      ></nio-text-field>

      <nio-text-field
        class="my-4"
        v-model="data.maxPrice"
        :label="'Max Price'"
        type="number"
      ></nio-text-field>

      <v-card-actions class="py-4">
        <v-spacer></v-spacer>

        <v-btn
          color="red"
          outlined
          depressed
          @click.prevent="$emit('shouldBuyOrder', false)"
          class=""
          >Cancel</v-btn
        >

        <v-btn
          :loading="loading"
          color="primary"
          depressed
          @click.prevent="create"
          class=""
          >Create</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { createBuyOrder } from "../services/buyOrder";
export default {
  props: ["shouldShowCreateBuyOrder", "selectedDataset"],
  computed: {
    showForm() {
      return this.shouldShowCreateBuyOrder;
    },
  },
  data() {
    return {
      data: {},
      loading: false,
    };
  },
  methods: {
    async create() {
      this.loading = true;
      try {
        const user = JSON.parse(localStorage.getItem("narrative-user"));
        await createBuyOrder({
          ...this.data,
          user,
          dataId: this.selectedDataset._id,
        });
        this.$toast.success("Created successful");
        this.$emit("shouldBuyOrder", false);
        this.$router.push("/list");
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