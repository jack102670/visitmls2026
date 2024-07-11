<template>
  <div>
    <h1>Welcome to Testing.vue!</h1>
    <p>This is a basic Vue.js 3 component.</p>
    <table id="myTable" class="display">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Doe</td>
          <td>jane@example.com</td>
        </tr>
        <!-- Add more rows as needed -->
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from 'jquery';


export default {
  name: 'DataTableExample',
  mounted() {
    this.initializeDataTable();
  },
  methods: {
    initializeDataTable() {
      $('#example').DataTable({
        ajax: 'path/to/your/data/source', // Use your actual data source URL here
        columns: [
          { data: 'id' },
          { data: 'name' },
          { data: 'email' }
        ],
        stateSave: true,
        scrollY: 200,
        scrollCollapse: true,
        paging: true,
      });
    }
  }
}
</script>
<style scoped>
h1 {
  color: blue;
}
p {
  font-size: 18px;
}
</style>