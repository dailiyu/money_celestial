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
    common_vendor.onMounted(async () => {
      await service_recommend.getRecommendOfficerInfo();
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐官后台"
        }),
        b: common_assets._imports_0$9,
        c: common_assets._imports_1$2,
        d: common_assets._imports_2$3,
        e: common_assets._imports_0$4,
        f: common_vendor.o(toMerchantList),
        g: common_assets._imports_0$4,
        h: common_vendor.o(toMerchantCode),
        i: common_assets._imports_0$4,
        j: common_vendor.o(toSecurityDeposit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6eb3b4f4"], ["__file", "D:/code/money_celestial/pages/recommend/recommend_management.vue"]]);
wx.createPage(MiniProgramPage);
