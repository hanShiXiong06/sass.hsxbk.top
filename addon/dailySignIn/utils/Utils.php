<?php
#######################################################################
# File Name: Utils.php
# Desc:
# Author: hd
# mail: joker_di@163.com
# Created Time: 2024/5/25 23:58
#######################################################################
namespace addon\dailySignIn\utils;
use Carbon\Carbon;

class Utils{
    public static function getLastMonthSameDayStart(): Carbon{
        return Carbon::now()->subMonth()->startOfDay();
    }
    public static function getCurrentTime(): string{
        return Carbon::now()->toDateTimeString();
    }
    public static function getYesterdayStartTime(): Carbon{
        return Carbon::parse('yesterday')->startOfDay();
    }
    public static function isWithinToday($inputTime): bool{
        return Carbon::parse($inputTime)->between(
            Carbon::now()->startOfDay(),
            Carbon::now()->endOfDay()
        );
    }

    public  static function getTimeIntervals($startDate, $days): array
    {
        $intervals = [];

        // 创建起始日期的 Carbon 实例
        $startDateTime = Carbon::parse($startDate);

        for ($i = 0; $i < $days; $i++) {
            // 计算每一天的开始和结束时间
            $currentStartDate = $startDateTime->copy()->addDays($i)->startOfDay();
            $currentEndDate = $startDateTime->copy()->addDays($i)->endOfDay();

            $intervals[] = [
                'startTime' => $currentStartDate->toDateTimeString(),
                'endTime' => $currentEndDate->toDateTimeString()
            ];
        }

        return $intervals;
    }
    /**
     * 比较两个日期，返回它们之间的天数差异
     */
    public static function getDaysDifference($date1, $date2, $absolute = true): int
    {
        // 创建 Carbon 日期对象
        $carbonDate1 = Carbon::parse(Carbon::parse($date1)->toDateString());
        $carbonDate2 = Carbon::parse(Carbon::parse($date2)->toDateString());
        // 计算两个日期之间的天数差
        $daysDifference = $carbonDate1->diffInDays($carbonDate2, $absolute);

        // 包含起始日期
        return $daysDifference + 1;
    }
}