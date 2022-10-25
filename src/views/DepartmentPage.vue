<template>
    <section class="department-page">
        <TableList :tableData="departments" />
    </section>
</template>
  
<script>
import TableList from '../components/TableList.vue';


export default {
    name: 'department-page',
    created() {
        this.$store.commit({ type: 'setViewMode', viewMode: 'departments' })
    },
    computed: {
        departments() {
            return this.$store.getters.departments
        }
    },


    components: {
        TableList
    },

}

</script>
  
<style>

</style>
  