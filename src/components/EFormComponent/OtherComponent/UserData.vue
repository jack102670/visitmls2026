
<template>
    <div class="space-y-4 border-[1px] rounded-md py-4 px-4">
        <h1 class="font-bold text-md text-primary">Employee Details</h1>

        <!-- Grid for desktop mode -->
        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Name:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">{{ user.name }}</label>
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Email address:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">{{ user.email_address }}</label>
            </div>
        </div>

        <!-- Stack layout for mobile mode -->
        <div class="block sm:hidden grid grid-cols-1 gap-2">
            <div class="col-span-1">
                <label class="block text-xs font-medium text-primary dark:text-white">Name:</label>
            </div>
            <div class="col-span-1">
                <label class="block text-xs font-medium text-primary dark:text-white">{{ user.name }}</label>
            </div>
            <div class="col-span-1">
                <label class="block text-xs font-medium text-primary dark:text-white">Email address:</label>
            </div>
            <div class="col-span-1">
                <label class="block text-xs font-medium text-primary dark:text-white">{{ user.email_address }}</label>
            </div>
        </div>

        <!-- Grid for desktop mode -->
        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="position" class="block text-sm font-medium text-primary dark:text-white">Department
                    Name:</label>
            </div>
            <div class="col-span-3">
                <label for="position" class="block text-sm font-medium text-primary dark:text-white">{{ user.department }}</label>
            </div>
            <div class="col-span-1">
                <label for="position" class="block text-sm font-medium text-primary dark:text-white">Branch:</label>
            </div>
            <div class="col-span-3">
                <label for="position" class="block text-sm font-medium text-primary dark:text-white">{{ user.branch }}</label>
            </div>
        </div>

        <!-- Stack layout for mobile mode -->
        <div class="block sm:hidden grid grid-cols-1 gap-2">
            <div class="col-span-1">
                <label for="position" class="block text-xs font-medium text-primary dark:text-white">Department
                    Name:</label>
            </div>
            <div class="col-span-1">
                <label for="position" class="block text-xs font-medium text-primary dark:text-white">{{ user.department }}</label>
            </div>
            <div class="col-span-1">
                <label for="position" class="block text-xs font-medium text-primary dark:text-white">Branch:</label>
            </div>
            <div class="col-span-1">
                <label for="position" class="block text-xs font-medium text-primary dark:text-white">{{ user.branch }}</label>
            </div>
        </div>
                <!-- Grid for desktop mode -->
                <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="position"
                    class="block text-sm font-medium text-primary dark:text-white">Employee ID:</label>
            </div>
            <div class="col-span-3">
                <label for="position" class="block text-sm font-medium text-primary dark:text-white">{{ user.emp_id }}</label>
            </div>
        </div>

        <!-- Stack layout for mobile mode -->
        <div class="block sm:hidden grid grid-cols-1 gap-2">
            <div class="col-span-1">
                <label for="position"
                    class="block text-xs font-medium text-primary dark:text-white">Employee ID:</label>
            </div>
            <div class="col-span-1">
                <label for="position" class="block text-xs font-medium text-primary dark:text-white">{{ user.emp_id }}</label>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        fetchHrData
    } from '@/api/EFormApi';
    import { store } from '@/views/store.js';
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email_address: '',
                    department: '',
                    branch: '',
                    emp_id: '',
                },
                profile_picture: '',
                status: '',
                tempEmail: '',
                loading: false,
                loadingText: '',
            };
        },
        methods: {
            async fetchHrData() {
                const username_id = store.getSession().userDetails.userId;
                this.loadingText = 'Fetching';
                this.loading = true;

                try {
                    const data = await fetchHrData(username_id);
                if (data) {

                    this.user = data;
                    this.profile_picture = data.profile_picture;
                    this.name = data.name;
                    this.email_address = data.email_address;
                    this.department = data.department;
                    this.branch = data.branch;
                    this.emp_id = data.emp_id;

                }
                // console.log("HR data:", this.user);
                }
                catch (error) {
                console.error('Error fetching HR data:', error);
                throw new Error('Failed to fetch HR data. Please try again.');
            } finally {
                this.loading = false;
            }
            },

        },
        mounted() {
            this.fetchHrData();
        },
    }
</script>