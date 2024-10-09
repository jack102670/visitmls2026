<template>
    <div class="border border-[1px] rounded-md mt-2 p-4 space-y-2">
        <div class="grid grid-cols-9 space-x-2 space-y-2 py-4">
            <div class="col-span-6">
                <p for="position" class="block text-md font-bold text-primary dark:text-white">
                    Introduction
                </p>
            </div>
            <div class="col-span-3 justify-between  flex space-x-2">
                <div class="col-span-1">
                    <h2>Nature of the training: <span class="text-red-500">*</span></h2>
                </div>
                <div class="col-span-2 flex space-x-2">
                    <button class="w-full px-4 py-1 rounded-md text-sm"
                        :class="{ 'bg-primary border-[1px] text-white': selectedButtons.includes('skills1'), 'bg-transparent border-[1px] border-gray-300': !selectedButtons.includes('skills1') }"
                        @click="toggleSelection('skills1')">
                        Skills
                    </button>
                    <button class="w-full px-4 py-1 rounded-md text-sm"
                        :class="{ 'bg-primary border-[1px] text-white': selectedButtons.includes('knowledge'), 'bg-transparent border-[1px] border-gray-300': !selectedButtons.includes('knowledge') }"
                        @click="toggleSelection('knowledge')">
                        Knowledge
                    </button>
                    <button class="w-full px-4 py-1 rounded-md text-sm"
                        :class="{ 'bg-primary border-[1px] text-white': selectedButtons.includes('refresher'), 'bg-transparent border-[1px] border-gray-300': !selectedButtons.includes('refresher') }"
                        @click="toggleSelection('refresher')">
                        Refresher
                    </button>
                </div>
            </div>
        </div>

        <!-- for future use, dont delete this -->
        <!-- <div v-else class="flex justify-end items-center space-x-2">
          <p class="text-red-500 text-xs italic font-regular">Please select either one</p>

        </div> -->
        <div class="grid grid-cols-9 space-x-2">
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Trainee Name:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Trainee Name" required />
            </div>
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Trainee
                    Designation: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Trainee Designation" required />
            </div>
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Course Title:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Course title" required />
            </div>
        </div>
        <div class="grid grid-cols-9 space-x-2">
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Training
                    Institution: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Training Institution" required />
            </div>
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Trainer Name:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Trainer Name" required />
            </div>
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Venue: <span
                        class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Venue" required />
            </div>
        </div>
        <div class="grid grid-cols-9 space-x-2">
            <div class="col-span-1">
                <label for="date" class="block mb-2 text-sm font-medium text-primary dark:text-white">Date Required:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">

                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input ref="datepicker" id="datepicker-autohide" type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date" required>
                </div>
            </div>
        </div>
        <div class="border-b-[1px] py-2"></div>
        <div class="py-4">
            <p for="position" class="block mb-2 text-md font-bold text-primary dark:text-white">
                Training Objectives and course content
            </p>

            <p for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">A. Please give your
                feedback on the following statements, which relate to this training program
            </p>
        </div>
        <div class="space-y-2">
            <div class="grid grid-cols-8 space-x-2">
                <div class="col-span-4 space-y-2">
                    <div>
                        <p class="text-sm font-medium">Objectives of this program adequately met</p>
                    </div>

                    <div class="flex space-x-4">
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Poor</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Fair</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Good</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Excellent</label>
                        </div>
                    </div>

                </div>
                <div class="col-span-4 space-y-2">
                    <div>
                        <p class="text-sm font-medium">Training will greatly asisst you in your profession / area of
                            work</p>
                    </div>

                    <div class="flex space-x-4">
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Poor</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Fair</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Good</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Excellent</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-8 space-x-2">
                <div class="col-span-4 space-y-2">
                    <div>
                        <p class="text-sm font-medium">Trainer has good presentation skill/style, knowledge and grip
                            over the subject</p>
                    </div>

                    <div class="flex space-x-4">
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Poor</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Fair</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Good</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Excellent</label>
                        </div>
                    </div>

                </div>
                <div class="col-span-4 space-y-2">
                    <div>
                        <p class="text-sm font-medium">Test result (If any)</p>
                    </div>

                    <div class="flex space-x-4">
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Poor</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Fair</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Good</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Excellent</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b-[1px] py-4"></div>
            <div class="grid grid-cols-8 pt-4">
                <div class="col-span-4">
                    <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">B.
                        Please describe briefly on what you have gained from the course. (You may also share your idea
                        on how would you plan or in what way will you apply the benefits from the course – if any.):
                    </label>
                </div>
                <div class="col-span-4">
                    <textarea id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your comments here"></textarea>
                </div>
            </div>
            <div class="border-b-[1px] pt-4"></div>
            <div class="grid grid-cols-8 py-4">
                <div class="col-span-4">
                    <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white ">
                        General Comments (If any)
                    </label>
                </div>
                <div class="col-span-4">
                    <textarea id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your comments here"></textarea>
                </div>
            </div>
            <div class="grid grid-cols-8 space-x-2 mt-4">
                <div class="col-span-8 flex justify-end">
                    <button @click.prevent="confirmExit"
                        class="bg-transparent text-rejected px-10 py-2 rounded-md border-[2px] border-rejected mr-4">
                        Exit
                    </button>
                    <button class="bg-primary text-white px-10 py-2 rounded-md">
                        Next
                    </button>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import flatpickr from 'flatpickr';
    export default {
        data() {
            return {
                selectedButtons: [],
            }
        },
        methods: {
            toggleSelection(button) {
                if (this.selectedButtons.includes(button)) {
                    this.selectedButtons = this.selectedButtons.filter(item => item !== button);
                } else {
                    this.selectedButtons.push(button);
                }
            }
        },
        mounted() {
            flatpickr(this.$refs.datepicker, {
                dateFormat: "Y-m-d",
            });
        },
    }
</script>