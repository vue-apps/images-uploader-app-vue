import qs from 'qs';
import api from '@/api/imgur';
import { router } from '@/main';

export default {
  state: {
    token: window.localStorage.getItem('imgur_token'),
  },

  getters: {
    isLoggedIn: (state) => !!state.token,
  },

  actions: {
    login: () => {
      api.login();
    },
    finalizeLogin({ commit }, hash) {
      const query = qs.parse(hash.replace('#', ''));
      commit('setToken', query.access_token);
      window.localStorage.setItem('imgur_token', query.access_token);
      router.push('/');
    },
    logout: ({ commit }) => {
      commit('setToken', null);
      window.localStorage.removeItem('imgur_token');
    },
  },

  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
  },
};
