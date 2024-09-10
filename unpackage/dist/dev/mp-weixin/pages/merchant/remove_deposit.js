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
  __name: "remove_deposit",
  setup(__props) {
    const address = common_vendor.ref("");
    const number = common_vendor.ref("");
    const scan = () => {
      common_vendor.index.scanCode({
        scanType: ["qrCode"],
        success(res) {
          console.log(res);
        }
      });
    };
    const isChecked = common_vendor.ref(false);
    const changeCheck = () => {
      isChecked.value = !isChecked.value;
    };
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
          title: "解除保证金"
        }),
        b: address.value,
        c: common_vendor.o(($event) => address.value = $event.detail.value),
        d: common_assets._imports_0$4,
        e: common_vendor.o(scan),
        f: number.value,
        g: common_vendor.o(($event) => number.value = $event.detail.value),
        h: isChecked.value,
        i: common_vendor.o(changeCheck),
        j: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-930acddc"], ["__file", "D:/code/money_celestial/pages/merchant/remove_deposit.vue"]]);
wx.createPage(MiniProgramPage);
