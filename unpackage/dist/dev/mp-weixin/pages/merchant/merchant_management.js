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
        d: common_vendor.f(5, (item, index, i0) => {
          return {
            a: index
          };
        }),
        e: common_assets._imports_0$2,
        f: common_assets._imports_0$3,
        g: common_vendor.o(toEdit),
        h: common_assets._imports_0$3,
        i: common_vendor.o(toPoinGift),
        j: common_assets._imports_0$3,
        k: common_vendor.o(toCode),
        l: common_assets._imports_0$3,
        m: common_vendor.o(toSecurityDeposit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a81a7219"], ["__file", "D:/code/money_celestial/pages/merchant/merchant_management.vue"]]);
wx.createPage(MiniProgramPage);
