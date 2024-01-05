<!-- FormPage1.vue -->
<template>
  <div class="container mx-auto">
    <div
      class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8"
    >
      <section
        class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
      >
        <div class=" ">
          <h2
            class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
          >
            Job Hazard Analysis
          </h2>
        </div>

        <form>
          <div
            class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
          >
            <div class="w-full">
              <label
                for="Jobdescription"
                class="text-gray-700 dark:text-gray-200"
                >Job Description</label
              >
              <input
                v-model="Jobdescription"
                id="Jobdescription"
                class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
            
          </div>
          <div>
            <div
              v-for="(task, index) in tasks"
              :key="index"
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3"
            >
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  :for="'task-' + index"
                  >Sequence of Tasks</label
                >
                <input
                  v-model="task.sequence"
                  :id="'task-' + index"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  :for="'hazard-' + index"
                  >Potential Hazards</label
                >
                <input
                  v-model="task.hazard"
                  :id="'hazard-' + index"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  :for="'measure-' + index"
                  >Preventive Measures</label
                >
                <input
                  v-model="task.measure"
                  :id="'measure-' + index"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="flex justify-between mt-4">
              <button
                @click.prevent="addTask"
                class="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add</button
              ><button
                @click.prevent="removeTask(index)"
                v-if="tasks.length > 1"
                class="bg-red-500 text-white px-4 py-2 rounded justify-end ml-0"
              >
                Remove
              </button>
            </div>
          </div>
        </form>
        <div class="flex justify-end mt-6">
          <!-- <button @click="nextPage"
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Next
            </button> -->
        </div>
      </section>
    </div>

    <!-- add more fields as needed -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [{ sequence: "", hazard: "", measure: "" }],
      Jobdescription: "",
    
    };
  },
  computed: {
    formData() {
      return {
        Jobdescription: this.Jobdescription,
        
        tasks: this.tasks,
      };
    },
  },
  watch: {
    formData: {
      handler(newFormData) {
        // Emit an event to the parent with the updated form data
        this.$emit("form-updated", newFormData);
      },
      deep: true,
    },
  },
  methods: {
    addTask() {
      this.tasks.push({ sequence: "", hazard: "", measure: "" });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    nextPage() {
      // Implement logic for navigating to the next page
      this.$emit("next-page");
    },
    goBack() {
      // Implement logic for going back to the previous page
      this.$emit("go-back");
    },
  },
};
</script>
