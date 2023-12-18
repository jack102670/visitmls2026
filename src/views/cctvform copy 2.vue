<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <h2
            class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
          >
            CCTV Form
          </h2>

          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="username"
                  >Requester Name</label
                >
                <input
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >Department</label
                >
                <input
                  id="emailAddress"
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-gray-700 dark:text-gray-200" for="password"
                  >Incident Date</label
                >
                <input
                  id="incidentdate"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="password"
                  >Incident time</label
                >
                <input
                  id="incidenttime"
                  type="time"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                  >Incident Location</label
                >
                <input
                  id="passwordConfirmation"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                  >Incident Location</label
                >
                <input
                  id="passwordConfirmation"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                  >Witness</label
                >
                <input
                  id="passwordConfirmation"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                  >Details</label
                >
                <input
                  id="passwordConfirmation"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                  >appointment time</label
                >
                <input
                  id="passwordConfirmation"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "cctvfromViews",
};
</script>
