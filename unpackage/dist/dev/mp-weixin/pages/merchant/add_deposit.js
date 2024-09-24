"use strict";
const common_vendor = require("../../common/vendor.js");
const service_deposit = require("../../service/deposit.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "add_deposit",
  setup(__props) {
    const address = common_vendor.ref("");
    const number = common_vendor.ref("");
    common_vendor.onMounted(() => {
      getDeposit();
    });
    const info = common_vendor.ref({});
    const getDeposit = async () => {
      const { data } = await service_deposit.getDepositBalance();
      info.value = data;
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
      if (!address.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请输入账号"
        });
      if (!number.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请输入金额"
        });
      common_vendor.index.showLoading({
        title: "正在提交"
      });
      await service_deposit.addDeposit({ amount: number.value, phone_number: address.value });
      common_vendor.index.hideLoading();
      common_vendor.index.showToast({
        icon: "none",
        title: "增加成功"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "增加保证金"
        }),
        b: address.value,
        c: common_vendor.o(($event) => address.value = $event.detail.value),
        d: number.value,
        e: common_vendor.o(($event) => number.value = $event.detail.value),
        f: common_vendor.t(info.value.amount || 0),
        g: isChecked.value,
        h: common_vendor.o(changeCheck),
        i: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4a198a90"]]);
wx.createPage(MiniProgramPage);
