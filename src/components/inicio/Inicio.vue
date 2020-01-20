<template>
  <div>
    <div class="menu">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
        </b-navbar>
    </div>
    <div class="conteudo">
      <img src="../.././assets/computer-1245714_1920.jpg">
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  height: 100px;
  border: 1px solid black;
}
.conteudo {
  height: 800px;
  border: 1px solid red;
}
.footer {
  height: 400px;
  border: 1px solid blue;
}
</style>
