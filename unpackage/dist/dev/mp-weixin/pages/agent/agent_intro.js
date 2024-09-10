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
  __name: "agent_intro",
  setup(__props) {
    const toNext = () => {
      common_vendor.index.navigateTo({
        url: "/pages/agent/agent_management"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "代理"
        }),
        b: common_assets._imports_0$5,
        c: common_vendor.o(toNext)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4d11c0d1"], ["__file", "D:/code/money_celestial/pages/agent/agent_intro.vue"]]);
wx.createPage(MiniProgramPage);
