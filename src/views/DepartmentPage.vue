<template>
    <section class="department-page">
        <AddDepartment @addDepartment="onAddDepartment" />
        <TableList :tableData="departments" />
    </section>
</template>
  
<script>
import TableList from '../components/TableList.vue';
import AddDepartment from '../components/AddDepartment.vue';

export default {
    name: 'department-page',
    created() {
        this.$store.commit({ type: 'setViewMode', viewMode: 'departments' })
    },
    methods: {
        onAddDepartment(newDepartment) {
            this.$store.dispatch({ type: 'addDepartment', department: newDepartment })
        }
    },
    computed: {
        departments() {
            return this.$store.getters.departments
        }
    },
    components: {
        TableList,
        AddDepartment
    },

}

</script>
  
<style>

</style>
  