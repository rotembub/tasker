<template>
    <section class="add-cmp">
        <input v-if="entity" type="text" :name="`${entityType}-name`" :placeholder="`${entityType} name`"
            v-model="entity.name">
        <template v-if="entityType === 'Employee'">
            <input type="text" :name="`${entityType}-title`" :placeholder="`${entityType} title`"
                v-model="entity.title">
            <select name="department-names" @input="handleInput" placeholder="Department">
                <option value="" disabled selected>Department</option>
                <option v-for="dep in departments" :key="dep.id" :value="dep.id">{{ dep.name }}
                </option>
            </select>
        </template>
        <button class="btn-confirm" @click="onAddEntity">Add</button>
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
            if (this.entityType === 'Employee') {
                if (!this.entity.name || !this.entity.title || !this.entity.department) return
            } else {
                if (!this.entity.name) return
            }
            this.$emit('addEntity', this.entity)
            this.getEmptyEntity()
        },
        getEmptyEntity() {
            if (this.entityType === 'Department') this.entity = companyService.getEmptyDepartment()
            else this.entity = companyService.getEmptyEmployee()
        },
        handleInput(ev) {
            const departmentId = ev.target.value
            this.entity.departmentId = departmentId
            this.entity.department = this.departments.find(dep => dep.id === departmentId).name
        }
    },
    computed: {
        departments() {
            return this.$store.getters.departments
        }
    }
}
</script>
  