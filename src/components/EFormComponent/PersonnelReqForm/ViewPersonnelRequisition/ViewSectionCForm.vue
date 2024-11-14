<template>
    <div class="space-y-4 mt-2 border-[1px] rounded-md px-4 py-2">
        <h1 class="font-bold text-md py-2">C. Verification / Approval</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <label class="text-sm font-semibold text-primary dark:text-white sm:mr-1">
                        Name:</label>
                    <p class="text-sm">{{ form.requesterName }}</p>
                </div>
            </div>
            <div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <label class="text-sm font-semibold text-primary dark:text-white sm:mr-1">
                        Designation:</label>
                    <p class="text-sm">{{ form.requesterDesignation }}</p>
                </div>
            </div>
            <div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <label class="text-sm font-semibold text-primary dark:text-white sm:mr-1">
                        Department:</label>
                    <p class="text-sm">{{ form.requesterDept }}</p>
                </div>
            </div>
            <div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <label class="text-sm font-semibold text-primary dark:text-white sm:mr-1">
                        Date Requested:</label>
                    <p class="text-sm">{{ formattedDateRequested }}</p>
                </div>
            </div>
        </div>
        <hr class="border-[1px]" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        </div>
    </div>
</template>

<script>
import { getPersonnelRequisitonForm } from '@/api/EFormApi';
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
        };
    },
    computed: {
        formattedDateRequested(){
            if (!this.form.dateRequested) return "";
            const date = new Date(this.form.dateRequested);
            const day = String (date.getDate()).padStart(2, '0');
            const month = String (date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }

    },
    mounted(){
        const refNo = this.$route.params.refNo;
        this.getPersonnelRequisitonForm(refNo);
    },
    methods: {
        async getPersonnelRequisitonForm(refNo){
            try {
                const data = await getPersonnelRequisitonForm(refNo);
                if (data){
                    this.form = {
                        ...data.form,
                        ...data,
                    };
                }
            }catch (error){
                    console.error("Error loading training evaluation:", error);
                    throw error;
                }
        }
    }

}
</script>