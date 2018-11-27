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

    post(requestURI) {
        axios.post(requestURI, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFailure).bind(this);
    }

    patch(requestURI) {
        axios.patch(requestURI, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFailure).bind(this);
    }

    put(requestURI) {
        axios.put(requestURI, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFailure).bind(this);
    }

    get(requestURI) {
        axios.get(requestURI, this.data())
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
