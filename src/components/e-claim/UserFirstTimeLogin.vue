<template>
  <main class="flex-1 overflow-x-hidden overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 relative dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div
          class="relative overflow-hidden mt-1 max-w-4xl p-6 bg-white border-2 border-e-gray-200 rounded-md dark:bg-gray-800">
          <h2 v-if="status === '0'" class="text-3xl font-bold text-gray-700 capitalize dark:text-white">
            Activate Your Profile
          </h2>
          <h2 v-else class="text-3xl font-bold text-gray-700 capitalize dark:text-white">
            Profile Page
          </h2>

          <section>
            <h1 v-if="status === '0'" class="mb-4 text-gray-500 text-md">
              Note: Please fill in all the mandatory fields to activate your
              profile.
            </h1>
            <hr class="" />
          </section>

          <form @submit.prevent="verifyAndSaveData()">
            <!-- <div class="mt-4">
              <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200">Profile Picture</label>
              <div class="flex items-center mt-2">
                <img :src="profile_picture || defaultProfilePicture" alt="Profile Picture"
                  class="w-24 h-24 rounded-full border-2 border-gray-200" />
                <div class="ml-4">
                  <input type="file" @change="onProfilePictureChange"
                    class="block w-full text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  <button disabled @click="deleteProfilePicture" type="button"
                    class="mt-2 text-red-500 transition-colors duration-200 dark:hover:text-red-300 dark:text-gray-300 hover:text-red-300 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div> -->

            <!-- Image Crop Modal -->
            <div v-if="showCropper" class="fixed z-50 inset-0 overflow-y-auto">
              <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>

                <div
                  class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div
                        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6H20M4 10H20M4 14H20M4 18H20"></path>
                        </svg>
                      </div>
                      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                          Crop Image
                        </h3>
                        <div class="mt-2">
                          <img ref="image" :src="tempImageUrl" class="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button @click="cropImage" type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                      Proceed
                    </button>
                    <button @click="cancelCrop" type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="name">Full Name<span
                    class="text-red-500">*</span></label>
                <input v-model="user.name" id="name" type="text" required
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="branch">Branch</label>
                <input v-model="user.branch" id="branch" type="text" disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="department">Department</label>
                <input v-model="user.department" id="department" type="text" disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="emp_id">Staff ID</label>
                <input v-model="user.emp_id" id="emp_id" type="text" disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="email_address">Work Email<span
                    class="text-red-500">*</span></label>
                <input v-model="user.email_address" id="email_address" type="email" required
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <!-- <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="phone_number"
                  >Phone Number</label
                >
                <input
                  v-model="user.phone_number"
                  id="phone_number"
                  type="text"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div> -->
              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="phone_number">Phone Number<span
                    class="text-red-500">*</span></label>
                <input v-model="user.phone_number" id="phone_number" required type="text"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="bank_name">Bank Name<span
                    class="text-red-500">*</span></label>
                <select v-model="user.bank_name" id="bank_name"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required>
                  <option v-for="option in bankOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="bank_number">Bank Account
                  Number<span class="text-red-500">*</span></label>
                <input v-model="user.bank_number" id="bank_number" type="text" required
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <!-- <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="phone_number"
                  >Phone Number<span class="text-red-500">*</span></label
                >
                <input
                  v-model="user.phone_number"
                  id="phone_number"
                  required
                  type="number"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div> -->
              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="ic_number">IC Number<span
                    class="text-red-500">*</span></label>
                <input v-model="user.ic_number" id="ic_number" required type="text"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="limit_outpatient">
                  Limit Amount (Handphone)
                </label>
                <input v-model="user.limit_amount" id="limit_outpatient" type="text" disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="limit_outpatient">
                  Limit Amount (Outpatient)
                </label>
                <input v-model="user.limit_outpatient" id="limit_outpatient" type="text" disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="limit_medical_dental">
                  Limit Amount (Medical-Check Up/Dental)
                </label>
                <input v-model="user.limit_medical_dental" id="limit_medical_dental" type="text" disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
            </div>




            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="reporting_to">
                  Reporting Manager (Employee ID)
                </label>
                <input v-model="user.reporting_to" id="reporting_to" type="text" disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="reporting_to_dept">
                  Reporting Manager(Dept.)
                </label>
                <input v-model="user.reporting_to_dept" id="reporting_to_dept" type="text" disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>


            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200" for="home_address">
                  Home Address <span class="text-red-500">*</span>
                </label>
                <textarea required v-model="user.home_address" id="home_address" type="text"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  row="4"></textarea>
              </div>
            </div>

            <div class="mt-6 flex justify-end">
              <div class="flex flex-row-reverse">
                <button v-if="loadingButton" type="button"
                  class="px-7 py-3 leading-5 text-white transition-colors transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 hover:cursor-not-allowed duration-[500ms,800ms]"
                  disabled>
                  <div class="flex items-center justify-center">
                    <div
                      class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4">
                    </div>
                    <div v-if="status === 0" class="ml-2">Verify</div>
                    <div v-else class="ml-2">Update</div>
                  </div>
                </button>

                <button v-else type="submit"
                  class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  <h1 v-if="status === 0">Verify</h1>
                  <h1 v-else>Update</h1>
                </button>
                <!-- <button
                @click="uploadimg()"
                type="button"
                class="mr-4 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Save Picture
              </button> -->
              </div>
            </div>

            <!-- OTP Modal -->
            <div v-if="showOtpModal" class="fixed z-10 inset-0 overflow-y-auto">
              <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div
                  class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <h3 class="text-xl leading-6 font-medium text-gray-900">
                      Enter OTP Code
                    </h3>
                    <p class="mt-4 mb-4 text-md text-gray-500">
                      We’ve sent a code to
                      <strong>{{ user.email_address }}</strong>.
                    </p>
                    <div class="mt-2">
                      <input type="text" v-model="otp"
                        class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        placeholder="Enter OTP" />
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Didn't get a code?
                      <span v-if="timer > 0">
                        Wait
                        <span class="underline">{{ timer }} seconds</span> to
                        resend.
                      </span>
                      <a v-else href="#" @click.prevent="requestNewOtp" class="mb-8 text-blue-500 underline">
                        Click here to resend.
                      </a>
                    </p>
                  </div>
                  <div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                    <button v-if="loadingverifyOtpButton" type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm hover:cursor-not-allowed duration-[500ms,800ms]"
                      disabled>
                      <div class="flex items-center justify-center">
                        <div
                          class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4">
                        </div>
                        <div class="ml-2">Verify</div>
                      </div>
                    </button>
                    <button v-else type="button" @click="verifyOtp"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </div>
             <!-- PROFILE UPDATE Request Modal -->
             <div v-if="showCompleteProfileModal" class="fixed z-10 inset-0 overflow-y-auto">
              <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div
                  class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <button @click="showCompleteProfileModal = false" type="button"
                    class="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none">
                    <span class="sr-only">Close</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div>
                    
               
                    <h3 class="text-xl leading-6 font-medium text-gray-900">
                      Please complete the User Profile
                    </h3>
                    <p class="mt-4 mb-8 text-md text-gray-500">
                      Make sure to fill in all the required details before you get to activate the account.
                      <strong>{{ user.email_address }}</strong>.
                    </p>
                  </div>
                  <div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                    <!-- <button v-if="loadingsendOtpButton" type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm hover:cursor-not-allowed duration-[500ms,800ms]"
                      disabled>
                      <div class="flex items-center justify-center">
                        <div
                          class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4">
                        </div>
                        <div class="ml-2">Request OTP</div>
                      </div>
                    </button>
                    <button v-else type="button" @click="sendOtp"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                      Request OTP
                    </button> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- OTP Request Modal -->
            <div v-if="showRequestOtpModal" class="fixed z-10 inset-0 overflow-y-auto">
              <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div
                  class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <button @click="closeRequestOtpModal" type="button"
                    class="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none">
                    <span class="sr-only">Close</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div>
                    <h3 v-if="status === 0" class="text-xl leading-6 font-medium text-gray-900">
                      Request OTP Code for Account Activation
                    </h3>
                    <h3 v-else class="text-xl leading-6 font-medium text-gray-900">
                      Request OTP Code for Email Verification
                    </h3>
                    <p class="mt-4 mb-8 text-md text-gray-500">
                      To complete your profile activation, please request
                      One-Time Password (OTP) and it will be sent to
                      <strong>{{ user.email_address }}</strong>.
                    </p>
                  </div>
                  <div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                    <button v-if="loadingsendOtpButton" type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm hover:cursor-not-allowed duration-[500ms,800ms]"
                      disabled>
                      <div class="flex items-center justify-center">
                        <div
                          class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4">
                        </div>
                        <div class="ml-2">Request OTP</div>
                      </div>
                    </button>
                    <button v-else type="button" @click="sendOtp"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                      Request OTP
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="none" class="fixed top-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
              Activation successful! Redirecting...
            </div>
            <transition name="fade">
              <div v-if="showSuccessNotification"
                class="fixed top-5 right-5 flex max-w-sm bg-white shadow-lg rounded-lg overflow-hidden z-40">
                <div class="w-2 bg-gray-800"></div>
                <div class="flex items-center px-2 py-3">
                  <!-- <img class="w-12 h-12 object-cover rounded-full" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"> -->
                  <div class="mx-3">
                    <!-- <h2 class="text-xl font-semibold text-gray-800">Notification</h2> -->
                    <p class="text-gray-600">{{ message }}</p>
                  </div>
                </div>
              </div>
            </transition>
          </form>
          <!-- Loading Animation -->
          <div class="w-screen h-screen fixed z-50 flex justify-center items-center top-0 left-0 backdrop-blur-md"
            v-if="loading">
            <div class="absolute w-screen h-screen bg-gray-900 opacity-30"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-16 h-16 z-50">
              <circle transform="rotate(0)" transform-origin="center" fill="none" stroke="blue" stroke-width="10"
                stroke-linecap="round" stroke-dasharray="230 1000" stroke-dashoffset="0" cx="100" cy="100" r="70">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2"
                  repeatCount="indefinite"></animateTransform>
              </circle>
            </svg>
            <h1 class="text-gray-50 font-semibold z-50 ml-2 text-lg">
              {{ loadingText }} Data...
            </h1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { bankOptions } from '@/javascript/eClaimOptions.js';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import axios from 'axios';
import { store } from '@/views/store.js';

export default {
  data() {
    return {
      user: {
        name: '',
        branch: '',
        department: '',
        emp_id: '',
        reporting_to: '',
        reporting_to_dept: '',
        limit_outpatient: '',
        limit_medical_dental: '',
        limit_amount: '',
        email_address: '',
        phone_number: '',
        bank_name: '',
        bank_number: '',
        ic_number: '',
        home_address: '',
        profile_picture: null,
      },
      loadingverifyOtpButton: false,
      loadingsendOtpButton: false,
      loadingButton: false,
      loading: false,
      loadingText: '',
      profile_picture: null,
      bankOptions: bankOptions,
      tempImageUrl: '',
      cropper: null,
      showCropper: false,
      userDetails: '',
      defaultProfilePicture: require('@/assets/images/profile.png'),
      showRequestOtpModal: false,
      showCompleteProfileModal: false,
      showOtpModal: false,
      showSuccessNotification: false,
      message: '',
      none: false,
      otp: '',
      timer: 0,
      timerInterval: null,
      status: '',
      tempEmail: '',
    };
  },

  created() {
    this.userDetails = store.getSession().userDetails;
 //   console.log(this.userDetails);
    this.fetchHrData();
    this.addEventListeners();
  },

  mounted() {
    // this.checkUserStatus2()
    //   .then((status) => {
    //     if (status === 2) {
    //       // Redirect to the last page if user status is 2
    //       alert("You don't have a user profile yet. Please contact the HR administrator.");
    //       this.$router.push('/homepage'); // Replace 'lastPageRouteName' with the actual route name
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error checking user status:', error);
    //   });

    this.checkUserStatus();

    let openOrNot = localStorage.getItem('openOrNot');
    const element = document.querySelector('main');
    if (element && openOrNot == 'false') {
      element.classList.add('become-big');
    } else if (element && openOrNot == 'true') {
      element.classList.remove('become-big');
    }
  },

  methods: {
    checkUserStatus2() {
      return new Promise((resolve, reject) => {
        const session = store.getSession();
        if (!session || !session.userDetails || !session.userDetails.userId) {
          alert("User session not found. Please log in again.");
          return reject(new Error("User session not found."));
        }
        const username_id = session.userDetails.userId;
       fetch(` http://172.28.28.116:6239/api/User/GetEmployeeById/${username_id}`)
        //fetch(` http://172.28.28.116:6239/api/User/GetEmployeeById/${username_id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            if (data.result && data.result.length > 0) {
              const userStatus = data.result[0];
         //     console.log('User status:', userStatus);
              if (userStatus.branch === "" &&  userStatus.department === "" && userStatus.emp_id === "") {
                resolve(2); // Incomplete profile
              } else {
                resolve(1); // Completed profile
              }
            } else {
              resolve(0); // No user profile found
            }
          })
          .catch((error) => {
            console.error('Error fetching user status:', error);
            alert("There was an error fetching your user status. Please try again later.");
            reject(error);
          });
      });
    },
    async updateEmployeeData() {
      const employeeData = {
        emp_id: this.user.emp_id,
        name: this.user.name,
        bank_name: this.user.bank_name,
        bank_number: String(this.user.bank_number),
        email_address: this.user.email_address,
        home_address: this.user.home_address,
        spouse: this.user.spouse,
        phone_number: String(this.user.phone_number),
        ic_number: String(this.user.ic_number),
        limit_medicaldental: this.user.limit_medical_dental,
        limit_outpatient: this.user.limit_outpatient,
      };

   //   console.log('Employee Data this:', employeeData);
      return axios
        .put(' http://172.28.28.116:6239/api/User/UpdateEmployee', employeeData)
        .then((response) => {
      //    console.log('Response: this method', response);
          if (response.data.status_code === '200') {
        //    console.log('Successfully Updated:', response.data.message);

            this.message = 'Successfully Updated';
            this.showSuccessNotification = true;
            setTimeout(() => {
              this.showSuccessNotification = false;
              window.location.reload();
            }, 2000);
            window.removeEventListener(
              'beforeunload',
              this.beforeUnloadHandler
            );
            // Additional logic here for successful update
          } else if (response.data.status_code === '400') {
            // console.log("Successfully Updated:", response.data.message);

            alert(
              response.data.result || 'Failed to update. Please try again.'
            );
            // Additional logic here for successful update
          } else {
            console.error('Backend error:', response.data.message);

            alert(
              response.data.message || 'Failed to update. Please try again.'
            );
            // Additional error handling logic here
          }
          this.loadingButton = false;
        })
        .catch((error) => {
          console.error('Error updating employee data man:', error);
          this.loadingButton = false;
          alert('An error occurred while updating employee data.');
          // Additional error handling logic here
        });
    },

    fetchHrData() {
      const username_id = store.getSession().userDetails.userId;
      this.loadingText = 'Fetching';
      this.loading = true;
      axios
        //.get(` http://172.28.28.116:6239/api/User/GetEmployeeById/${username_id}`)
        .get(` http://172.28.28.116:6239/api/User/GetEmployeeById/${username_id}`)
        .then((response) => {
          const data = response.data.result;
    //      console.log('HR data:', data);
          if (data && data.length > 0) {
            const user = data[0];
            this.user.branch = user.branch;
            this.user.department = user.department;
            this.user.emp_id = user.emp_id;
            this.user.reporting_to = user.reporting_to;
            this.user.reporting_to_dept = user.reporting_to_dept;
            this.profile_picture = user.profile_picture;
            this.user.name = user.name;
            this.user.branch = user.branch;
            this.user.email_address = user.email_address;
            this.user.phone_number = user.phone_number;
            this.user.bank_name = user.bank_name;
            this.user.bank_number = user.bank_number;
            this.user.ic_number = user.ic_number;
            this.user.limit_outpatient = user.limit_outpatient;
            this.user.limit_amount = user.limit_amount;
            this.user.limit_medical_dental = user.limit_medicaldental;
            this.user.home_address = user.home_address;
            this.status = user.account_status;
            this.tempEmail = user.email_address;

          }
      //    console.log('HR data:', this.tempEmail);
          this.loading = false;
        })
        .catch((error) => {
          console.error('Error fetching HR data:', error);
        });
    },

    async uploadimg() {
   //   console.log('Profile picture value:', this.profile_picture); // Debugging line
      if (!this.profile_picture) {
        // alert("Please select a profile picture.");
        return;
      }

      const formData = new FormData();
      formData.append(
        'profile_picture',
        this.dataURLtoBlob(this.profile_picture)
      );
      formData.append('emp_id', this.user.emp_id);

      axios
        .put(' http://172.28.28.116:6239/api/User/UpdateImage', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          this.loadingButton = false;
      //    console.log('File uploaded successfully:', response.data);
          this.message = 'Profile picture uploaded successfully.';
          this.showSuccessNotification = true;
          setTimeout(() => (this.showSuccessNotification = false), 3000); // Auto-hide after 3 seconds
        })
        .catch((error) => {
          this.loadingButton = false;
          if (error.response) {
            console.error('Error status:', error.response.status);
            console.error('Error data:', error.response.data);
          } else if (error.request) {
            console.error('No response received:', error.request);
          } else {
            console.error('Error', error.message);
          }
          console.error('Error config:', error.config);
        });
    },
    dataURLtoBlob(dataurl) {
      const arr = dataurl.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },

    onProfilePictureChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.tempImageUrl = e.target.result;
          this.showCropper = true;
          this.$nextTick(() => {
            const image = this.$refs.image;
            this.cropper = new Cropper(image, {
              aspectRatio: 1,
              viewMode: 1,
              autoCropArea: 1,
            });
          });
        };
        reader.readAsDataURL(file);
      }
    },
    cropImage() {
      this.profile_picture = this.cropper.getCroppedCanvas().toDataURL();

      this.showCropper = false;
      this.cropper.destroy();
    },
    cancelCrop() {
      this.showCropper = false;
      this.cropper.destroy();
    },

    deleteProfilePicture() {
      this.profile_picture = null;
    },

    checkUserStatus() {
      const username_id = store.getSession().userDetails.userId;
      axios
        .get(` http://172.28.28.116:6239/api/User/GetEmployeeById/${username_id}`)
        .then((response) => {
          // Assuming the API response structure has a status field
          const userStatus = response.data.result[0].account_status;
          const email = response.data.result[0].email_address;
       //   console.log('User status:', userStatus);

      if (userStatus === '0' && email === null) {
        // User has not completed their OTP, show the modal
        this.showCompleteProfileModal = true;
      }
      else if (userStatus === '0' && email !=='') {
        // User has not completed their OTP, show the modal
        this.showRequestOtpModal = true;
      }  else {
        // User has completed their OTP, do not show the modal
        this.showRequestOtpModal = false;
      }
    })
    .catch((error) => {
      console.error('There was an error fetching the user status:', error);
      // Handle error or set a default behavior if the API call fails
   
    });
},

    checkUserStatusAndShowModal() {
     console.log('Checking user status and showing modal');
   
      const username_id = store.getSession().userDetails.userId;
      axios
        .get(` http://172.28.28.116:6239/api/User/GetEmployeeById/${username_id}`)
        .then((response) => {
          // Assuming the API response structure has a status field
          const userStatus = response.data.result[0].account_status;
          const email = response.data.result[0].email_address;

     //     console.log('User status: baru', userStatus);
        if (userStatus===null) this.$router.push('/homepage')
        
          if (userStatus === '0' && email !== '') {
            // User has not completed their OTP, show the modal

            this.showRequestOtpModal = true;
          } else {
            // User has completed their OTP, do not show the modal

            this.showRequestOtpModal = false;
          }
        
        })
        .catch((error) => {
          console.error('There was an error fetching the user status:', error);
          this.$router.push('/homepage')
        });
    },

    async verifyAndSaveData() {
      // console.log("Temp email now", this.tempEmail);
      // console.log("User email now", this.user.email_address);
      this.loadingButton = true;

      try {
        console.log(this.status)
        console.log('email', this.tempEmail)
        console.log('email', this.user.email_address)
        if (this.tempImageUrl) {
          await this.uploadimg(); // Wait for the image upload to finish
        } else if (this.status === '1' && this.tempEmail === this.user.email_address) {
          await this.updateEmployeeData(); // Wait for the employee data update
          console.log('1')
        } else {
          await this.updateEmployeeDataNewEmail(); // Wait for the employee data update with new email
          console.log('2')

        }
      } catch (error) {
        console.error('Error during verify and save data process:', error);
      } finally {
        // Ensure checkUserStatusAndShowModal runs last
     //  console.log('Executing finally block');
        // this.checkUserStatusAndShowModal();
        this.loadingButton = false;
      }
    },

    // update utk email baru dan lama / bila dia update emel then akan kena verify balik
    async updateEmployeeDataNewEmail() {
      // Start loading
      const startTime = Date.now(); // Record start time

      const employeeData = {
        emp_id: this.user.emp_id,
        name: this.user.name,
        bank_name: this.user.bank_name,
        bank_number: String(this.user.bank_number),
        email_address: this.user.email_address,
        home_address: this.user.home_address,
        spouse: this.user.spouse,
        phone_number: this.user.phone_number.toString(),
        ic_number: String(this.user.ic_number),
        limit_medicaldental: this.user.limit_medical_dental,
        limit_outpatient: this.user.limit_outpatient,
      };
     console.log('Employee Data test :', employeeData);

      return axios
        .put(' http://172.28.28.116:6239/api/User/UpdateEmployee', employeeData)
        .then((response) => {
         console.log('Response:', response);
          const elapsedTime = Date.now() - startTime; // Calculate elapsed time
          const remainingTime = Math.max(2000 - elapsedTime, 0); // Ensure min 2 seconds loading time

          setTimeout(() => {
            this.loadingButton = false; // Stop loading after ensuring min 2 seconds
            if (response.data.status_code === '200') {
             console.log(':', response.data.status_code);
              this.message = 'Successfully Updated';
              this.showSuccessNotification = true;
              setTimeout(() => {
                this.showSuccessNotification = false;
              }, 3000);
              // alert(response.data.message);
              // Additional logic here for successful update
              window.location.reload();
            } else if (
              response.data.message.includes(
                'Successfully Updated. Verify Your Email.'
              )
            ) {
             console.log(':otp is sent', response.data.message);
              this.message = 'Successfully Updated. Verify Your Email.';
              this.showSuccessNotification = true;
              setTimeout(() => {
                this.showSuccessNotification = false;
              }, 3000);
              this.showRequestOtpModal = true;
              this.startTimer();
              // Additional logic here for OTP sent
            } else if (response.data.status_code === '400') {
              alert(
                response.data.result || 'Failed to update. Please try again.'
              );
              // Additional logic here for status code 400
            }
          }, remainingTime);
        })
        .catch((error) => {
          console.error('Error updating employee data:', error);
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(2000 - elapsedTime, 0);

          setTimeout(() => {
            this.loadingButton = false; // Ensure loading is stopped after min 2 seconds
            alert('An error occurred while updating employee data.');
            // Additional error handling logic here
          }, remainingTime);
        });
    },

    async sendOtp() {
      this.loadingsendOtpButton = true;
      try {
        const response = await axios.post(
          ' http://172.28.28.116:6239/api/User/GenerateOTP',
          { email: this.user.email_address }
        );

        if (response.data.status_code === '200') {
    //      console.log('OTP sent successfully:', response.data);
          this.showRequestOtpModal = false;
          // alert("OTP has been sent to your email.");
          this.message = 'OTP has been sent to your email.';
          this.showSuccessNotification = true;
          setTimeout(() => {
            this.showSuccessNotification = false;
          }, 3000);
          this.showOtpModal = true;
          this.startTimer();
        } else {
          console.error('Backend error:', response.data);
          alert(
            response.data.message || 'Failed to send OTP. Please try again.'
          );
        }
        this.loadingsendOtpButton = false;
      } catch (error) {
        console.error('Error sending OTP:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
          alert(
            `An error occurred: ${error.response.data.message ||
            'Unable to send OTP. Please try again.'
            }`
          );
        } else if (error.request) {
          console.error('Request data:', error.request);
          alert(
            'No response from the server. Please check your network connection and try again.'
          );
        } else {
          console.error('Error message:', error.message);
          alert(`Error: ${error.message}`);
        }
        this.loadingsendOtpButton = false;
      }
    },

    addEventListeners() {
      window.addEventListener('beforeunload', this.beforeUnloadHandler);
    },

    beforeUnloadHandler(event) {
      if (this.showOtpModal) {
        const confirmationMessage =
          'You have not completed OTP verification. Are you sure you want to leave?';
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    },

    async verifyOtp() {
      this.loadingverifyOtpButton = true;
      const startTime = Date.now();
      try {
        const baseUrl = ' http://172.28.28.116:6239';
        const email = encodeURIComponent(this.user.email_address);
        const otp = encodeURIComponent(this.otp);
        const url = `${baseUrl}/api/User/ValidateOTP?email=${email}&otp=${otp}`;

        const response = await axios.post(url, {});

        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(2000 - elapsedTime, 0);

        setTimeout(async () => {
          if (response.data.status_code === '200') {
            clearInterval(this.timerInterval);
            alert(response.data.result || 'OTP verified successfully.');
            this.showOtpModal = false;
            this.message = 'Activation successful! Redirecting....';
            this.showSuccessNotification = true;
            setTimeout(() => {
              this.showSuccessNotification = false;
              this.$router.push('/homepage');
            }, 3000);
            window.removeEventListener(
              'beforeunload',
              this.beforeUnloadHandler
            );
          } else {
            alert('Invalid OTP. Please try again.');
          }
          this.loadingverifyOtpButton = false;
        }, remainingTime);
      } catch (error) {
        console.error('Error verifying OTP:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
          alert(
            `An error occurred: ${error.response.data.message ||
            'Unable to verify OTP. Please try again.'
            }`
          );
        } else if (error.request) {
          console.error('Request data:', error.request);
        } else {
          console.error('Error message:', error.message);
          alert(`Error: ${error.message}`);
        }

        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(2000 - elapsedTime, 0);

        setTimeout(() => {
          this.loadingverifyOtpButton = false;
        }, remainingTime);
      }
    },

    requestNewOtp() {
      if (this.timer === 0) {
        axios
          .post(' http://172.28.28.116:6239/api/User/GenerateOTP', {
            email: this.user.email_address,
          })
          .then((response) => {
            if (response.data.status_code === '200') {
              this.otp = '';
              alert('A new OTP has been sent to your email.');
              this.startTimer();
            } else {
              alert(
                response.data.message || 'Failed to send OTP. Please try again.'
              );
            }
          })
          .catch((error) => {
            console.error('Error sending OTP:', error);
            if (error.response) {
              console.error('Response data:', error.response.data);
              console.error('Response status:', error.response.status);
              console.error('Response headers:', error.response.headers);
              alert(
                `An error occurred: ${error.response.data.message ||
                'Unable to send OTP. Please try again.'
                }`
              );
            } else if (error.request) {
              console.error('Request data:', error.request);
              alert(
                'No response from the server. Please check your network connection and try again.'
              );
            } else {
              console.error('Error message:', error.message);
              alert(`Error: ${error.message}`);
            }
          });
      }
    },

    // handleSubmit() {
    //   this.user.profile_picture = this.profile_picture;
    //   console.log("User data saved:", this.user);
    //   localStorage.setItem("userProfile", JSON.stringify(this.user));
    //   this.$router.push("/profile");
    // },

    closeRequestOtpModal() {
      this.showRequestOtpModal = false;
    },

    startTimer() {
      this.timer = 120;
      clearInterval(this.timerInterval);

      this.timerInterval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    },

    beforeDestroy() {
      window.removeEventListener('beforeunload', this.beforeUnloadHandler);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
