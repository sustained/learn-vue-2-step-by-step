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
        else {
            this.errors = {};
        }
    }
}

export default Errors;
