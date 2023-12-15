<template>
  <div>
    <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#F8F9FA] dark:bg-[#141517] p-10 sm:ml-64 h-screen">
      <!-- Your page content goes here -->
      <div class="container mx-auto  ">

        <div class="bg-[#f7fbff] dark:bg-[#25262b] rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div class="flex items-center justify-center h-full">
            <p class="text-2xl font-bold text-slate-900 dark:text-[#ECF6FF]">HOME</p>
          </div>
          <!-- <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
          <p class="text-slate-500 dark:text-slate-300 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
            space.
          </p> -->
          <div class="grid grid-cols-6 gap-4 mt-10">
            <!-- Item 1: Incident Report -->
            <div class="col-span-2">
              <div
                class="box rounded-2xl max-w-[253px] h-[120px] hover:bg-[#E6F5FF] dark:hover:bg-gray-700 group bg-gray-100 dark:bg-[#141517] font-semibold text-2xl p-4 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                <div class="flex items-center">
                  <svg class="w-13 h-13 max-w-full h-auto mr-2 text-[#006BB3] dark:text-blue-400" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <!-- Replace this comment with the actual SVG path data for your icon -->


                    <path stroke="currentColor" stroke-linecap="round" stroke-width=""
                      d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z" />

                  </svg>
                  <p class="dark:text-[#ECF6FF] overflow-ellipsis">Incident Report</p>
                </div>
                <span class="ml-2 bg-[#006BB3] text-white rounded-full px-2 py-1 text-sm">3</span>
              </div>
            </div>

            <!-- Item 2: Batch Request -->
            <div class="col-span-2">
              <div
                class="box rounded-2xl max-w-[253px] h-[120px] hover:bg-[#E6F5FF] dark:hover:bg-gray-700 group bg-gray-100 dark:bg-[#141517] font-semibold text-2xl p-4 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                <div class="flex items-center">
                  <svg class="w-13 h-13 max-w-full h-auto mr-2 text-[#006BB3] dark:text-blue-400" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <!-- Replace this comment with the actual SVG path data for your icon -->


                    <path
                      d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                    <path
                      d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />

                  </svg>
                  <p class="dark:text-[#ECF6FF] overflow-ellipsis">Batch request</p>
                </div>
                <span class="ml-2 bg-[#006BB3] text-white rounded-full px-2 py-1 text-sm">3</span>
              </div>
            </div>


            <div class="col-span-2">
              <div
                class="box rounded-2xl max-w-[253px] h-[120px] hover:bg-[#E6F5FF] dark:hover:bg-gray-700 group bg-gray-100 dark:bg-[#141517] font-semibold text-2xl p-4 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                <div class="flex items-center">
                  <svg class="w-16 h-16  max-w-full h-auto mr-2 text-[#006BB3] dark:text-blue-400" fill="none"
                    stroke="currentColor" viewBox="0 0 25 19" xmlns="http://www.w3.org/2000/svg">
                    <!-- Replace this comment with the actual SVG path data for your icon -->

                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=""
                      d="M12 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm7 11-6-2V4l6-2v10Z" />

                  </svg>
                  <p class="dark:text-[#ECF6FF] overflow-ellipsis">CCTV View Request</p>
                </div>
                <span class="ml-2 bg-[#006BB3] text-white rounded-full px-2 py-1 text-sm">3</span>
              </div>
            </div>

            <div class="col-span-2">
              <div
                class="box rounded-2xl max-w-[253px] h-[120px] hover:bg-[#E6F5FF] dark:hover:bg-gray-700 group bg-gray-100 dark:bg-[#141517] font-semibold text-2xl p-4 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                <div class="flex items-center">
                  <svg class="w-16 h-16 max-w-full h-auto mr-2 text-[#006BB3] dark:text-blue-400" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <!-- Replace this comment with the actual SVG path data for your icon -->

                    <path d="M1 1h12M8 5h5M8 9h5M1 13h12M4 5v4L1 7l3-2Z" />

                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=""
                      d="M1 1h12M8 5h5M8 9h5M1 13h12M4 5v4L1 7l3-2Z" />




                  </svg>
                  <p class="dark:text-[#ECF6FF] overflow-ellipsis">Covid Essenstials Req</p>
                </div>
                <span class="ml-2 bg-[#006BB3] text-white rounded-full px-2 py-1 text-sm">3</span>
              </div>
            </div>

            <div class="col-span-2">
              <div
                class="box rounded-2xl max-w-[253px] h-[120px] hover:bg-[#E6F5FF] dark:hover:bg-gray-700 group bg-gray-100 dark:bg-[#141517] font-semibold text-2xl p-4 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                <div class="flex items-center">
                  <svg class="w-13 h-13 max-w-full h-auto mr-2 text-[#006BB3] dark:text-blue-400" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <!-- Replace this comment with the actual SVG path data for your icon -->


                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=""
                      d="M8 3h4M8 17h4m-9-5V8m14 4V8M1 1h4v4H1V1Zm14 0h4v4h-4V1ZM1 15h4v4H1v-4Zm14 0h4v4h-4v-4Z" />

                  </svg>
                  <p class="dark:text-[#ECF6FF] overflow-ellipsis">Contractor Access Request</p>
                </div>
                <span class="ml-2 bg-[#006BB3] text-white rounded-full px-2 py-1 text-sm">3</span>
              </div>
            </div>
            <div class="col-span-2">
              <div
                class="box rounded-2xl max-w-[253px] h-[120px] hover:bg-[#E6F5FF] dark:hover:bg-gray-700 group bg-gray-100 dark:bg-[#141517] font-semibold text-2xl p-4 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                <div class="flex items-center">
                  <svg class="w-13 h-13 max-w-full h-auto mr-2 text-[#006BB3] dark:text-blue-400" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <!-- Replace this comment with the actual SVG path data for your icon -->


                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=""
                      d="M3.656 12.115a3 3 0 0 1 5.682-.015M13 5h3m-3 3h3m-3 3h3M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm6.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />

                  </svg>
                  <p class="dark:text-[#ECF6FF] overflow-ellipsis">Visits Request</p>
                </div>
                <span class="ml-2 bg-[#006BB3] text-white rounded-full px-2 py-1 text-sm">3</span>
              </div>
            </div>



          </div>






        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'HomeViews'
}

</script>