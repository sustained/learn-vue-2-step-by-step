import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        component: require('./views/Home')
    },
    {
        path: '/about',
        component: require('./views/About')
    },
    {
        path: '/contact',
        component: require('./views/Contact')
    }
]

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});
