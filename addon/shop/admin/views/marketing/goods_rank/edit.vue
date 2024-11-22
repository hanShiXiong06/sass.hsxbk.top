<template>
  <div  class="main-container">
    <el-card class="box-card !border-none" shadow="never">
      <el-page-header :content="rank_id ? t('updateRanking') : t('addRanking')" :icon="ArrowLeft" @back="back()" />
    </el-card>

    <el-card class="box-card mt-[15px] !border-none" shadow="never" v-loading="loading">
      <el-form :model="formData" label-width="120px" ref="formRef" :rules="formRules" class="page-form">
        <el-form-item :label="t('rankName')" prop="name">
          <el-input v-model.trim="formData.name" clearable :placeholder="t('ramkkNamePlaceholder')" class="input-width" maxlength="20" show-word-limit />
        </el-form-item>

        <el-form-item :label="t('rankType')" prop="rank_type">
          <el-select v-model="formData.rank_type" :placeholder="t('rankTypePlaceholder')" clearable>
            <el-option v-for="(value, key) in formList.rankTypeList" :key="key" :label="value" :value="key" />
          </el-select></el-form-item>

        <el-form-item :label="t('ruleType')" prop="rule_type">
          <el-radio-group v-model="formData.rule_type">
            <el-radio v-for="(value, key) in formList.ruleTypeList" :key="key" :label="key">{{ value }}</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item :label="t('goodsSource')" prop="goods_source">
          <el-radio-group v-model="formData.goods_source">
            <el-radio v-for="(value, key) in formList.goodsSourceList" :key="key" :label="key">{{ value }}</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item :label="t('selectGoods')" prop="goods_json" v-if="formData.goods_source == 'goods'">
          <goods-select-popup ref="goodsSelectPopupRef" v-model="formData.goods_ids" @goodsSelect="goodsSelect" :min="1" :max="99" />
        </el-form-item>

        <el-form-item v-if="formData.goods_json && formData.goods_json.length && formData.goods_source == 'goods' ">
          <el-table :data="formData.goods_json" size="large" max-height="400">
            <el-table-column prop="goods_id" :label="t('goodsSelectPopupGoodsInfo')" min-width="300">
              <template #default="{ row }">
                <div class="flex items-center cursor-pointer">
                  <div class="min-w-[60px] h-[60px] flex items-center justify-center">
                    <el-image v-if="row.goods_image" class="w-[60px] h-[60px]" :src="img(row.goods_image)" fit="contain">
                      <template #error>
                        <div class="image-slot">
                          <img class="w-[60px] h-[60px]" src="@/addon/shop/assets/goods_default.png" />
                        </div>
                      </template>
                    </el-image>
                    <img v-else class="w-[70px] h-[60px]" src="@/addon/shop/assets/goods_default.png" fit="contain" />
                  </div>
                  <div class="ml-2">
                    <span :title="row.sku_name" class="multi-hidden">{{row.sku_name ? row.goods_name + " " + row.sku_name: row.goods_name}}</span>
                    <span class="text-primary text-[12px]">{{row.goods_type_name}}</span>
                  </div>
                </div>
              </template>
            </el-table-column>

            <el-table-column prop="price" :label="t('goodsSelectPopupPrice')" min-width="120">
              <template #default="{ row }">
                <div>￥{{ row.price }}</div>
              </template>
            </el-table-column>

            <el-table-column prop="sort" :label="t('排序')" min-width="120" sortable="custom">
            <template #default="{ row }">
              <el-input v-model.number ="row.sort" class="w-[70px]" maxlength="8"  />
            </template>
          </el-table-column>

            <el-table-column :label="t('operation')" align="right" min-width="160">
              <template #default="{ row, $index }">
                <el-button type="primary" link @click="deleteGoodsEvent(row, $index)">{{ t("delete") }}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>

        <el-form-item :label="t('goodsSelectPopupGoodsCategory')" prop="category_ids" v-if="formData.goods_source == 'category'">
          <el-cascader v-model="formData.category_ids" :options="goodsCategoryOptions" :props="goodsCategoryProps" clearable filterable @change="categoryHandleChange" popper-class="choice" />
          <div class="ml-[10px]">
            <span class="cursor-pointer text-primary mr-[10px]" @click="refreshGoodsCategory(true)">{{ t("refresh")}}</span>
            <span class="cursor-pointer text-primary" @click="toGoodsCategoryEvent">{{ t("addCategory") }}</span>
          </div>
        </el-form-item>

        <el-form-item :label="t('brand')" prop="brand_ids" v-if="formData.goods_source == 'brand'">
          <el-select v-model="formData.brand_ids" :placeholder="t('brandPlaceholder')" clearable multiple>
            <el-option v-for="item in brandOptions" :key="item.brand_id" :label="item.brand_name" :value="item.brand_id" />
          </el-select>
          <div class="ml-[10px]">
            <span class="cursor-pointer text-primary mr-[10px]" @click="refreshGoodsBrand(true)">{{ t("refresh")}}</span>
            <span class="cursor-pointer text-primary" @click="toGoodsBrandEvent">{{ t("addBrand") }}</span>
          </div>
        </el-form-item>

        <el-form-item :label="t('label')" prop="label_ids" v-if="formData.goods_source == 'label'">
          <el-checkbox-group v-model="formData.label_ids">
            <el-checkbox :label="item.label_id" v-for="(item, index) in labelOptions" :key="index">{{ item.label_name}}</el-checkbox>
          </el-checkbox-group>
          <div class="ml-[10px]">
            <span class="cursor-pointer text-primary mr-[10px]" @click="refreshGoodsLabel">{{ t("refresh") }}</span>
            <span class="cursor-pointer text-primary" @click="toGoodsLabelEvent">{{ t("addLabel") }}</span>
          </div>
        </el-form-item>

        <el-form-item :label="t('showGoodsNum')" prop="show_goods_num" v-if="formData.goods_source != 'goods'">
          <el-input v-model.number="formData.show_goods_num" clearable :placeholder="t('showGoodsNumPlaceholder')" class="input-width" maxlength="20" show-word-limit />
        </el-form-item>

        <el-form-item :label="t('sort')" prop="sort">
          <el-input v-model.number="formData.sort" clearable :placeholder="t('sortPlaceholder')" class="input-width" maxlength="6" show-word-limit />
        </el-form-item>
      </el-form>
    </el-card>
    
    <div class="fixed-footer-wrap">
      <div class="fixed-footer">
        <el-button type="primary" @click="save()">{{ t("save") }}</el-button>
        <el-button @click="back()">{{ t("cancel") }}</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, reactive, nextTick } from "vue";
import { t } from "@/lang";
import { useRoute, useRouter } from "vue-router";
import { ArrowLeft } from "@element-plus/icons-vue";
import { FormInstance, ElMessage } from "element-plus";
import {optionData,getRankInfo,addGoodRank,editGoodRank,} from "@/addon/shop/api/marketing";
import goodsSelectPopup from "@/addon/shop/views/goods/components/goods-select-popup.vue";
import {getBrandList,getLabelList,getCategoryTree} from "@/addon/shop/api/goods";
import { img ,deepClone} from "@/utils/common";

const router = useRouter();
const route = useRoute();
const loading = ref(true);
const rank_id = route.query.rank_id;
const formData = reactive({
  name: "",
  show_goods_num: "",
  goods_source: "goods",
  rank_type: "",
  sort: "",
  rule_type: "sale",
  category_ids: [],
  brand_ids: [],
  label_ids: [],
  goods_json: <Array<any>>[],
  goods_ids: [],
});

const formList = reactive({
  rankTypeList: [],
  goodsSourceList: [],
  ruleTypeList: [],
});
const formRef = ref<FormInstance>();

const formRules = computed(() => {
  return {
    name: [
      { required: true, message: t("ramkkNamePlaceholder"), trigger: "blur" },
    ],
    rule_type: [
      {
        required: true,
        message: t("ruleTypePlaceholder"),
        trigger: "change",
      },
    ],
    rank_type: [
      {
        required: true,
        message: t("rankTypePlaceholder"),
        trigger: "change",
      },
    ],
    goods_source: [
      {
        required: true,
        message: t("goodsSourcePlaceholder"),
        trigger: "change",
      },
    ],
    label_ids: [
      {
        validator: (rule: any, value: any, callback: any) => {
          if (formData.goods_source === "label") {
            if (!value || value.length === 0) {
              callback(t("labelTips")); // 提示错误信息
            } else {
              callback(); // 校验通过
            }
          } else {
            callback();
          }
        },
        trigger: "change",
      },
    ],
    show_goods_num: [
      {
        required: true,
        validator: (rule: any, value: any, callback: any) => {
          if (formData.goods_source != "goods") {
            if (!value || value.length === 0) {
              callback(t("showGoodsNumTips")); // 提示错误信息
            } else {
              callback(); // 校验通过
            }
          } else {
            callback();
          }
        },
        trigger: "change",
      },
    ],
    brand_ids: [
      {
        required: true,
        validator: (rule: any, value: any, callback: any) => {
          if (formData.goods_source === "brand") {
            if (!value || value.length === 0) {
              callback(t("brandTips")); // 提示错误信息
            } else {
              callback(); // 校验通过
            }
          } else {
            callback();
          }
        },
        trigger: "change",
      },
    ],
    category_ids: [
      {
        required: true,
        validator: (rule: any, value: any, callback: any) => {
          if (formData.goods_source === "category") {
            if (!value || value.length === 0) {
              callback(t("categoryTips")); // 提示错误信息
            } else {
              callback(); // 校验通过
            }
          } else {
            callback();
          }
        },
        trigger: "change",
      },
    ],
    goods_json: [
      {
        required: true,
        trigger: 'blur',
        validator: (rule: any, value: any, callback: any) => {
            if (formData.goods_source == 'goods') {
                if (formData.goods_json.length == 0) {
                    callback(new Error(t('goodsJsonEmpty')))
                } else {
                    callback()
                }
            }
        }
      }
    ],
  };
});

const getRankDetails= () => {
  optionData().then((res) => {
    loading.value = false;
    console.log(res);
    formList.rankTypeList = res.data.rank_type;
    formList.goodsSourceList = res.data.goods_source;
    formList.ruleTypeList = res.data.rule_type;
  });
  if (rank_id) {
    // 获取详情
    const id = Number(rank_id);
    getRankInfo(id).then((res) => {
      const data = res.data;
      if (data) {
        Object.assign(formData, data);
        if (formData.goods_source == 'goods') {
          formData.goods_ids.splice(0, formData.goods_ids.length);
          formData.goods_json.forEach((item: any) => {
             formData.goods_ids.push( item.goods_id) 
          })

        }
        formData.goods_json = data.goods_list.map((item: any) => {
          return {
            goods_id: item.goods_id,   
            sort: item.sort,                  
            price:item.goodsSku.price,  
            goods_type_name: item.goods_type_name,
            goods_name: item.goods_name,
            goods_image: item.goodsSku.sku_image,
          };
        });
  
      }
    })
  }
};
getRankDetails();

// 商品分类
const goodsCategoryOptions = reactive([]);
const goodsCategoryProps = {
  multiple: true,
};

const categoryHandleChange = (value: any) => {
  console.log(value, formData.category_ids, formData.category_ids.toString());
};

// 跳转到商品分类，添加分类
const toGoodsCategoryEvent = () => {
  const url = router.resolve({
    path: "/shop/goods/category",
  });
  window.open(url.href);
};

// 刷新商品分类
const refreshGoodsCategory = (bool = false) => {
  getCategoryTree().then((res) => {
    const data = res.data;
    if (data) {
      const goodsCategoryTree: any = [];
      data.forEach((item: any) => {
        const children: any = [];
        if (item.child_list) {
          item.child_list.forEach((childItem: any) => {
            children.push({
              value: childItem.category_id,
              label: childItem.category_name,
            });
          });
        }
        goodsCategoryTree.push({
          value: item.category_id,
          label: item.category_name,
          children,
        });
      });
      goodsCategoryOptions.splice(
        0,
        goodsCategoryOptions.length,
        ...goodsCategoryTree
      );
      if (bool) {
        goodsCategoryTree({
          message: t("refreshSuccess"),
          type: "success",
        });
      }
    }
  });
};

refreshGoodsCategory();

// 品牌列表下拉框
const brandOptions = reactive([]);

// 跳转到商品品牌，添加品牌
const toGoodsBrandEvent = () => {
  const url = router.resolve({
    path: "/shop/goods/brand",
  });
  window.open(url.href);
};

// 商品品牌
const refreshGoodsBrand = (bool = false) => {
  getBrandList({}).then((res) => {
    const data = res.data;
    if (data) {
      brandOptions.splice(0, brandOptions.length, ...data);
      if (bool) {
        ElMessage({
          message: t("refreshSuccess"),
          type: "success",
        });
      }
    }
  });
};

refreshGoodsBrand();

// 标签组列表复选框
const labelOptions = reactive([]);

// 跳转到商品标签，添加标签
const toGoodsLabelEvent = () => {
  const url = router.resolve({
    path: "/shop/goods/label",
  });
  window.open(url.href);
};

// 商品标签
const refreshGoodsLabel = () => {
  getLabelList({}).then((res) => {
    const data = res.data;
    if (data) {
      labelOptions.splice(0, labelOptions.length, ...data);
    }
  });
};

refreshGoodsLabel();

//选择商品
const goodsSelect = (value: any) => {
  let arr = [...formData.goods_json]; 
  const existingSorts = arr.map((el: any) => el.sort).sort((a, b) => a - b);
  for (let key in value) {
    let goods_sku: any = value[key];
    let sku: any = {
      goods_id: goods_sku.goods_id,
      price: goods_sku.goodsSku.price,
      goods_type_name: goods_sku.goods_type_name,
      goods_image: goods_sku.goods_cover,
      goods_name: goods_sku.goods_name,
    };

    const existingIndex = arr.findIndex((el: any) => el.goods_id == sku.goods_id);
    if (existingIndex !== -1) {
      arr[existingIndex] = { ...arr[existingIndex], ...sku };
    } else {
      let newSort = 1;
      while (existingSorts.includes(newSort)) {
        newSort++;  
      }
      sku.sort = newSort;
      arr.push(deepClone(sku));  
      existingSorts.push(newSort);
      existingSorts.sort((a, b) => a - b);  
    }
  }

  formData.goods_json = arr.sort((a: any, b: any) => a.sort - b.sort);
};


// 删除商品
const deleteGoodsEvent = (row: any, index: any) => {
  formData.goods_json.splice(index, 1);
  formData.goods_ids.splice(formData.goods_ids.indexOf(row.goods_id), 1);
};


const preventDuplication = ref(false);
const save = async () => {
  // 触发表单校验
  if (preventDuplication.value) return;
  await formRef.value?.validate(async (valid) => {
    if (valid) {
      formData.goods_json = formData.goods_json.map((item: any) => {
        return {
          goods_id: item.goods_id,  // 保留 goods_id
          sort: item.sort,          // 保留 sort 排序号
        };
      });
      const goodsCategory:any = []
      formData.category_ids.forEach((item:any)=>{
        if (typeof item == 'object'){
          item.forEach((second:any)=>{
            if(goodsCategory.indexOf(second) == -1){
              goodsCategory.push(second)
            }
          })
        }else{
          if(goodsCategory.indexOf(item) == -1){
              goodsCategory.push(item)
            }
        }
      })
      formData.category_ids = goodsCategory

      preventDuplication.value = true;    
      if (rank_id) {
        formData.id = rank_id; // 将 rank_id 拼接到 dataToSubmit 中
        editGoodRank(formData).then((res) => {
            preventDuplication.value = false;
            if (res.data) {
              router.push("/shop/marketing/goods_rank/list");
            }
          }).catch(() => {
            preventDuplication.value = false;
          });
      } else {
        addGoodRank(formData).then((res) => {
            preventDuplication.value = false;
            if (res.data) {
              router.push("/shop/marketing/goods_rank/list");
            }
          }).catch(() => {
            preventDuplication.value = false;
          });
      }
    } else {
      preventDuplication.value = false;
    }
  });
};

const back = () => {
  router.back();
};
</script>

<style lang="scss" scoped></style>
