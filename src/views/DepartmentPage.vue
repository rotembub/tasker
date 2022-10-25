<template>
    <section class="department-page">
        <AddDepartment @addDepartment="onAddDepartment" />
        <TableList :tableData="departments" @deleteDepartment="onDeleteDepartment" />
    </section>
</template>
  
<script>
import TableList from '../components/TableList.vue';
import AddDepartment from '../components/AddDepartment.vue';

export default {
    name: 'department-page',
    emits: ['openModal'],
    created() {
        this.$store.commit({ type: 'setViewMode', viewMode: 'departments' })
    },
    methods: {
        onAddDepartment(newDepartment) {
            this.$store.dispatch({ type: 'addDepartment', department: newDepartment })
        },
        onDeleteDepartment(departId) {
            const department = this.departments.find(dep => dep.id === departId)
            // const isEmpty = (!department.employees.length) ? true : false
            // this.$emit('openModal', departId)
            this.$store.commit({ type: 'setDepartmentToDelete', department })
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
  