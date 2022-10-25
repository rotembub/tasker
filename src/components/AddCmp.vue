<template>
    <section class="add-cmp">
        <input v-if="entity" type="text" :name="`${entityType}-name`" :placeholder="`${entityType} name`"
            v-model="entity.name">
        <template v-if="entityType === 'Employee'">
            <input type="text" :name="`${entityType}-title`" :placeholder="`${entityType} title`"
                v-model="entity.title">
        </template>
        <button @click="onAddEntity">Add</button>
    </section>
</template>
  
<script>
import { companyService } from '../services/company.service'
export default {

    name: 'add-department',
    props: {
        entityType: String,
    },
    emits: ['addEntity'],
    created() {
        this.getEmptyEntity()
    },
    data() {
        return {
            entity: null
        }
    },

    methods: {
        onAddEntity() {
            this.$emit('addEntity', this.entity)
            this.getEmptyEntity()
        },
        getEmptyEntity() {
            if (this.entityType === 'Department') this.entity = companyService.getEmptyDepartment()
            else this.entity = companyService.getEmptyEmployee()
        }
    }
}
</script>
  