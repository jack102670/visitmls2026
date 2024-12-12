<template>
    <div class="grid grid-cols-8 px-2 pb-4 pt-2 gap-2">
        <div class="col-span-8 md:mx-8 ">
            <div class="py-2 ">
                <breadcrumbs :breadcrumbs="breadcrumbs" />
            </div>
            <div class="space-y-2 bg-primary p-4  rounded-md">
                <h1 class="font-bold text-md text-white uppercase"> Verify employee request</h1>
            </div>
        </div>
        <div class="col-span-8 bg-white border-[1px] min-h-full rounded-md p-4 md:mx-8">
            <VerifyTable />
        </div>
    </div>

</template>
<script>
import VerifyTable from "../../../components/EFormComponent/DashboardComponent/EFormTable.vue"
export default {
    components: {
        VerifyTable,
    },
    mounted() {
        // console.log('Mounted hook triggered');
        document.body.style.backgroundColor = '#F8FBFB';
    },
    beforeUnmount() {
        // console.log('Unmount hook triggered'); 
        document.body.style.backgroundColor = '#CED1DA';
    }
}
</script>