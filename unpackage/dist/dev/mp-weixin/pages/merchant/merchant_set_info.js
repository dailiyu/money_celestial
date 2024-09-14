"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_upload2 = common_vendor.resolveComponent("upload");
  (_easycom_navBar2 + _easycom_upload2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_upload = () => "../../components/upload/upload.js";
if (!Math) {
  (_easycom_navBar + _easycom_upload)();
}
const _sfc_main = {
  __name: "merchant_set_info",
  setup(__props) {
    const shopIntro = common_vendor.ref("");
    const shopName = common_vendor.ref("");
    const businessRange = common_vendor.ref("");
    const code = common_vendor.ref("");
    const address = common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref([]);
    const getLocation = () => {
      common_vendor.index.chooseLocation({
        success(res) {
          address.value = res.address + res.name;
        }
      });
    };
    const isChecked = common_vendor.ref(false);
    const changeCheck = () => {
      isChecked.value = !isChecked.value;
    };
    const toManagement = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_management"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "商家入驻"
        }),
        b: common_vendor.o(_ctx.acceptTempImgPath),
        c: common_vendor.p({
          amount: 1
        }),
        d: common_vendor.p({
          amount: "6"
        }),
        e: shopIntro.value,
        f: common_vendor.p({
          amount: 6
        }),
        g: shopName.value,
        h: common_vendor.o(($event) => shopName.value = $event.detail.value),
        i: businessRange.value,
        j: common_vendor.o(($event) => businessRange.value = $event.detail.value),
        k: code.value,
        l: common_vendor.o(($event) => code.value = $event.detail.value),
        m: address.value,
        n: common_vendor.o(($event) => address.value = $event.detail.value),
        o: common_assets._imports_1$2,
        p: common_vendor.o(getLocation),
        q: isChecked.value,
        r: common_vendor.o(changeCheck),
        s: common_vendor.o(toManagement)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-34ea46dc"], ["__file", "D:/code/money_celestial/pages/merchant/merchant_set_info.vue"]]);
wx.createPage(MiniProgramPage);
