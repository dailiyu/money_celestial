"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const service_uer_profile = require("../../service/uer_profile.js");
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
    const userStore = store_user.useUserStore();
    const mobile = common_vendor.ref("");
    const code = common_vendor.ref("");
    const password = common_vendor.ref("");
    const password2 = common_vendor.ref("");
    const toRegister = async () => {
      if (password.value.length < 8 || password2.value.length < 8)
        return common_vendor.index.showToast({
          icon: "none",
          title: "密码长度最低8位"
        });
      if (password.value == password2.value) {
        service_uer_profile.postRegister(mobile.value, password.value).then((res) => {
          common_vendor.index.showToast({
            duration: 2e3,
            icon: "success",
            title: "注册成功"
          });
          userStore.loginAction(mobile.value, password.value);
          setTimeout(() => {
            common_vendor.index.navigateTo({
              url: "/pages/login/more_info"
            });
          }, 2e3);
        }).catch((err) => {
          common_vendor.index.showToast({
            duration: 2e3,
            icon: "fail",
            title: "注册失败"
          });
        });
      } else {
        common_vendor.index.showToast({
          duration: 2e3,
          icon: "fail",
          title: "密码不一致"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "注册",
          bgc: "#1B46CC"
        }),
        b: common_vendor.o(($event) => mobile.value = $event),
        c: common_vendor.p({
          placeholder: "请输入手机号",
          inputBorder: false,
          primaryColor: "#1B46CC",
          type: "number",
          modelValue: mobile.value
        }),
        d: common_vendor.o(($event) => code.value = $event),
        e: common_vendor.p({
          placeholder: "请输入验证码",
          inputBorder: false,
          type: "number",
          primaryColor: "#1B46CC",
          modelValue: code.value
        }),
        f: common_vendor.o(($event) => password.value = $event),
        g: common_vendor.p({
          placeholder: "密码长度最低8位",
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
        }),
        j: common_vendor.o(toRegister)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-838b72c9"], ["__file", "D:/code/money_celestial/pages/login/register.vue"]]);
wx.createPage(MiniProgramPage);
