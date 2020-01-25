<template>
  <div class="conteudo-cadastro">
    <b-container fluid="xl">
      <b-row>
        <b-col cols="12" xl="4" lg="4" md="4" sm="12">
          <div class="div-cadastro">
            <b-container fluid="xl">
              <b-row>
                <b-col cols="12">
                  <div class="header-form-cadastro">
                    <h4>INSIRA SEUS DADOS PARA REALIZAR SEU CADASTRO</h4>
                  </div>
                  <div class="div-form-cadastro">
                    <form>
                      <b-row>
                        <b-col cols="12">
                          <b-input-group size="lg" class="mb-3">
                            <b-input-group-prepend is-text>
                              <b-icon scale="2" icon="person-fill"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="Nome completo"></b-form-input>
                          </b-input-group>
                        </b-col>
                      </b-row>
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
                          <b-input-group size="lg" class="mb-2">
                            <b-input-group-prepend is-text>
                              <b-icon scale="2" icon="lock-fill"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="password" placeholder="Confirmar senha"></b-form-input>
                          </b-input-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="12">
                          <button class="botao-cadastro">Cadastrar-se</button>
                        </b-col>
                      </b-row>
                    </form>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-col>
        <b-col cols="12" xl="8" lg="8" md="8" sm="12">
          <b-card>
            <div class="div-titulo">
              <h3>ENCONTRE UM PROJETO OPEN SOURCE COLABORE E ADQUIRA EXPERIÊNCIA</h3>
            </div>
            <div class="div-conteudo">
              <p>
                Acabou a faculdade quer ter um diferencial para o currículo, aqui você ajuda projetos Open Source e com isso
                você pode dar aquela turbinada no currículo e ainda adquirir experiência em desenvolvimento de software.
              </p>
              <p>
                Você que tem um projeto Open Source e deseja divulga-lo ou precisa de ajuda para mantê-lo,
                aqui no
                <b>CodandoJuntos</b> você pode!!
              </p>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conteudo-cadastro {
  padding: 20px 0px 10px 0px;
  background: url("../../assets/laptop-1512838.png");
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
.div-cadastro {
  height: 480px;
  margin: auto;
  background-color: white;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
.header-form-cadastro {
  margin-bottom: 50px;
  padding-top: 35px;
  border-bottom: 1px solid black;
  margin-bottom: 35px;
  padding-bottom: 25px;
  text-align: center;
}
.botao-cadastro {
  font-weight: bold;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #57c6d4;
  color: white;
}
.botao-cadastro:hover {
  background-color: #3e9eab;
}
.input-group-text {
  background-color: #57c6d4;
  color: white;
  border: none;
}
.div-titulo {
  padding-top: 10px;
  padding-bottom: 20px;
}
.div-conteudo{
  text-align: justify;
}
</style>