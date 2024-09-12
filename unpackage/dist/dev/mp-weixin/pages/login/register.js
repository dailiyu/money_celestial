"use strict";
const common_vendor = require("../../common/vendor.js");
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
  __name: "register",
  setup(__props) {
    const moblie = common_vendor.ref("");
    const code = common_vendor.ref("");
    const password = common_vendor.ref("");
    const password2 = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "注册",
          bgc: "#1B46CC"
        }),
        b: common_vendor.o(($event) => moblie.value = $event),
        c: common_vendor.p({
          placeholder: "请输入手机号",
          inputBorder: false,
          primaryColor: "#1B46CC",
          modelValue: moblie.value
        }),
        d: common_vendor.o(($event) => code.value = $event),
        e: common_vendor.p({
          placeholder: "请输入验证码",
          inputBorder: false,
          type: "password",
          primaryColor: "#1B46CC",
          modelValue: code.value
        }),
        f: common_vendor.o(($event) => password.value = $event),
        g: common_vendor.p({
          placeholder: "密码长度最低6位",
          inputBorder: false,
          primaryColor: "#1B46CC",
          type: "password",
          modelValue: password.value
        }),
        h: common_vendor.o(($event) => password2.value = $event),
        i: common_vendor.p({
          placeholder: "再次输入密码",
          inputBorder: false,
          primaryColor: "#1B46CC",
          type: "password",
          modelValue: password2.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-838b72c9"]]);
wx.createPage(MiniProgramPage);
