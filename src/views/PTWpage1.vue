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
          <h1 class="font-semibold text-3xl p-3 text-gray-700">PERMIT TO WORK </h1>
          <h2
            class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
          >
            Works Information
          </h2>
        </div>

        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username"
                >Requester Name</label
              >
              <input
                id="requestername"
                v-model="requestername"
                required
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
                >Department</label
              >
              <select
                id="Department"
                required
                v-model="department"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="Security">security</option>
                <option value="Safety">safety</option>
              </select>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="password"
                >Phone number</label
              >
              <input
                id="Phonenumber"
                required
                v-model="Phonenumber"
                type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="password"
                >Contractor / vendor name</label
              >
              <input
                id="Contractorvendorname"
                required
                type="text"
                v-model="Contractorvendorname"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="password"
                >Company name</label
              >
              <input
                id="Companyname"
                type="text"
                required
                v-model="Companyname"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="Location"
                >Location</label
              >
              <input
                id="Location"
                type="text"
                required
                v-model="Location"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="datefrom"
                >Date From</label
              >
              <input
                id="datefrom"
                v-model="datefrom"
                required
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="dateto"
                >date to</label
              >
              <input
                id="dateto"
                type="date"
                v-model="dateto"
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div
            class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
          >
            <div class="w-full">
              <label
                for="Detailsincident"
                class="text-gray-700 dark:text-gray-200"
                >Description</label
              >
              <textarea
                v-model="Description"
                id="description"
                class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                rows="5"
              ></textarea>
            </div>
          </div>

          <!-- <div class="flex justify-end mt-6">
              <button @click="nextPage"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Next
              </button>
            </div> -->
        </form>
      </section>
    </div>

    <!-- add more fields as needed -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Common form fields
      requestername: "",
      department: "",
      Phonenumber: "",
      Contractorvendorname: "",
      Companyname: "",
      Location: "",
      datefrom: "",
      dateto: "",
      Description: "",
    };
  },
  computed: {
    formData() {
      // Map all form fields
      return {
        requestername: this.requestername,
        department: this.department,
        Phonenumber: this.Phonenumber,
        Contractorvendorname: this.Contractorvendorname,
        Companyname: this.Companyname,
        Location: this.Location,
        datefrom: this.datefrom,
        dateto: this.dateto,
        Description: this.Description,
      };
    },
  },
  methods: {
    nextPage() {
      this.$emit("next-page", this.formData);
    },
  },
};
</script>
