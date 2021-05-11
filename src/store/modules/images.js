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
    async uploadImages({ rootState }, images) {
      // Get the access token
      const { token } = rootState.auth;
      // Call our API module to do the upload
      await api.upload(images, token);
      // Redirect our user to ImageList component
    },
  },

  mutations: {
    setImages: (state, images) => (state.images = images),
  },
};
