
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Form from './library/Form';

// const app = new Vue({
//     el: '#app',

//     data() {
//         return {
//             languages: [],

//             form: new Form({
//                 title: '',
//                 description: ''
//             })
//         };
//     },

//     methods: {
//         onSubmit() {
//             this.form.post('/courses')
//                 .then(data => alert('success'))
//                 .catch(errors => console.log(errors));
//         }
//     },

//     mounted() {
//         console.log('mounted');

//         axios.get('/languages').then(response => {
//             this.languages = response.data;
//         }).catch(console.error);
//     }
// });
