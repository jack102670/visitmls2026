<template>
  <div>
    <h1>Welcome to Testing.vue!</h1>
    <p>This is a basic Vue.js 3 component.</p>
    <select v-model="selectedEmail">
      <option disabled value="">Please select one</option>
      <option v-for="user in users" :key="user.userName" :value="user.email">
        {{ user.userName }}
      </option>
    </select>
  </div>
</template>



<script>
export default {
  name: 'DataTableExample',
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch('http://172.28.28.91:89/api/Security/getusersAD')
      .then(response => response.json())
      
      .then(data => {
        this.users = data;
        console.log(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  },
}
</script>