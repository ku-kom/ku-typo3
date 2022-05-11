<?php 

declare(strict_types=1);

/*
 * This file is part of the package ku_protopype.
 * Usage: <ku:AuthorName authorUid="{data.cruser_id}" />
 *
 */
namespace UniversityOfCopenhagen\KuPrototype\ViewHelpers;

use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3Fluid\Fluid\Core\ViewHelper\Traits\CompileWithRenderStatic;

class AuthorNameViewHelper extends AbstractViewHelper
{
    use CompileWithRenderStatic;

    /**
     * Initialize arguments
     *
     * @return void
     */
    public function initializeArguments()
    {
        $this->registerArgument('authorUid', 'integer', 'uid of the author', true);
    }

    public static function renderStatic(
        array $arguments,
        \Closure $renderChildrenClosure,
        RenderingContextInterface $renderingContext
    ): string {
        return self::getAuthorRealName($arguments['authorUid']);
    }

    /**
     * Returns the realName of selected author by uid if set,
     * otherwise returns the username
     *
     * @param int $authorUid
     * @return string
     */
    protected static function getAuthorRealName(int $authorUid): string
    {
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('be_users');
        $result = $connection->select(['username', 'realName'], 'be_users', ['uid' => ($authorUid)])->fetch();
        if ($result['realName']) {
            return $result['realName'];
        } else {
            return $result['username'];
        }
    }
}