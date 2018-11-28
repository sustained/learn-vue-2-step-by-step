<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LessonController extends Controller
{
    private $validLessons = [
        '24' => 'Shared State 101'
    ];

    public function index()
    {
        return view('lessons.index', ['lessons' => $this->validLessons]);
    }

    public function show($lessonId, $lessonSlug = null)
    {
        abort_unless(array_key_exists($lessonId, $this->validLessons), 404);

        $title = $this->validLessons[$lessonId];
        $slug = str_slug($title);

        return view('lessons.' . str_slug($this->validLessons[$lessonId]), [
            'slug' => $slug,
            'title' => $title
        ]);
    }
}
