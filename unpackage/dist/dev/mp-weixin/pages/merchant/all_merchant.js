"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _component_shopList = common_vendor.resolveComponent("shopList");
  (_easycom_navBar2 + _component_shopList)();
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
    const distance = common_vendor.ref("up");
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "全部商家"
        }),
        b: common_assets._imports_0$10,
        c: common_vendor.o(getType),
        d: distance.value == "up"
      }, distance.value == "up" ? {
        e: common_assets._imports_1$3,
        f: common_assets._imports_2$3,
        g: common_vendor.o(($event) => distance.value = "down")
      } : {}, {
        h: distance.value == "down"
      }, distance.value == "down" ? {
        i: common_assets._imports_2$3,
        j: common_assets._imports_1$3,
        k: common_vendor.o(($event) => distance.value = "up")
      } : {}, {
        l: common_vendor.o(toSettle)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2d911691"]]);
wx.createPage(MiniProgramPage);
