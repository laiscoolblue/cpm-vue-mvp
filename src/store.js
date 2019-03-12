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
    campaign: {},
    presets: [],
  },
  mutations: {
    SET_CAMPAIGNS(state, payload) {
      state.campaigns = payload.data;
    },
    SET_CAMPAIGN(state, payload) {
      state.campaign = payload.data;
    },
    SET_PRESETS(state, payload) {
      state.presets = payload.data;
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
    retrieveCampaign({ commit }, id) {
      axios.get(`${api}/campaigns/${id}`).then(
        (response) => {
          const { data } = response;
          commit('SET_CAMPAIGN', { data });
        },
        (err) => {
          console.error(err.response);
        },
      );
    },
    retrievePresets({ commit }, id) {
      axios.get(`${api}/pre-sets?campaign=${id}`).then(
        (response) => {
          const { data } = response;
          commit('SET_PRESETS', { data });
        },
        (err) => {
          console.error(err.response);
        },
      );
    },
  },
});
