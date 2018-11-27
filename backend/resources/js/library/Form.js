import FormErrors from './FormErrors';

export default class Form {
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

        this.errors.clear();
    }

    post(requestURI) {
        return this._submit('post', requestURI);
    }

    patch(requestURI) {
        return this._submit('patch', requestURI);
    }

    put(requestURI) {
        return this._submit('put', requestURI);
    }

    get(requestURI) {
        return this._submit('get', requestURI);
    }

    _submit(requestMethod, requestURI) {
        return new Promise((resolve, reject) => {
            axios[requestMethod](requestURI, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFailure(error.response.data);

                    reject(error.response.data);
                });
        });
    }

    onSuccess(data) {
        console.log('onSuccess', data);

        this.reset();
    }

    onFailure(data) {
        console.log('onFailure', data)

        this.errors.set(data.errors);
    }
}
