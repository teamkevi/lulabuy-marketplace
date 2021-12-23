import VueRouter from 'vue-router';
import Index from './pages/IndexPage';
import Shops from './pages/ShopsPage';
import Products from './pages/ProductsPage';
import Checkout from './pages/CheckoutPage';
import Auth from './pages/AuthPage';
import Register from './components/auth/SignUp';
import Login from './components/auth/Login';
import ProductOverviewPage from './pages/ProductOverviewPage';
import ShopOverviewPage from './pages/ShopOverviewPage';

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
        path: '/auth',
        name: 'auth',
        component: Auth,
        children: [
            {
                path: '/register',
                name: 'register',
                component: Register
            },
            {
                path: '/login',
                name: 'login',
                component: Login
            }
        ]
    },
    {
        path: '/shops/:slug',
        name: 'shop-overview-page',
        component: ShopOverviewPage
    },
    {
        path: '/product/:id',
        name: 'product-overview-page',
        component: ProductOverviewPage
    },
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;