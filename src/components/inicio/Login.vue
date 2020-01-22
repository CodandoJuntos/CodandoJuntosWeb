<template>
  <div class="conteudo-login">
    <b-container fluid="xl">
      <b-row>
        <b-col cols="8"></b-col>
        <b-col cols="12" xl="4" lg="4" md="4" sm="12">
          <div class="div-login">
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
                            <b-form-input type="text" placeholder="Senha"></b-form-input>
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
                            <a href="#">Esqueci minha senha</a>
                          </div>
                        </b-col>
                      </b-row>
                    </form>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conteudo-login {
  padding: 20px 80px 10px 80px;
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
@media only screen and (min-width: 768px) {
  .conteudo-login{
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
