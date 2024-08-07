<?php

declare(strict_types=1);

namespace Location\Bearing;

use Location\Coordinate;

/**
 * Interface BearingInterface
 *
 * @author Marcus Jaschen <mjaschen@gmail.com>
 */
interface BearingInterface
{
    /**
     * This method calculates the initial bearing between the
     * two points.
     *
     * @param Coordinate $point1
     * @param Coordinate $point2
     *
     * @return float Bearing Angle
     */
    public function calculateBearing(Coordinate $point1, Coordinate $point2): float;

    /**
     * Calculates the final bearing between the two points.
     *
     * @param Coordinate $point1
     * @param Coordinate $point2
     *
     * @return float
     */
    public function calculateFinalBearing(Coordinate $point1, Coordinate $point2): float;

    /**
     * Calculates a destination point for the given point, bearing angle,
     * and distance.
     *
     * @param Coordinate $point
     * @param float $bearing the bearing angle between 0 and 360 degrees
     * @param float $distance the distance to the destination point in meters
     *
     * @return Coordinate
     */
    public function calculateDestination(Coordinate $point, float $bearing, float $distance): Coordinate;
}
