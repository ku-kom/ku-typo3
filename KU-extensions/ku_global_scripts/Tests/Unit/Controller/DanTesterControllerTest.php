<?php
declare(strict_types=1);

namespace DanTester\DanTester\Tests\Unit\Controller;

use PHPUnit\Framework\MockObject\MockObject;
use TYPO3\CMS\Extbase\Mvc\View\ViewInterface;
use TYPO3\TestingFramework\Core\AccessibleObjectInterface;
use TYPO3\TestingFramework\Core\Unit\UnitTestCase;

/**
 * Test case
 *
 * @author Dan Rye Jensen <drj@idefa.dk>
 */
class DanTesterControllerTest extends UnitTestCase
{
    /**
     * @var \DanTester\DanTester\Controller\DanTesterController|MockObject|AccessibleObjectInterface
     */
    protected $subject;

    protected function setUp(): void
    {
        parent::setUp();
        $this->subject = $this->getMockBuilder($this->buildAccessibleProxy(\DanTester\DanTester\Controller\DanTesterController::class))
            ->onlyMethods(['redirect', 'forward', 'addFlashMessage'])
            ->disableOriginalConstructor()
            ->getMock();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function listActionFetchesAllDanTestersFromRepositoryAndAssignsThemToView(): void
    {
        $allDanTesters = $this->getMockBuilder(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class)
            ->disableOriginalConstructor()
            ->getMock();

        $danTesterRepository = $this->getMockBuilder(\DanTester\DanTester\Domain\Repository\DanTesterRepository::class)
            ->onlyMethods(['findAll'])
            ->disableOriginalConstructor()
            ->getMock();
        $danTesterRepository->expects(self::once())->method('findAll')->will(self::returnValue($allDanTesters));
        $this->subject->_set('danTesterRepository', $danTesterRepository);

        $view = $this->getMockBuilder(ViewInterface::class)->getMock();
        $view->expects(self::once())->method('assign')->with('danTesters', $allDanTesters);
        $this->subject->_set('view', $view);

        $this->subject->listAction();
    }

    /**
     * @test
     */
    public function showActionAssignsTheGivenDanTesterToView(): void
    {
        $danTester = new \DanTester\DanTester\Domain\Model\DanTester();

        $view = $this->getMockBuilder(ViewInterface::class)->getMock();
        $this->subject->_set('view', $view);
        $view->expects(self::once())->method('assign')->with('danTester', $danTester);

        $this->subject->showAction($danTester);
    }
}
