"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  name: "shopList",
  data() {
    return {};
  },
  methods() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$3,
    b: common_assets._imports_1$2,
    c: common_vendor.o((...args) => _ctx.toDetail && _ctx.toDetail(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-69f4d838"]]);
wx.createComponent(Component);
