<template>
  <div>
    <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#F8F9FA] dark:bg-[#141517] p-10 sm:ml-64  h-screen">
      <!-- Your page content goes here -->
      <div class="container mx-auto  ">

        <div class="bg-[#f7fbff] dark:bg-[#25262b] rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div class="flex items-center justify-center h-full">
            <p class="text-2xl font-bold text-slate-900 dark:text-white">Badge Request Form</p>
          </div>
          <!-- <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
          <p class="text-slate-500 dark:text-slate-300 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
            space.
          </p> -->
          <!-- component -->
          <form action="" method="POST">
            <div class="-mx-3 flex flex-wrap pt-4">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="fName" class="mb-3 block text-base font-medium text-[#07074D]">
                    Requester Name
                  </label>
                  <input type="text" name="fName" id="fName" placeholder="First Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="lName" class="mb-3 block text-base font-medium text-[#07074D]">
                    IC Number
                  </label>
                  <input type="text" name="lName" id="lName" placeholder="Last Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
            </div>
            


            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                    Date
                  </label>
                  <input type="date" name="date" id="date"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number
                  </label>
                  <input type="text" name="time" id="time"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
            </div>

            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Position
              </label>
              <div class="flex items-center space-x-6">
                <div class="flex items-center">
                  <input type="radio" name="radio1" id="radioButton1" class="h-5 w-5" />
                  <label for="radioButton1" class="pl-3 text-base font-medium text-[#07074D]">
                    Staff
                  </label>
                </div>
                <div class="flex items-center">
                  <input type="radio" name="radio1" id="radioButton2" class="h-5 w-5" />
                  <label for="radioButton2" class="pl-3 text-base font-medium text-[#07074D]">
                    Contractor
                  </label>
                </div>
                <div class="flex items-center">
                  <input type="radio" name="radio1" id="radioButton2" class="h-5 w-5" />
                  <label for="radioButton2" class="pl-3 text-base font-medium text-[#07074D]">
                    Customer
                  </label>
                </div>
                
              </div>
            </div>
            <div class="mb-5">
              <label for="guest" class="mb-3 block text-base font-medium text-[#07074D]">
                Company Name <span class="text-xs"> (for Company & Customer)</span>
              </label>
              <input type="text" name="guest" id="guest" placeholder="5" min="0"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
              <label for="department" class="mb-3 block text-base font-medium text-[#07074D]">
                Department <span class="text-xs"> (for Staff)</span>
              </label>
              <select name="department" id="department"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                <option value="security">Security</option>
                <option value="safety">Safety</option>
                <option value="maintenance">Maintenance</option>
                <!-- Add more options as needed -->
              </select>
            </div>

            <div>
              <!-- <button
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button> -->
            </div>
          </form>







        </div>
        <div class="mt-4 mr-4 relative">

          <div class="absolute right-0  ...">
            <button
              class="middle none center hover:bg-[#0083db] rounded-lg bg-[#006BB3] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#4ca2db] transition-all hover:shadow-lg hover:shadow-[#5cb6f2] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
              data-ripple-light="true">
              next
            </button>
          </div>
          <div class=" ml-4 ...">
            <button
              class="middle none center hover:bg-[#0083db] rounded-lg bg-[#006BB3] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#4ca2db] transition-all hover:shadow-lg hover:shadow-[#5cb6f2] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
              data-ripple-light="true">
              back
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'bageNewrequestViews'


}
</script>