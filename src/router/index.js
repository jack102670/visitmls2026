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
        path: '/Newrequest',
        name: 'Newrequest',
        components: {
            default: Newrequest,
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
        path: '/',
        name: 'Login',
        component: Login,
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
