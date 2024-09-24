"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
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
  __name: "security_deposit",
  setup(__props) {
    const toRecord = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/deposit_record"
      });
    };
    const toAdd = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/add_deposit"
      });
    };
    const toRemove = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/remove_deposit"
      });
    };
    const amount = common_vendor.ref("");
    common_vendor.onMounted(async () => {
      const { data } = await service_deposit.getDeposit();
      amount.value = data.amount;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "保证金"
        }),
        b: common_vendor.t(amount.value),
        c: common_assets._imports_0$4,
        d: common_vendor.o(toRecord),
        e: common_vendor.o(toAdd),
        f: common_vendor.o(toRemove)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3efa2ea6"]]);
wx.createPage(MiniProgramPage);
