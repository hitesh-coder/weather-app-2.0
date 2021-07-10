<template>
  <div class="futureForeCast">
    <span
      v-for="(item, index) in weather"
      :key="index"
      :class="index == 0 ? 'none' : ' '"
    >
      <p>{{ item.applicable_date }}</p>
      <img
        :src="getImg(item.weather_state_abbr)"
        :alt="item.weather_state_abbr"
      />
      <div class="tempratures">
        <span class="maxTemp">{{ Math.round(item.max_temp) }} °c</span>
        <span class="minTemp">{{ Math.round(item.min_temp) }} °c</span>
      </div>
      <br />
    </span>
  </div>
</template>

<script>
export default {
  name: "futureforecast",
  computed: {
    weather() {
      return this.$store.getters.weather.consolidated_weather;
    },
  },
  methods: {
    getImg(pic) {
      return "/images/" + pic + ".png";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.futureForeCast {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;

  width: 100%;

  .none {
    display: none;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    color: orange;
    padding: 0.5rem 0.7rem;
    height: fit-content;
    background: $sidebar-black;

    p {
      margin-top: 1rem;

      font-weight: 500;
      font-size: 16px;
      line-height: 19px;

      color: $font-white;
    }

    img {
      height: 62px;
      width: 60px;
      margin-top: 1rem;
    }

    .tempratures {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      * {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        white-space: nowrap;
      }

      .maxTemp {
        color: $font-white;
      }

      .minTemp {
        color: $font-light-gray;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .futureForeCast {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
}
@media screen and (max-width: 850px) {
  .futureForeCast {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
