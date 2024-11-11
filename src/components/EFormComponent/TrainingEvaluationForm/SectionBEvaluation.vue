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
                    <textarea id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your comments here"></textarea>

                </div>
            </div>
            <div class="flex justify-end">
                    <button @click.prevent="confirmExit"
                        class="bg-transparent text-dark px-10 py-2 rounded-md border-[2px] border-rejected mr-4 font-bold">
                        Exit
                    </button>
                    <button class="bg-verified text-white px-10 py-2 rounded-md font-bold">
                        Submit
                    </button>
                </div>
        </div>
    </div>

</template>
<script>



</script>