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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "我的账户"
        }),
        b: common_assets._imports_0$10,
        c: common_vendor.unref(userStore).userInfo.icon,
        d: common_vendor.t(common_vendor.unref(userStore).userInfo.name),
        e: common_vendor.o(toLogin),
        f: common_assets._imports_1$3,
        g: common_assets._imports_2$3,
        h: common_assets._imports_3$1,
        i: common_assets._imports_0$3,
        j: common_assets._imports_5$1,
        k: common_assets._imports_6$1,
        l: common_assets._imports_7$1,
        m: common_assets._imports_0$3,
        n: common_assets._imports_8$1,
        o: common_assets._imports_9$1,
        p: common_assets._imports_10$1,
        q: common_assets._imports_0$3,
        r: common_assets._imports_11$1,
        s: common_assets._imports_12$1
      };
    };
  }
};
wx.createPage(_sfc_main);
