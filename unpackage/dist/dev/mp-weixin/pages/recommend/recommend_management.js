"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_recommend = require("../../service/recommend.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "recommend_management",
  setup(__props) {
    const info = common_vendor.ref({});
    common_vendor.onMounted(async () => {
      info.value = await service_recommend.getRecommendOfficerInfo();
    });
    const toMerchantList = () => {
      common_vendor.index.navigateTo({
        url: "/pages/recommend/merchant_list"
      });
    };
    const toMerchantCode = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_code_authentication"
      });
    };
    const toSecurityDeposit = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/security_deposit"
      });
    };
    const qrcode = common_vendor.ref("");
    const getQRCode = async () => {
      if (!qrcode.value) {
        const { image_url } = await service_recommend.getOfficerQRCode({ path: "/pages/merchant/settle_notice" });
        qrcode.value = image_url;
      }
      common_vendor.index.previewImage({
        urls: [qrcode.value],
        current: qrcode.value
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return {
        a: common_vendor.p({
          title: "推荐官后台"
        }),
        b: common_vendor.t(((_a = info.value) == null ? void 0 : _a.results) && ((_d = (_c = (_b = info.value) == null ? void 0 : _b.results[0]) == null ? void 0 : _c.owner) == null ? void 0 : _d.username)),
        c: common_vendor.o(getQRCode),
        d: common_vendor.t(info.value.count || 0),
        e: common_assets._imports_0$3,
        f: common_vendor.o(toMerchantList),
        g: common_assets._imports_0$3,
        h: common_vendor.o(toMerchantCode),
        i: common_assets._imports_0$3,
        j: common_vendor.o(toSecurityDeposit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6eb3b4f4"], ["__file", "D:/code/money_celestial/pages/recommend/recommend_management.vue"]]);
wx.createPage(MiniProgramPage);
