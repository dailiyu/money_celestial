"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_easycom_navBar2 + _easycom_uni_easyinput2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_easyinput)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const moblie = common_vendor.ref("");
    const password = common_vendor.ref("");
    const toRegister = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/register"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "用户登录",
          bgc: "#1B46CC"
        }),
        b: common_assets._imports_0$11,
        c: common_assets._imports_1$4,
        d: common_vendor.o(($event) => moblie.value = $event),
        e: common_vendor.p({
          placeholder: "请输入手机号",
          inputBorder: false,
          primaryColor: "#1B46CC",
          modelValue: moblie.value
        }),
        f: common_assets._imports_2$4,
        g: common_vendor.o(($event) => password.value = $event),
        h: common_vendor.p({
          placeholder: "请输入密码",
          inputBorder: false,
          type: "password",
          primaryColor: "#1B46CC",
          modelValue: password.value
        }),
        i: common_vendor.o(toRegister),
        j: common_assets._imports_3$3
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/code/money_celestial/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
