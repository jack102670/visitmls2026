<template>
    <div class="space-y-4 mt-2 rounded-md  px-4 py-2 border-[1px] rounded-md">
        <h1 class="font-bold text-md py-2">A. Position Requirements</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label for="position" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Position to
                    be
                    filled: </label>
                <div><p class="text-sm">{{ form.position || '-' }}</p></div>
            </div>
            <div>
                <label for="company" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Company Name:
                </label>
                <div><p class="text-sm">{{ form.company || '-' }}</p></div>
            </div>
            <div class="">
                <label for="dateRequired" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Date
                    Required:
                </label>
                <div><p class="text-sm">{{ form.dateRequired || '-' }}</p></div>
            </div>
            <div>
                <label for="department" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Department:
                </label>
                <div><p class="text-sm">{{ form.department || '-' }}</p></div>
            </div>
            <div>
                <label for="numberPersonnel" class="block mb-2 text-sm font-semibold text-primary dark:text-white">No of
                    Personnel
                    Required:</label>
                <div><p class="text-sm">{{ form.numberPersonnel || '-' }}</p></div>
            </div>
            <div>
                <label for="location" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Location:
                </label>
                <div><p class="text-sm">{{ form.location || '-' }}</p></div>
            </div>
            <div>
                <label for="basicSalary" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Basic
                    Salary
                    Propose:</label>
                <div><p class="text-sm">RM{{ form.basicSalary || '-' }}</p></div>
            </div>
        </div>
        <hr class="w-full border-b border-b-[1px]" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label for="requisitionPurpose" class="block mb-2 text-sm font-semibold text-primary dark:text-white">
                    Requisition if for: </label>
                <div class="flex flex-wrap gap-4">
                    <div>
                        <p class="text-sm">
                        {{
                            form.requisitionPurpose === 'newRecruitment'
                                ? 'New Recruitment'
                                : form.requisitionPurpose === 'temporary'
                                    ? 'Temporary'
                                    : form.requisitionPurpose === 'replacement'
                                        ? 'Replacement'
                                        : 'Select a purpose'
                        }}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <label for="manpowerBudget" class="block mb-2 text-sm font-semibold text-primary dark:text-white">
                    Manpower request is: </label>
                <div class="flex flex-wrap gap-4">
                    <p class="text-sm">
                    {{
                        form.manpowerBudget === 'budgeted'
                            ? 'Budgeted'
                            : form.manpowerBudget === 'unbudgeted'
                                ? 'UnBudgeted'
                                : 'Select a purpose'
                    }}
</p>
                </div>
            </div>
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-primary dark:text-white">Name
                    of Person to be replaced: </label>
                <div><p class="text-sm">{{ form.name }}</p></div>
            </div>
            <div>
                <label for="reasonUnbudget"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white">Reason
                    for UnBudgeted:
                </label>
                <div
                    v-if="!form.reasonUnbudget || form.reasonUnbudget.length === 0 || form.reasonUnbudget.every(item => item.trim() === '')">
                    <span class="block text-gray-500">-</span>
                </div>
                <div v-else><p class="text-sm">{{ form.reasonUnbudget }}</p></div>
            </div>
            <div class="">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Job Description & Organization Chart:
                </label>
                <a :href="downloadLink" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon :icon="['fas', 'file-export']" class="cursor-pointer" />
                </a>
            </div>
        </div>
        <div class="grid grid-cols-1">
            <hr class="w-full border-b border-b-[1px] my-4" />
            <div>
                <label for="requestReason"
                    class="block mb-2 text-sm font-semibold text-primary dark:text-white italic">Justification / Reason
                    for request : </label>
                <div v-if="!form.requestReason || form.requestReason.trim() === ''">
                    <span class="block text-gray-500">-</span>
                </div>
                <div v-else><p class="text-sm">{{ form.requestReason }}</p></div>
            </div>
        </div>
    </div>
</template>
<script>
import { getPersonnelRequisitonForm, getUploadFile } from '@/api/EFormApi';
import { store } from '@/views/store.js';

export default {
    props: ['formData'],
    data() {
        return {
            fileName: '',
            form: this.formData.sectionA || {
                position: '',
                company: '',
                status: '',
                department: '',
                location: '',
                numberPersonnel: '',
                basicSalary: '',
                requisitionPurpose: '',
                manpowerBudget: '',
                dateRequired: '',
                name: '',
                reasonUnbudget: '',
                requestReason: '',
            },
            uniqueKey: '',
            downloadLink: null,
            validationErrors: {},
        }
    },
    mounted() {
        const refNo = this.$route.params.refNo;
        this.getPersonnelRequisitonForm(refNo);
        this.getUploadFile();

    },
    methods: {
        async getPersonnelRequisitonForm(refNo) {
            try {
                const data = await getPersonnelRequisitonForm(refNo);
                if (data) {
                    this.form = {
                        ...data.form,
                        ...data,
                    };
                    this.uniqueKey = data.uniqueKey;
                    if (this.uniqueKey) {
                        this.getUploadFile(this.uniqueKey);
                    }
                }
            } catch (error) {
                console.error("Error loading training evaluation:", error);
                throw error;
            }
        },

        async getUploadFile(uniqueKey) {
            const userId = store.getSession().userDetails.userId;
            try {
                const result = await getUploadFile(userId, uniqueKey);
                if (result && result.length > 0) {
                    this.downloadLink = result[0];
                }
            } catch (error) {
                console.error("Error loading Upload files:", error);
                throw error;
            }
        }
    },

};
</script>