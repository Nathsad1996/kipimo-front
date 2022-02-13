import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Home.vue')
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('../views/Login.vue')
    },
    {
        path: "/map",
        name: "Map",
        component: () => import('../views/Map.vue')
    },
    {
        path: "/station",
        name: "Station",
        component: () => import('../views/Station.vue')
    },
    {
        path: "/report",
        name: "Report",
        component: () => import('../views/Report.vue')
    },

]


const router = createRouter({
    routes: routes,
    history: createWebHistory(import.meta.url.BASE_URL)
})

export default router