/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from './config';

const { api } = config;
const customer = {
  name: 'Jane Doe',
  id: 1,
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    campaigns: [],
    campaign: {},
    presets: [],
    preset: {},
    customer,
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
    SET_PRESET(state, payload) {
      state.preset = payload.data;
    },
  },
  actions: {
    // Campaigns
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
    // Pre-set
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
    retrievePreset({ commit }, id) {
      axios.get(`${api}/pre-sets/${id}`).then(
        (response) => {
          const { data } = response;
          commit('SET_PRESET', { data });
        },
        (err) => {
          console.error(err.response);
        },
      );
    },
    async issueVoucher({}, data) {
      let response;
      try {
        response = await axios.post(`${api}/vouchers`, data);
      } catch (err) {
        console.error(err.response);
      }

      return response;
    },
  },
});
