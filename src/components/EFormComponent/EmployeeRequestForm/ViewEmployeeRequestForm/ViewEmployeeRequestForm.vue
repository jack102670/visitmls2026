<template>
    <div class="space-y-4 border border-[1px] rounded-md px-4 py-2">
        <h1 class="font-bold text-md py-2">A. Employee Particulars</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-primary dark:text-white">Name of
                    Employee: <span class="text-red-500">*</span></label>
                <input type="text" id="name" v-model="EmployeeTransfer.name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Name" required readonly />
            </div>

            <div>
                <label for="designation" class="block mb-2 text-sm font-medium text-primary dark:text-white">Current
                    Designation: <span class="text-red-500">*</span></label>
                <input type="text" id="designation" v-model="EmployeeTransfer.designation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Current Designation" required readonly />
            </div>

            <div>
                <label for="company" class="block mb-2 text-sm font-medium text-primary dark:text-white">Name of
                    Company: <span class="text-red-500">*</span></label>
                <input type="text" id="company" v-model="EmployeeTransfer.company"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Name of Company" required readonly />

            </div>

            <div>
                <label for="department" class="block mb-2 text-sm font-medium text-primary dark:text-white">Department:
                    <span class="text-red-500">*</span></label>
                <input type="text" id="department" v-model="EmployeeTransfer.department"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Department" required readonly />
            </div>

            <div>
                <label for="highestQualification"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Highest Qualification: <span class="text-red-500">*</span></label>
                <select id="highestQualification" v-model="EmployeeTransfer.highestQualification"
                    class="bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" class="text-gray-400" disabled selected>Select Your Highest Qualification</option>
                    <option value="SPM">SPM</option>
                    <option value="STPM">STPM</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Barchelors Degree">Bachelor's Degree</option> 
                    <option value="Masters Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                </select>
            </div>
            <div class="space-y-2">
                <label for="date" class="block text-sm font-medium text-primary dark:text-white">
                    Commencement Date: <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input ref="datepicker" id="commencementDate" type="text"
                        v-model="EmployeeTransfer.commencementDate"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date" required>
                </div>
            </div>

        </div>
        <hr class="border border-b-[1px]" />
        <h1 class="font-bold text-md py-2">B. Requisition for Transfer</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label for="positionInterested"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Position Interested <span class="text-red-500">*</span></label>
                <input id="positionInterested" rows="4" v-model="EmployeeTransfer.positionInterested"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Position Interested" required  readonly/>
            </div>
            <div>
                <label for="transferDept" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Department <span class="text-red-500">*</span></label>
                <input id="transferDept" rows="4" v-model="EmployeeTransfer.transferDept"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Department interested" required />

            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label for="workExp" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Do you have any work experience related to the position applied for? If yes, kindly
                    elaborate:</label>
                <textarea id="workExp" rows="4" v-model="EmployeeTransfer.workExp"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write related work experience to the position applied"></textarea>
            </div>
            <div>
                <label for="transferReason" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Reason for transfer Request</label>
                <textarea id="transferReason" rows="4" v-model="EmployeeTransfer.transferReason"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write reason for transfer request"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        store
    } from '@/views/store.js';
    import {GetEmployeeRequestTransfer} from "@/api/EFormApi.js";

    import flatpickr from 'flatpickr';
    export default {
        data() {
            return {
                EmployeeTransfer: {
                    name: '',
                    designation: '',
                    company: '',
                    commencementDate: '',
                    positionInterested: '',
                    transferDept: '',
                    department: '',
                    highestQualification: '',
                    transferReason: '',
                    workExp: '',
                    requesterId: '',
                    verifierEmpId: '',
                },

            }
        },
        mounted() {
           
            const refNo = this.$route.params.refNo;
            this.GetEmployeeRequestTransfer(refNo);

            this.$nextTick(() => {
                if (this.$refs.datepicker) {
                    flatpickr(this.$refs.datepicker, {
                        dateFormat: 'Y-m-d',
                        onChange: (selectedDates) => {
                            this.EmployeeTransfer.commencementDate = selectedDates[0];
                        },
                    });
                }
            });
        },
        methods: {
            

            async GetEmployeeRequestTransfer(refNo){
                try {
                    const data = await GetEmployeeRequestTransfer(refNo);
                    if (data){
                        this.EmployeeTransfer = {
                            ...this.EmployeeTransfer,
                            ...data,
                        };
                    }
                }catch (error){
                    console.error("Error fetching employee transfer data:", error);
                    throw error;
                }
            }

        },
    }
</script>