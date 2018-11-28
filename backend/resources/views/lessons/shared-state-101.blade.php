@extends('templates.lesson')

@section('lessonTitle', $title)
@section('lessonHasScript', true)

@section('content')

    <h1>{{ $title }}</h1>

    <div id="one">
        <p>@{{ shared.user.name }}</p>
    </div>

    <div id="two">
        <p>@{{ shared.user.name }}</p>
    </div>

@endsection
