<template>
    <div class="grid grid-cols-8 px-2 pb-4 pt-2 gap-2">
        <div class="col-span-8 bg-white border-[1px] rounded-md p-4">
            <div>
                <h1 class="font-bold text-2xl text-primary">
                    PKT GROUP COMPANIES
                </h1>
                <p class="text-sm text-primary font-semibold">Verify employee request</p>
            </div>
        </div>
        <div class="col-span-8 bg-white border-[1px] min-h-full rounded-md p-4">
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