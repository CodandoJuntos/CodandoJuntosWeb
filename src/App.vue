<template>
  <div id="app">
    <meu-menu :rotas="routes"/>
    <router-view></router-view>
  </div>
</template>

<script>
// import Inicio from './components/inicio/Inicio'
import { routes } from './routes';
import Menu from './components/shared/Menu.vue';

export default {
  name: 'app',
  components: {
    'meu-menu' : Menu
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

.pagina-enter-active, .pagina-leave-active {

  transition: opacity .2s;
}

</style>
