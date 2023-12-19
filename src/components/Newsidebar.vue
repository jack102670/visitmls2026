<template>
    <!-- component -->
    <aside
        class="fixed top-0 left-0 z-40 w-64 h-screen flex flex-col px-4 py-8 overflow-y-auto bg-[#160959] border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <a href="/" class="mx-auto">
            <img class=" rounded w-auto h-19 sm:h-20" src="@/assets/images/pkt-logo-white.jpg" alt="">
        </a>
        <div class=" absolute top-0 right-0">
                    <button id="theme-toggle" type="button"
                        class="text-white dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
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



        <div class="flex flex-col items-center mt-1 -mx-2">
                    <h4 class="mx-2 mt-2 font-medium text-slate-200 dark:text-gray-200">John Doe</h4>
            <p class="mx-2 mt-1 text-sm font-medium text-slate-400 dark:text-gray-400">john@example.com</p>
        </div>

        <div class="flex flex-col justify-between flex-1 mt-6">
            <nav>
               <router-link to="/Dashboard"

                    class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span class="mx-4 font-medium">Dashboard</span>
                </router-link>

              

                <router-link
                    class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
                    :to="{ name: 'Managerequest' }">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span class="mx-4 font-medium">Tickets</span>
                </router-link>

                <a class="flex items-center px-4 py-2 mt-5 text-slate-200 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#190a70] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-400"
                    href="#">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span class="mx-4 font-medium">Log Out</span>
                </a>

             
            </nav>
        </div>
    </aside>
</template>

<script>


export default {

    name: 'NewsidebarComponent',
    data() {
        return {
            open: false,
            isLightTheme: true,

        };
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