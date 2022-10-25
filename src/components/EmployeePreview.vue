<template>
    <tr class="employee-preview">
        <td> {{ employee.name }}</td>
        <td> {{ employee.title }}</td>
        <td>{{ employee.department }}</td>
        <td> <button @click="onDelete">X</button></td>
    </tr>
</template>
  
<script>
export default {
    props: {
        employee: Object
    },
    emits: ['deleteEmployee'],
    name: 'employee-preview',
    methods: {
        onDelete() {
            this.$emit('deleteEmployee', { employeeId: this.employee.id, departmentId: this.employee.departmentId })
        }
    }
}
</script>
  