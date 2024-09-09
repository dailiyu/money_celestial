"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  name: "upload",
  data() {
    return {};
  },
  methods: {
    uploadPic() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$3,
    b: common_vendor.o((...args) => $options.uploadPic && $options.uploadPic(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0917ae16"], ["__file", "D:/code/money_celestial/components/upload/upload.vue"]]);
wx.createComponent(Component);
