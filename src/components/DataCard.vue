<template>
  <NioCard class="card__wrapper">
    <p class="card__title">{{ dataset.name }}</p>
    <p class="max-lines">{{ dataset.description }}</p>
    <main class="d-flex justify-space-between">
      <v-chip class="my-2" outlined color="primary">
        {{ dataset.type }}
      </v-chip>
      <v-chip
        @click="$emit('buyClicked', { value: true, item: dataset })"
        class="my-2"
        color="primary"
      >
        Purchase
      </v-chip>
    </main>
  </NioCard>
</template>

<script>
export default {
  props: ["dataset"],
};
</script>

<style lang="scss" scoped>
.max-lines {
  display: block; /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 4.6em;
  font-size: 12px;
  letter-spacing: 1.2px;
}

.card__wrapper {
  font-family: "Sora", sans-serif !important;
}

.card__title {
  font-size: 16px;
  text-transform: capitalize;
}
</style>
