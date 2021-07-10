<template>
  <div id="nav"></div>
  <router-view />

  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Raleway:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />

  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
</template>

<style lang="scss">
@import "./assets/scss/variable.scss";

* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}

#app {
  background: $background-black;
  min-height: 100vh;
}
</style>
