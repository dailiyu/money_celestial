"use strict";
const common_vendor = require("../../common/vendor.js");
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
  __name: "bind_account",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const number = common_vendor.ref("");
    const account = common_vendor.ref("");
    account.value = userStore.userInfo.username;
    common_vendor.onMounted(async () => {
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
      if (!number.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请输入绑定账号"
        });
      try {
        common_vendor.index.showLoading({
          title: "绑定中"
        });
        await service_point.bindPointAccount({ points_account: number.value });
        account.value = number.value;
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          icon: "none",
          title: "绑定成功"
        });
      } catch (e) {
        common_vendor.index.showToast({
          icon: "none",
          title: "绑定失败"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "绑定账号"
        }),
        b: number.value,
        c: common_vendor.o(($event) => number.value = $event.detail.value),
        d: isChecked.value,
        e: common_vendor.o(changeCheck),
        f: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bbd33f9d"], ["__file", "D:/code/money_celestial/pages/myAccount/bind_account.vue"]]);
wx.createPage(MiniProgramPage);
