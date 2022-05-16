<template>
  <div>
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <v-row class="">
      <v-col
        cols="12"
        md="4"
        lg="3"
        sm="6"
        v-for="content in datasets"
        :key="content._id"
      >
        <DataCard
          @buyClicked="$emit('shouldBuyOrder', $event)"
          :dataset="content"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getDataset } from "../services/dataset";
export default {
  async mounted() {
    const res = await getDataset();
    this.datasets = res.data.data.datasets;
    this.loading = false;
  },
  components: {
    DataCard: () => import("@/components/DataCard.vue"),
  },
  data() {
    return {
      datasets: [],
      loading: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>