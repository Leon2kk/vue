<template>
  <HeaderComponent />
  <ProjectComponent />
  <IndexComponent />  
  <NewsComponent />
  <BlogDetailsComponent />
  <FooterComponent />
</template>

<script>


import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BlogDetailsComponent from './components/BlogDetailsComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import NewsComponent from './components/NewsComponent.vue';
import ProjectComponent from './components/ProjectComponent.vue';

export default {
  name: 'App',
  components:{
    HeaderComponent,
    FooterComponent,
    BlogDetailsComponent,
    IndexComponent,
    NewsComponent,
    ProjectComponent,
  }
}
</script>

<style lang="scss">

</style>
