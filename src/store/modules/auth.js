const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const action = {
  logout: ({ commit }) => {
    commit('setToken', null);
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};
