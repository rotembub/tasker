<template>
    <section class="user-preview">
        <ul>
            <li>name: {{ user.name }}</li>
            <li>job: {{ user.job }}</li>
            <li>score: {{ user.score }}</li>
        </ul>
    </section>
</template>
  
<script>
export default {
    props: {
        user: Object
    },
    name: 'user-preview',
}
</script>
  