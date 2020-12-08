import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home.vue';

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
            path: '*',
            redirect: '/home',
        },
    ],
});

export default router;
