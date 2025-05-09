<template>
    <transition name="overlay">
        <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="closeSlideOver"></div>
    </transition>
    <transition name="slide">
        <div v-if="isOpen" class="fixed inset-y-0 right-0 w-1/3 bg-white dark:bg-gray-800 z-50 p-6 overflow-y-auto">
            <div class="flex justify-end items-center mb-2">
                <button @click="closeSlideOver" class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex justify-between items-center py-2">
                <p class="text-lg font-bold text-gray-800 dark:text-gray-200">
                    Update {{ claim.tabTitle }} Details
                </p>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="grid grid-cols-8 gap-2 w-full">
                    <div class="col-span-4">
                        <label for="date_event" class="font-medium text-sm">Date </label>
                        <input type="date" id="date_event" v-model="date_event"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="return_date" class="font-medium text-sm">Return date</label>
                        <input type="date" id="return_date" v-model="return_date"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="description" class="font-medium text-sm">Description</label>
                        <input type="text" id="description" v-model="overseas.description"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="meal_allowance" class="font-medium text-sm">Meal Allowance</label>
                        <input type="text" id="meal_allowance" v-model="overseas.meal_allowance"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="total_fee" class="font-medium text-sm">Total Amount(RM)</label>
                        <input type="text" id="total_fee" v-model="totalFee" readonly
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <div class="col-span-4">
                        <label for="files" class="font-medium text-sm">Uploaded Files</label>
                        <div v-if="overseas.files && overseas.files.length" class="mt-2">
                            <p class="text-xs text-gray-600">Click on a file to view:</p>
                            <ul class="list-disc list-inside">
                                <li v-for="(file, index) in overseas.files" :key="index">
                                    <a :href="file" target="_blank" class="text-blue-500 hover:underline text-xs">
                                        Download File {{ index + 1 }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-span-8">
                        <label class="font-medium text-sm">Other Expenses</label>
                        <div class="overflow-x-auto border border-gray-300 rounded-md mt-2">
                            <table class="min-w-full bg-white dark:bg-gray-800 border-collapse">
                                <thead>
                                    <tr class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                        <th class="py-2 px-4 text-left border text-sm font-medium">#</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Expense Name</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Description</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Foreign Currency</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Exchange Rate</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Amount(Foreign Currency)</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Amount(RM)</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(expenses, index) in paginatedExpenses || []"
                                        :key="expenses.id" class="border-b dark:border-gray-600">
                                        <td class="py-2 px-4 text-xs">{{ index + 1 + (currentPage - 1) * pageSize }}
                                        </td>
                                        <td class="py-2 px-4 text-xs">{{ expenses.name }}</td>
                                        <td class="py-2 px-4 text-xs">{{ expenses.description }}</td>
                                        <td class="py-2 px-4 text-xs">{{ expenses.foreign_currency }}</td>
                                        <td class="py-2 px-4 text-xs">{{ expenses.exchange_rate }}</td>
                                        <td class="py-2 px-4 text-xs">{{ expenses.currency_total }}</td>
                                        <td class="py-2 px-4 text-xs">{{ expenses.amount }}</td>
                                        <td class="py-2 px-4 text-xs ">
                                        <!-- Edit Button -->
                                        <a @click="editExpenses(expenses)"
                                        class="bg-green-600 hover:bg-green-700 text-white transition duration-300 px-2 py-1 rounded-md cursor-pointer inline-flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 4h2m2 0h.01M13 4l7 7-9 9H4v-9l9-9z" />
                                        </svg>    
                                        </a>
                                        </td>
                                        
                                    </tr>
                                    <tr class="font-semibold bg-gray-100 dark:bg-gray-700">
                                    <td colspan="5" class="py-2 px-4 text-right text-sm">Total Amount</td>
                                    <td class="py-2 px-4 text-sm">RM {{ totalAmount }}</td>
                                    <td></td>
                                    </tr>


                                    
                                </tbody>
                            </table>
                        </div>
                        <div class="flex justify-between items-center mt-3">
                            <button @click="prevPage" :disabled="currentPage === 1"
                                class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded disabled:opacity-50">
                                Previous
                            </button>
                            <span class="text-sm text-gray-700 dark:text-gray-300">Page {{ currentPage }} of {{
                                totalPages }}</span>
                            <button @click="nextPage" :disabled="currentPage === totalPages"
                                class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded disabled:opacity-50">
                                Next
                            </button>
                        </div>
                    </div>


                    <div class="col-span-8">
                        <label for="comment" class="font-medium text-sm">Comment</label>
                        <textarea type="text" id="comment" v-model="overseas.comment" readonly
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-50 bg-gray-100 cursor-not-allowed"></textarea>
                    </div>


                    <div class="col-span-8 justify-end items-center flex space-x-2 py-4 ">
                        <button
                            class="w-full bg-transparent border-2 border-red-600 hover:bg-red-700 text-red-600 hover:text-white hover:border-2 font-bold py-2 px-4 rounded-md"
                            @click="closeSlideOver">
                            Cancel
                        </button>
                        <button type="submit"
                            class="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                            Update
                        </button>
                    </div>
                </div>
            </form>
            <transition name="fade">
                <div v-if="isExpensesFormOpen"
                    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 class="text-lg font-bold mb-4">Edit Expenses</h2>
                        <div>
                            <label class="block text-sm font-medium">Expenses Name</label>
                            <input type="text" v-model="selectedExpenses.name" class="w-full border rounded p-2">
                        </div>

                        <div>
                            <label class="block text-sm font-medium">Description</label>
                            <input type="text" v-model="selectedExpenses.description" class="w-full border rounded p-2">
                        </div>

                        <div>
                        <label class="block text-sm font-medium">Foreign Currency</label>
                        <select v-model="selectedExpenses.foreign_currency" class="w-full border rounded p-2">
                            <option v-for="currency in currencyOptions" :key="currency.value" :value="currency.value">
                                {{ currency.label }}
                              </option>
                        </select>
                        </div>

                        <div>
                            <label class="block text-sm font-medium">Exchange Rate</label>
                            <input type="text" v-model="selectedExpenses.exchange_rate" @input="updateAmountsInRM(selectedExpenses)" class="w-full border rounded p-2">
                        </div>

                        <div>
                            <label class="block text-sm font-medium">Amount(Foreign Currency)</label>
                            <input type="text" v-model="selectedExpenses.currency_total" @input="updateAmountsInRM(selectedExpenses)" class="w-full border rounded p-2">
                        </div>

                        <div>
                            <label class="block text-sm font-medium">Amount(RM)</label>
                            <input type="text" v-model="selectedExpenses.amount" class="w-full border rounded p-2">
                        </div>
                        

                        <div class="flex justify-end mt-4 space-x-2">
                            <button @click="isExpensesFormOpen = false"
                                class="bg-gray-400 text-white px-4 py-2 rounded">
                                Cancel
                            </button>
                            <button @click="saveExpenses(selectedExpenses)" class="bg-blue-600 text-white px-4 py-2 rounded">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </transition>

        </div>
    </transition>
</template>
<script>
// import { getEntertainment, updateEntertainment } from '@/api/EclaimAPI';
import Swal from "sweetalert2";
import axios from "axios";
import { id } from "intl-tel-input/i18n";

export default {
    emits: ['close', 'closeSlideOver', 'refresh-claims'],
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
        claim: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            
            overseas: {
                description: '',
                meal_allowance: '',
                date_event: '',
                return_date: '',
                total_fee: '',
                comment: '',
                currencyOptions: [], // For currency dropdown
                oem: [],
                files: [],
            
            

            },
            
            currentPage: 1,
            pageSize: 5,
            //overseas: {},
            
            isExpensesFormOpen: false,
            selectedExpenses: null

        }
    },
    mounted() {
        const refNo = this.$route.params.rn;
        console.log("RefNo:", refNo);

        // this.updateEntertainment(refNo),
        this.fetchOverseasData(refNo)

        // if (this.claim?.refNo) {
        //     this.fetchEntertainment();
        // }
    },
    computed: {
        totalAmount() {
            return this.paginatedExpenses.reduce((sum, expenses) => {
            console.log('Each expense:', expenses);
            const value = parseFloat(expenses.amount); 
            console.log('Parsed value:', value);
            return sum + (value || 0);
            }, 0).toFixed(2);
            // console.log('Total Amount:', sum);
        },
        totalFee() {
        const meal = parseFloat(this.overseas.meal_allowance) || 0;
        const total = parseFloat(this.totalAmount) || 0;
        return (meal + total).toFixed(2);
    },
        date_event: {
            get() {
            const d = new Date(this.overseas.date_event);
            if (isNaN(d)) return "";
            return d.toISOString().split("T")[0];
            },
            set(value) {
            this.overseas.date_event = value;
            },
        },
        return_date: {
            get() {
            const d = new Date(this.overseas.return_date);
            if (isNaN(d)) return "";
            return d.toISOString().split("T")[0];
            },
            set(value) {
            this.overseas.return_date = value;
            },
        },
        totalPages() {
            return Math.ceil((this.overseas?.oem?.length || 0) / this.pageSize);
        },
        paginatedExpenses() {
            if (!this.overseas?.oem) {
                return [];
            }
            const start = (this.currentPage - 1) * this.pageSize;
            return this.overseas.oem.slice(start, start + this.pageSize);
        },
    },
    methods: {
        updateAmountsInRM(expenses) {
            const rate = parseFloat(expenses.exchange_rate) || 0;
            const foreign = parseFloat(expenses.currency_total) || 0;
            expenses.amount = (rate * foreign).toFixed(2);
            // this.selectedExpenses = { ...expenses };
   
        },

        // updateTotalFee() {
        //     const meal = parseFloat(this.overseas.meal_allowance) || 0;
        //     const total = parseFloat(this.totalAmount) || 0;
        //     this.overseas.total_fee = (meal + total).toFixed(2);
        // },
        async fetchCurrencies() {
            try {
                const response = await fetch(
                "https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json"
                );
                const data = await response.json();
                this.currencies = Object.values(data); // Store the currency objects

                // Map the currencies to the format required for the dropdown
                this.currencyOptions = this.currencies.map((currency) => ({
                value: `${currency.code} (${currency.symbol_native})`, // Assuming each currency has a 'code' field
                label: `${currency.code} (${currency.symbol_native})`, // Use native symbol for display
                }));
            } catch (error) {
                console.error("Error fetching currencies:", error);
            }
            },

        async editExpenses(expenses) {
            await this.fetchCurrencies(); 
            this.selectedExpenses = { ...expenses };
            this.isExpensesFormOpen = true;
            console.log("Editing expenses:", this.selectedExpenses); // Debugging log
        },
        saveExpenses(expenses) {
            console.log("Staff before saving:", expenses); // Debugging log
            const index = this.overseas.oem.findIndex(s => s.id === expenses.id);
            if (index !== -1) {
                this.overseas.oem.splice(index, 1, expenses); // Update existing expenses
                console.log("Updated expenses:", this.overseas.oem[index]); // Debugging log
            } else {
                this.overseas.oem.push(expenses);
            }
            this.selectedExpenses = null;
            this.isExpensesFormOpen = false;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        closeSlideOver() {
            this.$emit('close');
        },

        async fetchOverseasData(refNo) {
   
        const response = await axios.get(`http://172.28.28.116:6239/api/User/GetOverseasOutstation/${refNo}`);
        console.log("Overseas  Data:", response.data);

        const dataArray = response.data.result;

        if (Array.isArray(dataArray)) {
        const matchingUniqueID = dataArray.find(
            record => record.unique_code === this.claim.unique_code
        );

        if (matchingUniqueID) {
            
            this.overseas = {
            description: matchingUniqueID.description,
            meal_allowance: matchingUniqueID.meal_allowance,
            date_event: matchingUniqueID.date_event,
            return_date: matchingUniqueID.return_date,
            total_fee: matchingUniqueID.total_fee,
            reference_number: matchingUniqueID.reference_number,
            unique_code: matchingUniqueID.unique_code,
            comment: matchingUniqueID.comment,
            files: matchingUniqueID.files,
            oem: matchingUniqueID.oem || [],
            
            };

            // const isCustomType = !this.RefreshmentType.includes(matchingUniqueID.refreshment_type);
            // if (isCustomType) {
            //     // Display it as "OTHERS" but store the real custom value
            //     this.overseas.other_type = matchingUniqueID.refreshment_type;
            //     this.overseas.refreshment_type = "Others";
            // }

            // this.ent_refNumber = matchingUniqueID.ent_refNumber;
        } else {
            console.log("No matching unique_code found");
        }
        } else {
        console.error("Expected an array but got:", typeof dataArray, dataArray);
        }

        },
        async handleSubmit() {
            try {
                // Prepare the data to be submitted
                const submitData = {
                    description: this.overseas.description,
                    meal_allowance: this.overseas.meal_allowance,
                    date_event: this.date_event,
                    return_date: this.return_date,
                    total_fee: isNaN(parseFloat(this.totalFee)) ? 0 : parseFloat(this.totalFee),
                    reference_number: this.overseas.reference_number,
                    unique_code: this.overseas.unique_code,
                    // ent: this.entertainment.ent,
                    oem: this.overseas.oem,
                    // participants:[
                    //             {
                    //                 id: this.participant.id,
                    //                 name: "",
                    //                 company_name: "",
                    //             }
                    //         ],
                    files: this.overseas.files || []
                    // participants: this.participants
                };

                console.log("Submitting Overseas payload:", submitData);

                // Make the PUT request to update the entertainment data
                const response = await axios.put('http://172.28.28.116:6239/api/User/UpdateOverseasOutstation', submitData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                // Handle the response based on success or failure
                if (response.data && response.data.result) {
                    console.log("Update Overseas data:", response.data.result);
                    Swal.fire({
                        title: 'Success',
                        text: 'Overseas updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#dc2626',
                    });
                    this.$emit('refresh-claims', this.claim.refNo);
                    this.closeSlideOver();
                } else {
                    console.log("Update Overseas data not found");
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to update Overseas',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#dc2626',
                    });
                }
            } catch (error) {
                console.error("Error submitting data:", error);
                let errorMessage = "An unexpected error occurred.";
                if (error.response) {
                    errorMessage = error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`;
                } else if (error.request) {
                    errorMessage = "No response received from the server.";
                } else {
                    errorMessage = error.message;
                }

                Swal.fire({
                    title: 'Submission Failed',
                    text: errorMessage,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#dc2626',
                });
            }
        },




    

    watch: {
        isOpen(newVal) {
            if (newVal) this.fetchOverseasData();
        },

        
    },
    },

}
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
}

.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

.overlay-enter-to,
.overlay-leave-from {
    opacity: 1;
}
</style>