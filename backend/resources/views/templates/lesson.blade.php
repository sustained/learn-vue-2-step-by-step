<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <title>@yield('lessonTitle', 'Lessons') - Learn Vue 2 Step by Step</title>

        @stack('headStyles')

        @stack('headScripts')

    </head>

    <body>
        <div id="app">
            @yield('content')
        </div>

        <script src="/js/app.js"></script>

        @hasSection('lessonHasScript')

            @if (View::getSections()['lessonHasScript'] == true)

        <script src="/js/{{ $slug }}.js"></script>

            @endif

        @endif

        @stack('bodyStyles')

        @stack('bodyScripts')

    </body>
</html>
