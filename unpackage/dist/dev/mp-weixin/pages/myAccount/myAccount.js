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
  __name: "myAccount",
  setup(__props) {
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
        c: common_vendor.o(toLogin),
        d: common_vendor.o(toMyPoint),
        e: common_vendor.o(toPointAvailable),
        f: common_vendor.o(toPointAccount),
        g: common_assets._imports_0$3,
        h: common_assets._imports_2$3,
        i: common_assets._imports_3$2,
        j: common_assets._imports_4$1,
        k: common_assets._imports_0$3,
        l: common_assets._imports_5$1,
        m: common_assets._imports_6$1,
        n: common_assets._imports_7$1,
        o: common_assets._imports_0$3,
        p: common_assets._imports_8$1,
        q: common_assets._imports_9$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/money_celestial/pages/myAccount/myAccount.vue"]]);
wx.createPage(MiniProgramPage);
