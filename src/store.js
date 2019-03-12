/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from './config';

const { api } = config;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    campaigns: [],
  },
  mutations: {
    SET_CAMPAIGNS(state, payload) {
      state.campaigns = payload.data;
    },
  },
  actions: {
    retrieveCampaigns({ commit }) {
      axios.get(`${api}/campaigns`).then(
        (response) => {
          const { data } = response;
          commit('SET_CAMPAIGNS', { data });
        },
        (err) => {
          console.error(err.response);
        },
      );
    },
  },
});
