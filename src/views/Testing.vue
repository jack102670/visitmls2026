<template>
  <div class="container mx-auto py-8">
    <!-- Render selected form options -->
    <div v-for="(form, index) in formOptions" :key="index">
      <h2 class="text-lg font-semibold mb-2">{{ form.name }}</h2>
      <!-- Your form fields -->
      <div class="mb-2">
        <select v-model="form.selectedForm" class="p-2 mb-4">
          <option value="">Select Form</option>
          <option value="form1">Form 1</option>
          <option value="form2">Form 2</option>
        </select>
      
        <!-- Form 1 -->
        <div v-if="form.selectedForm === 'form1'" class="bg-gray-200 p-4 my-4">
          <h2 class="text-lg font-semibold mb-2">Form 1</h2>
          <!-- Your form fields for Form 1 -->
          <input type="text" placeholder="Name" class="border p-2 mb-2" v-model="form.fields[0].value">
          <input type="email" placeholder="Email" class="border p-2 mb-2" v-model="form.fields[1].value">
          <!-- Add more fields as needed -->
        </div>
      
        <!-- Form 2 -->
        <div v-if="form.selectedForm === 'form2'" class="bg-gray-200 p-4 my-4">
          <h2 class="text-lg font-semibold mb-2">testkit </h2>
          <!-- Your form fields for Form 2 -->
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="requesterName"
                >Requester Name<span class="text-red-500">*</span></label
              >
              <input
              
                id="requesterName"
                type="text"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

         
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="username"
                >Phone Number<span class="text-red-500">*</span></label
              >
              <input
  
                id="number"
                type="number"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <!-- Add v-model to other inputs as needed -->
          </div>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <!-- Add v-model to other inputs as needed -->
          </div>
          <div class="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="username"
                >No. Stock In Box <span class="text-red-500">*</span></label
              >
              <input

                id="stockinbox"
                type="number"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="emailAddress"
                >No. Stock In (kit)<span class="text-red-500">*</span></label
              >
              <input
             
                id="stockinkit"
                type="number"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="emailAddress"
                >No. Of Kit Out<span class="text-red-500">*</span></label
              >
              <input
     
                id="kitout"
                type="number"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="emailAddress"
                >No. Of Balance Kit<span class="text-red-500">*</span></label
              >
              <input
       
                id="balacekit"
                type="number"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="emailAddress"
                >Remark<span class="text-red-500">*</span></label
              >
              <input
       
                id="balacekit"
                type="text"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <!-- Add v-model to other inputs as needed -->
          </div>
          <!-- Add more fields as needed -->
        </div>
      </div>
    </div>

    <!-- Add or remove form option -->
    <div class="flex justify-between mb-4">
      <button @click="addFormOption" class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Add</button>
      <button @click="removeFormOption" class="bg-red-500 text-white font-bold py-2 px-4 rounded">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicForms",
  
  data() {
    return {
      formOptions: [
        { id: 1, name: 'Form 1', selectedForm: '', fields: [{ value: '', placeholder: 'Field 1' }, { value: '', placeholder: 'Field 2' }] }
      ]
    };
  },
  
  methods: {
    addFormOption() {
      // Clone the last form and increment the id and name
      const lastForm = this.formOptions[this.formOptions.length - 1];
      const newForm = { id: lastForm.id + 1, name: `Form ${lastForm.id + 1}`, selectedForm: '', fields: [] };
      // Clone the fields of the last form
      lastForm.fields.forEach(field => {
        newForm.fields.push({ value: '', placeholder: field.placeholder });
      });
      // Insert the new form at the end
      this.formOptions.push(newForm);
    },
    removeFormOption() {
      // Ensure at least one form remains
      if (this.formOptions.length > 1) {
        // Remove the form at the specified index
        this.formOptions.pop();
      }
    }
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
