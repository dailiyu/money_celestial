"use strict";
const common_vendor = require("../../common/vendor.js");
const service_merchant = require("../../service/merchant.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "merchant_code_authentication",
  setup(__props) {
    const address = common_vendor.ref("");
    const confirm = async () => {
      if (!address.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请输入商家码地址"
        });
      common_vendor.index.showLoading({
        title: "认证中"
      });
      await service_merchant.merchantCodeAuthentication({ username: address.value });
      common_vendor.index.hideLoading();
      common_vendor.index.showToast({
        icon: "none",
        title: "认证成功"
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f661089"]]);
wx.createPage(MiniProgramPage);
