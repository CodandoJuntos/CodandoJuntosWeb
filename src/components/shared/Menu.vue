<template>
  <b-navbar toggleable="lg" type="dark" class="custom-navbar">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" v-for="rota in rotas" :key="rota.name">
          <router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.custom-navbar {
  min-height: 85px;
  padding-left: 80px;
  padding-right: 80px;
}
</style>