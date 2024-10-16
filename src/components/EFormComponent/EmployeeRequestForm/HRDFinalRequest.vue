<template>
    <div class="space-y-4 border border-[1px] rounded-md px-4 py-2">
        <div class="space-y-4">
            <h1 class="font-bold text-md py-2">C. Verification / Approval (HRD FINAL)</h1>
        </div>
        <div class="grid grid-cols-8 gap-2">

            <div class="col-span-4">
                <div>
                    <p class="font-regular text-sm py-2">Application Received</p>
                </div>
            </div>
            <div class="col-span-4">
                <div>
                    <p class="font-regular text-sm py-2">Interview Arrangement </p>
                </div>
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Received By:</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="NameofHOD" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of HRD" />
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Received By:</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="NameofHOD" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of HOD" />
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Date:</label>
            </div>
            <div class="col-span-3">
                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input id="datepicker-autohide" type="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Date:</label>
            </div>
            <div class="col-span-3">
                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input id="datepicker-autohide" type="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
            </div>

        </div>
        <hr class="border-[1px]" />

        <div class="grid grid-cols-8 gap-2">

            <div class="col-span-1">
                <label for="employeeRequest" class="w-1/4 text-sm font-medium text-primary dark:text-white">
                    Employee’s Application for the position (Approved / Rejected) :
                </label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center">
                    <input id="yes-experienceRequired" type="radio" value="yes" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 
               dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-experienceRequired"
                        class="text-sm font-medium text-gray-900 dark:text-gray-300">Approved</label>

                    <input id="no-experienceRequired" type="radio" value="no" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 
               dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-experienceRequired"
                        class="text-sm font-medium text-gray-900 dark:text-gray-300">Rejected</label>
                </div>
            </div>
            <div class="col-span-1">
                <label for="employeeRequest" class="w-1/4 text-sm font-medium text-primary dark:text-white">
                    Department / Company :
                </label>
            </div>
            <div class="col-span-3">
                <input type="text" id="NameofHOD" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name of department / Company" />
            </div>
            <div class="col-span-1">
                <label for="employeeRequest" class="w-1/4 text-sm font-medium text-primary dark:text-white">
                    Comments :
                </label>
            </div>
            <div class="col-span-7">
                <textarea id="reasonForRejection" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Any comments"></textarea>
            </div>
            <div class="col-span-1">
                <label for="employeeRequest" class="w-1/4 text-sm font-medium text-primary dark:text-white">
                    Name
                </label>
            </div>
            <div class="col-span-3">
                <input type="text" id="NameofHOD" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of HOD" />
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Date:</label>
            </div>
            <div class="col-span-3">
                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input id="datepicker-autohide" type="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
            </div>
        </div>
        <hr class="border-[1px]" />
        <div class="grid grid-cols-8 gap-2">
        <div class="col-span-8 ">
            <div class="space-y-4">
                <h2 class="font-bold text-md">
                    Approval by the group Chief Executive / MD / Group Chief HR if the application is successful
                </h2>
                <p class="font-regular text-md italic">
                    {{ message }}
                </p>

                <!-- Show attachment field after "Save and Download" is clicked -->
                <div class="col-span-7 w-full" v-if="showAttach">
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-xs text-gray-500 dark:text-gray-300 text-right" id="file_input_help">
                        Attachment(s): WORDS, PDF, SVG, PNG, or JPG (MAX. 800x400px)
                    </p>
                </div>
            </div>
        </div>

        <div class="col-span-8 flex justify-end space-x-2">
            <!-- Only show this button when the form is ready for submission -->
            <button v-if="buttonText === 'Submit'" @click="downloadPDF" class="bg-transparent border-verified border-2 text-dark px-10 py-2 rounded-md font-bold">
                Download PDF
            </button>
            
            <button @click.prevent="handleClick" class="bg-verified text-white px-10 py-2 rounded-md font-bold">
                {{ buttonText }}
            </button>
        </div>
    </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                buttonText: 'Save and Download',
                message: 'Please download the pdf form first and get the approval by the Group Chief Executive / MD / Group Chief HR to complete the submission *',
                showAttach: false // Initially, hide the file input
            };
        },
        methods: {
            handleClick() {
                if (this.buttonText === 'Save and Download') {
                    this.buttonText = 'Submit';
                    this.message = 'Kindly attach the approval PDF and input attachments'; 
                    this.showAttach = true; 
                } else if (this.buttonText === 'Submit') {
                    // Submission logic can go here
                    alert('Form submitted!');
                }
            },
            downloadPDF() {
                // Placeholder logic to download the PDF
                const link = document.createElement('a');
                link.href = '/path-to-your-pdf'; // Replace with your actual PDF path
                link.download = 'approval-form.pdf';
                link.click();
            }
        }
    };
</script>