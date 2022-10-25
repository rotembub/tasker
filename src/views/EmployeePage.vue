<template>
    <section v-if="selectedCompany" class="employee-page">
        <TableList @onDeleteUser="onDeleteUser" :tableData="employees" />
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
        this.$store.commit({ type: 'setViewMode', viewMode: 'employees' })
    },
    methods: {
        onDeleteUser(userId) {
            this.$store.dispatch({ type: 'removeCompany', userId })
        }
    },
    computed: {
        companies() {
            return this.$store.getters.companies
        },
        selectedCompany() {
            return this.$store.getters.selectedCompany
        },
        employees() {
            return this.$store.getters.employees
        }
    }

}

</script>
  
<style>

</style>
  