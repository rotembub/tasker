<template>
    <section class="table-list">
        <table>
            <TableHeader :viewMode="viewMode" />
            <tbody>
                <template v-if="viewMode === 'departments'">
                    <DepartmentPreview v-for="department in tableData" :key="department.id" :department="department"
                        @deleteDepartment="onDeleteDepartment" />
                </template>
                <EmployeePreview v-else v-for="employee in tableData" :key="employee.id" :employee="employee"
                    @deleteEmployee="onDeleteEmployee" />
            </tbody>
        </table>
    </section>
</template>
  
<script>
import TableHeader from './TableHeader.vue';
import EmployeePreview from './EmployeePreview.vue';
import DepartmentPreview from './DepartmentPreview.vue';

export default {
    props: {
        tableData: Array
    },
    emits: ['deleteDepartment','deleteEmployee'],
    name: 'table-list',
    methods: {
        onDeleteDepartment(departId) {
            this.$emit('deleteDepartment', departId)
        },
        onDeleteEmployee(data) {
            this.$emit('deleteEmployee', data)
        }
    },
    computed: {
        viewMode() {
            return this.$store.getters.viewMode
        }
    },
    components: { EmployeePreview, DepartmentPreview, TableHeader }
}
</script>
  