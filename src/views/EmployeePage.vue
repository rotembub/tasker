<template>
    <section v-if="selectedCompany" class="employee-page">
        <FilterCmp @setFilterBy="setFilterBy" />
        <AddCmp @addEntity="onAddEmployee" :entityType="'Employee'" />
        <TableList :tableData="employees" @deleteEmployee="onDeleteEmployee" />
    </section>
</template>
  
<script>
import TableList from '../components/TableList.vue';
import AddCmp from '../components/AddCmp.vue';
import FilterCmp from '../components/FilterCmp.vue';

export default {
    name: 'employee-page',
    components: {
        TableList,
        AddCmp,
        FilterCmp
    },
    created() {
        this.$store.commit({ type: 'setViewMode', viewMode: 'employees' })
    },
    methods: {
        onAddEmployee(employee) {
            this.$store.dispatch({ type: 'addEmployee', employee })
        },
        onDeleteEmployee({ employeeId, departmentId }) {
            this.$store.dispatch({ type: 'removeEmployee', employeeId, departmentId })
        },
        setFilterBy(depId) {
            console.log('here');
            this.$store.commit({ type: 'setFilterBy', department: depId })
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
  