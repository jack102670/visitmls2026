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
import PTWView from "../views/PTWview.vue";
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
import UserHomepage from "../components/e-claim/UserHomepage.vue";
import AdminHomepage from "../components/e-claim/AdminHomepage.vue";
import SummaryReport from "../views/e-claim/SummaryReport";
import organizationchart from "../views/organizationchart.vue";
import CreateNewClaim from "../views/e-claim/CreateNewClaim.vue";
import ClaimReport from "../views/e-claim/ClaimReport.vue";
import TabTest from "../views/e-claim/TabTest.vue";
import { store } from "../views/store.js";
import Eclaimhomepage from "../views/e-claim/user-ui/eclaimhomepage.vue";
import FormTab from "../views/e-claim/user-ui/FormTab.vue";
import testing2 from "../views/Testing2.vue";
import organizationchartdemo from "../views/organizationchartdemo.vue";
import AdminSummaryClaimpage from "../components/e-claim/AdminSummaryClaimpage.vue";
import AdminHRSummaryClaimpage from "../components/e-claim/AdminHRSummaryClaimpage.vue";
import AdminDashboardpage from "../components/e-claim/AdminDashboardpage.vue";
import AdminHRDashboardpage from "../components/e-claim/AdminHRDashboardpage.vue";
import UserFirstTimeLogin from "../components/e-claim/UserFirstTimeLogin.vue";
import UserProfile from "../components/e-claim/UserProfile.vue";
import Homepage from "../views/homepage.vue";
import verified from "../views/e-claim/verifiedpage.vue";
import AssignChecker from "../components/e-claim/AssignChecker.vue";
import HRRegisterEmployee from "../components/e-claim/HRRegisterEmployee.vue";
import SummaryClaimpage from "../views/e-claim/user-ui/SummaryClaimpage.vue";
import VerifierSummaryClaimpage from "../views/e-claim/user-ui/VerifierSummaryClaimpage.vue";
import HRViewEmployee from "../components/e-claim/HRViewEmployee.vue";
import checkerDashboardpage from "../views/e-claim/checkerDashboardpage.vue";
import checkerClaimpage from "../views/e-claim/checkerClaimpage.vue";
import NotFound from "../views/pagenotfound.vue";
import AdminHODpage from "@/components/e-claim/AdminHODpage.vue";
import AdminHODClaimpage from "@/components/e-claim/AdminHODClaimpage.vue";



const routes = [
  {
    path: "/VerifierClaimpage/:rn",
    name: "VerifierSummaryClaimpage",
    components: {
      default: VerifierSummaryClaimpage,
      Sidebar: Newsidebar,
    },
    props: true,
  },
  {
    path: "/verified",
    name: "verified",
    components: {
      default: verified,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/checkerclaimpage/:rn",
    name: "checkerClaimpage",
    components: {
      default: checkerClaimpage,
      Sidebar: Newsidebar,
    },
    props: true,
  },
  {
    path: "/checker",
    name: "checkerDashboardPage",
    components: {
      default: checkerDashboardpage,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/homepage",
    name: "UserHomepage",
    components: {
      default: Homepage,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/test2",
    name: "testing2",
    components: {
      default: testing2,
    },
  },
  {
    path: "/eclaimhomepage",
    name: "eclaimhomepages",
    components: {
      default: Eclaimhomepage,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/organizationchart/demo",
    name: "organizationchartdemo",
    components: {
      default: organizationchartdemo,
    },
  },
  {
    path: "/organizationchart",
    name: "organizationchart",
    components: {
      default: organizationchart,
    },
  },

  {
    path: "/eclaimadmin",
    name: "AdminHomepage",
    components: {
      default: AdminHomepage,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/adminsummaryclaim/:rn",
    name: "AdminSummaryClaimpage",
    components: {
      default: AdminSummaryClaimpage,
      Sidebar: Newsidebar,
    },
    props: true,
  },
  {
    path: "/summaryclaim/:rn",
    name: "SummaryClaimpage",
    components: {
      default: SummaryClaimpage,
      Sidebar: Newsidebar,
    },
    props: true,
  },
  {
    path: "/adminhrsummaryclaim/:rn",
    name: "AdminHRSummaryClaimpage",
    components: {
      default: AdminHRSummaryClaimpage,
      Sidebar: Newsidebar,
    },
    props: true,
  },
  {
    path: "/admindashboard",
    name: "AdminDashboardpage",
    components: {
      default: AdminDashboardpage,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/adminhoddashboard",
    name: "AdminHODpage",
    components: {
      default: AdminHODpage,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/adminhodclaim/:rn",
    name: "AdminHODClaimpage",
    components: {
      default: AdminHODClaimpage,
      Sidebar: Newsidebar,
    },
    props: true,
  },
  {
    path: "/adminhrdashboard",
    name: "AdminHRDashboardpage",
    components: {
      default: AdminHRDashboardpage,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/registeremployee",
    name: "HrRegisteremployee",
    components: {
      default: HRRegisterEmployee,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/viewemployee",
    name: "HrViewemployee",
    components: {
      default: HRViewEmployee,
      Sidebar: Newsidebar,
    },
  },
  {
    path: "/assignchecker",
    name: "AssignChecker",
    components: {
      default: AssignChecker,
      Sidebar: Newsidebar,
    },
  },

  {
    path: "/eclaim/",
    name: "eclaimuser",
    components: {
      default: UserHomepage,
      Sidebar: Newsidebar,
    },
  },

  {
    path: "/firsttimelogin",
    name: "UserFirstTimeLogin",
    components: {
      default: UserFirstTimeLogin,
      Sidebar: Newsidebar,
    },
  },

  {
    path: "/profile",
    name: "UserProfile",
    components: {
      default: UserProfile,
      Sidebar: Newsidebar,
    },
  },

  {
    path: "/newclaim",
    name: "CreateNewClaim",
    components: {
      default: CreateNewClaim,
      Sidebar: Newsidebar,
    },
  },

  {
    path: "/claimreport",
    name: "ClaimReport",
    components: {
      default: ClaimReport,
      Sidebar: Newsidebar,
    },
  },

  {
    path: "/tab",
    name: "FormTab",
    components: {
      default: FormTab,
    },
  },

  {
    path: "/summary",
    name: "SummaryReport",
    components: {
      default: SummaryReport,
      Sidebar: Newsidebar,
    },
  },

  {
    path: "/tabtest",
    name: "tabtesting",
    components: {
      default: TabTest,
      Sidebar: Newsidebar,
    },
  },

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
        component: editptw,
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
    components: {
      default: manageVendor,
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


function checkUserStatusAndShowModal() {
  return new Promise((resolve, reject) => {
    const username_id = store.getSession().userDetails.userId;
    fetch(`http://172.28.28.116:7239/api/User/GetEmployeeById/${username_id}`)
      .then((response) => response.json()) 
      .then((data) => {
        const userStatus = data.result[0].account_status;
     //   console.log("User status:", userStatus);
        if (userStatus === "0") {
          resolve(false);
        } else {
          resolve(true);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the user status:", error);
        reject(error);
      });
  });
}
const routesRequiringProfileCheck = ["eclaimhomepages"]; 
router.beforeEach((to, from, next) => {
  const publicPages = ["Login", "Loginstaff", "Vendorsingup", "testing"]; 
  const authRequired = !publicPages.includes(to.name);
  const session = store.getSession();

  if (authRequired && !session) {
    next({ name: "Loginstaff" });
  } else if (session) {
    if (routesRequiringProfileCheck.includes(to.name)) {
      checkUserStatusAndShowModal()
        .then((isProfileComplete) => {
          if (!isProfileComplete && to.path !== "/firsttimelogin") {
            next("/firsttimelogin");
          } else {
            next();
          }
        })
        .catch((error) => {
          console.error("Error checking user status:", error);
          next("/error");
        });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
