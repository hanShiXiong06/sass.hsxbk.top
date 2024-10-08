<?php
declare(strict_types=1);

namespace Fastknife\Domain\Vo;


class PointVo
{
    public $x;
    public $y;

    /**
     * PointDto constructor.
     * @param $x
     * @param $y
     */
    public function __construct($x, $y)
    {
        $this->x = $x;
        $this->y = $y;
    }
}
