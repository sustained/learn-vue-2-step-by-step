@extends('templates.lesson')

@section('lessonTitle', $title)
@section('lessonHasScript', true)

{{-- @push('headStyles', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />') --}}

@section('content')

    <h1>{{ $title }}</h1>

    <ul>
        <router-link tag="li" to="/" exact>
            <a>Home</a>
        </router-link>

        <router-link tag="li" to="/about">
            <a>About</a>
        </router-link>

        <router-link tag="li" to="/contact">
            <a>Contact</a>
        </router-link>
    </ul>

    <router-view></router-view>

@endsection
