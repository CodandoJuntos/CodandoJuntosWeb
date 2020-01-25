<template>
  <b-container fluid="xl">
    <b-row>
      <b-col cols="12">
        <div class="header-form-login">
          <div class="div-btn-voltar">
            <b-btn class="btn-voltar" variant="link" @click="onClickButton()">
              <b-icon font-scale="3" icon="arrow-left"></b-icon>
            </b-btn>
            <h4>REDEFINIR SENHA?</h4>
          </div>
          <p>Preencha o campo e-mail para redefinir senha.</p>
        </div>
        <div class="div-form-login">
          <form>
            <b-row>
              <b-col cols="12">
                <b-input-group size="lg" class="mb-2">
                  <b-input-group-prepend is-text>
                    <b-icon scale="2" icon="envelope-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="text" placeholder="E-mail"></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <button class="botao-login">Redefinir senha</button>
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
  name: "FormularioRedefinirSenha",
  props: {
    msg: String
  },
  methods: {
    onClickButton: function() {
      this.$emit("clicked", true);
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
  padding-top: 15px;
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
.div-btn-voltar {
  padding-top: 5px;
  display: flex;
  align-items: center;
}
.btn-voltar{
    color:black;
}
.btn-voltar:hover{
    color:#888;
}
</style>
