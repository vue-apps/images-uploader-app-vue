<template>
  <div class="ui container">
    <img v-for="image in allImages" :key="image.id" :src="image.link" alt="" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ImageList',
  computed: mapGetters(['allImages']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
img {
  width: 200px;
  padding: 10px;
}
</style>
