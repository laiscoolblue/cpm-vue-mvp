/* eslint-disable no-param-reassign, no-empty-pattern */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from './config';
// import { checkBartsApi } from './helpers';

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
    vouchers: [],
    customer,
    pages: [],
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
    SET_PAGES(state, payload) {
      state.pages = payload.data;
    },
  },
  actions: {
    // Campaigns
    retrieveCampaigns({ commit }) {
      return axios.get(`${api}/campaigns`).then(
        (response) => {
          const { data } = response;
          commit('SET_CAMPAIGNS', { data });
          return response;
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
    retrievePresets({ commit }, payload) {
      const { campaignId } = payload;
      return axios.get(`${api}/pre-sets?campaign=${campaignId}`).then(
        (response) => {
          const { data } = response;
          commit('SET_PRESETS', { data });
        },
        (err) => {
          console.error(err.response);
        },
      );
      // const { campaignId, page } = payload;
      // const check = checkBartsApi();
      // check
      //   .then(() => {
      //     axios.get(`${barts}/presets/campaign/${campaignId}?page=${page}`).then(
      //       (response) => {
      //         const { data } = response;
      //         commit('SET_PRESETS', { data: data.presets });
      //         commit('SET_PAGES', { data: data.pages });
      //       },
      //       (err) => {
      //         console.error(err.response);
      //       },
      //     );
      //   })
      //   .catch(() => {
      //     return axios.get(`${api}/pre-sets?campaign=${campaignId}`).then(
      //       (response) => {
      //         const { data } = response;
      //         commit('SET_PRESETS', { data });
      //       },
      //       (err) => {
      //         console.error(err.response);
      //       },
      //     );
      //   });
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
