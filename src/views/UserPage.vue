<template>
    <section class="user-page">
        <h1>users page</h1>
        <UsersList @onDeleteUser="onDeleteUser" :users="users" />
    </section>
</template>
  
<script>
import UsersList from '../components/UsersList.vue';

export default {
    name: 'user-page',
    components: {
        UsersList
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
  