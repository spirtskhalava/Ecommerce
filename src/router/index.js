import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

import Home from '../views/Home.vue';


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about-us',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import('../views/About.vue'),
        meta: {
            layout: 'Content'
        },
        children: [
            {
                path: '/company', // /about-us/company
                name: 'aboutCompany',
                component: {
                    render(h) {
                        return h('Company');
                    }
                }
            }
        ]
    },
    {
        path: '/product/:slug/more',
        name: 'productPage',
        component: () =>
            import ('../views/Product.vue'),
    },
    {
        path: '/About',
        redirect: {
            name: 'About'
        }
    },
    {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
    },
    {
        path: '/Register',
        name: 'Register',
        component: () =>
            import ('../views/Register.vue'),
    },
    {
        path: '/:match(.*)',
        component: () => import('../views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to) => {
    const layout = to?.meta?.layout || 'DefaultLayout';
    store.commit('SET_LAYOUT', layout);
});

export default router;