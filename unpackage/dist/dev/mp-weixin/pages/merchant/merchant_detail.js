"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_goodsList2 = common_vendor.resolveComponent("goodsList");
  (_easycom_navBar2 + _easycom_uni_segmented_control2 + _easycom_goodsList2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_goodsList = () => "../../components/goodsList/goodsList.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_segmented_control + _easycom_goodsList)();
}
const _sfc_main = {
  __name: "merchant_detail",
  setup(__props) {
    const current = common_vendor.ref(0);
    const items = common_vendor.ref(["本店商品", "商家介绍", "评价"]);
    const onClickItem = (e) => {
      if (current.value !== e.currentIndex) {
        current.value = e.currentIndex;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "门店详情"
        }),
        b: common_assets._imports_0$2,
        c: common_assets._imports_1$3,
        d: common_assets._imports_1$1,
        e: common_assets._imports_3$1,
        f: common_assets._imports_4,
        g: common_vendor.o(onClickItem),
        h: common_vendor.p({
          current: current.value,
          values: items.value,
          ["style-type"]: "text",
          ["active-color"]: "#FC5908"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1771cf06"], ["__file", "D:/code/money_celestial/pages/merchant/merchant_detail.vue"]]);
wx.createPage(MiniProgramPage);
