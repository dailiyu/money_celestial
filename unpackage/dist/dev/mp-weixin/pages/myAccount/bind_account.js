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
  __name: "bind_account",
  setup(__props) {
    const number = common_vendor.ref("");
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
          title: "绑定账号"
        }),
        b: number.value,
        c: common_vendor.o(($event) => number.value = $event.detail.value),
        d: isChecked.value,
        e: common_vendor.o(changeCheck),
        f: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bbd33f9d"], ["__file", "D:/code/money_celestial/pages/myAccount/bind_account.vue"]]);
wx.createPage(MiniProgramPage);
