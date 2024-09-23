"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_point = require("../../service/point.js");
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
    const accessToken = common_vendor.index.getStorageSync("accessToken");
    common_vendor.onMounted(() => {
      if (accessToken) {
        getPointInfo();
      }
    });
    const green_points = common_vendor.ref(0);
    const red_points = common_vendor.ref(0);
    const user = common_vendor.ref("");
    const getPointInfo = async () => {
      const res = await service_point.getAllPoint();
      green_points.value = res.green_points;
      red_points.value = res.red_points;
      user.value = res.user;
    };
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
        c: common_vendor.t(common_vendor.unref(userStore).userInfo.username || "点击登录"),
        d: common_vendor.o(toLogin),
        e: common_vendor.t(green_points.value),
        f: common_vendor.o(toMyPoint),
        g: common_vendor.t(red_points.value),
        h: common_vendor.o(toPointAvailable),
        i: common_vendor.t(user.value),
        j: common_vendor.o(toPointAccount),
        k: common_assets._imports_0$2,
        l: common_assets._imports_0$2,
        m: common_assets._imports_0$2
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/money_celestial/pages/myAccount/myAccount.vue"]]);
wx.createPage(MiniProgramPage);
