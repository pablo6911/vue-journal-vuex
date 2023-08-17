<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <!-- Titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">julio</span>
      <span class="mx-2 fw-light">2021, Jueves</span>
    </div>
    <div class="entry-descriptions">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit
      adipisci dignissimos maiores voluptatem sed reiciendis, natus beatae nobis
      cum fugit ipsa quibusdam culpa possimus et dolorum cumque corrupti illo.
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryVue",
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-descriptions {
    font-size: 10px;
  }
}
</style>
