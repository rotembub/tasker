<template>
  <section class="app-container main-layout">
    <AppHeader @selectCompany="onSelectCompany" />
    <SideNav />
    <RouterView />
    <AppFooter />
  </section>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import SideNav from './components/SideNav.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SideNav,
    AppFooter,
  },
  created() {
    this.$store.dispatch({ type: 'loadCompanies' })
  },
  methods: {
    onSelectCompany(companyId) {
      this.$store.dispatch({ type: 'selectCompanyById', companyId })
    }
  }
}

</script>



<style>

</style>
