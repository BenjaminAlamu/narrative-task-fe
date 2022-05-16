<template>
  <NioCard class="card__wrapper">
    <p>{{ dataset.name }}</p>
    <p class="max-lines">{{ dataset.description }}</p>
    <v-chip class="my-2" color="secondary">
      {{ dataset.type }}
    </v-chip>
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
}

.card__wrapper {
  font-family: "Sora", sans-serif !important;
}
</style>
