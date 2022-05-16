<template>
  <v-app id="app">
    <HeaderComponent
      @showLoginForm="handleLoginForm($event)"
      @showRegisterForm="handleRegisterForm($event)"
    />
    <p style="margin: 30px"></p>
    <router-view
      @showDeleteConfirmation="handleDeleteForm($event)"
      @shouldBuyOrder="handleBuyOrder($event)"
      @shouldEditOrder="handleEditOrder($event)"
      @showLoginForm="handleLoginForm($event)"
      class="boxed__container mt-32 py-12"
    />
    <LoginForm
      :shouldShowLoginForm="showLoginForm"
      @showLoginForm="handleLoginForm($event)"
    />
    <RegisterForm
      :shouldShowRegisterForm="showRegisterForm"
      @showRegisterForm="handleRegisterForm($event)"
    />
    <DeleteConfirmation
      :shouldShowDeleteConfirmation="showDeleteConfirmation"
      @showDeleteConfirmation="handleDeleteForm($event)"
      :activeBuyOrder="activeBuyOrder"
    />
    <CreateBuyOrder
      :shouldShowCreateBuyOrder="showBuyOrder"
      @shouldBuyOrder="handleBuyOrder($event)"
      :selectedDataset="selectedDataset"
    />
    <EditBuyOrder
      :shouldShowEditBuyOrder="showEditOrder"
      @shouldEditOrder="handleEditOrder($event)"
      :selectedDataset="selectedDataset"
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
    RegisterForm: () => import("@/components/RegisterForm.vue"),
    DeleteConfirmation: () => import("@/components/DeleteConfirmation.vue"),
    CreateBuyOrder: () => import("@/components/CreateBuyOrder.vue"),
    EditBuyOrder: () => import("@/components/EditBuyOrder.vue"),
  },
  data: () => ({
    showLoginForm: false,
    showRegisterForm: false,
    showDeleteConfirmation: false,
    showBuyOrder: false,
    showEditOrder: false,
    activeBuyOrder: {},
    selectedDataset: null,
  }),
  methods: {
    handleLoginForm(value) {
      this.showLoginForm = value;
    },
    handleRegisterForm(value) {
      this.showRegisterForm = value;
    },
    handleDeleteForm(data) {
      this.showDeleteConfirmation = data.value;
      this.activeBuyOrder = data.item;
    },
    handleBuyOrder(data) {
      this.showBuyOrder = data.value;
      this.selectedDataset = data.item;
    },
    handleEditOrder(data) {
      this.showEditOrder = data.value;
      this.selectedDataset = data.item;
    },
  },
};
</script>

<style >
.v-application,
.v-card__title {
  font-family: "Sora", sans-serif !important;
}
</style>


 