@extends('templates.lesson')

@section('lessonTitle', $title)
@section('lessonHasScript', true)

@section('content')

    <h1>{{ $title }}</h1>

    <replies :data="[{content:'Reply #1'},{content:'Reply #2'}]"></replies>

@endsection
