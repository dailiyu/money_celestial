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
  __name: "agent_management",
  setup(__props) {
    const toMerchantList = () => {
      common_vendor.index.navigateTo({
        url: "/pages/agent/merchant_list"
      });
    };
    const toMerchantCode = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_code_authentication"
      });
    };
    const toSecurityDeposit = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/security_deposit"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "代理后台"
        }),
        b: common_assets._imports_0$7,
        c: common_assets._imports_0$4,
        d: common_vendor.o(toMerchantList),
        e: common_assets._imports_0$4,
        f: common_vendor.o(toMerchantCode),
        g: common_assets._imports_0$4,
        h: common_vendor.o(toSecurityDeposit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aa1b4823"], ["__file", "D:/code/money_celestial/pages/agent/agent_management.vue"]]);
wx.createPage(MiniProgramPage);
