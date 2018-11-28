let sharedData = {
    user: {
        name: 'Jane Doe'
    }
};

new Vue({
    el: '#one',

    data: {
        shared: sharedData
    }
});

new Vue({
    el: '#two',

    data: {
        shared: sharedData
    }
});
