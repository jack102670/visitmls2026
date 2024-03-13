<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="mb-4">
      <select v-model="item.selectedOption" @change="onSelectChange(index)" class="border rounded px-3 py-2">
        <option v-for="option in options" :key="option.id" :value="option.id">{{ option.label }}</option>
      </select>
      <template v-if="item.selectedOption === 1">
        <h1>this is form 1</h1>
        <input 
          v-model="item.email"
          type="email"
          :placeholder="'Enter your email ' + (index + 1)" 
        /><br>
        <span>Gender</span><br>
        <input 
          type="radio" 
          :id="'male' + index"
          :value="'Male' + index" 
          v-model="item.gender"
        />
        <label :for="'male' + index">Male</label>
        <input 
          type="radio" 
          :id="'female' + index"
          :value="'Female' + index" 
          v-model="item.gender"
        />
        <label :for="'female' + index">Female</label><br>
        <input 
          class="submit" 
          type="submit" 
          value="Submit"
        >
        <button @click="duplicateItem(index)" class="ml-2 bg-green-500 text-white px-3 py-2 rounded">Duplicate</button>
        <button @click="removeItem(index)" v-if="index !== 0" class="ml-2 bg-red-500 text-white px-3 py-2 rounded">Remove</button>
   
 
      </template>
      <template v-else-if="item.selectedOption === 2">
        <h1>this is form 2</h1>
        <input 
          v-model="item.username"
          type="text"
          :placeholder="'Enter your username ' + (index + 1)" 
        /><br>
        <span>Password</span><br>
        <input 
          v-model="item.password"
          type="password"
          :placeholder="'Enter your password ' + (index + 1)" 
        /><br>
        <span>Confirm Password</span><br>
        <input 
          v-model="item.confirmPassword"
          type="password"
          :placeholder="'Confirm your password ' + (index + 1)" 
        /><br>
        <input 
          class="submit" 
          type="submit" 
          value="Submit"
        >
        <button @click="duplicateItem(index)" class="ml-2 bg-green-500 text-white px-3 py-2 rounded">Duplicate</button>
        <button @click="removeItem(index)" v-if="index !== 0" class="ml-2 bg-red-500 text-white px-3 py-2 rounded">Remove</button>
   
      </template>
      <!-- Add more conditions for other options as needed -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicForms",
  data() {
    return {
      options: [
        { id: 1, label: 'Form One' },
        { id: 2, label: 'Form Two' },
        // Add more options as needed
      ],
      items: [{ selectedOption: null, email: '', gender: '', username: '', password: '', confirmPassword: '' }],
    };
  },
  methods: {
    duplicateItem(index) {
      const newItem = JSON.parse(JSON.stringify(this.items[index])); // Deep copy the item
      this.items.splice(index + 1, 0, newItem);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    onSelectChange(index) {
      if (index === this.items.length - 1 && this.items[index].selectedOption) {
        this.addItem(index);
      }
    },
    addItem() {
      this.items.push({ selectedOption: null, email: '', gender: '' });
    },
  },
};
</script>
