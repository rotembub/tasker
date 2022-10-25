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

        <!-- {
      id: 'e732',
      name: 'Mica Hohenheim',
      title: 'Interview instructor',
      department: 'Human Resources'
    }, -->

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
        // viewMode() {
        //     return this.$store.getters.viewMode
        // }
    },
}
</script>
  