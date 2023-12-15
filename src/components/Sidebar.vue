<template>
    <nav class="fixed top-0 z-50 w-full bg-[#F8F9FA] dark:bg-[#191A1D] border-b border-gray-200  dark:border-gray-700 ">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                        type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <router-link to="/" class="flex ms-2 md:me-24">
                        <img src="@/assets/images/pkt-blue-log-crop.jpg" class="h-8 me-3" alt="FlowBite Logo" />
                        <span
                            class="self-center text-xl font-bold sm:text-2xl whitespace-nowrap text-[#006BB3] dark:text-white">PKT</span>
                    </router-link>


                </div>
                <div class="flex gap-3">
                    <div class="">
                        <button @click="toggleDropdown"
                            class="relative z-10 block rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 focus:outline-none">
                            <svg class="h-5 w-5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </button>

                        <div v-show="dropdownOpen" @click="closeDropdown" class="fixed inset-0 h-full w-full z-10"></div>

                        <div v-show="dropdownOpen"
                            class="absolute right-0 mt-2  bg-white dark:bg-slate-800 rounded-md shadow-lg overflow-hidden z-20"
                            style="width:20rem;">
                            <div class="py-2">
                                <!-- Example Notification Item -->
                                <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                                    <img class="h-8 w-8 rounded-full object-cover mx-1"
                                        src="https://github.com/adamwathan.png" alt="avatar">
                                    <p class="text-gray-600 text-sm mx-2 dark:text-white">
                                        <span class="font-bold">John Doe</span> commented on your post. 2h
                                    </p>
                                </a>
                                <!-- Add more notification items as needed -->
                            </div>
                            <a href="#" class="block bg-gray-800 text-white text-center font-bold py-2">See all
                                notifications</a>
                        </div>
                    </div>
                    <div class="ml-auto">

                        <button id="theme-toggle" type="button"
                            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                            @click="toggleTheme">
                            <svg id="theme-toggle-dark-icon" class="w-5 h-5" :class="{ hidden: isLightTheme }"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="theme-toggle-light-icon" class="w-5 h-5" :class="{ hidden: !isLightTheme }"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        class="flex items-center rounded-lg justify-center  hover:bg-gray-300 dark:hover:bg-gray-700 group">
                        <div class="relative ">
                            <div v-if="open" @click="open = false" class="fixed inset-0"></div>
                            <button @click="open = !open" class="relative flex items-center focus:outline-none">
                                <img src="https://github.com/adamwathan.png" alt="Adam Wathan's avatar"
                                    class="rounded-full h-8 w-8">
                                <span class="ml-2 font-medium dark:text-white">Adam Wathan</span>
                                <svg class="ml-1 h-5 w-5 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
                                </svg>
                            </button>
                            <transition enter-active-class="transition-all transition-fastest ease-out-quad"
                                leave-active-class="transition-all transition-faster ease-in-quad"
                                enter-class="opacity-0 scale-70" enter-to-class="opacity-100 scale-100"
                                leave-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-70">
                                <div v-if="open"
                                    class="origin-top-right absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-md py-2">
                                    <ul>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-[#E6F5FF] hover:text-black dark:text-white">Profile</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-[#E6F5FF] hover:text-black dark:text-white">Account
                                                settings</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2  hover:bg-[#E6F5FF] hover:text-black dark:text-white">Sign
                                                out</a>
                                        </li>
                                    </ul>
                                </div>
                            </transition>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    </nav>

    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-[#191A1D] dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-autobg-[#F8F9FA] dark:bg-[#191A1D]">
            <ul class="space-y-2 font-medium">
                <li>
                    <router-link :to="{ name: 'Home' }"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-[#ECF6FF] hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9" />
                        </svg>
                        <span class="ms-3">HOME</span>
                    </router-link>



                </li>
                <li>
                    <router-link :to="{ name: 'Myrequest' }"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-[#ECF6FF] hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <!-- Replace the existing SVG code with the copied SVG code for the "activity" icon -->
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                d="M1 7h18M4 4h.01M7 4h.01M10 4h.01M3 17h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">MY REQUEST</span>
                        <span
                            class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">1</span>
                    </router-link>

                </li>
                <li>
                    <router-link :to="{ name: 'Newrequest' }"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-[#ECF6FF] hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5" />
                            </svg>
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">NEW REQUEST</span>
                        <span
                            class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                    </router-link>
                </li>
                <li class="">
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-[#ECF6FF] hover:bg-gray-100 dark:hover:bg-gray-700 group signup-link">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m12 7 3-3-3-3m0 12H5.5a4.5 4.5 0 1 1 0-9H14" />
                        </svg>

                        <span class="flex-1 ms-3 whitespace-nowrap">Log Out</span>
                    </a>
                </li>



            </ul>

        </div>

    </aside>

    <div class="p-4 sm:ml-64  bg-gray-50 dark:bg-gray-800">

    </div>
</template>
<script>
export default {
    name: 'SidebarComponents',
    data() {
        return {
            open: false,
            isLightTheme: true,
            dropdownOpen: false,
        };
    },
    props: {
        theme: {
            type: String,
            required: true,
        },
    },
    methods: {
        toggleTheme() {
            const root = document.documentElement;
            const isDarkMode = root.classList.contains('dark');

            if (isDarkMode) {
                root.classList.remove('dark');
                root.removeAttribute('data-mode');
            } else {
                root.classList.add('dark');
                root.setAttribute('data-mode', 'dark');
            }

            this.isLightTheme = !isDarkMode;

            // Store the current theme in localStorage
            localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
        },
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        closeDropdown() {
            this.dropdownOpen = false;
        },
    },
    created() {
        // Retrieve the theme from localStorage when the component is created
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme) {
            // Apply the stored theme without toggling
            this.isLightTheme = storedTheme === 'light';
            this.isLightTheme = storedTheme === 'dark';

            const root = document.documentElement;
            if (this.isLightTheme) {
                root.classList.remove('light');
                root.removeAttribute('data-mode');
            } else {
                root.classList.add('dark');
                root.setAttribute('data-mode', 'dark');
            }
        }
    },
};

</script>