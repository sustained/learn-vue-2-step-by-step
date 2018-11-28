Vue.component('coupon', {
    props: ['value'],

    template: `
        <input type="text" :value="value" @input="updateCode($event.target.value)" ref="input" />
    `,

    methods: {
        updateCode(code) {
            console.log(code);

            if (code === 'INVALID') {
                alert('Invalid code.');

                this.$refs.input.value = code = '';
            }

            this.$emit('input', code);
        }
    }
})

new Vue({
    el: '#app',

    data: {
        code: 'GIBSTUFFS'
    }
});
