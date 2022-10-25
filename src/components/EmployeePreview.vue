<template>
    <tr class="employee-preview">
        <td> {{ employee.name }}</td>
        <td> {{ employee.title }}</td>
        <td>{{ employee.department }}</td>
    </tr>
</template>
  
<script>
export default {
    props: {
        employee: Object
    },
    name: 'employee-preview',
}
</script>
  