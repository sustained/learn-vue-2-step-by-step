@extends('templates.lesson')

@section('lessonTitle', $title)
@section('lessonHasScript', true)

@section('content')

    <h1>{{ $title }}</h1>

    <ul>
        <router-link tag="li" to="/" exact>
            <a>Feed</a>
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
