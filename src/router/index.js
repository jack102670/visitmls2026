import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";

import Login from "../views/Login.vue";
import editptw from "../views/Ptwedit.vue";
import Newsidebar from "../components/Newsidebar.vue";
import Managerequest from "../views/Managerequest.vue";
import ManagerequestSafety from "../views/ManagerequestSafety.vue";
import PTW from "../views/PTW.vue";
import Loginstaff from "../views/Loginstaff.vue";
import Vendorsignup from "../views/Vendorsignup.vue";
import Myrequest2 from "../views/Myrequest2.vue";
import PTWView from "../views/PTWview.vue"
import cctvform from "../views/cctvform.vue";
import badgeform from "../views/badgeform.vue";
import Maskform from "../views/Maskform.vue";
import Teskitform from "../views/Teskitform.vue";
import visitorescorttour from "../views/visitor-escort-tour.vue";
import Incidentreportform from "../views/Incidentreportform.vue";
import manageVendor from "../views/AccApproval.vue";
import testing from "../views/Testing.vue";
import Dashboardvendor from "../views/Dashboardvendor.vue";
import Incidentreportsafety from "../views/Incidentreportsafety.vue";
import { store } from "../views/store.js";
const routes = [
 
  {
    path: "/test",
    name: "testing",
    components: {
      default: testing,
    },
  },

  {
    path: "/Dashboard/",
    name: "Dashboard",
    components: {
      default: Dashboard,
      Sidebar: Newsidebar,
    },
    children: [
      {
        path: "",
        name: "NewrequestDefault",
        component: Myrequest2,
      },
  

      {
        path: "cctvform",
        name: "cctvform",
        component: cctvform,
      },
      {
        path: "mask",
        name: "Maskform",
        component: Maskform,
      },
      {
        path: "badge",
        name: "badgeform",
        component: badgeform,
      },
      {
        path: "Teskit",
        name: "Teskitform",
        component: Teskitform,
      },
      {
        path: "visitorescorttour",
        name: "visitorescorttour",
        component: visitorescorttour,
      },
      {
        path: "Incidentreport",
        name: "Incidentreportform",
        component: Incidentreportform,
      },
      {
        path: "Incidentreportsafety",
        name: "Incidentreportsafety",
        component: Incidentreportsafety,
      },
      {
        path: "PTW",
        name: "PTWdjasdh",
        component: PTW,
      },
    ],
  },
  {
    path: "/Dashboardvendor/",
    name: "Dashboardvendor",
    components: {
      default: Dashboardvendor,
      Sidebar: Newsidebar,
    },
    children: [
       {
        path: "",
        name: "NewrequestDefault2",
        component: Myrequest2,
      },

      {
        path: "ptw",
        name: "DashboardvendorPTW",
        component: PTW,
      },
      {
        path: "/PTWview2/:refNumber",
        name: "PTWview2",
        component: PTWView,
        
      },
      {
        path: "ptwedit",
        name: "ptwedit",
        component :editptw,   
      },

    ],
  },

  {
    path: "/PTWView/:refNumber",
    name: "PTWView",
    components: {
      default: PTWView,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/Myrequest2",
    name: "Myrequest2",
    components: {
      default: Myrequest2,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/manageVendor",
    name: "manageVendor",
    components:{
        default: manageVendor,
    Sidebar: Newsidebar,
    }
  
  },
  {
    path: "/PTW",
    name: "PTW",
    components: {
      default: PTW,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/ManagerequestSafety",
    name: "ManagerequestSafety",
    components: {
      default: ManagerequestSafety,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/Managerequest",
    name: "Managerequest",
    components: {
      default: Managerequest,
      Sidebar: Newsidebar,
    },
  },

  {
    path: "/Vendorlogin",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Loginstaff",
    component: Loginstaff,
  },
  {
    path: "/Registervendor",
    name: "Vendorsingup",
    component: Vendorsignup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
 
  const publicPages = ["Login", "Loginstaff", "Vendorsingup", "testing"]; // Add other public route names as necessary

  // Check if the current route requires authentication
  const authRequired = !publicPages.includes(to.name);

  // Check if the session exists
  const session = store.getSession();

  if (authRequired && !session) {
    // Redirect to login page if no session and the route requires auth
    next({ name: "Loginstaff" });
  } else {
    // Otherwise, proceed as normal
    next();
  }
});

export default router;
