<template>
    <section class="app-modal">
        <h1>{{ getDialogText }}</h1>

        <template v-if="currStage === 0">
            <h2>Reassign to:</h2>
            <select name="departments" v-model="reassignTo">
                <option value="null">Do not Reassign</option>
                <option v-for="dep in companyDepartments" :key="dep.id" :value="dep.id">{{ dep.name }}
                </option>
            </select>
        </template>

        <button @click="handleAnswer(true)">{{ getBtnTxt }}</button>
        <button v-if="currStage === 1" @click="handleAnswer(false)">No</button>
    </section>
</template>
  
<script>
export default {
    name: 'app-modal',
    data() {
        return {
            currStage: 0,
            stages: ['reassign', 'delete'],
            reassignTo: null
        }
    },
    created() {
        if (!this.departmentToDelete.employees.length) this.currStage = 1
    },
    methods: {
        handleAnswer(answer) {
            const { currStage, stages, reassignTo } = this
            const depToDeleteId = this.departmentToDelete.id
            if (stages[currStage] === 'delete') {
                if (!answer) this.clearDepartmentToDelete()
                else this.$store.dispatch({ type: 'removeDepartment', department: depToDeleteId, reassignTo })
            } else {
                this.currStage++
            }

        },
        clearDepartmentToDelete() {
            this.$store.commit({ type: 'setDepartmentToDelete', department: null })
        }
    },

    computed: {
        getDialogText() {
            const stage = this.stages[this.currStage]
            console.log(stage)
            switch (stage) {
                case 'delete':
                    return 'Are you sure you wish you delete this department?'
                case 'reassign':
                    return 'Do you wish to reassign the department\'s employees to another department?'
            }
        },
        getBtnTxt() {
            const stage = this.stages[this.currStage]
            return stage === 'delete' ? 'Yes' : 'Continue'
        },
        departmentToDelete() {
            return this.$store.getters.departmentToDelete
        },
        companyDepartments() {
            return this.$store.getters.departments.filter(dep => dep.id !== this.departmentToDelete.id)
        }
    }
}
</script>
  