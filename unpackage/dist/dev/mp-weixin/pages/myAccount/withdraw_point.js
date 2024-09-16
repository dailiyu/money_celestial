"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_point = require("../../service/point.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "withdraw_point",
  setup(__props) {
    const number = common_vendor.ref("");
    const account = common_vendor.ref("");
    const pointBalance = common_vendor.ref("");
    common_vendor.onMounted(async () => {
      getPointInfo();
    });
    const getPointInfo = async () => {
      const data = await service_point.getPointAccount();
      account.value = utils_index.obscureString(data.user);
      pointBalance.value = data.red_points;
    };
    const isChecked = common_vendor.ref(false);
    const changeCheck = () => {
      isChecked.value = !isChecked.value;
    };
    const confirm = async () => {
      if (!isChecked.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请阅读完须知后勾选同意"
        });
      if (!account.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请先绑定积分账号"
        });
      if (!number.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请输入提取数量"
        });
      if (number.value > pointBalance.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "积分余额不足"
        });
      common_vendor.index.showLoading({
        title: "提取中"
      });
      await service_point.withdrawPoint({ points: number.value });
      getPointInfo();
      common_vendor.index.hideLoading();
      common_vendor.index.showToast({
        icon: "none",
        title: "提取成功"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "提取积分"
        }),
        b: common_assets._imports_0$12,
        c: common_vendor.t(account.value),
        d: number.value,
        e: common_vendor.o(($event) => number.value = $event.detail.value),
        f: common_vendor.t(pointBalance.value || 0),
        g: common_vendor.t(number.value || 0),
        h: isChecked.value,
        i: common_vendor.o(changeCheck),
        j: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-98f78df0"], ["__file", "D:/code/money_celestial/pages/myAccount/withdraw_point.vue"]]);
wx.createPage(MiniProgramPage);
