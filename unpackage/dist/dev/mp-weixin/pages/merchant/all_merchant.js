"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "all_merchant",
  setup(__props) {
    const getType = () => {
      common_vendor.index.showActionSheet({
        itemList: ["美食", "服饰"],
        success(res) {
          console.log(res.tapIndex);
        }
      });
    };
    const toSettle = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_intro"
      });
    };
    const toDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_detail"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "全部商家"
        }),
        b: common_vendor.o(getType),
        c: common_vendor.o(toSettle),
        d: common_assets._imports_0$2,
        e: common_assets._imports_2$1,
        f: common_vendor.o(toDetail)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2d911691"], ["__file", "D:/code/money_celestial/pages/merchant/all_merchant.vue"]]);
wx.createPage(MiniProgramPage);
