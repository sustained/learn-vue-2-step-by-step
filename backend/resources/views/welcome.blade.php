<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <title>Laravel</title>
    </head>

    <body>
        <div id="app">
            <p>Heyo.</p>

            <template v-if="languages.length">
                <ul>
                    <li v-for="language in languages" :key="language.id">@{{ language.name }} (Diff: @{{ language.difficulty }} / 10)</li>
                </ul>
            </template>

            <template v-else>
                <p>No languages.</p>
            </template>
        </div>

        <script src="/js/app.js"></script>
    </body>
</html>
