<template>
    <section class="employee-preview">
        <tr>
            <td>name: {{ employee.name }}</td>
            <td>job: {{ employee.job }}</td>
            <td>score: {{ employee.score }}</td>
        </tr>
    </section>
</template>
  
<script>
export default {
    props: {
        employee: Object
    },
    name: 'employee-preview',
}
</script>
  