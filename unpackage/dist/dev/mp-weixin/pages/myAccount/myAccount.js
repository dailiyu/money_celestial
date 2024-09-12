"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
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
      title: "我的账户"
    }),
    b: common_assets._imports_0$9,
    c: common_assets._imports_1$3,
    d: common_assets._imports_2$1,
    e: common_assets._imports_3$1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
