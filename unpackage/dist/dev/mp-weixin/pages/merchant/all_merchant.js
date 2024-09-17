"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_public = require("../../store/public.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_shopList2 = common_vendor.resolveComponent("shopList");
  (_easycom_navBar2 + _easycom_shopList2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_shopList = () => "../../components/shopList/shopList.js";
if (!Math) {
  (_easycom_navBar + _easycom_shopList)();
}
const _sfc_main = {
  __name: "all_merchant",
  setup(__props) {
    const publicStore = store_public.usePublicStore();
    const range = common_vendor.computed(() => {
      return publicStore.cateGoryList.map((item) => {
        console.log({
          value: item.id,
          // value 为 id
          text: item.name
          // text 为 name
        });
        return {
          value: item.id,
          // value 为 id
          text: item.name
          // text 为 name
        };
      });
    });
    const categoryTextList = common_vendor.computed(() => {
      return publicStore.cateGoryList.map((item) => {
        return item.name;
      });
    });
    const index = common_vendor.ref(0);
    const getType = () => {
      common_vendor.index.showActionSheet({
        itemList: ["全部", ...categoryTextList.value],
        success(res) {
          index.value = res.tapIndex;
        }
      });
    };
    const distance = common_vendor.ref("asc");
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "全部商家"
        }),
        b: common_assets._imports_0$10,
        c: common_vendor.o(getType),
        d: distance.value == "desc"
      }, distance.value == "desc" ? {
        e: common_assets._imports_1$3,
        f: common_assets._imports_2$4,
        g: common_vendor.o(($event) => distance.value = "asc")
      } : {}, {
        h: distance.value == "asc"
      }, distance.value == "asc" ? {
        i: common_assets._imports_2$4,
        j: common_assets._imports_1$3,
        k: common_vendor.o(($event) => distance.value = "desc")
      } : {}, {
        l: common_vendor.p({
          sort: distance.value,
          shopType: index.value == 0 ? -1 : range.value[index.value - 1].value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2d911691"], ["__file", "D:/code/money_celestial/pages/merchant/all_merchant.vue"]]);
wx.createPage(MiniProgramPage);
