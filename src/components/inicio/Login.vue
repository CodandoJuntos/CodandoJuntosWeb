<template>
  <div class="conteudo-login">
    <b-container fluid="xl">
      <b-row>
        <b-col cols="8"></b-col>
        <b-col cols="12" xl="4" lg="4" md="4" sm="12">
          <div class="div-login">
            <formulario-login  @clicked="onClickChild" v-if="exibir"/>
            <formulario-redefinir-senha @clicked="onClickChild" v-else/>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FormularioLogin from './forms/FormularioLogin';
import FormularioRedefinirSenha from './forms/FormularioRedefinirSenha';

export default {
  name: 'Login',
  components: {
    'formulario-login' : FormularioLogin,
    'formulario-redefinir-senha': FormularioRedefinirSenha
  },
  data() {

    return {
      exibir: true,
    }
  },
  methods: {

    onClickChild(valor) {
      this.exibir = valor;
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conteudo-login {
  padding: 20px 0px 10px 0px;
  background: url("../../assets/desk-3204896_1920.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
h3 {
  margin: 40px 0 0;
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
.div-login {
  height: 480px;
  margin: auto;
  background-color: white;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
.header-form-login {
    margin-bottom: 50px;
    padding-top: 35px;
    border-bottom: 1px solid black;
    margin-bottom: 35px;
    padding-bottom: 25px;
    text-align: center;
}
.botao-login {
  font-weight: bold;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #B6CFE5;
  color: white;
}
.botao-login:hover{
  background-color: #8294aa;
}
.input-group-text{
  background-color: #B6CFE5;
  color: white;
  border: none;
}

</style>
