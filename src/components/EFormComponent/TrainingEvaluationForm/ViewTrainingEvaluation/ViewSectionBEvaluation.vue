<template>
    <div class="border border-[1px] rounded-md mt-2 p-4 space-y-2">
        <div class="grid grid-cols-1 space-y-2">
            <div class="space-y-4">
                <div class="space-y-2">
                    <p for="position" class="block text-md font-bold text-primary dark:text-white">
                        Training Effectiveness
                    </p>
                    <p for="position" class="block mb-2 text-xs font-medium text-primary dark:text-white italic ">
                        (To be filled in by the superior one month after the training if the course attended relevant to
                        Trainee’s job scope/function.)
                    </p>
                </div>
                <div class="space-y-2">
                    <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white ">
                        How has the individuals performance changed after training? <span class="text-red-500">*</span>
                    </label>
                    <textarea id="message" rows="4" v-model="form.data"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your comments here"></textarea>
                    <span class="text-red-500 text-sm" v-if="validationErrors.data">Please fill in this field</span>

                </div>
            </div>
            <div class="flex justify-end py-2">
                <button @click.prevent="confirmExit"
                    class="bg-transparent text-dark px-10 py-2 rounded-md border-[2px] border-rejected mr-4 font-bold">
                    Exit
                </button>
                <button @click.prevent="UpdateTrainingEvaluationHOD(refNo)"
                    class="bg-verified text-white px-10 py-2 rounded-md font-bold">
                Submit
            </button>
            </div>
        </div>
    </div>

</template>
<script>

import { UpdateTrainingEvaluationHOD } from '@/api/EFormApi';
import Swal from "sweetalert2";


export default {

    data() {
        return {
            form: {
                data: '',
            },
            validationErrors: {},
            isSubmittedForm: false,
            refNo: null
        };
    },
    mounted() {
        this.refNo = this.$route.params.refNo;
        // this.UpdateTrainingEvaluationHOD(redfNo);
    },
    methods: {

        validateForm() {
            this.validationErrors = {};
            if (!this.form.data) this.validationErrors.data = true;
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

        async UpdateTrainingEvaluationHOD(refNo) {
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
                            })
                            const SectionBEvaluation = {
                                refNo: refNo,
                                data: this.form.data,
                            };
                            const update = await UpdateTrainingEvaluationHOD(SectionBEvaluation);
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
                            this.resetForm();


                        } catch (error) {
                            Swal.close();
                            console.error('Submission failed:', error.response ? error.response.data :
                                error.message);

                            Swal.fire({
                                title: 'Error!',
                                text: error.response ? error.response.data.message ||
                                    'Submission failed. Please try again later.' :
                                    'Submission failed. Please try again later.',
                                icon: 'error',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'OK'
                            });
                        }
                    }
                })
            }
            else {
                Swal.fire({
                    title: "Error!",
                    text: "Please fill in all required fields.",
                    icon: "error",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK",
                });
            }
        },
        resetForm() {
            this.form = {
                data: '',
            };
            this.validationErrors = {};
        }


    }

}

</script>