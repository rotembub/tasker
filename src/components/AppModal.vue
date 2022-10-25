<template>
    <section class="app-modal">
        <h1>{{ getText }}</h1>
        <button @click="handleAnswer(true)">Yes</button>
        <button @click="handleAnswer(false)">No</button>
    </section>
</template>
  
<script>
export default {
    // props: {
    //     actions: String
    // },
    name: 'app-modal',
    data() {
        return {
            currStage: 0,
            stages: ['reassign', 'delete']
        }
    },
    mounted() {
        if (!this.departmentToDelete.length) this.currStage = 1
    },
    methods: {
        handleAnswer(answer) {
            const { currStage, stages } = this
            if (stages[currStage] === 'delete') {
                if (!answer) clearDepartmentToDelete()
                this.$store.dispatch({ type: 'delete', department: null })
            }
            // if (stages[currStage] === 'delete')
        },
        clearDepartmentToDelete() {
            this.$store.commit({ type: 'setDepartmentToDelete', department: null })
        }
    },

    // this.$store.commit({ type: 'setDepartmentToDelete', department })
    computed: {
        getText() {
            const stage = this.stages[this.currStage]
            switch (stage) {
                case 'delete':
                    return 'Are you sure you wish yo delete this department?'
                case 'reassign':
                    return 'Do you wish to reassign the department\'s employees to another department?'
            }
        },
        departmentToDelete() {
            return this.$store.getters.departmentToDelete
        }
    }
}
</script>
  