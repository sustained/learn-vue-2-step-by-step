import FormErrors from './FormErrors';

export class Form {
    constructor(data) {
        this._data = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new FormErrors();
    }

    data() {
        let data = {};

        for (let field in this._data) {
            data[field] = this[field];
        }

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
