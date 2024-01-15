<template>
  <!-- component -->
  <div class="background-image h-screen w-screen flex items-center">
    <div
      class="h-max mx-auto flex flex-col items-center bg-[#18273F] shadow-lg bg-opacity-90 rounded-xl p-5"
    >
      <img
        class="h-[60px] w-[70px] mb-5"
        src="@/assets/images/pkt-blue-logo.jpg"
        alt=""
      />
      <h1
        class="text-slate-200 shadow-text-2xl text-xl font-bold text-center pb-10"
      >
        Sign in to your account
      </h1>
      <div class="p-10 flex flex-col gap-4 text-sm">
        <div>
          <label class="text-slate-300 font-bold inline-block pb-2" for="email"
            >Username</label
          >
          <input
            class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="email"
            name="email"
            placeholder="user@pktgroup.com"
            v-model = "userName"
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
            v-model = "password"
          />
        </div>
        <div class="flex">
          <div class="w-1/2">
            <input type="checkbox" name="remeberMe" />
            <label class="text-slate-200" for="remeberMe">Remember me</label>
          </div>
          <!-- <div class="w-1/2">
            <a class="font-bold text-sky-300" href="">Forgot password ?</a>
          </div> -->
        </div>
        <div>
          <input
            class="bg-blue-900 w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-blue-700"
            type="submit"
            value="Login"
          />
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
import axios from 'axios'
export default {
  name: "LoginstaffView",

  data(){
    return{
    userName:"",
    password:"",
    }

  },
  methods:{

    login(){
      axios.post("http://172.28.28.91:8085/api/Security/login",{
        userName: this.userName,
        password: this.password
      })
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
  background-image: url("https://pktgroup.com/wp-content/uploads/2021/04/OAH-Thumbnail-4.jpg");
  background-size: cover;
  filter: blur(2px);
  z-index: -1;
}
</style>
