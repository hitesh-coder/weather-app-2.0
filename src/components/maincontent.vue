<template>
  <div class="maincontent">
    <futureforecast />
    <otherinfo />
  </div>
</template>

<script>
import Futureforecast from "./maincontent/futureforecast.vue";
import Otherinfo from "./maincontent/otherinfo.vue";

export default {
  name: "maincontent",
  components: { Futureforecast, Otherinfo },
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
