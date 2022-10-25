<template>
    <section class="employee-page">
        <h1>employees page</h1>
        <GeneralList @onDeleteUser="onDeleteUser" :users="users" />
    </section>
</template>
  
<script>
import GeneralList from '../components/GeneralList.vue';

export default {
    name: 'user-page',
    components: {
        GeneralList
    },
    created() {
        this.$store.dispatch({ type: 'loadUsers' })
    },
    methods: {
        onDeleteUser(userId) {
            this.$store.dispatch({ type: 'removeUser', userId })
        }
    },
    computed: {
        users() {
            return this.$store.getters.users
        }
    }

}

</script>
  
<style>

</style>
  