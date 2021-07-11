<template>
  <div class="sideBar">
    <div class="myLocation" @click="getUserLocation" title="Live Location">
      <i class="material-icons">gps_fixed</i>
    </div>
    <location-search-bar />
    <div v-if="ifSearch" class="sideBarContent">
      <div class="weatherImg">
        <img :src="getImg()" alt="" />
      </div>
      <div class="todaysTemprature">
        <h1>
          {{ Math.round(weather.consolidated_weather[0].the_temp) }}
        </h1>
        <p>°c</p>
      </div>
      <div class="todaysWeather">
        <h2>
          {{ weather.consolidated_weather[0].weather_state_name }}
        </h2>
      </div>
      <div class="todaysDate">
        <h3>Today &nbsp;&nbsp;|&nbsp;&nbsp;</h3>
        <span>{{ date }}</span>
      </div>
      <div class="location">
        <i class="material-icons">location_on</i>
        <span>{{ weather.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import locationSearchBar from "./sideBar/locationSearchBar.vue";

export default {
  name: "sideBar",
  components: { locationSearchBar },
  beforeMount() {
    this.getUserLocation();
    this.$store.dispatch("datebuilder");
    this.fun();
  },
  computed: {
    weather() {
      return this.$store.getters.weather;
    },
    ifSearch() {
      return this.$store.getters.ifSearch;
    },
    date() {
      return this.$store.getters.date;
    },
  },
  methods: {
    getImg() {
      return (
        "/images/" +
        this.weather.consolidated_weather[0].weather_state_abbr +
        ".png"
      );
    },
    getUserLocation() {
      navigator.geolocation.getCurrentPosition(
        this.succesfullLookUp,
      );
      setTimeout(() => {
        this.fun2();
      }, 2000);
    },
    succesfullLookUp(position) {
      let { latitude, longitude } = position.coords;
      // console.log(position.coords);
      this.$store.dispatch("setLatitude", latitude);
      this.$store.dispatch("setLongitude", longitude);
      this.$store.dispatch("getCurrentLocation");
    },
    fun() {
      this.$store.dispatch("getLocationWoeid");
      setTimeout(() => {
        this.$store.dispatch("getWeatherInfo");
      }, 100);
      setTimeout(() => {
        this.$store.dispatch("changeIfSearch");
      }, 300);
    },
    fun2() {
      this.$store.dispatch("getLocationWoeid");
      setTimeout(() => {
        this.$store.dispatch("getWeatherInfo");
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable.scss";

.sideBar {
  position: relative;
  background: $sidebar-black;
  width: 450px !important;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .myLocation {
    position: absolute;
    right: 2rem;
    top: 1rem;
    height: 33.59px;
    padding: 0.3rem;
    background: $font-gray;
    border-radius: 50%;
    cursor: pointer;
  }

  .sideBarContent {
    display: flex;
    flex-direction: column;
    align-items: center;

    .weatherImg {
      margin-top: 5rem;
    }

    .todaysTemprature {
      margin-top: 5rem;
      * {
        font-weight: 500;
        display: inline;
      }
      h1 {
        font-size: 144px;
        line-height: 169px;
        color: $font-white !important;
      }
      p {
        font-size: 50px;
        line-height: 75px;
        color: $font-light-gray !important;
      }
    }

    .todaysWeather {
      margin-top: 5rem;
      h2 {
        font-weight: 600;
        font-size: 36px;
        line-height: 42px;
        text-align: center;

        color: $font-light-gray;
      }
    }

    .todaysDate {
      margin-top: 5rem;
      * {
        display: inline;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        color: $font-gray;
      }
    }

    .location {
      margin: 2rem 0rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      * {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        color: $font-gray;
      }
    }
  }

  * {
    color: white;
  }
}

@media screen and (max-width: 850px) {
  .sideBar {
    width: 100vw !important;

    .sideBarContent {
      .weatherImg {
        margin-top: 0rem;
      }

      .todaysTemprature {
        margin-top: 3rem;
      }

      .todaysWeather {
        margin-top: 3rem;
      }

      .todaysDate {
        margin-top: 3rem;
      }
    }
  }
}
</style>
