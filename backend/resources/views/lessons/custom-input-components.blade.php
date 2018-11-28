@extends('templates.lesson')

@section('lessonTitle', $title)
@section('lessonHasScript', true)

@section('content')

    <h1>{{ $title }}</h1>

    {{-- The following are identical: --}}

    {{-- <input type="text" v-model="coupon" /> --}}

    {{-- <input type="text" :value="coupon" @input="coupon = $event.target.value" /> --}}

    <p>Enter a valid coupon code:</p>

    <coupon v-model="code" />

@endsection
