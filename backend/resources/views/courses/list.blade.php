
<div class="box has-background-grey-light">

    <h3 class="is-size-4">Courses</h3>

    <ul>

        @foreach($courses as $course)

            <li>{{ $course->title }}</li>

        @endforeach

    </ul>

</div>
