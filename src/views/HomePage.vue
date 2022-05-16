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
        <DataCard @buyClicked="checkLogin($event)" :dataset="content" />
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
  methods: {
    checkLogin(item) {
      const user = JSON.parse(localStorage.getItem("narrative-user"));
      if (user) {
        this.$emit("shouldBuyOrder", item);
      } else {
        this.$emit("showLoginForm", true);
      }
    },
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