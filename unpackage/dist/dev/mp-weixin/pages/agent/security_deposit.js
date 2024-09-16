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
  __name: "security_deposit",
  setup(__props) {
    const toRecord = () => {
      common_vendor.index.navigateTo({
        url: "/pages/agent/deposit_record"
      });
    };
    const toAdd = () => {
      common_vendor.index.navigateTo({
        url: "/pages/agent/add_deposit"
      });
    };
    const toRemove = () => {
      common_vendor.index.navigateTo({
        url: "/pages/agent/remove_deposit"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "保证金"
        }),
        b: common_assets._imports_0$4,
        c: common_vendor.o(toRecord),
        d: common_vendor.o(toAdd),
        e: common_vendor.o(toRemove)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-151545ee"], ["__file", "D:/code/money_celestial/pages/agent/security_deposit.vue"]]);
wx.createPage(MiniProgramPage);
