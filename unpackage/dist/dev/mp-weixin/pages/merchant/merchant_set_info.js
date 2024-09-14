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
    const temBannerImgPaths = common_vendor.ref([]);
    const temProfileImgPaths = common_vendor.ref([]);
    const temDetailImgPaths = common_vendor.ref([]);
    const getLocation = () => {
      common_vendor.index.getLocation({
        success(res) {
          console.log(res);
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
    const acceptTempBannerImgPath = async (ImgPaths) => {
      temBannerImgPaths.value = ImgPaths;
      console.log(temBannerImgPaths.value);
    };
    const acceptTempProfileImgPath = async (ImgPaths) => {
      temProfileImgPaths.value = ImgPaths;
      console.log(ImgPaths);
    };
    const acceptTempDetailImgPath = async (ImgPaths) => {
      temDetailImgPaths.value = ImgPaths;
      console.log(ImgPaths);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "商家入驻"
        }),
        b: common_vendor.o(acceptTempProfileImgPath),
        c: common_vendor.p({
          amount: 1
        }),
        d: common_vendor.o(acceptTempBannerImgPath),
        e: common_vendor.p({
          amount: "6"
        }),
        f: shopIntro.value,
        g: common_vendor.o(acceptTempDetailImgPath),
        h: common_vendor.p({
          amount: 6
        }),
        i: shopName.value,
        j: common_vendor.o(($event) => shopName.value = $event.detail.value),
        k: businessRange.value,
        l: common_vendor.o(($event) => businessRange.value = $event.detail.value),
        m: code.value,
        n: common_vendor.o(($event) => code.value = $event.detail.value),
        o: address.value,
        p: common_vendor.o(($event) => address.value = $event.detail.value),
        q: common_assets._imports_1$2,
        r: common_vendor.o(getLocation),
        s: isChecked.value,
        t: common_vendor.o(changeCheck),
        v: common_vendor.o(toManagement)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-34ea46dc"]]);
wx.createPage(MiniProgramPage);
