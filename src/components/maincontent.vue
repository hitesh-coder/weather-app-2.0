<template>
  <div class="maincontent">
    <futureforecast />
    <otherinfo />
    <credits />
  </div>
</template>

<script>
import Credits from './credits.vue';
import Futureforecast from "./maincontent/futureforecast.vue";
import Otherinfo from "./maincontent/otherinfo.vue";

export default {
  name: "maincontent",
  components: { Futureforecast, Otherinfo, Credits },
};
</script>

<style lang="scss" scoped>
.maincontent {
  width: 100%;
  flex: 1;
  padding: 4rem;
}

@media screen and (max-width: 450px) {
  .maincontent {
    padding: 3rem 1rem;
  }
}
</style>
