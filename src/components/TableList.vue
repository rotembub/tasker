<template>
    <section class="table-list">

        <table>

            <EmployeePreview v-for="employee in tableData" key="employee.id" :employee="employee" />


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
import EmployeePreview from './EmployeePreview.vue';

export default {
    props: {
        tableData: Array
    },
    emits: ['onDeleteUser'],
    name: 'table-list',
    methods: {
        onDeleteUser(userId) {
            this.$emit('onDeleteUser', userId)
        }
    },
    components: { EmployeePreview }
}
</script>
  