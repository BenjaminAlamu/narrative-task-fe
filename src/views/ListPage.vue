<template>
  <div class="list__wrapper">
    <v-data-table
      :headers="headers"
      :items="items"
      :loading="loading"
      :items-per-page="5"
      class="elevation-1"
      loading-text="Loading... Please wait "
      hide-default-footer
    >
      <template #[`item.action`]="{ item }">
        <span class="mini-green mx-2">Edit</span>
        <span
          class="mini-red mx-2"
          @click.prevent="
            $emit('showDeleteConfirmation', { value: true, item })
          "
          >Delete</span
        >
      </template>

      <template #[`item.data`]="{ item }">
        <span>{{ item.dataId.type }}</span>
      </template>

      <template #[`item.maxPrice`]="{ item }">
        <span>{{ item.maxPrice | formatCurrency }}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { getBuyOrders } from "../services/buyOrder";
export default {
  async mounted() {
    const res = await getBuyOrders();
    this.items = res.data.data.buyOrder;
    this.loading = false;
  },
  components: {},
  data() {
    return {
      datasets: [],
      loading: true,
      items: [],
      headers: [
        { text: "Buy Order Name", value: "name" },
        { text: "Buy Order Price", value: "maxPrice" },
        { text: "Buy Order Type", value: "data" },
        {
          text: "Actions",
          value: "action",
          sortable: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.list__wrapper {
  font-family: "Sora", sans-serif !important;
}

.mini-red {
  font-size: 12px;
  color: red;
}

.mini-green {
  font-size: 12px;
  color: green;
}
</style>