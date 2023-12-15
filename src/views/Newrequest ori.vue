<template>
  <div>
    <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#F8F9FA] dark:bg-[#141517] p-10 sm:ml-64  h-screen">
      <!-- Your page content goes here -->
      <div class="container mx-auto  ">

        <div class="bg-[#f7fbff] dark:bg-[#25262b] rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div class="flex items-center justify-center h-full">
            <p class="text-2xl font-bold text-slate-900 dark:text-white">New Request</p>
          </div>
          <!-- <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
          <p class="text-slate-500 dark:text-slate-300 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
            space.
          </p> -->
          <!-- component -->
          <p class="text-xl ml-4 bold">Department</p>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-4">
            <label>
              <input type="radio" value="1" class="peer hidden" name="framework">

              <div
                class="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                <h2 class="font-medium text-gray-700">Security </h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </label>
            <label>
              <input type="radio" value="1" class="peer hidden" name="framework">

              <div
                class="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                <h2 class="font-medium text-gray-700">Safety</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </label>

            <label>
              <input type="radio" value="1" class="peer hidden" name="framework">

              <div
                class="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                <h2 class="font-medium text-gray-700">Maintenance</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </label>
          </div>
          <p class="text-xl ml-4">Branch</p>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-4">
            <label>
              <input type="radio" value="1" class="peer hidden" name="Branch">

              <div
                class="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                <h2 class="font-medium text-gray-700">HQ </h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </label>
            <label>
              <input type="radio" value="1" class="peer hidden" name="Branch">

              <div
                class="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                <h2 class="font-medium text-gray-700">OAH</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </label>
          </div>
          






        </div><div class="mt-4 mr-4 relative">

            <div class="absolute right-0  ...">
              <button
                class="middle none center hover:bg-[#0083db] rounded-lg bg-[#006BB3] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#4ca2db] transition-all hover:shadow-lg hover:shadow-[#5cb6f2] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                data-ripple-light="true">
                next
              </button>
            </div>
          </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'NewrequestViews'


}
</script>