<template>
  <div class="container mx-auto">
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Age</th>
          <th class="px-4 py-2">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in people" :key="index">
          <td class="border px-4 py-2">{{ person.name }}</td>
          <td class="border px-4 py-2">{{ person.age }}</td>
          <td class="border px-4 py-2">{{ person.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        { name: "Fatin Nursyafawani", age: 24, email: "fatinmdrashid@gmail.com" },
        { name: "Nur Aisyah Huda", age: 25, email: "aisyahuda@gmail.com" },
      ]
    };
  }
};
</script>

<style>

</style>
