import VueRouter from 'vue-router';
window.Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: require('../views/Feed')
    },
    {
        path: '/about',
        component: require('../views/About')
    },
    {
        path: '/contact',
        component: require('../views/Contact')
    }
]

const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});

new Vue({
    el: '#app',

    router
});
