<template>
  <div class="background-image h-screen w-screen flex items-center">
    <div @keyup.enter="login"
      class="h-max mx-auto flex flex-col items-center bg-[#18273F] shadow-lg bg-opacity-90 rounded-md p-10">
      <div class="justify-center flex flex-col items-center py-2">
        <img class="h-auto w-[70px] mb-5" src="@/assets/images/pkt-blue-log-crop.jpg" alt="" />
        <h1 class="text-white text-2xl font-bold text-center ">
          Services Portal System
        </h1>
        <h5 class="text-white text-md font-medium text-center ">
          Sign in to your account
        </h5>
      </div>
      <div class=" flex flex-col space-y-2 ">
        <form @submit.prevent="login">
          <div>
            <label class="text-white font-bold inline-block py-2 text-sm" for="username">Username</label>
            <input
              class="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md w-full shadow-sm px-5 py-3"
              type="text" name="username" placeholder="user" v-model="userName"
              :class="{ 'border-red-500': errors.username }" />
            <p v-if="errors.username" class="text-red-500 text-xs mt-1">{{ errors.username }}</p>
          </div>
          <div>
            <label class="text-white font-bold inline-block py-2 text-sm" for="password">Password</label>
            <input
              class="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md w-full shadow-sm px-5 py-3"
              type="password" name="password" placeholder="******" v-model="password"
              :class="{ 'border-red-500': errors.password }" />
            <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center py-2 space-x-1">
              <input type="checkbox" id="rememberMe" name="rememberMe" class="rounded-md" v-model="rememberMe" />
              <label class="text-white text-xs" for="rememberMe"> Remember me</label>
            </div>
          </div>
          <div v-show="showLoginButton">
            <button
              class="bg-blue-900 w-full py-3 rounded-md text-white font-bold cursor-pointer hover:bg-blue-500 transition duration-300"
              type="submit" @click.prevent="login">
              Login
            </button>
          </div>
          <div v-show="showLoadingButton">
            <button disabled type="button"
              class="bg-blue-900 w-full py-3 rounded-md text-white font-bold cursor-pointer hover:bg-blue-500 transition duration-300">
              <svg aria-hidden="true" role="status"
                class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"></path>
              </svg>
              Loading....
            </button>
          </div>
      </form>
    </div>
  
  </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../views/store.js";
import Swal from "sweetalert2";

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
      errors: {
        username: "",
        password: ""
      }
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
        this.$router.push("/homepage");
      } else if (store.getRole() === "vendor") {
        this.$router.push("/dashboardvendor");
      }
    }
  },

  methods: {

    validateUsername() {
      if (!this.userName) {
        this.errors.username = "Username is required";
      } else {
        this.errors.username = "";
      }
    },

    validatePassword() {
      if (!this.password) {
        this.errors.password = "Password is required";
      } else {
        this.errors.password = "";
      }
    },

    validateForm() {
      this.validateUsername();
      this.validatePassword();
      return !this.errors.username && !this.errors.password;
    },
    async login(event) {
      event.preventDefault();

      if (!this.validateForm()) {
        Swal.fire({
          icon: 'warning',
          title: 'Validation Error',
          text: 'Please fill in all required fields',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        this.validateUsername();
        this.validatePassword();
        return;
      }

      this.showLoginButton = false;
      this.showLoadingButton = true;

      try {
        const response = await axios.post(
          "http://172.28.28.91:89/api/Security/login",
          {
            userName: this.userName,
            password: this.password,
          }
        );

        if (response.data && response.data.message === "Login Success!") {
          const userDetails = response.data.result.userdetails;
          const token = response.data.result.token;
          let role;
          let redirectPath;

          if (response.data.result.userdetails.userName.includes("Safety")) {
            role = "safety";
            redirectPath = "/ManagerequestSafety";
          } else if (response.data.result.userdetails.userName.includes("Sec")) {
            role = "admin";
            redirectPath = "/Managerequest";
          } else {
            role = "user";
            redirectPath = "/homepage";
          }

          store.setSession(userDetails, token, role);


          await Swal.fire({
            icon: "success",
            title: "Login Success!",
            text: 'You have been logged in successfully.',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6'
          }).then(() => {
            this.$router.push(redirectPath);
          })
          

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed!',
            text: response.data.message + ". Check your credentials!",
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6',
          });
          this.showLoginButton = true;
          this.showLoadingButton = false;
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: 'An error occurred during the login process.',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6'
        });

        console.error("Login error:", error);
        this.showLoginButton = true;
        this.showLoadingButton = false;
      }
    },
  },
  watch: {
    userName() {
      this.validateUsername();
    },
    password() {
      this.validatePassword();
    }
  }
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
  background-image: url("@/assets/images/hq_pkt.jpeg");
  background-size: cover;
  filter: blur(3px);
  z-index: -1;
}
</style>
