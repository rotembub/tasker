<template>
    <section class="cover-screen" @click="clearDepartmentToDelete()">
        <section class="app-modal" @click.stop>
            <h1>{{ getDialogText }}</h1>

            <div class="actions-container" @click.stop>
                <template v-if="currStage === 0">
                    <select name="departments" v-model="reassignTo">
                        <option value="null">Do not Reassign</option>
                        <option v-for="dep in companyDepartments" :key="dep.id" :value="dep.id">{{ dep.name }}
                        </option>
                    </select>
                </template>

                <button @click.stop="handleAnswer(true)" class="btn-confirm">{{ getBtnTxt }}</button>
                <button class="btn-confirm" v-if="currStage === 1" @click.stop="handleAnswer(false)">No</button>
            </div>
        </section>
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
            console.log('clicking screen')
            this.$store.commit({ type: 'setDepartmentToDelete', department: null })
        }
    },

    computed: {
        getDialogText() {
            const stage = this.stages[this.currStage]
            switch (stage) {
                case 'delete':
                    return 'Are you sure you wish you delete this department?'
                case 'reassign':
                    return 'Reassign existing employees to another department?'
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
  