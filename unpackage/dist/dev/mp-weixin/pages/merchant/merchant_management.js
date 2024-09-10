"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  (_easycom_navBar2 + _easycom_uni_rate2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_rate)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "商家后台"
    }),
    b: common_vendor.p({
      readonly: true,
      value: 2,
      ["active-color"]: "#fc5908",
      size: "12"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a81a7219"]]);
wx.createPage(MiniProgramPage);
