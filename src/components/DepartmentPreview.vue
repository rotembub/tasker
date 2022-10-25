<template>
    <section class="department-preview">
        <tr>
            <td>department name: {{ department.name }}</td>
            <!-- <td>job: {{ user.job }}</td>
            <td>score: {{ user.score }}</td> -->
        </tr>
    </section>
</template>
  
<script>
export default {
    props: {
        department: Object
    },
    name: 'department-preview',
}
</script>
  