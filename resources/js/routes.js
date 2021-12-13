import VueRouter from "vue-router";
import Index from "./pages/Index";
import Shops from "./pages/Shops"
import Products from "./pages/Products"

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/shops',
        name: 'shops',
        component: Shops
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;