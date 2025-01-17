<template>
  <!-- component -->
  <button :style="sidebarPosition" class="toggle-btn block fixed z-50 p-2 bg-slate-200 text-blue-900 rounded-full mt-4"
    @click.stop="toggleSidebar">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
    </svg>
  </button>
  <aside :class="{
    fixed: open,
    'top-0': open,
    'left-0': open,
    'z-40': open,
    'w-64': open,
    'h-screen': open,
    flex: open,
    'flex-col': open,
    'px-4': open,
    'py-8': open,
    'overflow-y-auto': open,
    'bg-[#160959]': open,
    'border-r': open,
    'rtl:border-r-0': open,
    'rtl:border-l': open,
    'dark:bg-gray-900': open,
    'dark:border-gray-700': open,
    'animate-open': open,
    'animate-close': !open,
  }"
    class="sm:block fixed top-0 left-0 z-40 w-64 h-screen flex flex-col px-4 py-8 overflow-y-auto bg-[#160959] border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
    <a href="/homepage" class="flex justify-center items-center">
      <img class="rounded w-auto h-19 sm:h-20" src="@/assets/images/pkt-logo-white.jpg" alt="" />
    </a>
    <div class="absolute top-0 right-0">
      <button id="theme-toggle" type="button"
        class="text-white dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        @click="toggleTheme">
        <svg id="theme-toggle-dark-icon" class="w-5 h-5" :class="{ hidden: isLightTheme }" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg id="theme-toggle-light-icon" class="w-5 h-5" :class="{ hidden: !isLightTheme }" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>

    <div class="flex flex-col items-center justify-center mt-1">
      <h4 class="text-slate-200 dark:text-gray-400 font-medium text-center">
        Welcome,
      </h4>
      <p class="text-sm font-medium text-slate-200 dark:text-gray-400 mt-1 text-center justify-center">
        {{ userDetails.userName }}
      </p>
    </div>

    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav>
        <router-link :to="{ name: 'UserFirstTimeLogin' }"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400">
          <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="11" r="7" fill="transparent" stroke="currentColor" stroke-width="4"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 41C4 32.1634 12.0589 25 22 25" stroke="currentColor" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M31 42L41 32L37 28L27 38V42H31Z" fill="transparent" stroke="currentColor" stroke-width="4"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span class="mx-4 font-medium">Profile</span>
        </router-link>
        <router-link to="/" v-if="controlView === 'services-portal'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span class="mx-4 font-medium">Dashboard</span>
        </router-link>
        <router-link to="/eclaimhomepage" v-if="controlView === 'eclaim'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span class="mx-4 font-medium">Requests Dashboard</span>
        </router-link>
        <router-link to="/Dashboardvendor" v-if="role === 'vendor'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span class="mx-4 font-medium">Requests Dashboard</span>
        </router-link>

        <router-link v-if="role === 'admin'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'Managerequest' }">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span class="mx-4 font-medium">Tickets</span>
        </router-link>
        <router-link v-if="role === 'safety'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'ManagerequestSafety' }">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span class="mx-4 font-medium">Tickets</span>
        </router-link>
        <router-link v-if="role === 'safety'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'manageVendor' }">
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"
              d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.4 1.6a2 2 0 0 1 0 2.7l-6 6-3.4.7.7-3.4 6-6a2 2 0 0 1 2.7 0Z" />
          </svg>

          <span class="mx-4 font-medium">Manage Vendor</span>
        </router-link>
        <!-- <router-link
          v-if="controlView === 'eclaim' && userDetails.userName.includes('FN')"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'AdminDashboardpage' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>

          <span class="mx-4 font-medium">Dashboard Finance</span>
        </router-link> -->
        <router-link 
          v-if="controlView === 'eclaim' && userData.checker_valid !== '0'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'AssignChecker' }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M17 11l2 2 4-4" />
          </svg>
          <span class="mx-4 font-medium">Assign Checker</span>
        </router-link>
        <router-link v-if="controlView === 'eclaim'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'checkerDashboardPage' }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 11l3 3L22 4" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2 12l7 7 4-4" />
          </svg>
          <span class="mx-4 font-medium">Check claims</span>
        </router-link>
        <router-link v-if="controlView === 'eclaim'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'verified' }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>
          <span class="mx-4 font-medium">Verify Claims</span>
        </router-link>
        <router-link v-if="controlView === 'eclaim' && userData.department === 'FIN'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'AdminDashboardpage' }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>
          <span class="mx-4 font-medium">Dashboard Finance</span>
        </router-link>
        <router-link v-if="controlView === 'eclaim' && userData.department === 'HR & ADMIN'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'AdminHRDashboardpage' }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>

          <span class="mx-4 font-medium">Approve Claims (HR)</span>
        </router-link>
        <router-link v-if="controlView === 'eclaim' && userData.department === 'HR & ADMIN'"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'HrViewemployee' }">
          <svg width="24" height="24" viewBox="0 0 48 48" stroke="currentColor" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11.9143L24 19L44 11.9143L24 5L4 11.9143Z" fill="transparent" stroke="currentColor"
              stroke-width="1.5" stroke-linejoin="round" />
            <path d="M4 20L24 27L44 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M4 28L24 35L44 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M4 36L24 43L44 36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>

          <span class="mx-4 font-medium">Employee</span>
        </router-link>
        <!-- <router-link
          v-if="controlView === 'eclaim' && userData.department === ('CB')"
          class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          :to="{ name: 'AdminDashboardpage' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>

          <span class="mx-4 font-medium">Approve Claims</span>
        </router-link> -->

        <a class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
          href="#">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9917 6H6V42H24" stroke="currentColor" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M33 33L42 24L33 15" stroke="currentColor" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M16 23.9917H42" stroke="currentColor" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>

          <span @click="logout" v-show="showLogOutButton" class="mx-4 font-medium">Log Out</span>
          <span v-show="showLoadingButton" class="mx-4 font-medium">
            <svg aria-hidden="true" role="status"
              class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"></path>
            </svg>
            Loading....</span>
        </a>
      </nav>
    </div>
  </aside>

</template>

<script>
import { store } from '../views/store.js';
import axios from 'axios';

export default {
  name: 'NewsidebarComponent',
  props: {
    rn: {
      type: String,
      required: false
    }
  },


  data() {
    return {
      open: localStorage.getItem('openOrNot') == 'false' ? false : true,
      isLightTheme: true,
      userDetails: [],
      userData: [],
      role: null,
      showLogOutButton: true,
      showLoadingButton: false,
      controlView: null,
    };
  },
  computed: {
    sidebarPosition() {
      return {
        left: this.open ? '240px' : '4px',
        top: this.open ? '9px' : '9px', 
        transition: this.open ? 'all 0.5s ease-out' : 'all 0.6s ease-in',
        transform: this.open ? 'rotate(0deg)' : 'rotate(180deg)',
      };
    },
  },
  mounted() {
    this.controlView = store.getControlView();
    this.userDetails = store.getSession().userDetails;
    this.token = store.data.token;
    this.checkuser();
    this.role = store.getRole();
   // console.log(this.userDetails, 'user details');
  },
  watch: {
    // Watch for changes in controlView
    controlView(newVal, oldVal) {
     // console.log(`controlView changed from ${oldVal} to ${newVal}`);
    },
  },
  beforeCreate() {
    if (!localStorage.getItem('reloaded')) {
      localStorage.setItem('reloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('reloaded');
    }
  },
  methods: {
    async checkuser() {
      const username_id = this.userDetails.userId;
      try {
        const response = await axios.get(
          `http://172.28.28.116:7239/api/User/GetEmployeeById/${username_id}`
        );
        this.userData = response.data.result[0];
      //  console.log('User status:', this.userData);
      } catch (error) {
        console.error('There was an error fetching the user status:', error);
      }
    },

    logout() {
      this.showLogOutButton = false;
      this.showLoadingButton = true;
      store.clearSession();
      this.$router.push('/'); 
    },
    toggleTheme() {
      const root = document.documentElement;
      const isDarkMode = root.classList.contains('dark');

      if (isDarkMode) {
        root.classList.remove('dark');
        root.removeAttribute('data-mode');
      } else {
        root.classList.add('dark');
        root.setAttribute('data-mode', 'dark');
      }

      this.isLightTheme = !isDarkMode;
      localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    toggleSidebar() {
      this.open = !this.open;
      const element = document.querySelector('main');
      if (element && !this.open) {
        element.classList.add('become-big');
      } else if (element && this.open) {
        element.classList.remove('become-big');
      }
      localStorage.setItem('openOrNot', this.open);
    },
  },
  created() {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      this.isLightTheme = storedTheme === 'light';
      this.isLightTheme = storedTheme === 'dark';

      const root = document.documentElement;
      if (this.isLightTheme) {
        root.classList.remove('light');
        root.removeAttribute('data-mode');
      } else {
        root.classList.add('dark');
        root.setAttribute('data-mode', 'dark');
      }
    }
  },
};
</script>

<style>
.animate-open {
  transform: translateX(0);
  transition: 0.5s ease;
}

.animate-close {
  transform: translateX(-100%);
  transition: 0.5s ease;
}

.become-big {
  margin-left: 0;
  transition: all 0.5s ease;
}

main {
  transition: all 0.5s ease;
}
</style>
