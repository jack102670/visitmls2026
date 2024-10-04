<template>
    <section class="flex">
        <div class="w-full">
            <div class="grid grid-cols-12 pt-4 px-4 gap-2">
                <!-- First div (takes up 6 columns) -->
                <div class="col-span-6 text-center bg-white rounded-md">
                    test test1
                </div>

                <!-- Second div (takes up 6 columns) -->
                <div class="col-span-6 text-center bg-white rounded-md">
                    test test2
                </div>
            </div>
            <div class="grid grid-cols-12 px-4 pt-2 gap-2">
                <div class="col-span-12 text-center bg-white h-screen rounded-md p-4">
                    <TableRequest />


                </div>

            </div>
        </div>
    </section>
</template>

<script>
import TableRequest from "../../../components/E-form-component/DashboardTable/EFormTable.vue"
export default {

    components: {
        TableRequest,
    },



    data() {
        return {
            loading: false,
        }
    }
}
</script>