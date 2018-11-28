@extends('templates.lesson')

@section('content')

    <h1>Lessons</h1>

    <ul>

    @foreach($lessons as $lessonId => $lessonTitle)

        <li><a href="/lessons/{{ $lessonId }}/{{ str_slug($lessonTitle) }}">{{ $lessonTitle }}</a></li>

    @endforeach

    </ul>

@endsection
