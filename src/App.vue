<template>
  <section class="app-container main-layout">
    <AppHeader @selectCompany="onSelectCompany" />
    <AppModal v-if="departmentToDelete" />
    <SideNav />
    <RouterView />
    <AppFooter />
  </section>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import SideNav from './components/SideNav.vue';
import AppModal from './components/AppModal.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SideNav,
    AppFooter,
    AppModal
  },
  data() {
    return {
      action: null,
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadCompanies' })
  },
  methods: {
    onSelectCompany(companyId) {
      this.$store.dispatch({ type: 'selectCompanyById', companyId })
    },
  },
  computed: {
    departmentToDelete() {
      return this.$store.getters.departmentToDelete
    }
  }
}

</script>



<style>

</style>
