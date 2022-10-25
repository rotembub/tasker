<template>
    <section class="table-list">

        <table>

            <TableHeader :viewMode="viewMode" />
            <tbody>
                <template v-if="viewMode === 'departments'">
                    <DepartmentPreview v-for="department in tableData" :key="department.id" :department="department" />
                </template>

                <EmployeePreview v-else v-for="employee in tableData" :key="employee.id" :employee="employee" />
            </tbody>



        </table>


        <!-- <div v-for="user in tableData" key="user.id">
            <UserPreview :user="user" />
            <div class="control-box">
                <button @click="onDeleteUser(user.id)">X</button>
            </div>
        </div> -->
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
    emits: ['onDeleteUser'],
    name: 'table-list',
    mounted() {
        console.log(this.tableData)
    },
    methods: {
        onDeleteUser(userId) {
            this.$emit('onDeleteUser', userId)
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
  