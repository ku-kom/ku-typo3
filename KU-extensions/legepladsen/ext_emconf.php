<?php

/**
 * Extension Manager/Repository config file for ext "legepladsen".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Legepladsen',
    'description' => 'Legeplads til KU',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '11.0.0-11.0.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Idefa\\Legepladsen\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Dan Rye Jensen',
    'author_email' => 'drj@idefa.dk',
    'author_company' => 'IdeFA',
    'version' => '1.0.0',
];
