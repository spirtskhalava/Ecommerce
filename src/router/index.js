import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

import Home from '../views/Home.vue'

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
    }
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to) => {
    const layout = to?.meta?.layout || 'DefaultLayout';
    store.commit('SET_LAYOUT', layout);
})

export default router