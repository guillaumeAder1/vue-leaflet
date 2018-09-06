import Vue from 'vue'
import Vuex from 'vuex'
import { allBusRoutes, allRouteStops } from './utils/constant'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routeList: null,
    stopList: null,
    errorMessage: null,
  },
  getters: {
    routeList: state => state.routeList,
    stopList: state => state.stopList,
    errorMessage: state => state.errorMessage
  },
  mutations: {
    GET_ROUTES_LIST(state, routeList) {
      state.routeList = routeList
    },
    GET_ERROR(state, message) {
      state.errorMessage = message
    },
    GET_STOP_LIST(state, list) {
      state.stopList = list
    }
  },
  actions: {
    getRouteList({ commit }) {
      Vue.http.get(allBusRoutes).then(result => {
        commit('GET_ROUTES_LIST', result.body.results)
      }, error => {
        store.commit('GET_ERROR', error.message)
        console.error(error);
      });
    },
    getRouteStops(store, params) {
      const url = `${allRouteStops}routeid=${params.routeid}&operator=${params.operator}`
      const { numberofresults, results } = res.body;
      const str = `${numberofresults} results for route '${params.routeid}'`
      Vue.http.get(url).then(res => {
        (numberofresults) ? store.commit('GET_STOP_LIST', results) : store.commit('GET_ERROR', str);
      }, error => {
        store.commit('GET_ERROR', error.message)
        console.error(error)
      })
    }
  },

})
