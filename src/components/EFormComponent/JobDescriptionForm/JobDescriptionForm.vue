<template>
    <div class="border border-[1px] rounded-md px-6 pb-6 pt-4">
        <h1 class="font-bold text-md">Job Description</h1>
        <div class="grid grid-cols-8 gap-2 mt-4">

            <div class="col-span-1">
                <label for="company" class="block mb-2 text-sm font-medium text-primary dark:text-white">Company: <span
                        class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="company" v-model="form.company"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input company" required />
                <span v-if="validationErrors.company" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
            <div class="col-span-1">
                <label for="deparment" class="block mb-2 text-sm font-medium text-primary dark:text-white">Department:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="department" v-model="form.department"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Department Name" required />
                <span v-if="validationErrors.department" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2 mt-4">
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Position:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="position" v-model="form.position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input position" required />
                <span v-if="validationErrors.position" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
            <div class="col-span-1">
                <label for="report-to" class="block mb-2 text-sm font-medium text-primary dark:text-white">Report to:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="report-to" v-model="form.reportTo"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Report to" required />
                <span v-if="validationErrors.reportTo" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
        </div>
        <div class="border border-b-[1px] my-4"></div>
        <h1 class="font-bold text-md">Responsibilities</h1>
        <div class="grid grid-cols-8 gap-2 mt-4">

            <div class="col-span-1">
                <label for="responsibilities"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Responsibilities: <span
                        class="text-red-500">*</span>
                </label>
            </div>
            <div class="col-span-7">
                <textarea id="responsibilities" rows="4" v-model="form.responsibilities"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write the responsibilities here" required></textarea>
                <span v-if="validationErrors.responsibilities" class="text-red-500 text-sm">Please fill in this
                    field.</span>
            </div>
        </div>
        <div class="border border-b-[1px] my-4"></div>
        <h1 class="font-bold text-md">Duties</h1>
        <div class="grid grid-cols-8 gap-2 mt-4">
            <div class="col-span-1">
                <label for="duties" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Duties:
                    <span class="text-red-500">*</span>
                </label>
            </div>
            <div class="col-span-7">
                <textarea id="duties" rows="4" v-model="form.duties"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write the duties here" required></textarea>
                <span v-if="validationErrors.duties" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
        </div>
        <div class="border border-b-[1px] my-4"></div>
        <h1 class="font-bold text-md">Competence</h1>
        <div class="grid grid-cols-9 gap-2 mt-4 space-x-2">

            <div class="col-span-1">
                <label for="education" class="block mb-2 text-sm font-medium text-primary dark:text-white">Education:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="education" v-model="form.education"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Education" required />
                <span v-if="validationErrors.education" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
            <div class="col-span-1">
                <label for="experience" class="block mb-2 text-sm font-medium text-primary dark:text-white">Experience:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="experience" v-model="form.experience"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input experience" required />
                <span v-if="validationErrors.experience" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
            <div class="col-span-1">
                <label for="skills" class="block mb-2 text-sm font-medium text-primary dark:text-white">Skills:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="skills" v-model="form.skills"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input skills" required />
                <span v-if="validationErrors.skills" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
        </div>
        <div class="grid grid-cols-8 space-x-2 mt-4">
            <div class="col-span-8 flex justify-end">
                <button @click.prevent="confirmExit"
                    class="bg-transparent text-rejected px-10 py-2 rounded-md border-[2px] border-rejected mr-4 font-bold">
                    Exit
                </button>
                <button @click.prevent="submitForm" class="bg-verified text-white px-10 py-2 rounded-md font-bold">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import Swal from 'sweetalert2';
    export default {
        data() {
            return {
                form: {
                    company: '',
                    position: '',
                    department: '',
                    position: '',
                    reportTo: '',
                    responsibilities: '',
                    duties: '',
                    education: '',
                    experience: '',
                    skills: '',
                },
                validationErrors: {},
            }
        },
        methods: {
            validateForm() {
                this.validationErrors = {};
                if (!this.form.company) this.validationErrors.company = true;
                if (!this.form.position) this.validationErrors.position = true;
                if (!this.form.department) this.validationErrors.department = true;
                if (!this.form.position) this.validationErrors.position = true;
                if (!this.form.reportTo) this.validationErrors.reportTo = true;
                if (!this.form.responsibilities) this.validationErrors.responsibilities = true;
                if (!this.form.duties) this.validationErrors.duties = true;
                if (!this.form.education) this.validationErrors.education = true;
                if (!this.form.experience) this.validationErrors.experience = true;
                if (!this.form.skills) this.validationErrors.skills = true;
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
            submitForm() {
                if (this.validateForm()) {
                    Swal.fire({
                        title: 'Are you sure you want to submit?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, Submit!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log('Form data saved:', this.form);
                            this.form = {
                                company: '',
                                position: '',
                                department: '',
                                reportTo: '',
                                responsibilities: '',
                                duties: '',
                                education: '',
                                experience: '',
                                skills: '',
                            };
                            Swal.fire({
                                title: 'Saved!',
                                text: 'Your data has been saved.',
                                confirmButtonColor: '#3085d6',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            });
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please fill in all required fields.',
                        icon: 'error',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'OK'
                    });
                }
            }
        },
    }
</script>