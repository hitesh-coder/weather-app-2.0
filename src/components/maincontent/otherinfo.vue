<template>
  <div class="otherInfo">
    <h1>Today's Highlights</h1>
    <div class="information" v-if="weather">
      <div class="windStatus box">
        <p>Wind Status</p>
        <h2>
          {{ Math.round(weather[0].wind_speed) }}
          <span> mph </span>
        </h2>
        <div class="icon">
          <i
            class="material-icons"
            :style="{
              transform:
                'rotate(' + Math.round(weather[0].wind_direction) + 'deg)',
            }"
            >navigation</i
          >
          <span>{{ weather[0].wind_direction_compass }}</span>
        </div>
      </div>
      <div class="humidity box">
        <p>Humidity</p>
        <h2>{{ Math.round(weather[0].humidity) }} <span> % </span></h2>
        <div class="percentageBar">
          <div class="percentMark">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div class="bar">
            <div
              class="percentageColor"
              :style="{
                width: Math.round(weather[0].humidity) + '%',
              }"
            ></div>
            <div class="backgroundBar"></div>
          </div>
        </div>
      </div>
      <div class="visiblity box">
        <p>Visiblity</p>
        <h2>
          {{ Math.round(weather[0].visibility) }}
          <span> miles </span>
        </h2>
      </div>
      <div class="airPressure box">
        <p>Air Pressure</p>
        <h2>
          {{ Math.round(weather[0].air_pressure) }}
          <span> mb </span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "otherinfo",
  computed: {
    weather() {
      return this.$store.getters.weather.consolidated_weather;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

* {
  color: white;
}

.otherInfo {
  h1 {
    margin: 4rem 0rem;
  }

  .information {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    .humidity {
      .percentageBar {
        width: 100%;
        .percentMark {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .bar {
          width: 100%;
          position: relative;

          .percentageColor {
            height: 5px;
            background: #ffec65;
            position: absolute;
            border-radius: 10px;
          }

          .backgroundBar {
            width: 100%;
            height: 5px;
            border-radius: 10px;
            background: white;
          }
        }
      }
    }

    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 6rem;
      background: $sidebar-black;
      color: $font-white;

      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-top: 1rem;
      }

      h2 {
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;
        margin-top: 1rem;
        white-space: nowrap;

        span {
          font-weight: 500;
          font-size: 30px;
          line-height: 40px;
        }
      }

      .icon {
        display: flex;
        flex-direction: row;
        align-items: center;

        i {
          padding: 0.3rem;
          border-radius: 50%;
          margin-right: 1rem;
          background: $font-gray;
        }
      }

      .icon,
      .percentageBar {
        margin-top: 1rem;
      }
    }
  }
}

@media screen and (max-width: 1170px) {
  .otherInfo {
    .information {
      grid-gap: 1rem;
      .box {
        padding: 2rem 4rem;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .otherInfo {
    .information {
      display: grid;
      grid-template-columns: 1fr;
      .box {
        padding: 2rem 4rem;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .otherInfo {
    .information {
      .box {
        padding: 2rem 2rem;
      }
    }
  }
}
</style>
