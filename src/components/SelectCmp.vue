<template>
    <select name="departments" v-model="reassignTo">
        <option value="null">Do not Reassign</option>
        <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}
        </option>
    </select>
</template>
  
<script>
export default {
    props: {
        items: Array
    },
    name: 'select-cmp',
}
</script>
  

        