<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function () {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('gridelements_bootstrap', 'Configuration/TypoScript', 'Gridelements Bootstrap 3');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile('gridelements_bootstrap', 'Configuration/TypoScript/PageTS/pageTsGridelements.ts', 'Gridelements Bootstrap 3');
    }
);