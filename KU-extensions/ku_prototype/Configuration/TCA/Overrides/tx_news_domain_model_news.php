<?php

/* KU: Make teaser input field mandatory for News extension.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

defined('TYPO3') or die('Access denied.');

// Make teaser field required
$GLOBALS['TCA']['tx_news_domain_model_news']['columns']['teaser']['config']['eval']  = 'required';