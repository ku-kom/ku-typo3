<?php

/**
 * Extension Manager/Repository config file for ext "ku_flexbox".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'KU Insert into head',
    'description' => 'Inserts content into head.',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '10.4.0-10.4.99',
            'fluid_styled_content' => '10.4.0-10.4.99',
            'rte_ckeditor' => '10.4.0-10.4.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'UniversityOfCopenhagen\\kuInsertIntoHead\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Nanna Ellegaard',
    'author_email' => 'nel@adm.u.dk',
    'author_company' => 'University of Copenhagen',
    'version' => '1.0.0',
];
