<template>
  <b-navbar toggleable="lg"  class="custom-navbar">
    <b-container fluid="xl">
      <b-navbar-brand href="#"><img src="../../assets/logo.png"/></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-for="rota in rotas" :key="rota.name">
            <router-link class="link-menu" :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
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
  box-shadow: 0 2px 4px rgba(0,0,0,.5);
}
.link-menu{
    font-weight: bold;
    color: #222;
    line-height: 25px;
    padding: 0 16px;
    transition: color .1s cubic-bezier(.4,0,.2,1);
}
.link-menu:hover{
  color:#999;
  text-decoration: none;
}
.router-link-exact-active{
  border-bottom: 3px solid black;
  padding-bottom: 10px;
}
</style>