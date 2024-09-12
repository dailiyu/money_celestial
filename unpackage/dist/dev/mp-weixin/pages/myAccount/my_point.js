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
  __name: "my_point",
  setup(__props) {
    const toWithdrawPoint = () => {
      common_vendor.index.navigateTo({
        url: "/pages/myAccount/withdraw_point"
      });
    };
    const toWithdrawRecord = () => {
      common_vendor.index.navigateTo({
        url: "/pages/myAccount/withdraw_record"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "我的积分"
        }),
        b: common_assets._imports_0$3,
        c: common_vendor.o(toWithdrawPoint),
        d: common_assets._imports_0$3,
        e: common_vendor.o(toWithdrawRecord)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c4092873"], ["__file", "D:/code/money_celestial/pages/myAccount/my_point.vue"]]);
wx.createPage(MiniProgramPage);
