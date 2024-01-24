import { createRouter, createWebHistory } from "vue-router";
import Director from './pages/Director.vue';
import Home from './pages/Home.vue';
import Minecraft from './pages/Minecraft.vue'
import Programming from './pages/Programming.vue';
import Twitch from './pages/Twitch.vue';
import page_error from './pages/page_error.vue';

const routes = [
    {
        path: '/',
        component: Director,
        meta: {
            title: 'nbdy-cntrl'
        }
    },
    {
        path: '/Home',
        component: Home,
        meta: {
            title: 'Home | nbdy-cntrl'
        }
    },
    {
        path: '/Minecraft',
        component: Minecraft,
        meta: {
            title: 'Minecraft | nbdy-cntrl'
        }
    },
    {
        path: '/Programming',
        component: Programming,
        meta: {
            title: 'Programming | nbdy-cntrl'
        }
    },
    {
        path: '/Twitch',
        component: Twitch,
        meta: {
            title: 'Twitch | nbdy-cntrl'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: page_error,
        meta: {
            title: 'Error 404 | nbdy-cntrl'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes
})

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'nbdy-cntrl'
})

export default router;