import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Myrequest from '../views/Myrequest.vue'
import Newrequest from '../views/Newrequest.vue'
import Sidebar from '../components/Sidebar.vue'
import Login from '../views/Login.vue'
import Incidentreport from '../views/Incidentreport.vue'
import Todo from '../views/Todo.vue'
import Newsidebar from '../components/Newsidebar.vue'
import Managerequest from '../views/Managerequest.vue'
import people from '../views/people.vue'
import Loginstaff from '../views/Loginstaff.vue'
import Vendorsignup from '../views/Vendorsignup.vue'
import Myrequest2 from '../views/Myrequest2.vue'
import movie from '../views/movie.vue'
const routes = [
    {
        path: '/Home',
        name: 'Home',
        components: {
            default: Home,
            Sidebar: Sidebar,
        },
    },
    {
        path: '/Myrequest',
        name: 'Myrequest',
        components: {
            default: Myrequest,
            Sidebar: Sidebar,
        }
    },
    {
        path: '/Newrequest/',
        name: 'Newrequest',
        components: {
            default: Newrequest,
            Sidebar: Newsidebar,
        },
        children: [
            {
                path: '',
                name: 'NewrequestDefault',
                component: Myrequest2,
            },
            {
                path: '2',
                name: 'movie',
                component: movie,
            },
        ],
    },
    
    
    
    
    
    {
        path: '/Myrequest2',
        name: 'Myrequest2',
        components: {
            default: Myrequest2,
            Sidebar: Newsidebar,

        }
    },
    {
        path: '/people',
        name: 'people',
        components: {
            default: people,
            Sidebar: Newsidebar,

        }
    },
    {
        path: '/Managerequest',
        name: 'Managerequest',
        components: {
            default: Managerequest,
            Sidebar: Newsidebar,

        }
    },
    {
        path: '/Incidentreport',
        name: 'Incidentreport',
        components: {
            default: Incidentreport,
            Sidebar: Sidebar,

        }
    },
    {
        path: '/Vendorlogin',
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        name: 'Loginstaff',
        component: Loginstaff,
    },
    {
        path: '/Registervendor',
        name: 'Vendorsingup',
        component: Vendorsignup,
    },
    {
        path: '/Todo',
        name: 'Todo',
        components: {
            default: Todo,
            Sidebar: Sidebar,

        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
