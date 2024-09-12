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
  __name: "recommend_management",
  setup(__props) {
    const toMerchantCode = () => {
      common_vendor.index.navigateTo({
        url: "/pages/recommend/merchant_code_authentication"
      });
    };
    const toSecurityDeposit = () => {
      common_vendor.index.navigateTo({
        url: "/pages/recommend/security_deposit"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐官后台"
        }),
        b: common_assets._imports_0$8,
        c: common_assets._imports_1$2,
        d: common_assets._imports_0$3,
        e: common_vendor.o((...args) => _ctx.toEdit && _ctx.toEdit(...args)),
        f: common_assets._imports_0$3,
        g: common_vendor.o(toMerchantCode),
        h: common_assets._imports_0$3,
        i: common_vendor.o(toSecurityDeposit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6eb3b4f4"]]);
wx.createPage(MiniProgramPage);
