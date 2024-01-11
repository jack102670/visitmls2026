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
            Work At Height Permit
          </h2>
        </div>

        <form>
          <div
            class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-auto cursor-pointer flex w-full"
          >
            

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Contractorname"
                >Contractor Name<span class="text-red-500">*</span></label
              >
              <input
                v-model="Contractorname"
                id="Contractorname"
                type="text"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Contractorcompany"
                >Contractor Company<span class="text-red-500">*</span></label
              >
              <input
                v-model="Contractorcompany"
                id="Contractorcompany"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Startdate"
                >Start Date<span class="text-red-500">*</span></label
              >
              <input
                v-model="Startdate"
                id="Startdate"
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Completedate"
                >Complete Date<span class="text-red-500">*</span></label
              >
              <input
                v-model="Completedate"
                id="Completedate"
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Starttime"
                >Start Time<span class="text-red-500">*</span></label
              >
              <input
                v-model="Starttime"
                id="Starttime"
                type="time"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Completetime"
                >Complete Time<span class="text-red-500">*</span></label
              >
              <input
                v-model="Completetime"
                id="Completetime"
                type="time"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Location"
                >Location<span class="text-red-500">*</span></label
              >
              <select
                v-model="Location"
                id="Location"
                type="text"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="Security">Security</option>
                <option value="Safety">Safety</option>
                <option value="Maintenance">Maintenance</option>
                <option value="ICT">ICT</option>
              </select>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Descofwork"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Description Of Work</label
                >
                <textarea
                  v-model="Descofwork"
                  id="Descofwork"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="3"
                  
                ></textarea>
              </div>
            </div>
            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Authority"
                >Hazard Identification
              </label>
              <div class="grid grid-cols-2">
                <div>
                  <label for="a2" class="text-gray-700 dark:text-gray-200">
                    <input
                    id="a2"
                      type="checkbox"
                      value="A"
                      v-model="selectedAuthorities"
                    />
                    A
                  </label>
                </div>

                <div>
                  <label for="b2" class="text-gray-700 dark:text-gray-200">
                    <input
                      id="b2"
                      type="checkbox"
                      value="B"
                      v-model="selectedAuthorities"
                    />
                    B
                  </label>
                </div>

                <div>
                  <label for="c2" class="text-gray-700 dark:text-gray-200">
                    <input
                      id="c2"
                      type="checkbox"
                      value="C"
                      v-model="selectedAuthorities"
                    />
                    C
                  </label>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="username"
                  >Upload Files (Person Involved)</label
                >

                <!-- component -->

                <div>
                  <Div class="pt-3">
                    <file-pond
                      class=""
                      name="test"
                      ref="pond1"
                      label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                      allow-multiple="true"
                      accepted-file-types="image/jpeg, image/png"
                      v-bind:files="myFiles"
                      @input="updateFiles"
                    />
                  </Div>
                  <!-- component -->
                </div>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <div>
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="Authority"
                >Authority Check
              </label>
              <div class="grid grid-cols-2">
                <div>
                  <label for="a1" class="text-gray-700 dark:text-gray-200">
                    <input
                    id="a1"
                      type="checkbox"
                      value="A"
                      v-model="selectedAuthorities"
                    />
                    A
                  </label>
                </div>

                <div>
                  <label for="b1" class="text-gray-700 dark:text-gray-200">
                    <input
                      id="b1"
                      type="checkbox"
                      value="B"
                      v-model="selectedAuthorities"
                    />
                    B
                  </label>
                </div>

                <div>
                  <label for="c1" class="text-gray-700 dark:text-gray-200">
                    <input
                      id="c1"
                      type="checkbox"
                      value="C"
                      v-model="selectedAuthorities"
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
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);
export default {
  components: { FilePond },
  data() {
    return {
      Contractorname: "",
      Contractorcompany: "",
      Startdate: "",
      Completedate: "",
      Starttime: "",
      Completetime: "",
      Location: "",
      Descofwork: "",
      selectedAuthorities: [],
      myFiles: [], // Assuming this for filepond
    };
  },
  computed: {
    formData() {
      return {
        Contractorname: this.Contractorname,
        Contractorcompany: this.Contractorcompany,
        Startdate: this.Startdate,
        Completedate: this.Completedate,
        Starttime: this.Starttime,
        Completetime: this.Completetime,
        Location: this.Location,
        Descofwork: this.Descofwork,
        selectedAuthorities: this.selectedAuthorities,
        Files: this.myFiles, // Assuming filepond data
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
    nextPage() {
      this.$emit("next-page"); // Pass formData when emitting "Next" event
    },
    goBack() {
      this.$emit("go-back"); // Emit an event when the "Next" button is clicked
    },
  },
};
</script>
