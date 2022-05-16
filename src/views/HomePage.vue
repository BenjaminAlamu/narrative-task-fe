<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="4"
        lg="3"
        sm="6"
        v-for="content in datasets"
        :key="content._id"
      >
        <DataCard :dataset="content" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getDataset } from "../services/dataset";
export default {
  async mounted() {
    const res = await getDataset();
    console.log({ res });
    this.datasets = res.data.data.datasets;
  },
  components: {
    DataCard: () => import("@/components/DataCard.vue"),
  },
  data() {
    return {
      datasets: [],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>