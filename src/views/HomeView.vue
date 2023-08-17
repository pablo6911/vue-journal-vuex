<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <h1>Hola Mundo</h1>
  <buton @click="goTodaybook" class="btn btn-primary">primary</buton>
  <buton class="btn btn-secondary">secondary</buton>
  <buton class="btn btn-success">success</buton>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goTodaybook() {
      // this.$router.push({ name: "daybook" });
      // seleccionamos la ruta hija
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
