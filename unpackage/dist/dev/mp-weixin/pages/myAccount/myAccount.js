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
        b: common_assets._imports_0$11,
        c: common_vendor.unref(userStore).userInfo.icon,
        d: common_vendor.t(common_vendor.unref(userStore).userInfo.name),
        e: common_vendor.o(toLogin),
        f: common_vendor.o(toMyPoint),
        g: common_vendor.o(toPointAvailable),
        h: common_vendor.o(toPointAccount),
        i: common_assets._imports_0$3,
        j: common_assets._imports_2$5,
        k: common_assets._imports_3$2,
        l: common_assets._imports_4$1,
        m: common_assets._imports_0$3,
        n: common_assets._imports_5$1,
        o: common_assets._imports_6$1,
        p: common_assets._imports_7$1,
        q: common_assets._imports_0$3,
        r: common_assets._imports_8$1,
        s: common_assets._imports_9$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/money_celestial/pages/myAccount/myAccount.vue"]]);
wx.createPage(MiniProgramPage);
