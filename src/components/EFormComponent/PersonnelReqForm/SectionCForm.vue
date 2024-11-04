<template>
    <div class="space-y-4 mt-2 border-[1px] rounded-md px-4 py-2">
        <h1 class="font-bold text-md py-2">C. Verification / Approval</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <div class="flex flex-wrap items-center space-x-4">
                    <label class="text-sm font-medium text-primary dark:text-white mr-1">
                        Name:</label>
                    <p class="text-sm">{{ form.requesterName }}</p>
                </div>
            </div>
            <div>
                <div class="flex flex-wrap items-center space-x-4">
                    <label class="text-sm font-medium text-primary dark:text-white mr-1">
                        Designation:</label>
                    <p class="text-sm">{{ form.requesterDesignation }}</p>
                </div>
            </div>
            <div>
                <div class="flex flex-wrap items-center space-x-4">
                    <label class="text-sm font-medium text-primary dark:text-white mr-1">
                        Department:</label>
                    <p class="text-sm">{{ form.requesterDept }}</p>
                </div>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    I have read and agree that this informations are correct and cannot be changed: <span
                        class="text-red-500">*</span></label>
                <div class="flex space-x-4 items-center mb-4">
                    <input id="yes-employeeConfirmation" type="radio" value="yes" v-model="form.employeeConfirmation"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-employeeConfirmation"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                    <input id="no-employeeConfirmation" type="radio" value="no" v-model="form.employeeConfirmation"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-employeeConfirmation"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <span v-if="validationErrors.employeeConfirmation" class="text-red-500 text-sm">Please fill in this
                    field</span>
            </div>
        </div>
        <div class="col-span-1 flex justify-end">
            <button @click="handlePrevious"
                class="bg-transparent text-pending px-10 py-2 rounded-md border-[2px] border-pending mr-4">
                Back
            </button>
            <button @click.prevent="handleSubmit" class="bg-primary text-white px-10 py-2 rounded-md">
                Next
            </button>
        </div>
    </div>
</template>



<script>
import Swal from "sweetalert2";
import SecCHOD from "./SectionCFormOtherRole/SecCHOD.vue";
import { fetchHrData } from "@/api/EFormApi";
import { store } from '@/views/store.js';
// import SecCHR from "./SectionCFormOtherRole/SecCHR.vue";
// import SecCDiv from "./SectionCFormOtherRole/SecCDiv.vue";
export default {
    components: {
        // SecCHOD,
        // SecCHR,
        // SecCDiv
    },
    props: ["formData", "uniqueKey"],
    data() {
        return {
            form: this.formData.sectionC || {
                employeeConfirmation: "",
                requesterId: "",
                requesterName: "",
                requesterDept: "",
                requesterDesignation: "",
                verifierEmpId: "",
            },
            validationErrors: {},
            selectedOption: "",
            isDownloaded: false,
        };
    },
    methods: {
        async fetchHrData() {
            const currentUser = store.getSession().userDetails;
            if (!currentUser || !currentUser.userId) {
                console.error("Error: currentUser or userId is missing");
                return;
            }
            const username_id = currentUser.userId;

            this.form.requesterId = username_id;
            console.log("Requester ID (Employee ID):", this.form.requesterId);

            this.loadingText = 'Fetching';
            this.loading = true;

            try {
                const data = await fetchHrData(username_id);
                if (data) {
                    this.user = data;

                    this.form.requesterName = data.name;
                    this.form.requesterDept = data.department;
                    this.form.requesterDesignation = data.position_title;
                    this.form.verifierEmpId = data.reporting_to;
                }
                // console.log("Employee Data:", this.user );
            } catch (error) {
                console.error("Error fetching HR data:", error);
                throw new Error("Failed to fetch HR data. Please try again.");

            } finally {
                this.loading = false;

            }
        },
        handleDownloadAndSave() {
            this.isDownloaded = true;
        },
        validateForm() {
            this.validationErrors = {};
            if (!this.form.employeeConfirmation)
                this.validationErrors.employeeConfirmation = true;
            return Object.keys(this.validationErrors).length === 0;
        },
        handlePrevious() {
            this.$emit("previous-section");
        },
        handleSubmit() {
            if (this.form.employeeConfirmation === "no") {
                Swal.fire({
                    title: "Agreement Required",
                    text: "You must confirm that the information is correct to proceed.",
                    icon: "warning",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#3085d6",
                });
                return;
            }

            if (this.validateForm()) {
                Swal.fire({
                    title: "Are you sure you want to submit the application?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Yes, proceed",
                    cancelButtonText: "No, stay here",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("Form data saved:", this.form);
                        this.$emit("update-form", this.form, "C");
                        this.$emit("submit-form", this.form);
                    }
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Please fill in all required fields.",
                    icon: "error",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#3085d6",
                });

            }

        },
    },


    mounted() {
        this.fetchHrData();
    }
};
</script>

<style scoped></style>