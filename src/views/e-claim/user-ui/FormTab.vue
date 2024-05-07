<template>
 
    
        <div
          class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
        >
          <div class="sm:flex justify-center flex-col-1">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              @click="activeTab = index"
              :class="{
                'bg-gray-300': activeTab === index,
                'hover:bg-gray-200': activeTab !== index,
              }"
              class="px-4 py-2 mr-2 rounded-md focus:outline-none"
            >
              {{ tab.title }}
            </button>
          </div>

          <div
            class="relative overflow-hidden mt-5 max-w-4xl p-6 mx-auto bg-white border-2 border-e-gray-200 rounded-md dark:bg-gray-800"
          >
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              v-show="activeTab === index"
            >
              <h2
                class="text-2xl font-bold text-gray-700 capitalize dark:text-white"
              >
                {{ tab.title }}
              </h2>
              <form @submit.prevent="submitForm(tab)">
                <div
                  v-for="(field, fieldIndex) in tab.fields"
                  :key="fieldIndex"
                  :class="[
                    'grid',
                    'grid-cols-1',
                    tab.gridLayout || 'sm:grid-cols-2',
                    field.gridClass,
                  ]"
                >
                  <label
                    :for="field.id"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >{{ field.label }}</label
                  >
                  <input
                    v-model="field.value"
                    :id="field.id"
                    :type="field.type"
                    :placeholder="field.placeholder"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      
   
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "Local Travelling",
          gridLayout: "grid-cols-1",
          fields: [
            {
              id: "name",
              label: "Name",
              type: "text",
              placeholder: "Enter your name",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "email",
              label: "Email",
              type: "email",
              placeholder: "Enter your email",
              value: "",
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Overseas Travelling with Accommodation",
          gridLayout: "grid-cols-3", //
          fields: [
            {
              id: "age",
              label: "Age",
              type: "number",
              placeholder: "Enter your age",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "city",
              label: "City",
              type: "text",
              placeholder: "Enter your city",
              value: "",
              gridClass: "sm:col-span-2",
            },
          ],
        },
        {
          title: "Entertainment",
          fields: [
            {
              id: "address",
              label: "Address",
              type: "text",
              placeholder: "Enter your address",
              value: "",
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Staff Refreshment",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "age",
              label: "Age",
              type: "number",
              placeholder: "Enter your age",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "city",
              label: "City",
              type: "text",
              placeholder: "Enter your city",
              value: "",
              gridClass: "sm:col-span-2",
            },
          ],
        },
        {
          title: "Handphone Reimbursement",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "age",
              label: "Age",
              type: "number",
              placeholder: "Enter your age",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "city",
              label: "City",
              type: "text",
              placeholder: "Enter your city",
              value: "",
              gridClass: "sm:col-span-2",
            },
          ],
        },
        {
          title: "Medical Leave Reimbursement",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "age",
              label: "Age",
              type: "number",
              placeholder: "Enter your age",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "city",
              label: "City",
              type: "text",
              placeholder: "Enter your city",
              value: "",
              gridClass: "sm:col-span-2",
            },
          ],
        },
      ],
    };
  },
  methods: {
    submitForm(tab) {
      console.log(tab.fields); // You can perform your form submission logic here
    },
  },
};
</script>

<style scoped>
</style>
