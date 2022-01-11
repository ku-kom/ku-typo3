<?php
defined('TYPO3_MODE') || die();

(static function() {
    \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
        'DanTester',
        'Fedantester',
        [
            \DanTester\DanTester\Controller\DanTesterController::class => 'show, list'
        ],
        // non-cacheable actions
        [
            \DanTester\DanTester\Controller\DanTesterController::class => 'show, list'
        ]
    );

    // wizards
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        'mod {
            wizards.newContentElement.wizardItems.plugins {
                elements {
                    fedantester {
                        iconIdentifier = dan_tester-plugin-fedantester
                        title = LLL:EXT:dan_tester/Resources/Private/Language/locallang_db.xlf:tx_dan_tester_fedantester.name
                        description = LLL:EXT:dan_tester/Resources/Private/Language/locallang_db.xlf:tx_dan_tester_fedantester.description
                        tt_content_defValues {
                            CType = list
                            list_type = ku_ext_scripts
                        }
                    }
                }
                show = *
            }
       }'
    );

    $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
    $iconRegistry->registerIcon(
        'dan_tester-plugin-fedantester',
        \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
        ['source' => 'EXT:dan_tester/Resources/Public/Icons/user_plugin_fedantester.svg']
    );
})();
