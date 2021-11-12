<?php
defined('TYPO3_MODE') || die();

/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['ku_global_layout'] = 'EXT:ku_global_layout/Configuration/RTE/Default.yaml';

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:ku_global_layout/Configuration/TsConfig/Page/All.tsconfig">');


/***************
 * Register Icons
 */
$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);

$iconRegistry->registerIcon(
   // use same identifier as used in TSconfig for icon
   'modals-button',
   \TYPO3\CMS\Core\Imaging\IconProvider\FontawesomeIconProvider::class,
   // font-awesome identifier ('external-link-square')
   ['name' => 'external-link-square']
);