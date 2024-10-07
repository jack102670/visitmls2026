<template>
<aside>
    <ESidebar />
</aside>
    <section class="flex">

        <div class="w-full">
            <div class="grid grid-cols-8 pt-4 px-4 gap-2">
                <div class="col-span-3 bg-white rounded-md">
                    <div class="p-4 gap-2 space-y4">
                        <h1 class="font-bold text-2xl text-primary">
                            PKT GROUP COMPANIES
                        </h1>
                        <p class="text-sm text-primary font-semibold">Other employee E-Forms</p>
                        <button class="bg-primary text-white font-bold p-3 border-[2px] rounded-md hover:bg-transparent hover:border-primary hover:text-primary hover:border-[2px]">
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        <span> New Request</span>
                        </button>

                    </div>
                </div>
                <div class=" col-span-5 bg-white rounded-md justify-center items-center p-4 space-y-2">
                    <h4 class="text-md font-bold text-primary">Request Status</h4>
                    <div class=" flex grid grid-cols-5 gap-2 text-center">
                        <div class="bg-transparent rounded-md border-[2px] border-pending p-4 ">
                            <p class="text-4xl text-primary font-semibold">0</p>
                            <p class="text-sm text-primary font-semibold">Pending</p>
                        </div>
                        <div class="bg-transparent rounded-md border-[2px] border-rejected p-4">
                            <p class="text-4xl text-primary font-semibold">0</p>
                            <p class="text-sm text-primary font-semibold">Rejected</p>
                        </div>
                        <div class="bg-transparent rounded-md border-[2px] border-inProgress p-4">
                            <p class="text-4xl text-primary font-semibold">0</p>
                            <p class="text-sm text-primary font-semibold">In Progress</p>
                        </div>
                        <div class="bg-transparent rounded-md border-[2px] border-verified p-4">
                            <p class="text-4xl text-primary font-semibold">0</p>
                            <p class="text-sm text-primary font-semibold">Verified</p>
                        </div>
                        <div class="bg-transparent rounded-md border-[2px] border-primary p-4">
                            <p class="text-4xl text-primary font-semibold">0</p>
                            <p class="text-sm text-primary font-semibold">Completed</p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="grid grid-cols-8 px-4 pt-2 gap-2">
                <div class="col-span-8 text-center bg-white h-screen rounded-md p-4">
                    <TableRequest />
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import TableRequest from "../../../components/EFormComponent/DashboardTable/EFormTable.vue"
import ESidebar from "../../../components/EFormComponent/eNavbar/EFormNavbar.vue"
export default {

    components: {
        TableRequest,
        ESidebar,
    },



    data() {
        return {
            loading: false,
        }
    }
}
</script>