import Vue from 'vue'
import Vuex from 'vuex'
import { allBusRoutes } from './utils/constant'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: "hellllloooo"
  },
  mutations: {

  },
  actions: {
    getRouteList() {
      return Vue.http.get(allBusRoutes).then(result => {
        return result.body.results
      }, error => {
        console.error(error);
      });
    }
  },
  getters: {

  }
})
