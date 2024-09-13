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
  __name: "merchant_edit_info",
  setup(__props) {
    const shopIntro = common_vendor.ref("");
    const shopName = common_vendor.ref("");
    const businessRange = common_vendor.ref("");
    const code = common_vendor.ref("");
    const address = common_vendor.ref("");
    const getLocation = () => {
      common_vendor.index.getLocation({
        success(res) {
          console.log(res);
        }
      });
    };
    const toManagement = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_management"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "资料编辑"
        }),
        b: shopIntro.value,
        c: shopName.value,
        d: common_vendor.o(($event) => shopName.value = $event.detail.value),
        e: businessRange.value,
        f: common_vendor.o(($event) => businessRange.value = $event.detail.value),
        g: code.value,
        h: common_vendor.o(($event) => code.value = $event.detail.value),
        i: address.value,
        j: common_vendor.o(($event) => address.value = $event.detail.value),
        k: common_assets._imports_1$2,
        l: common_vendor.o(getLocation),
        m: common_vendor.o(toManagement)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aaffa612"], ["__file", "D:/code/money_celestial/pages/merchant/merchant_edit_info.vue"]]);
wx.createPage(MiniProgramPage);
