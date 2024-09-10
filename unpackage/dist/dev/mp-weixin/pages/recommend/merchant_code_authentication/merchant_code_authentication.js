"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "merchant_code_authentication",
  setup(__props) {
    const address = common_vendor.ref("");
    const isChecked = common_vendor.ref(false);
    const confirm = () => {
      if (!isChecked.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请阅读完须知后勾选同意"
        });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "商家码认证"
        }),
        b: address.value,
        c: common_vendor.o(($event) => address.value = $event.detail.value),
        d: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-177475b8"], ["__file", "D:/code/money_celestial/pages/recommend/merchant_code_authentication/merchant_code_authentication.vue"]]);
wx.createPage(MiniProgramPage);
