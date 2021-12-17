import VueRouter from 'vue-router';
import Index from './pages/Index';
import Shops from './pages/Shops';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Register from './pages/Register';

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
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;