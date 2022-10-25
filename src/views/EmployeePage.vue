<template>
    <section class="employee-page">
        <h1>employees page</h1>
        <TableList @onDeleteUser="onDeleteUser" :tableData="companies" />
    </section>
</template>
  
<script>
import TableList from '../components/TableList.vue';

export default {
    name: 'user-page',
    components: {
        TableList
    },
    created() {
        // this.$store.dispatch({ type: 'loadCompanies' })
    },
    methods: {
        onDeleteUser(userId) {
            this.$store.dispatch({ type: 'removeCompany', userId })
        }
    },
    computed: {
        companies() {
            return this.$store.getters.companies
        }
    }

}

</script>
  
<style>

</style>
  