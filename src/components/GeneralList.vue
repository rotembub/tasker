<template>
    <section class="general-list">
        <div v-for="user in users" key="user.id">
            <UserPreview :user="user" />
            <div class="control-box">
                <button @click="onDeleteUser(user.id)">X</button>
            </div>
        </div>
    </section>
</template>
  
<script>
import UserPreview from './UserPreview.vue';

export default {
    props: {
        users: Array
    },
    emits: ['onDeleteUser'],
    name: 'general-list',
    methods: {
        onDeleteUser(userId) {
            this.$emit('onDeleteUser', userId)
        }
    },
    components: { UserPreview }
}
</script>
  