<template>
  <div
    class="login min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div
        class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
      >
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">Vendor Login</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div class="relative">
                <input
                  required
                  v-model="userEmail"
                  autocomplete="off"
                  id="email"
                  name="email"
                  type="text"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="user@address.com"
                />
                <label
                  for="email"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >Email</label
                >
              </div>
              <div class="relative">
                <input
                  required
                  v-model="password"
                  autocomplete="off"
                  id="password"
                  name="password"
                  type="password"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                />
                <label
                  for="password"
                  type="password"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >Password</label
                >
              </div>

              <div class="relative">
                <div v-show="showLoginButton">
                  <button
                    @click="login()"
                    type="button"
                    class="bg-blue-500 text-white rounded-md px-2 py-1 items-center"
                  >
                    Login
                  </button>
                </div>
                <div v-show="showLoadingButton">
                  <button
                    disabled=""
                    type="submit"
                    class="text-center rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      ></path>
                    </svg>
                    Loading....
                  </button>
                </div>
              </div>
              <p class="text-sm text-gray-500 mt-10">
                Don't have an account?
                <router-link
                  :to="{ name: 'Vendorsingup' }"
                  class="text-[#4F46E5] font-bold"
                  >Sign Up</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../views/store.js";
export default {
  name: "LoginViews",

  data() {
    return {
      showLoginButton: true,
      showLoadingButton: false,
      userEmail: "",
      password: "",
      token: "",
    };
  },
  mounted() {
    //const session = store.getSession();
  },
  methods: {
     login() {
      this.showLoginButton = false;
      this.showLoadingButton = true;

   
        // Send login request for vendor
        axios.post(
          "http://172.28.28.91:8085/api/VendorCredentials/VENDOR SIGN IN",
          {
            userEmail: this.userEmail,
            password: this.password,
          }
        ).then((response) => {
        
          // console.log("Server response:", response.data);

          if (response.data.userId != null) {
          // Extract user details and token
          const userDetails = response.data;
          const token = response.data.token;

          // Role is always 'vendor' for this login method
          let role = "vendor";

          alert("SUCCESSFULLY LOGGED IN!");

          // Set the session with user details, token, and role
          // Ensure store.setSession is an async function or returns a Promise
          store.setSession(userDetails, token, role);

          // Redirect to the Vendor Dashboard
          this.$router.push("/Dashboardvendor/");
        } else {
          // Handle login failure
          alert(response.data.message);
          this.showLoginButton = true;
          this.showLoadingButton = false;
        }
        });

        // Check if userId is present in response
        
      
    },
  },
};
</script>

<style>
.login {
  /*
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
  */
  background: url("../assets/images/The-Ship-Campus-70.jpg");
  background-size: cover;
}
</style>
