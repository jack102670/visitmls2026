<template>
    <div class="space-y-4 border border-[1px] rounded-md px-4 py-2">
        <h1 class="font-bold text-md py-2">A. Employee Particulars</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label for="name" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Name of
                    Employee: </label>
                    <div><p class="text-sm">{{ EmployeeTransfer.name }}</p></div>
            </div>

            <div>
                <label for="designation" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Current
                    Designation: </label>
                    <div><p class="text-sm">{{ EmployeeTransfer.designation }}</p></div>
            </div>

            <div>
                <label for="company" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Name of
                    Company: </label>
                    <div><p class="text-sm">{{ EmployeeTransfer.company }}</p></div>

            </div>

            <div>
                <label for="department" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Department:
                    </label>
                    <div><p class="text-sm">{{ EmployeeTransfer.department }}</p></div>
            </div>

            <div>
                <label for="highestQualification"
                    class="block mb-2 text-sm font-semibold text-primary dark:text-white italic">
                    Highest Qualification: </label>
                <div><p class="text-sm">{{ EmployeeTransfer.highestQualification }}</p></div>
            </div>
            <div class="space-y-2">
                <label for="date" class="block text-sm font-semibold text-primary dark:text-white">
                    Commencement Date: 
                </label>
                <div><p class="text-sm">{{ EmployeeTransfer.commencementDate }}</p></div>
            </div>

        </div>
        <hr class="border border-b-[1px]" />
        <h1 class="font-bold text-md py-2">B. Requisition for Transfer</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label for="positionInterested"
                    class="block mb-2 text-sm font-semibold text-primary dark:text-white ">
                    Position Interested</label>
                    <div><p class="text-sm">{{ EmployeeTransfer.positionInterested }}</p></div>
            </div>
            <div>
                <label for="transferDept" class="block mb-2 text-sm font-semibold text-primary dark:text-white ">
                    Department </label>
                    <div><p class="text-sm">{{ EmployeeTransfer.transferDept }}</p></div>

            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label for="workExp" class="block mb-2 text-sm font-semibold text-primary dark:text-white ">
                    Do you have any work experience related to the position applied for? If yes, kindly
                    elaborate:</label>
                    <div><p class="text-sm">{{ EmployeeTransfer.workExp }}</p></div>
            </div>
            <div>
                <label for="transferReason" class="block mb-2 text-sm font-semibold text-primary dark:text-white ">
                    Reason for transfer Request</label>
                    <div><p class="text-sm">{{ EmployeeTransfer.transferReason }}</p></div>
            </div>
        </div>
    </div>
</template>
<script>
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