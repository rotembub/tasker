<template>
  <section class="app-container main-layout">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </section>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}

</script>



<style>

</style>
