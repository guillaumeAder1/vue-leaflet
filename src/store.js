import Vue from 'vue'
import Vuex from 'vuex'
import { allBusRoutes } from './utils/constant'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: "hellllloooo",
    routeList: null
  },
  getters: {
    routeList: state => state.routeList
  },
  mutations: {
    GET_ROUTES_LIST(state, routeList) {
      state.routeList = routeList
    }
  },
  actions: {
    getRouteList({ commit }) {
      Vue.http.get(allBusRoutes).then(result => {
        commit('GET_ROUTES_LIST', result.body.results)
      }, error => {
        console.error(error);
      });
    }
    // getRouteList() {
    //   return Vue.http.get(allBusRoutes).then(result => {
    //     return result.body.results
    //   }, error => {
    //     console.error(error);
    //   });
    // }
  },

})
