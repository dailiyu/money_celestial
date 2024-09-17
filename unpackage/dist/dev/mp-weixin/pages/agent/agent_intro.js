"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "代理"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4d11c0d1"], ["__file", "D:/code/money_celestial/pages/agent/agent_intro.vue"]]);
wx.createPage(MiniProgramPage);
