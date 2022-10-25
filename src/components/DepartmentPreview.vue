<template>
    <tr class="department-preview">
        <td>{{ department.name }}</td>
        <td>{{ department.employees.length }}</td>
    </tr>
</template>
  
<script>
export default {
    props: {
        department: Object
    },
    name: 'department-preview',
}
</script>
  