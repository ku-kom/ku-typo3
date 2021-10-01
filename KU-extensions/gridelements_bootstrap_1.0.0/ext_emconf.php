<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Gridelements Bootstrap 3',
    'description' => 'Easily build grids with responsive bootstrap grids and extend gridelements by just adding partials and extending some typoscript. Bootstrap 4 is planned.',
    'category' => 'plugin',
    'author' => 'Filmmusic.io',
    'author_email' => 'info@filmmusic.io',
    'author_company' => 'Filmmusic.io',
    'state' => 'stable',
    'internal' => '',
    'uploadfolder' => '0',
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
            't3helpers' =>  '0.9.18',
            'gridelements'  => '8.2.3',
            'vhs'   => '5.1.0'
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
