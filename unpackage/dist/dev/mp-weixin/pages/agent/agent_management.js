"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_agent = require("../../service/agent.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "agent_management",
  setup(__props) {
    const merchantAmount = common_vendor.ref(0);
    const officerAmount = common_vendor.ref(0);
    const cityAgent = common_vendor.ref("");
    common_vendor.onMounted(async () => {
      const { count, results } = await service_agent.getAgentShopAmount();
      merchantAmount.value = count;
      cityAgent.value = results[0].city;
      const result = await service_agent.getRecommendOfficerAmount();
      officerAmount.value = result.count;
    });
    const toMerchantList = () => {
      common_vendor.index.navigateTo({
        url: "/pages/agent/merchant_list"
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
          title: "代理后台"
        }),
        b: common_assets._imports_0$7,
        c: common_vendor.t(cityAgent.value),
        d: common_vendor.t(merchantAmount.value),
        e: common_vendor.t(officerAmount.value),
        f: common_assets._imports_0$4,
        g: common_vendor.o(toMerchantList),
        h: common_assets._imports_0$4,
        i: common_vendor.o(toMerchantCode),
        j: common_assets._imports_0$4,
        k: common_vendor.o(toSecurityDeposit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aa1b4823"]]);
wx.createPage(MiniProgramPage);
