<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-seccess fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2023</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trsh-alt"></i>
      </button>
      <button>
        Subir Foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedio Hoy?"> </textarea>
  </div>
  <Fab 
    icon="fa-save"
  />
  <img
    src="https://tumbaabierta.com/wp-content/uploads/2012/11/wallpaper_hd_the_wolverine-1920x1200_v2_HD.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab")),
  },
};
</script>

<style  lang="scss" scoped>
textarea {
    border: none;
    font-size: 20px ;
    height: 100%;

    &:focus {
        outline: none;
    }
}
img {
    bottom: 150px;
    box-shadow: opx 5px 10px rgb($color: #000000, $alpha: 0.2);
    position: fixed;
    right: 20px;
    width: 200px;
}
</style>
