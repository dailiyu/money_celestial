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
  __name: "settle_notice",
  setup(__props) {
    const isChecked = common_vendor.ref(false);
    const changeCheck = () => {
      isChecked.value = !isChecked.value;
    };
    const toSetInfo = () => {
      if (!isChecked.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请阅读完须知后勾选同意"
        });
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_set_info"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "商家入驻须知"
        }),
        b: isChecked.value,
        c: common_vendor.o(changeCheck),
        d: common_vendor.o(toSetInfo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-37037ead"]]);
wx.createPage(MiniProgramPage);
