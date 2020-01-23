<template>
  <b-container fluid="xl">
    <b-row>
      <b-col cols="12">
        <div class="header-form-login">
          <h4>VOCÊ JÁ POSSUI CADASTRO?</h4>
          <p>Preencha os dados para entrar.</p>
        </div>
        <div class="div-form-login">
          <form>
            <b-row>
              <b-col cols="12">
                <b-input-group size="lg" class="mb-3">
                  <b-input-group-prepend is-text>
                    <b-icon scale="2" icon="envelope-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="text" placeholder="E-mail"></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <b-input-group size="lg" class="mb-2">
                  <b-input-group-prepend is-text>
                    <b-icon scale="2" icon="lock-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="password" placeholder="Senha"></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <button class="botao-login">Entrar</button>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <div class="text-center">
                    <b-btn variant="link" @click="onClickButton()" >Esqueci minha senha</b-btn>
                </div>
              </b-col>
            </b-row>
          </form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "FormularioLogin",
  props: {
    msg: String
  },
  methods: {
    onClickButton : function () {
      this.$emit('clicked', false);
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  background-color: #b6cfe5;
  color: white;
}
.botao-login:hover {
  background-color: #8294aa;
}
.input-group-text {
  background-color: #b6cfe5;
  color: white;
  border: none;
}
</style>
