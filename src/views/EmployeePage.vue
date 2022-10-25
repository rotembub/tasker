<template>
    <section v-if="selectedCompany" class="employee-page">
        <AddCmp @addEntity="onAddEmployee" :entityType="'Employee'" />
        <TableList :tableData="employees" />
    </section>
</template>
  
<script>
import TableList from '../components/TableList.vue';
import AddCmp from '../components/AddCmp.vue';
export default {
    name: 'employee-page',
    components: {
        TableList,
        AddCmp
    },
    created() {
        // this.$store.dispatch({ type: 'loadCompanies' })
        this.$store.commit({ type: 'setViewMode', viewMode: 'employees' })
    },
    methods: {
        onAddEmployee(employee) {
            console.log(employee)
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
  