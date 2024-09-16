"use strict";
const common_vendor = require("../../common/vendor.js");
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
  __name: "unbind_account",
  setup(__props) {
    const account = common_vendor.ref("");
    const id = common_vendor.ref("");
    common_vendor.onMounted(async () => {
      const { data } = await service_point.getPointAccount();
      account.value = utils_index.obscureString(data.account_number);
      id.value = data.id;
    });
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
          title: "未绑定积分账号，请先绑定"
        });
      common_vendor.index.showLoading({
        title: "解绑中"
      });
      await service_point.unbindPointAccount(id.value);
      common_vendor.index.hideLoading();
      common_vendor.index.showToast({
        icon: "none",
        title: "解绑成功"
      });
      account.value = "";
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "解除绑定"
        }),
        b: common_vendor.t(account.value),
        c: isChecked.value,
        d: common_vendor.o(changeCheck),
        e: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-05706c93"], ["__file", "D:/code/money_celestial/pages/myAccount/unbind_account.vue"]]);
wx.createPage(MiniProgramPage);
