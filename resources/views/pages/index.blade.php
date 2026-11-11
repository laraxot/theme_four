<?php

use function Laravel\Folio\name;

name('home');

?>

<x-pub_theme::layouts.guest>
    @volt('home')
    <div>

        <x-page side="content" slug="home" />

    </div>
    @endvolt
</x-pub_theme::layouts.guest>
