<template>
  <header class="app-header">
    <h1>Manager</h1>
    <div class="company-picker">
      <label for="companies">Company </label>
      <select @input="onSelectCompany" name="companies" placeholder="Companies">
        <option v-for="company in companies" :key="company._id" :value="company._id">{{ company.name }}</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  emits: ['selectCompany'],
  methods: {
    onSelectCompany(ev) {
      const companyId = ev.target.value
      this.$emit('selectCompany', companyId)
    }
  },
  computed: {
    companies() {
      return this.$store.getters.companies
    }
  }
}
</script>
