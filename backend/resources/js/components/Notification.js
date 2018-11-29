export default {
    template: `<div>{{ message }}</div>`,

    props: ['message'],

    data() {
        return {
            test: "Hello World"
        };
    },

    computed: {
        MESSAGE() {
            return this.message.toUpperCase();
        }
    }
};
