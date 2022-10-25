<template>
    <section class="filter-cmp">
        <select name="department-names" @input="setFilterBy" placeholder="Department">
            <option value="" disabled selected>By department</option>
            <option value="">No Filter</option>
            <option v-for="dep in departments" :key="dep.id" :value="dep.id">{{ dep.name }}
            </option>
        </select>
    </section>
</template>
  
<script>
export default {
    props: {
        employee: Object
    },
    emits: ['setFilterBy'],
    data() {
        return {
            filterBy: {
                department: ''
            }
        }
    },
    emits: ['deleteEmployee'],
    name: 'filter-cmp',
    methods: {
        onDelete() {
            this.$emit('deleteEmployee', { employeeId: this.employee.id, departmentId: this.employee.departmentId })
        },
        setFilterBy(ev) {
            this.$emit('setFilterBy', ev.target.value)
        }
    },
    computed: {
        departments() {
            return this.$store.getters.departments
        }
    }
}
</script>
  