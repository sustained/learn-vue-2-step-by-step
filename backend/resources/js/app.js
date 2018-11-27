
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

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

console.log('hmm');

class Errors {
    constructor() {
        this.set();
    }

    set(errors = {}) {
        this.errors = errors;
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    clear(field) {
        if (field) {
            if (this.errors[field]) {
                delete this.errors[field];

                return;
            }
        }

        this.errors = {};
    }
}

class Form {
    constructor(data) {
        this._data = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data() {
        let data = Object.assign({}, this);
        delete data._data;
        delete data.errors;

        return data;
    }

    reset() {
        for (let field in this._data) {
            this[field] = '';
        }
    }

    submit(requestType, requestURI) {
        axios[requestType.toLowerCase()](requestURI, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFailure.bind(this));
    }

    onSuccess(response) {
        alert(response.data);

        this.errors.clear();
        this.reset();
    }

    onFailure(error) {
        this.errors.set(error.response.data.errors);
    }
}

const app = new Vue({
    el: '#app',

    data() {
        return {
            languages: [],

            form: new Form({
                title: '',
                description: ''
            })
        };
    },

    methods: {
        onSubmit() {
            this.form.submit('POST', '/courses');
        }
    },

    mounted() {
        console.log('mounted');

        axios.get('/languages').then(response => {
            this.languages = response.data;
        }).catch(console.error);
    }
});
