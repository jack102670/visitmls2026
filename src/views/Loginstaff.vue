<template>
  <!-- component -->
  <div class="background-image h-screen w-screen flex items-center">
    <div
      class="h-max mx-auto flex flex-col items-center bg-[#18273F] shadow-lg bg-opacity-90 rounded-xl p-5"
    >
      <h1
        class="text-slate-200 shadow-text-2xl text-2xl font-bold text-center pt-5 pb-10"
      >
        Services Portal System
      </h1>
      <img
        class="h-[60px] w-[70px] mb-5"
        src="@/assets/images/pkt-blue-logo.jpg"
        alt=""
      />

      <h5
        class="text-slate-200 shadow-text-2xl text-xl font-bold text-center pb-5"
      >
        Sign in to your account
      </h5>
      <div class="p-10 flex flex-col gap-4 text-sm">
        <div>
          <label class="text-slate-300 font-bold inline-block pb-2" for="email"
            >Username</label
          >
          <input
            class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="email"
            name="email"
            placeholder="user"
            v-model="userName"
          />
        </div>
        <div>
          <label
            class="text-slate-300 font-bold inline-block pb-2"
            for="password"
            >Password</label
          >
          <input
            class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="password"
            name="password"
            placeholder="******"
            v-model="password"
          />
        </div>
        <div class="flex">
          <div class="w-1/2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              v-model="rememberMe"
            />
            <label class="text-slate-200" for="rememberMe"> Remember me</label>
          </div>
          <!-- <div class="w-1/2">
            <a class="font-bold text-sky-300" href="">Forgot password ?</a>
          </div> -->
        </div>
        <div v-show="showLoginButton">
          <button
            class="bg-blue-900 w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-blue-700"
            type="submit"
            @click.prevent="login"
          >
            Login
          </button>
        </div>
        <div v-show="showLoadingButton">
          <button
            disabled=""
            type="button"
            class="bg-blue-900 w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-blue-700"
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
        <!-- <div>
                    <p class="text-slate-200 text-center">Or continue with</p>
                </div>
                <div class="flex gap-2">
                    <img class=" w-8 h-5"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png"
                        alt="">
                    <button
                        class="bg-[#18273F] w-full py-1 rounded-md text-white font-bold cursor-pointer hover:text-sky-400">Microsoft
                        Teams</button>
                </div> -->
      </div>
      <p class="text-sm text-slate-200 mt-10">
        Are you a vendor?
        <router-link to="/Vendorlogin" class="text-sky-400 font-bold"
          >Login Here
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../views/store.js"; // Update this path to the actual location of your store

export default {
  name: "LoginstaffView",

  data() {
    return {
      userDetails: [],
      rememberMe: false,
      userName: "",
      password: "",
      showLoginButton: true,
      showLoadingButton: false,
    };
  },
  mounted() {
    this.rememberMe = localStorage.getItem("rememberMe") === "true";

    if (this.rememberMe) {
      this.userName = localStorage.getItem("rememberedUserName");
    }
    const session = store.getSession();

    if (session) {
      if (store.getRole() === "admin") {
        this.$router.push("/");
      }
      if (store.getRole() === "user") {
        this.$router.push("/dashboard");
      } else if (store.getRole() === "vendor") {
        this.$router.push("/dashboardvendor");
      }
    }
  },

  methods: {
    async login() {
      this.showLoginButton = false;
      this.showLoadingButton = true;

      try {
        // Send login request
        const response = await axios.post(
          "http://172.28.28.91:8085/api/Security/login",
          {
            userName: this.userName,
            password: this.password,
          }
        );

        // Check if login is successful
        if (response.data && response.data.message === "Login Success!") {
          // Extract user details and token
          const userDetails = response.data.result.userdetails;
          const token = response.data.result.token;

          // Determine the user's role
          let role;
          if (response.data.result.userdetails.userName.includes("Safety")) {
            role = "safety";
          } else if (
            response.data.result.userdetails.userName.includes("Sec")
          ) {
            role = "admin";
           } else {
            role = "user";
          }

          // Set the session with user details, token, and role
          // Make sure store.setSession is an async function or returns a Promise
          store.setSession(userDetails, token, role);

          // Redirect to a specific route based on the user's role
          if (role === "admin") {
            this.$router.push("/Managerequest");
          } else if (role === "user") {
            this.$router.push("/Dashboard");
          } else if (role === "safety") {
            this.$router.push("/ManagerequestSafety");
          }
        } else {
          // Handle login failure
          alert(response.data.message + ". Check your credentials!");
          this.showLoginButton = true;
          this.showLoadingButton = false;
        }
      } catch (error) {
        // Handle errors that occur during the login process
        console.error("Login error:", error);
        this.showLoginButton = true;
        this.showLoadingButton = false;
      }
    },
  },
};
</script>

<style scoped>
.background-image {
  position: relative;
  overflow: hidden;
}

.background-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://pktgroup.com/wp-content/uploads/2021/04/OAH-Thumbnail-4.jpg");
  background-size: cover;
  filter: blur(2px);
  z-index: -1;
}
</style>
