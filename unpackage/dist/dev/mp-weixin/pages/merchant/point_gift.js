"use strict";
const common_vendor = require("../../common/vendor.js");
const service_point = require("../../service/point.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "point_gift",
  setup(__props) {
    const totalPoints = common_vendor.ref(0);
    const balance = common_vendor.ref(0);
    common_vendor.onMounted(async () => {
      const data = await service_point.getAllPoint();
      totalPoints.value = data.green_points + data.red_points;
      balance.value = data.collateral;
    });
    const address = common_vendor.ref("");
    const number = common_vendor.ref("");
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
      if (!address.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请输入手机号"
        });
      if (!number.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请输入赠送数量"
        });
      try {
        common_vendor.index.showLoading({
          title: "赠送中"
        });
        await service_point.giftPoint({ to_user: address.value, amount: number.value });
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          icon: "none",
          title: "赠送成功"
        });
      } catch (e) {
        common_vendor.index.showToast({
          icon: "none",
          title: "赠送失败"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "积分赠送"
        }),
        b: address.value,
        c: common_vendor.o(($event) => address.value = $event.detail.value),
        d: number.value,
        e: common_vendor.o(($event) => number.value = $event.detail.value),
        f: common_vendor.t(totalPoints.value),
        g: common_vendor.t(balance.value),
        h: isChecked.value,
        i: common_vendor.o(changeCheck),
        j: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-976eb3a4"], ["__file", "D:/code/money_celestial/pages/merchant/point_gift.vue"]]);
wx.createPage(MiniProgramPage);
