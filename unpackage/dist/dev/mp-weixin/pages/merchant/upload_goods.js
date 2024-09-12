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
  __name: "upload_goods",
  setup(__props) {
    const shopIntro = common_vendor.ref("");
    const goodsName = common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    const address = common_vendor.ref("");
    const isChecked = common_vendor.ref(false);
    const changeCheck = () => {
      isChecked.value = !isChecked.value;
    };
    const confirm = () => {
      if (!isChecked.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请阅读完须知后勾选同意"
        });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "发布商品"
        }),
        b: goodsName.value,
        c: common_vendor.o(($event) => goodsName.value = $event.detail.value),
        d: address.value,
        e: common_vendor.o(($event) => address.value = $event.detail.value),
        f: common_assets._imports_0$3,
        g: shopIntro.value,
        h: isChecked.value,
        i: common_vendor.o(changeCheck),
        j: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-452b451b"]]);
wx.createPage(MiniProgramPage);
