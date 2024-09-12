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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "我的账户"
        }),
        b: common_assets._imports_0$10,
        c: common_vendor.o(toLogin),
        d: common_assets._imports_1$3,
        e: common_assets._imports_2$3,
        f: common_assets._imports_3$1,
        g: common_assets._imports_0$3,
        h: common_assets._imports_5$1,
        i: common_assets._imports_6$1,
        j: common_assets._imports_7$1,
        k: common_assets._imports_0$3,
        l: common_assets._imports_8$1,
        m: common_assets._imports_9$1,
        n: common_assets._imports_10$1,
        o: common_assets._imports_0$3,
        p: common_assets._imports_11$1,
        q: common_assets._imports_12$1
      };
    };
  }
};
wx.createPage(_sfc_main);
