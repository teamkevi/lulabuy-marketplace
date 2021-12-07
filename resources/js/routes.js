import VueRouter from "vue-router";
import Index from "./components/Index";

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;