"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_upload2 = common_vendor.resolveComponent("upload");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_navBar2 + _easycom_upload2 + _easycom_uni_data_select2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_upload = () => "../../components/upload/upload.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (_easycom_navBar + _easycom_upload + _easycom_uni_data_select)();
}
const _sfc_main = {
  __name: "merchant_edit_info",
  setup(__props) {
    const shopIntro = common_vendor.ref("");
    const shopName = common_vendor.ref("");
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
    const businessRange = common_vendor.ref("");
    const range = common_vendor.ref([
      { value: "篮球", text: "篮球" },
      { value: "足球", text: "足球" },
      { value: "游泳", text: "游泳" }
    ]);
    const changeRange = (e) => {
      console.log(e);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "资料编辑"
        }),
        b: shopIntro.value,
        c: shopName.value,
        d: common_vendor.o(($event) => shopName.value = $event.detail.value),
        e: common_vendor.o(changeRange),
        f: common_vendor.o(($event) => businessRange.value = $event),
        g: common_vendor.p({
          localdata: range.value,
          placeholder: "请选择",
          clear: false,
          modelValue: businessRange.value
        }),
        h: code.value,
        i: common_vendor.o(($event) => code.value = $event.detail.value),
        j: address.value,
        k: common_vendor.o(($event) => address.value = $event.detail.value),
        l: common_assets._imports_1$2,
        m: common_vendor.o(getLocation),
        n: common_vendor.o(toManagement)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aaffa612"]]);
wx.createPage(MiniProgramPage);
