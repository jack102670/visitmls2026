<template>
  <main class="flex-1 overflow-x-hidden overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
    <div class="container mx-auto">
      <div class="bg-[#f7fbff] dark:bg-gray-800 relative dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div class="relative overflow-hidden mt-5 max-w-4xl p-6 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800">
          <div class="profile-container">
            <h2 class="text-3xl font-bold text-gray-700 capitalize dark:text-white mb-4">Profile</h2>
            <div class="profile-details grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col items-center">
                <img :src="user.profilePicture || defaultProfilePicture" alt="Profile Picture" class="profile-pic mb-4"/>
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">{{ user.fullName }}</p>
                <p class="text-lg text-gray-500 dark:text-gray-400">{{ user.department }}</p>
              </div>
              <div class="text-lg text-gray-700 dark:text-gray-300">
                <p><span class="font-semibold text-gray-700 dark:text-gray-200">Staff ID:</span> <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="user.staffId" /></p>
                <p><span class="font-semibold text-gray-700 dark:text-gray-200">Work Email:</span> <input type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="user.workEmail" /></p>
                <p><span class="font-semibold text-gray-700 dark:text-gray-200">Bank Name:</span> <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="user.bankName" /></p>
                <p><span class="font-semibold text-gray-700 dark:text-gray-200">Bank Account Number:</span> <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="user.bankNumber" /></p>
                <p><span class="font-semibold text-gray-700 dark:text-gray-200">Phone Number:</span> <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="user.phoneNumber" /></p>
                <p><span class="font-semibold text-gray-700 dark:text-gray-200">Spouse:</span> <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="user.spouse" /></p>
                <p><span class="font-semibold text-gray-700 dark:text-gray-200">Home Address:</span> <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="user.homeAddress" /></p>
                <p><span class="font-semibold text-gray-700 dark:text-gray-200">Reporting Manager:</span> <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" v-model="user.reportingManager" /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("userProfile")) || {},
      defaultProfilePicture: require("@/assets/images/profile.png"),
    };
  },
};
</script>

<style>
.profile-container {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.profile-pic {
  width: 150px;
  height: 200px;
  border-radius: 8px;
}
</style>
