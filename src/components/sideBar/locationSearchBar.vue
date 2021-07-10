<template>
  <div class="locationSearchBar">
    <input type="text" v-model="location" />
    <button @click="getLocationWoeid">search</button>
  </div>
</template>

<script>
export default {
  name: "locationSearchBar",
  computed: {
    location: {
      get() {
        return this.$store.state.location;
      },
      set(value) {
        this.$store.dispatch("updateLocation", value);
      },
    },
  },
  methods: {
    getLocationWoeid() {
      this.$store.dispatch("getLocationWoeid").then(() => {
        setTimeout(() => {
          this.$store.dispatch("getWeatherInfo");
        }, 300);
      });
      // setTimeout(() => {
      //     this.$store.dispatch("getWeatherInfo");
      // }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.locationSearchBar {
  margin: 2rem 0rem;
  margin-top: 4rem;

  * {
    padding: 0.5rem;
    outline: none;
    background: $background-gray;
    color: $font-white;
    border: none;

    box-shadow: 1px 1px 5px rgba(134, 134, 134, 0.3);
  }

  input {
    margin-right: 0.5rem;
  }
  button {
    cursor: pointer;
  }
}
</style>
