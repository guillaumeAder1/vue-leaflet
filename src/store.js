import Vue from 'vue'
import Vuex from 'vuex'
import { allBusRoutes, allRouteStops } from './utils/constant'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routeList: null,
    stopList: null,
    errorMessage: null,
    selectedRoute: null,
    fullRouteResponse: null,
  },
  getters: {
    routeList: state => state.routeList,
    stopList: state => state.stopList,
    errorMessage: state => state.errorMessage,
    selectedRoute: state => state.selectedRoute,
    fullRouteResponse: state => state.fullRouteResponse

  },
  mutations: {
    SELECTED_ROUTE(state, routeid) {
      state.selectedRoute = routeid;
    },
    GET_ROUTES_LIST(state, routeList) {
      state.routeList = routeList
    },
    GET_ERROR(state, message) {
      state.errorMessage = message
    },
    GET_STOP_LIST(state, list) {
      const stops = list.reduce((acc, res) => {
        return acc.concat(res.stops)
      }, [])
      state.stopList = stops
      state.fullRouteResponse = list
    }
  },
  actions: {
    getRouteList({ commit }) {
      Vue.http.get(allBusRoutes).then(result => {
        commit('GET_ROUTES_LIST', result.body.results)
      }, error => {
        commit('GET_ERROR', error.message)
        console.error(error);
      });
    },
    getRouteStops(context, payload) {
      const url = `${allRouteStops}routeid=${payload.routeid}&operator=${payload.operator}`;
      Vue.http.get(url).then(res => {
        const { numberofresults, results } = res.body;
        const str = `${numberofresults} result for route '${payload.routeid}'`
        if (numberofresults) {
          context.commit('SELECTED_ROUTE', payload.routeid);
          context.commit('GET_STOP_LIST', results)
        } else {
          context.commit('GET_ERROR', str);
          context.commit('SELECTED_ROUTE', false);

        }
      }, error => {
        context.commit('GET_ERROR', error.message)
        context.commit('SELECTED_ROUTE', false);
        console.error(error)
      })
    }
  },

})
