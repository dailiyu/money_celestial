"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "merchant_management",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const toEdit = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_edit_info"
      });
    };
    const toPoinGift = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/point_gift"
      });
    };
    const toCode = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_code_authentication"
      });
    };
    const toSecurityDeposit = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/security_deposit"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "商家后台"
        }),
        b: common_vendor.unref(userStore).storeInfo.avatar,
        c: common_vendor.t(common_vendor.unref(userStore).storeInfo.name),
        d: common_assets._imports_0$3,
        e: common_assets._imports_0$4,
        f: common_vendor.o(toEdit),
        g: common_assets._imports_0$4,
        h: common_vendor.o(toPoinGift),
        i: common_assets._imports_0$4,
        j: common_vendor.o(toCode),
        k: common_assets._imports_0$4,
        l: common_vendor.o(toSecurityDeposit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a81a7219"], ["__file", "D:/code/money_celestial/pages/merchant/merchant_management.vue"]]);
wx.createPage(MiniProgramPage);
