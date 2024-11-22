<template>
    满减送列表
</template>
<script lang="ts" setup>
// 添加满减送活动
import {ElMessageBox} from "element-plus";
import {t} from "@/lang";
import {closeActiveDiscount, deleteGoodRank} from "@/addon/shop/api/marketing";

const handleChange = () => {
    router.push('/shop/marketing/manjian/edit')
}

//编辑满减送活动
 const editEvent = (data: any) => {
    router.push('/shop/marketing/manjian/edit?manjian_id='+data.manjian_id)
}

//关闭
const closeEvent = (id:number)=>{
    ElMessageBox.confirm(t('closeTips'), t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning'
        }
    ).then(() => {
        closeActiveDiscount(id).then(() => {
            loadDiscountList()
        }).catch(() => {
        })
    })
}

// 删除
const deleteEvent = (id:number) => {
    ElMessageBox.confirm(t('deleteTips'), t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning'
        }
    ).then(() => {
        deleteGoodRank(id).then(() => {
            loadRankList()
        }).catch(() => {
        })
    })
}

</script>

<style lang="scss" scoped>
</style>
