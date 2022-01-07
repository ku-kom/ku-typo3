<?php

defined('TYPO3_MODE') or die();

// use the same configuration for visible backend fields as "Textmedia"
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
        [
            'LLL:EXT:ku_flexbox/Resources/Private/Language/locallang_be.xlf:backend_layout.flexbox_title',
            'image_with_overlay',
            'content-text',
        ],
    'textmedia',
	'after'
);

// use the same configuration for visible backend fields as "Textmedia"
if (!isset($GLOBALS['TCA']['tt_content']['defaultTypeConfiguration'])) {
	$showItemParts = explode('--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,', $GLOBALS['TCA']['tt_content']['types']['textmedia']['showitem']);
	$GLOBALS['TCA']['tt_content']['defaultTypeConfiguration']['begin'] = '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.header;header,';
	$GLOBALS['TCA']['tt_content']['defaultTypeConfiguration']['end'] = '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,' . $showItemParts[1];
}


$GLOBALS['TCA']['tt_content']['types']['image_with_overlay'] = [
	'previewRenderer' => \KuKom\Content\ContentPreviewRenderer::class,
	'showitem' => $GLOBALS['TCA']['tt_content']['defaultTypeConfiguration']['begin'] . '
        bodytext,
        image,
        ' . $GLOBALS['TCA']['tt_content']['defaultTypeConfiguration']['end'],
    'columnsOverrides' => [
        'bodytext' => [
            'config' => [
                'enableRichtext' => true,
            ],
        ],
    ],
];

// $GLOBALS['TCA']['tt_content']['types']['image_with_overlay'] = [
//     'previewRenderer' => \KuKom\Content\ContentPreviewRenderer::class,
//     'showitem' => '
//                 --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
//                     --palette--;;general,
//                     --palette--;;headers,
//                     bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,
//                 --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
//                     --palette--;;frames,
//                     --palette--;;appearanceLinks,
//                 --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
//                     --palette--;;language,
//                 --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
//                     --palette--;;hidden,
//                     --palette--;;access,
//                 --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories,
//                     categories,
//                 --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes,
//                     rowDescription,
//                 --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended,
//             ',
//     'columnsOverrides' => [
//         'bodytext' => [
//             'config' => [
//                 'enableRichtext' => true,
//             ],
//         ],
//     ]
// ];