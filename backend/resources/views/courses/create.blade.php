<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />
    <link rel="stylesheet" href="/css/app.css" />

    <title>Create Course</title>
</head>

<body>
    <div id="app" class="container">
        @include('courses.list')

        <div class="box has-background-grey-light">
            <form method="POST" action="/courses" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                @csrf

                <div class="field">
                    <label for="title" class="label">Course Title</label>

                    <div class="control">
                        <input type="text" name="title" id="title" class="input" autocomplete="off" v-model="form.title">
                    </div>

                    <span class="help is-danger" v-if="form.errors.has('title')" v-text="form.errors.get('title')"></span>
                </div>

                <div class="field">
                    <label for="description" class="label">Course Description</label>

                    <div class="control">
                        <input type="text" name="description" id="description" class="input" autocomplete="off" v-model="form.description">
                    </div>

                    <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-primary" :disabled="form.errors.any()">Create</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <script src="/js/app.js"></script>
</body>

</html>
