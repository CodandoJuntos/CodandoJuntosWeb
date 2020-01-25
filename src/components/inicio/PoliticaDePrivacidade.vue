<template>
  <div class="conteudo-cadastro">
    <b-container fluid="xl">
      <b-row>
        <b-col cols="12" xl="4" lg="4" md="4" sm="12">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PoliticaDePrivacidade",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conteudo-cadastro {
  padding: 20px 0px 10px 0px;
  background-size: cover;
  background-repeat: no-repeat;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>