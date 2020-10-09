import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/App.vue';
import About from '@/pages/about/App.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '*',
            redirect: '/home',
        },
    ],
});

export default router;
