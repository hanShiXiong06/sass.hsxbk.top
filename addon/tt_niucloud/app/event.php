<?php

return [
    'bind' => [

    ],
    'listen' => [
    	'GetPosterType' => ['addon\tt_niucloud\app\listener\system\PosterType'],
        'GetPosterData' => ['addon\tt_niucloud\app\listener\system\Poster'],
    ],
    'subscribe' => [
    ],
];