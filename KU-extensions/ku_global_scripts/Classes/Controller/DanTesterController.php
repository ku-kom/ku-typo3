<?php

declare(strict_types=1);

namespace DanTester\DanTester\Controller;


/**
 * This file is part of the "Dan Tester" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * (c) 2022 Dan Rye Jensen <drj@idefa.dk>, IdeFA
 */

/**
 * DanTesterController
 */
class DanTesterController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{

    /**
     * danTesterRepository
     *
     * @var \DanTester\DanTester\Domain\Repository\DanTesterRepository
     */
    protected $danTesterRepository = null;

    /**
     * @param \DanTester\DanTester\Domain\Repository\DanTesterRepository $danTesterRepository
     */
    public function injectDanTesterRepository(\DanTester\DanTester\Domain\Repository\DanTesterRepository $danTesterRepository)
    {
        $this->danTesterRepository = $danTesterRepository;
    }

    /**
     * action list
     *
     * @return string|object|null|void
     */
    public function listAction()
    {
        $danTesters = $this->danTesterRepository->findAll();
        $this->view->assign('danTesters', $danTesters);
    }

   
    public function showAction()
    {
        $GLOBALS['TSFE']->additionalHeaderData['myScript'] = '<script>alert("CUSTOM HEADER DATA");</script>';
        $this->view->assign('danTester', "TEST");
    }
}
