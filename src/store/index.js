import { createStore } from "vuex";

export default createStore({
  state: {
    weather: "",
    cors_Url: "https://api.allorigins.win/raw?url=",
    api_url: "https://www.metaweather.com/api/location/",
    location: "london",
    woeid_location: "",
    ifSearch: false,
    date: null,
    longitude: null,
    latitude: null,
  },
  mutations: {
    getLocationWoeid(state, payload) {
      state.woeid_location = payload[0].woeid;
      console.log(state.woeid_location);
    },
    updateLocation(state, location) {
      state.location = location;
    },
    getWeatherInfo(state, payload) {
      state.weather = payload;
      console.log(state.weather);
      console.log(state.weather.consolidated_weather[0].weather_state_name);
    },
    changeIfSearch(state) {
      state.ifSearch = !state.ifSearch;
      console.log(state.ifSearch);
    },
    datebuilder(state) {
      let d = new Date();
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Oct",
        "Nov",
        "Dec",
      ];
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      state.date = `${day}. ${date} ${month} `;
    },
    getCurrentLocation(state, payload) {
      console.log(payload, state.latitude, state.longitude);
      state.woeid_location = payload[0].woeid;
      state.location = payload[0].title;
      // console.log(state.woeid_location)
    },
    setLongitude(state, payload) {
      state.longitude = payload;
    },
    setLatitude(state, payload) {
      state.latitude = payload;
    },
  },
  actions: {
    async getLocationWoeid({ commit, state }) {
      fetch(`${state.cors_Url}${state.api_url}search/?query=${state.location}`)
        .then((res) => res.json())
        .then((results) => {
          commit("getLocationWoeid", results);
        });
    },
    async getWeatherInfo({ commit, state }) {
      fetch(`${state.cors_Url}${state.api_url}${state.woeid_location}`)
        .then((res) => res.json())
        .then((results) => {
          commit("getWeatherInfo", results);
        });
    },
    async updateLocation(state, location) {
      state.commit("updateLocation", location);
    },
    async changeIfSearch(state) {
      state.commit("changeIfSearch");
    },
    async datebuilder(state) {
      state.commit("datebuilder");
    },
    async setLatitude(state, payload) {
      state.commit("setLatitude", payload);
    },
    async setLongitude(state, payload) {
      state.commit("setLongitude", payload);
    },
    async getCurrentLocation({ commit, state }) {
      fetch(
        `${state.cors_Url}${state.api_url}search/?lattlong=${Math.round(
          state.latitude
        )},${Math.round(state.longitude)}`
      )
        .then((res) => res.json())
        .then((results) => commit("getCurrentLocation", results));
    },
  },
  modules: {},
  getters: {
    weather: (state) => state.weather,
    ifSearch: (state) => state.ifSearch,
    date: (state) => state.date,
  },
});
