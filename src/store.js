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
        console.error(error);
      });
    },
    getRouteStops(store, params) {
      const url = `${allRouteStops}routeid=${params.routeid}&operator=${params.operator}`
      Vue.http.get(url).then(res => {
        (res.body.numberofresults) ? store.commit('GET_STOP_LIST', res.body.results) : store.commit('GET_ERROR', `${numberofresults} results for route '${params.routeid}' `)
      }, err => {
        console.error(err)
      })
    }
  },

})
