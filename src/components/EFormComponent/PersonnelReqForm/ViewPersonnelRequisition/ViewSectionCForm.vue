<template>
    <div class="space-y-4 mt-2 border-[1px] rounded-md px-4 py-2">
        <h1 class="font-bold text-md py-2">C. Verification / Approval</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div>
                    <label class="text-sm font-semibold text-primary dark:text-white sm:mr-1">
                        Name:</label>
                    <p class="text-sm">{{ form.requesterName || '-' }}</p>
            </div>
            <div>
                    <label class="text-sm font-semibold text-primary dark:text-white sm:mr-1">
                        Designation:</label>
                    <p class="text-sm">{{ form.requesterDesignation || '-' }}</p>
            </div>
            <div>
          
                    <label class="text-sm font-semibold text-primary dark:text-white sm:mr-1">
                        Department:</label>
                    <p class="text-sm">{{ form.requesterDept || '-' }}</p>

            </div>
            <div>
     
                    <label class="text-sm font-semibold text-primary dark:text-white sm:mr-1">
                        Date Requested:</label>
                    <p class="text-sm">{{ formattedDateRequested || '-' }}</p>
          
            </div>
        </div>
        <hr class="border-[1px]" />
        <div class="space-y-2" v-if="DisplayForm.status !== 'Verified by Verifier 1. Waiting for Verifier 2'">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-2">
                    <label for="basicSalary" class="block mb-2 text-sm font-semibold text-primary dark:text-white">
                        1. Approved this application?: <span class="text-red-500">*</span>
                    </label>
                    <div class="flex space-x-4 items-center mb-4">
                        <input id="yes-experienceRequired" type="radio" value="1" v-model="UpdateForm.data"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="yes-experienceRequired"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                    </div>
                    <span class="text-red-500 text-sm" v-if="validationErrors.data">Please fill in this field</span>
                </div>
            </div>
            <div>
                <div class="w-full flex justify-end py-2">
                    <button @click.prevent="confirmExit"
                        class="bg-transparent text-dark px-10 py-2 rounded-md border-[2px] border-rejected mr-4 font-bold">
                        Exit
                    </button>
                    <button @click.prevent="UpdatePersonnelRequisitionHOD"
                        class="bg-verified text-white px-10 py-2 rounded-md font-bold">
                        Submit
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-2">
                    <label for="basicSalary" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
                        Verify by:
                    </label>
                    <div>
                        <p class="text-sm">{{ DisplayForm.verifier1?.name || '-' }}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="basicSalary" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
                        Verifier Designation:
                    </label>
                    <div>
                        <p class="text-sm">{{ DisplayForm.verifier1?.designation || '-' }}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="basicSalary" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
                        Verifier designation:
                    </label>
                    <div>
                        <p class="text-sm">{{ DisplayForm.verifier1?.dept || '-' }}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="basicSalary" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
                        Date:
                    </label>
                    <div>
                        <p class="text-sm">{{ formattedVerifierDate || '-' }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { getPersonnelRequisitonForm, UpdatePersonnelRequisitionHOD } from '@/api/EFormApi';
import Swal from 'sweetalert2';
export default {
    props: ["formData"],

    data() {
        return {
            form: this.formData.sectionC || {
                requesterName: "",
                requesterDept: "",
                requesterDesignation: "",
                dateRequested: "",
            },
            DisplayForm: {
                status: '',
                verifier1: {
                    name: '',
                    designation: '',
                    dept: '',
                    date: ''
                },
            },
            UpdateForm: {
                data: '',

            },
            validationErrors: {},
            isSubmittedForm: false
        };
    },
    computed: {
        formattedDateRequested() {
            if (!this.form.dateRequested) return "";
            const date = new Date(this.form.dateRequested);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
        formattedVerifierDate() {
            if (!this.DisplayForm.verifier1?.date) return "";
            const date = new Date(this.DisplayForm.verifier1?.date);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;

        },


    },
    mounted() {
        this.refNo = this.$route.params.refNo;
        this.getPersonnelRequisitonForm(this.refNo);
    },
    methods: {
        async getPersonnelRequisitonForm(refNo) {
            try {
                const data = await getPersonnelRequisitonForm(refNo);
                if (data) {
                    this.uniqueKey = data.uniqueKey;
                    this.form = {
                        ...data.form,
                        ...data,
                    };
                    this.DisplayForm = {
                        ...this.DisplayForm,
                        status: data.status,
                        verifier1: data.verifier1 || this.DisplayForm.verifier1
                    };
                    console.log(this.DisplayForm.verifier1);
                }
            } catch (error) {
                console.error("Error loading training evaluation:", error);
                throw error;
            }
        },

        validateForm() {
            this.validationErrors = {};
            if (!this.UpdateForm.data) this.validationErrors.data = true;
            return Object.keys(this.validationErrors).length === 0;
        },
        confirmExit() {
            Swal.fire({
                title: 'Are you sure you want to exit?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Exit!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$router.push('/e-dashboard');
                }
            })
        },

        async UpdatePersonnelRequisitionHOD() {
            if (!this.uniqueKey) {
                Swal.fire({
                    title: 'Error!',
                    text: 'No reference number found.',
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
                return;
            }
            if (this.validateForm()) {
                Swal.fire({
                    title: 'Are you sure you want to submit?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Submit!'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            Swal.fire({
                                title: 'Submitting...',
                                text: 'Please wait while we submit your data.',
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading();
                                }
                            });
                            const updatePRHOD = {
                                refNo: this.refNo,
                                data: this.UpdateForm.data,
                            };

                            console.log("Submitting HOD form data:", updatePRHOD);

                            const update = await UpdatePersonnelRequisitionHOD(updatePRHOD);
                            console.log(update);

                            Swal.close();

                            Swal.fire({
                                title: 'Saved!',
                                text: 'Your data has been saved.',
                                icon: 'success',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'OK'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    this.$router.push('/e-dashboard');
                                }
                            });
                            this.isSubmittedForm = true;


                        } catch (error) {
                            Swal.close();
                            console.error("Error submitting HOD form:", error);
                            Swal.fire({
                                title: 'Error!',
                                text: 'An error occurred while submitting the form.',
                                icon: 'error',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'OK'
                            });
                        }
                    }
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Please fill in all the required fields.',
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
            }

        }
    },

};
</script>