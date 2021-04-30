import api from '@/api/imgur';

export default {
  state: {
    images: [],
  },

  getters: {
    allImages: (state) => state.images,
  },

  actions: {
    async fetchImages({ rootState, commit }) {
      const { token } = rootState.auth;
      const response = await api.fetchImages(token);
      commit('setImages', response.data.data);
    },
  },

  mutations: {
    setImages: (state, images) => (state.images = images),
  },
};
