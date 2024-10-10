<template>
  <div class="h-screen " id="side-bar" :class="dataOpenSideBar == true ? 'side-bar-visible' : 'side-bar-close'">
    <div class="bg-primary   0 h-[50px] flex justify-between items-center px-2 ">
      <div class="text-md text-white font-bold text-center flex items-center justify-center text-da h-full pl-2"
        v-show="dataOpenSideBar">Dashboard</div>
      <!-- <img src="https://pagedone.io/asset/uploads/1701235464.png" v-show="!dataOpenSideBar" class="p-1 w-8 h-8 rounded-full ring-2 ring-gray-100 dark:ring-gray-500 " alt="Avatar" /> -->
    </div>
    <div class="flex flex-col justify-between min-h-full bg-primary ">
      <div :class="dataOpenSideBar ? 'py-4 px-4 pt-8' : ' '" class="">

        <div :class="dataOpenSideBar ? 'py-3 px-2' : 'py-3 justify-center items-center text-center'"
          class="rounded-sm cursor-pointer text-white hover:text-dark">
          <router-link to="/firsttimelogin" class="px-2 flex justify-between items-center">
            <div :class="dataOpenSideBar ? 'flex space-x-2 items-center' : 'flex justify-center items-center w-full'">
              <font-awesome-icon :icon="['fas', 'user']" v-tooltip.right="'Dashboard'"
                :style="{ color: '#ffffff', fontSize: '22px' }" />
              <span v-show="dataOpenSideBar" class="text-white">Profile</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </router-link>
        </div>

        <div :class="dataOpenSideBar ? 'py-3 px-2' : 'py-3 justify-center items-center text-center'"
          class="rounded-md cursor-pointer text-white hover:text-dark">
          <router-link to="/e-dashboard" class="px-2 flex justify-between items-center">
            <div
              :class="dataOpenSideBar ? 'flex space-x-2 justify-between items-center' : 'flex justify-center items-center w-full'">
              <font-awesome-icon :icon="['fas', 'grip-horizontal']" v-tooltip.right="'Dashboard'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span v-show="dataOpenSideBar">Dashboard</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </router-link>
        </div>

        <div :class="[
          dataOpenSideBar ? 'py-3 px-2' : 'py-3 justify-center items-center text-center',
          dropdownOpen ? 'bg-[#2d2169] border-2 border-white' : '',
        ]" class="rounded-md cursor-pointer text-white hover:text-dark">
          <div class="px-2 flex justify-between items-center" @click="toggleRequestDropdown">
            <div
              :class="dataOpenSideBar ? 'flex space-x-2 justify-between items-center' : 'flex justify-center items-center w-full'">
              <font-awesome-icon :icon="['fas', 'grip-horizontal']" v-tooltip.right="'Request Form'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span v-show="dataOpenSideBar">Request Form</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar"
              :icon="dropdownOpen ? ['fas', 'chevron-down'] : ['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </div>
          <transition>
            <div v-show="dropdownOpen" class="pl-6 mt-2 text-white">
              <div @click="navigateTo('/personnel-requisition')" class="block py-1 hover:text-dark">Personnel Requisiton
              </div>
              <div @click="navigateTo('/employee-transfer')" class="block py-1 hover:text-dark">Employee Transfer</div>
              <div @click="navigateTo('/on-job-training')" class="block py-1 hover:text-dark">On Job Training</div>
              <div @click="navigateTo('/training-evaluation')" class="block py-1 hover:text-dark">Training Evaluation
              </div>
              <div @click="navigateTo('/orientation-checklist')" class="block py-1 hover:text-dark">Orientation
                Checklist</div>
              <div @click="navigateTo('/job-description')" class="block py-1 hover:text-dark">Job Description</div>
            </div>
          </transition>
        </div>

        <div :class="dataOpenSideBar ? 'py-3 px-2' : 'py-3 justify-center items-center text-center'"
          class="rounded-md cursor-pointer text-white hover:text-dark">
          <a href="/" class="px-2 flex space-x-2 justify-between items-center" @click="logout">
            <div :class="dataOpenSideBar ? 'flex space-x-2 items-center' : 'flex justify-center items-center w-full'">
              <font-awesome-icon icon="sign-out-alt" v-tooltip.right="'Logout'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span v-show="dataOpenSideBar">Logout</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </a>
        </div>
      </div>
      <div class="menu-man text-left px-2 justify-self-end whitespace-nowrap">

      </div>
    </div>
  </div>

</template>

<script>
import PKTLogoWhite from "../../../assets/images/pkt-logo-white.jpg";
export default {
  components: {},
  data() {
    return {
      PKTLogoWhite: PKTLogoWhite,
      dropdownOpen: false,
    }
  },
  props: {
    dataOpenSideBar: Boolean,
  },
  methods: {
    toggleRequestDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    navigateTo(route) {
      this.dropdownOpen = false;
      this.$router.push(route);
    },
  }
}
</script>

<style scoped>
.p-tooltip-text {
  font-size: 10px !important;
}

#side-bar {
  overflow: hidden;
  transition: 300ms;
}

.side-bar-visible {
  width: 360px !important;
}

.side-bar-close {
  width: 50px !important;
}

/* Add the transition animations */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.dropdown-enter,
.dropdown-leave-to

/* .dropdown-leave-active in <2.1.8 */
  {
  max-height: 0;
  opacity: 0;
}

.dropdown-enter-to {
  max-height: 500px;
  /* Adjust according to the content size */
  opacity: 1;
}
</style>