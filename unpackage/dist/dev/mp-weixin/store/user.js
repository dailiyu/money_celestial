"use strict";
const common_vendor = require("../common/vendor.js");
const service_uer_profile = require("../service/uer_profile.js");
const common_assets = require("../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_easycom_navBar2 + _easycom_uni_easyinput2)();
}
const _easycom_navBar = () => "../components/navBar/navBar.js";
const _easycom_uni_easyinput = () => "../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_easyinput)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const userStore = useUserStore();
    const moblie = common_vendor.ref("");
    const password = common_vendor.ref("");
    const toRegister = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/register"
      });
    };
    const login = async () => {
      userStore.loginAction(moblie.value, password.value).then((res) => {
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "success",
          duration: 1e3
        });
        setTimeout(() => {
          common_vendor.index.navigateTo({
            url: "/pages/index/index"
          });
        }, 1e3);
      }).catch((err) => {
        var _a;
        if ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.error) {
          common_vendor.index.showToast({
            duration: 2e3,
            icon: "error",
            title: "登录失败"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "用户登录",
          bgc: "#1B46CC"
        }),
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: common_vendor.o(($event) => moblie.value = $event),
        e: common_vendor.p({
          placeholder: "请输入手机号",
          inputBorder: false,
          primaryColor: "#1B46CC",
          modelValue: moblie.value
        }),
        f: common_assets._imports_2,
        g: common_vendor.o(($event) => password.value = $event),
        h: common_vendor.p({
          placeholder: "请输入密码",
          inputBorder: false,
          type: "password",
          primaryColor: "#1B46CC",
          modelValue: password.value
        }),
        i: common_vendor.o(login),
        j: common_vendor.o(toRegister)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"]]);
const useUserStore = common_vendor.defineStore("user", {
  state: () => {
    return {
      userInfo: {}
    };
  },
  actions: {
    async loginAction(phone_number, password) {
      const results = await service_uer_profile.postProfileLogin(phone_number, password);
      const { access, refresh } = results;
      common_vendor.index.setStorageSync("accessToken", access);
      common_vendor.index.setStorageSync("refreshToken", refresh);
      const res = await service_uer_profile.getUerAccountMessage();
      const { id } = res.data;
      common_vendor.index.setStorageSync("userId", id);
    },
    async getUserInfoAction() {
      const res = await service_uer_profile.getUerAccountMessage();
      this.userInfo = res.data;
    }
  }
});
exports.MiniProgramPage = MiniProgramPage;
exports.useUserStore = useUserStore;
