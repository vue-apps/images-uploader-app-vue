import api from '@/api/imgur';

export default {
  state: {
    images: [],
  },

  getters: {
    allImages: (state) => state.images,
  },

  actions: {
    async fetchImages({ rootState }) {
      const { token } = rootState.auth;
      const response = await api.fetchImages(token);
      console.log(response);
    },
  },

  mutations: {
    setImages: (state, images) => (state.images = images),
  },
};
