<template>
    <section class="add-department">
        <input type="text" name="department-name" placeholder="Department name" v-model="department.name">
        <button @click="onAddDepartment">Add</button>
    </section>
</template>
  
<script>
import { companyService } from '../services/company.service'
export default {

    name: 'add-department',
    props: {
        employee: Object
    },
    emits: ['addDepartment'],
    created() {
        this.department = companyService.getEmptyDepartment()
    },
    data() {
        return {
            department: null
        }
    },

    methods: {
        onAddDepartment() {
            console.log('trying to add ', this.department)
            this.$emit('addDepartment', this.department)
        }
    }
}
</script>
  