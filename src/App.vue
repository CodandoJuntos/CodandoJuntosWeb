<template>
  <div id="app">
    <meu-menu :rotas="routes"/>
    <section class="main"> 
      <router-view></router-view>
    </section>
    <footer-componente/>
  </div>
</template>

<script>
// import Inicio from './components/inicio/Inicio'
import { routes } from './routes';
import Menu from './components/shared/Menu.vue';
import Footer from './components/shared/Footer.vue';

export default {
  name: 'app',
  components: {
    'meu-menu' : Menu,
    'footer-componente': Footer
  },
  
  data() {

    return {

      routes : routes.filter(route => route.menu)
    }
  }
}
</script>

<style>

body{
  margin: 0px;
}
.pagina-enter, .pagina-leave-active {

  opacity: 0;
}

.main{
  margin-bottom: 7em;
}

.pagina-enter-active, .pagina-leave-active {

  transition: opacity .2s;
}

</style>
