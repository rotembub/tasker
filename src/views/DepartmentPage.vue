<template>
    <section class="department-page">
        <AddCmp @addEntity="onAddDepartment" :entityType="'Department'" />
        <TableList :tableData="departments" @deleteDepartment="onDeleteDepartment" />
    </section>
</template>
  
<script>
import TableList from '../components/TableList.vue';
import AddCmp from '../components/AddCmp.vue';

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
        AddCmp,
    },

}

</script>
  
<style>

</style>
  