<template>
  <div class="home">
    <side-bar />
    <maincontent />
  </div>
</template>

<script>
// @ is an alias to /src
import Maincontent from "../components/maincontent.vue";
import SideBar from "../components/sideBar.vue";

export default {
  name: "Home",
  components: {
    SideBar,
    Maincontent,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 850px) {
  .home {
    flex-direction: column;
  }
}
</style>
