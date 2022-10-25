<template>
    <thead class="table-header">

        <template v-if="viewMode === 'departments'">
            <tr>
                <th>Name</th>
                <th># of Employees</th>
            </tr>
        </template>
        <template v-else>
            <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Department</th>
            </tr>
        </template>

    </thead>
</template>
  
<script>


export default {
    props: {
        viewMode: String
    },
    name: 'table-header',
    methods: {
    },
    computed: {
    },
}
</script>
  