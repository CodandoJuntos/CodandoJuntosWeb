<template>
  <footer>
    <div class="top-footer">
      <b-container fluid="xl">
        <b-row>
          <b-col cols="12" sm="3" md="3" lg="3" xl="3">
            <img class="selo-google-play" src="../../assets/google-play.png" />
            <img class="selo-app-store" src="../../assets/app-store.png" />
          </b-col>
          <b-col cols="12" sm="3" md="3" lg="3" xl="3">
            <router-link class="link-footer" to="/politica-de-privacidade">Politica de privacidade</router-link>
            <router-link class="link-footer" to="/termos-de-uso">Termos de uso</router-link>
            <router-link class="link-footer" to="/blog">Blog</router-link>
          </b-col>
          <b-col cols="12" sm="3" md="3" lg="3" xl="3">
          </b-col>
          <b-col cols="12" sm="3" md="3" lg="3" xl="3"></b-col>
        </b-row>
      </b-container>
    </div>
    <div class="bottom-footer">
      <p class="p-direitos">Copyright © 2020 CodandoJuntos - Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  position: relative;
  width: 100%;
  text-align: center;
}
.top-footer {
  background-color: #444;
  padding: 60px 0px 60px 0px;
  width: 100%;
}
.bottom-footer {
  border-top: 1px solid white;
  background-color: #333;
  padding: 10px 0px 10px 0px;
  width: 100%;
}
.p-direitos {
  color: white;
  margin: 0;
}
.selo-google-play {
  margin-bottom: 10px;
}
.link-footer{
  color: white;
  width: 100%;
  text-align: center;
  display: block;
}
</style>