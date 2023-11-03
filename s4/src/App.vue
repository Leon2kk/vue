<template>
  <HeaderComponent />
  <BlogDetailsComponent />
  <FooterComponent />
</template>

<script>


import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BlogDetailsComponent from './components/BlogDetailsComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    BlogDetailsComponent,
}
}
</script>

<style lang="scss">

</style>
