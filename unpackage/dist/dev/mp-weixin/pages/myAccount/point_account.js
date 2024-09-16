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
  __name: "point_account",
  setup(__props) {
    const toBindAccount = () => {
      common_vendor.index.navigateTo({
        url: "/pages/myAccount/bind_account"
      });
    };
    const toUnbindAccount = () => {
      common_vendor.index.navigateTo({
        url: "/pages/myAccount/unbind_account"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "可用积分"
        }),
        b: common_assets._imports_0$4,
        c: common_vendor.o(toBindAccount),
        d: common_assets._imports_0$4,
        e: common_vendor.o(toUnbindAccount)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9711af29"], ["__file", "D:/code/money_celestial/pages/myAccount/point_account.vue"]]);
wx.createPage(MiniProgramPage);
