<template>
    <tr class="department-preview">
        <td>{{ department.name }}</td>
        <td>{{ department.employees.length }}</td>
        <td> <button @click="onDelete">X</button></td>
    </tr>
</template>
  
<script>
export default {
    props: {
        department: Object
    },
    emits: ['deleteDepartment'],
    name: 'department-preview',
    methods: {
        onDelete() {
            this.$emit('deleteDepartment', this.department.id)
        }
    }
}
</script>
  