"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "merchant_intro",
  setup(__props) {
    const toNotice = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/settle_notice"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "商家"
        }),
        b: common_vendor.o(toNotice)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-63c4abfc"], ["__file", "D:/code/money_celestial/pages/merchant/merchant_intro.vue"]]);
wx.createPage(MiniProgramPage);
