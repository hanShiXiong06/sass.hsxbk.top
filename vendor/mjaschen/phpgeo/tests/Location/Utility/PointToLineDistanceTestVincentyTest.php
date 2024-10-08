<?php

declare(strict_types=1);

namespace Location\Utility;

use Location\Coordinate;
use Location\Distance\Vincenty;
use Location\Line;
use PHPUnit\Framework\TestCase;

class PointToLineDistanceTestVincentyTest extends TestCase
{
    /**
     * @var PointToLineDistance
     */
    private $pointToLineDistance;

    /**
     * @var Vincenty
     */
    private $vincenty;

    public function setUp(): void
    {
        parent::setUp();

        $this->vincenty = new Vincenty();
        $this->pointToLineDistance = new PointToLineDistance($this->vincenty);
    }

    public function testLineHasTheSameStartAndEndPoint(): void
    {
        $point = new Coordinate(52.5, 13.5);

        $line = new Line(new Coordinate(52.5, 13.1), new Coordinate(52.5, 13.1));

        $this->assertEquals(27164.059, $this->pointToLineDistance->getDistance($point, $line));
    }

    public function testLinePoint1IsNearer(): void
    {
        $point = new Coordinate(52.45, 13.05);

        $linePoint1 = new Coordinate(52.5, 13.1);
        $linePoint2 = new Coordinate(52.6, 13.12);
        $line = new Line($linePoint1, $linePoint2);

        $this->assertEquals(
            $point->getDistance($linePoint1, $this->vincenty),
            $this->pointToLineDistance->getDistance($point, $line)
        );
    }

    public function testPointIsSameLocationAsLinePoint1(): void
    {
        $point = new Coordinate(52.45, 13.05);

        $linePoint1 = new Coordinate(52.45, 13.05);
        $linePoint2 = new Coordinate(52.6, 13.12);
        $line = new Line($linePoint1, $linePoint2);

        $this->assertEquals(0, $this->pointToLineDistance->getDistance($point, $line));
    }

    public function testLinePoint2IsNearer(): void
    {
        $point = new Coordinate(52.6001, 13.1201);

        $linePoint1 = new Coordinate(52.5, 13.1);
        $linePoint2 = new Coordinate(52.6, 13.12);
        $line = new Line($linePoint1, $linePoint2);

        $this->assertEqualsWithDelta(
            $point->getDistance($linePoint2, $this->vincenty),
            $this->pointToLineDistance->getDistance($point, $line),
            0.001
        );
    }

    public function testPointIsSameLocationAsLinePoint2(): void
    {
        $point = new Coordinate(52.45, 13.05);

        $linePoint1 = new Coordinate(52.5, 13.1);
        $linePoint2 = new Coordinate(52.45, 13.05);
        $line = new Line($linePoint1, $linePoint2);

        $this->assertEquals(0, $this->pointToLineDistance->getDistance($point, $line));
    }

    public function testPointIsSameLocationAsLineMidPoint(): void
    {

        $linePoint1 = new Coordinate(52.5, 13.1);
        $linePoint2 = new Coordinate(52.6, 13.12);
        $line = new Line($linePoint1, $linePoint2);

        $point = $line->getMidpoint();

        $this->assertEquals(0, $this->pointToLineDistance->getDistance($point, $line));
    }

    public function testDistanceIsCalculatedToSomewhereOnLine(): void
    {
        $point = new Coordinate(52.04, 13.01);

        $linePoint1 = new Coordinate(52.0, 13.0);
        $linePoint2 = new Coordinate(52.07, 13.02);
        $line = new Line($linePoint1, $linePoint2);

        $pl1Distance = $point->getDistance($linePoint1, $this->vincenty);
        $pl2Distance = $point->getDistance($linePoint2, $this->vincenty);
        $plDistance = $this->pointToLineDistance->getDistance($point, $line);

        $this->assertLessThan($pl1Distance, $plDistance);
        $this->assertLessThan($pl2Distance, $plDistance);
    }

    public function testDistanceMatchesPerpendicularDistance(): void
    {
        $point = new Coordinate(52.04, 13.01);

        $linePoint1 = new Coordinate(52.0, 13.0);
        $linePoint2 = new Coordinate(52.07, 13.02);
        $line = new Line($linePoint1, $linePoint2);

        $pdCalculator = new PerpendicularDistance();

        $perpendicularDistance = $pdCalculator->getPerpendicularDistance($point, $line);
        $pointToLineDistance = $this->pointToLineDistance->getDistance($point, $line);

        // allowed delta is relatively large because the perpdendicular distance
        // is calculated with a simple spherical model
        $this->assertEqualsWithDelta($pointToLineDistance, $perpendicularDistance, 0.3);
    }

    public function testPointBetweenMidpointAndPoint2(): void
    {
        $point = new Coordinate(52.0419763, 13.3061232);

        $linePoint1 = new Coordinate(52.0, 13.0);
        $linePoint2 = new Coordinate(52.1, 13.5);
        $line = new Line($linePoint1, $linePoint2);

        $this->assertEqualsWithDelta(2069.9, $this->pointToLineDistance->getDistance($point, $line), 0.1);
    }

    public function testPointToLineDistanceCaseA()
    {
        $line = new Line(new Coordinate(55.9857757, 13.5475307), new Coordinate(55.9869533, 13.5509295));
        $point0a = new Coordinate(55.9839105, 13.5465958);

        $this->assertEqualsWithDelta(215.636, $point0a->getDistance($line->getPoint1(), $this->vincenty), 0.1);

        $this->assertEqualsWithDelta(215.636, $this->pointToLineDistance->getDistance($point0a, $line), 0.1);
    }
}
