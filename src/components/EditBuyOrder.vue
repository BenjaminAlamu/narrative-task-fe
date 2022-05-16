<template>
  <v-dialog
    v-model="showForm"
    max-width="600px"
    class="overflow-hidden form__wrapper"
  >
    <v-card class="px-4">
      <v-card-title class="text-h5 pl-0">Edit Order</v-card-title>
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
          @click.prevent="$emit('shouldEditOrder', false)"
          class=""
          >Cancel</v-btn
        >

        <v-btn
          :loading="loading"
          color="primary"
          depressed
          @click.prevent="edit"
          class=""
          >Edit</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { updateBuyOrder } from "../services/buyOrder";
export default {
  props: ["shouldShowEditBuyOrder", "selectedDataset"],
  computed: {
    showForm() {
      return this.shouldShowEditBuyOrder;
    },
  },

  mounted() {
    setTimeout(() => {
      this.data = this.selectedDataset;
    }, 1000);
  },
  data() {
    return {
      data: {},
      loading: false,
    };
  },
  methods: {
    async edit() {
      this.loading = true;
      try {
        //const user = JSON.parse(localStorage.getItem("narrative-user"));
        await updateBuyOrder(this.data._id, {
          ...this.data,
        });
        this.$toast.success("Edit successful");
        this.$emit("shouldEditOrder", false);
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