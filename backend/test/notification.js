import Vue from 'vue/dist/vue.js';
import test from 'ava';

import Notification from '../resources/js/components/Notification';

let vm;

test.beforeEach(t => {
    let VNotification = Vue.extend(Notification);

    vm = new (Vue.extend(Notification))({
        propsData: {
            message: 'foobar'
        }
    }).$mount();
});

test('that the data is present', t => {
    t.is(vm.test, 'Hello World');
});

test('that the message prop is passed', t => {
    t.is(vm.$el.textContent, 'foobar');
});

test('that the computed prop works', t => {
    t.is(vm.MESSAGE, 'FOOBAR');
});
