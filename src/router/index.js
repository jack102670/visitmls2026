import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Myrequest from "../views/Myrequest.vue";
import Dashboard from "../views/Dashboard.vue";
import Sidebar from "../components/Sidebar.vue";
import Login from "../views/Login.vue";
import Incidentreport from "../views/Incidentreport.vue";
import Todo from "../views/Todo.vue";
import Newsidebar from "../components/Newsidebar.vue";
import Managerequest from "../views/Managerequest.vue";
import PTW from "../views/PTW.vue";
import Loginstaff from "../views/Loginstaff.vue";
import Vendorsignup from "../views/Vendorsignup.vue";
import Myrequest2 from "../views/Myrequest2.vue";

import cctvform from "../views/cctvform.vue";
import badgeform from "../views/badgeform.vue";
import Maskform from "../views/Maskform.vue";
import Teskitform from "../views/Teskitform.vue";
import visitorescorttour from "../views/visitor-escort-tour.vue";
import Incidentreportform from "../views/Incidentreportform.vue";
import PTWpage1 from "../views/PTWpage1.vue";
import Dashboardvendor from "../views/Dashboardvendor.vue";
import Incidentreportsafety from "../views/Incidentreportsafety.vue";
const routes = [
  {
    path: "/Home",
    name: "Home",
    components: {
      default: Home,
      Sidebar: Sidebar,
    },
  },
  {
    path: "/Myrequest",
    name: "Myrequest",
    components: {
      default: Myrequest,
      Sidebar: Sidebar,
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
        path: "ptw",
        name: "DashboardvendorPTW",
        component: PTW,
      },
      {
        path: "",
        name: "NewrequestDefault2",
        component: Myrequest2,
      },
    ],
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
    path: "/PTW",
    name: "PTW",
    components: {
      default: PTW,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/PTWpage1",
    name: "PTWpage1",
    components: {
      default: PTWpage1,
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
    path: "/Incidentreport",
    name: "Incidentreport",
    components: {
      default: Incidentreport,
      Sidebar: Sidebar,
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
  {
    path: "/Todo",
    name: "Todo",
    components: {
      default: Todo,
      Sidebar: Sidebar,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
