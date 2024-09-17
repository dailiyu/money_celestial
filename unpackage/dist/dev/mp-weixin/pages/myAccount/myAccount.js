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
  __name: "myAccount",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const toLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    const toMyPoint = () => {
      common_vendor.index.navigateTo({
        url: "/pages/myAccount/my_point"
      });
    };
    const toPointAvailable = () => {
      common_vendor.index.navigateTo({
        url: "/pages/myAccount/point_available"
      });
    };
    const toPointAccount = () => {
      common_vendor.index.navigateTo({
        url: "/pages/myAccount/point_account"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "我的账户"
        }),
        b: common_vendor.unref(userStore).userInfo.icon,
        c: common_vendor.t(common_vendor.unref(userStore).userInfo.name),
        d: common_vendor.o(toLogin),
        e: common_vendor.o(toMyPoint),
        f: common_vendor.o(toPointAvailable),
        g: common_vendor.o(toPointAccount),
        h: common_assets._imports_0$2,
        i: common_assets._imports_0$2,
        j: common_assets._imports_0$2
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/money_celestial/pages/myAccount/myAccount.vue"]]);
wx.createPage(MiniProgramPage);
