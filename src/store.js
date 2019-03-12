/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from './config';

const { api, barts } = config;
const customer = {
  name: 'Jane Doe',
  id: 1,
};

Vue.use(Vuex);

function checkBartsApi() {
  axios.get(`${barts}/campaigns`).then(
    () => true,
    () => false,
  );
}

export default new Vuex.Store({
  state: {
    campaigns: [],
    campaign: {},
    presets: [],
    preset: {},
    vouchers: [],
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
    SET_VOUCHERS(state, payload) {
      state.vouchers = payload.data;
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
      if (checkBartsApi()) {
        axios.get(`${api}/presets/campaign/${id}`).then(
          (response) => {
            const { data } = response;
            commit('SET_PRESETS', { data: data.presets });
          },
          (err) => {
            console.error(err.response);
          },
        );
      } else {
        axios.get(`${api}/pre-sets?campaign=${id}`).then(
          (response) => {
            const { data } = response;
            commit('SET_PRESETS', { data });
          },
          (err) => {
            console.error(err.response);
          },
        );
      }
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
    // Vouchers
    async issueVoucher({}, data) {
      let response;
      try {
        response = await axios.post(`${api}/vouchers`, data);
      } catch (err) {
        console.error(err.response);
      }

      return response;
    },
    // Pre-set
    retrieveVouchers({ commit }, id) {
      axios.get(`${api}/vouchers?customer=${id}`).then(
        (response) => {
          const { data } = response;
          commit('SET_VOUCHERS', { data });
        },
        (err) => {
          console.error(err.response);
        },
      );
    },
  },
});
