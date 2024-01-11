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
            Hot Work Permit
          </h2>
        </div>

        <form>
          <div
            class=" grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-auto cursor-pointer flex w-full"
          >
            <div class="w-full">
              <label
                for="Location"
                class="font-semibold text-gray-700 dark:text-gray-200"
                >Location</label
              >
              <input
                v-model="Location"
                id="Location"
                class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                rows="2"
                required
              >
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Worksdescription"
                >Works Description</label
              >
              <textarea
                id="Worksdescription"
                v-model="Worksdescription"
                type="text"
                rows="1"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <!-- <div>
              <label class="font-semibold text-gray-700 dark:text-gray-200" for="location"
                >Location</label
              >
              <select
                v-model="location"
                id="location"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div> -->
          </div>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="todate"
                >Datetime Start</label
              >
              <input
                id="datetimestart"
                v-model="datetimestart"
                type="datetime-local"
                class="font-semibold block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Datetimecomplete"
                >Datetime Complete</label
              >
              <input
                id="Datetimecomplete"
                v-model="Datetimecomplete"
                type="datetime-local"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Authority"
                >Authority
              </label>
              <div class="grid grid-cols-2">
                <div>
                  <label for="A" class="text-gray-700 dark:text-gray-200">
                    <input
                      type="checkbox"
                      value="A"
                      v-model="selectedAuthorities"
                    />
                    A
                  </label>
                </div>

                <div>
                  <label for="jack" class="text-gray-700 dark:text-gray-200">
                    <input
                      id="jack"
                      type="checkbox"
                      value="B"
                      v-model="selectedAuthorities"
                    />
                    B
                  </label>
                </div>

                <div>
                  <label for="john" class="text-gray-700 dark:text-gray-200">
                    <input
                      id="john"
                      type="checkbox"
                      value="C"
                      v-model="selectedAuthorities"
                    />
                    C
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="radiohotworkby"
                >Hotwork By 
              </label>
              <div class="grid grid-cols-3">
                <div>
                  <label for="A" class="text-gray-700 dark:text-gray-200">
                    <input
                      type="radio"
                      value="A"
                      v-model="radiohotworkby"
                    />
                    A
                  </label>
                </div>

                <div>
                  <label for="b" class="text-gray-700 dark:text-gray-200">
                    <input
                      id="b"
                      type="radio"
                      value="B"
                      v-model="radiohotworkby"
                    />
                    B
                  </label>
                </div>

                <div>
                  <label for="c" class="text-gray-700 dark:text-gray-200">
                    <input
                      id="c"
                      type="radio"
                      value="C"
                      v-model="radiohotworkby"
                    />
                    C
                  </label>
                </div>
              </div>
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
      // Data properties for each form input
      Location: "",
      Worksdescription: "",
      datetimestart: "",
      Datetimecomplete: "",
      selectedAuthorities: [],
      radiohotworkby: null,
    };
  },
  methods: {
    nextPage() {
      this.$emit("next-page", this.formData); // Pass formData when emitting "Next" event
    },
    goBack() {
      this.$emit("go-back"); // Emit an event when the "Back" button is clicked
    },
  },
  computed: {
    formData() {
      // Combines all form data into a single object
      return {
        Location: this.Location,
        Worksdescription: this.Worksdescription,
        Datetimestart: this.datetimestart,
        Datetimecomplete: this.Datetimecomplete,
        SelectedAuthorities: this.selectedAuthorities,
        RadioHotworkBy: this.radiohotworkby,
      };
    },
  },
  watch: {
    formData: {
      handler(newFormData) {
        // Emit an event to the parent with the updated form data
        this.$emit("submit-form", newFormData);
      },
      deep: true,
    },
  },
};
</script>
