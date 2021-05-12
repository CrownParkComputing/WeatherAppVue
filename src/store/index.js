import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    
    weather:{
      description:'',
      main:'',
      icon:''  
    },

    options : {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
          q: 'Chester, UK',
          lat: '',
          lon: '',
          callback: '',
          id: '',
          lang: 'null',
          units: '"metric" or "imperial"',
          mode: 'xml, html'
      },
      headers: {
      'x-rapidapi-key': '',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      },
    } 

  },
  getters: {
    returnWeather: state => {
      return state.weather;
    },

    returnWeatherIcon: state => {
      return "http://openweathermap.org/img/w/" + state.weather.icon + ".png";
    },

    lookupCity: state => {
      return state.options.params.q;
    },

    returnQuery: state => {
      return state.options;
    },

  },

  mutations: {
    SET_DATA(state, payload) {
      state.weather = payload.weather[0]
    },

    SET_LOOKUP_CITY(state, city) {
      state.options.params.q = city
    },

  },

  actions: {
    async newWeather({ commit }, query) {
      return axios.request(query)
      .then(res => {
        commit('SET_DATA', res.data)
      })
    },
    
    setLookupCity({ commit }, newValue){
      commit("SET_LOOKUP_CITY", newValue)
    },

    }
});
