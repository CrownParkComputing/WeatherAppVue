import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    weather:{},
    description: 'Test'
  },
  getters: {
    returnWeather: state => {
      return state.weather;
    },
    returnWeatherDescription: state => {
        return state.description
    }

  },    
  mutations: {
    SET_DATA(state, payload) {
      state.weather = payload
      state.description = payload.weather[0].description;
    },

  },

  actions: {
    async newWeather({ commit }, options) {
      return axios.request(options)
      .then(res => {
        commit('SET_DATA', res.data)
      })
    }   
  }
});
