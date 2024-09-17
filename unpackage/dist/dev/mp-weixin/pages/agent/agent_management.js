"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_agent = require("../../service/agent.js");
const service_deposit = require("../../service/deposit.js");
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
    common_vendor.onMounted(() => {
      getShopAmount();
      getOfficerAmount();
      getAgentPoint();
    });
    const merchantAmount = common_vendor.ref(0);
    const cityAgent = common_vendor.ref("");
    const getShopAmount = async () => {
      const { count, results } = await service_agent.getAgentShopAmount();
      merchantAmount.value = count;
      cityAgent.value = results[0].city;
    };
    const officerAmount = common_vendor.ref(0);
    const getOfficerAmount = async () => {
      const result = await service_agent.getRecommendOfficerAmount();
      officerAmount.value = result.count;
    };
    const agentPoint = common_vendor.ref(0);
    const getAgentPoint = async () => {
      const { total_amount } = await service_deposit.getRecords({ transaction_type: "bonus" });
      agentPoint.value = total_amount;
    };
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
        b: common_vendor.t(cityAgent.value),
        c: common_vendor.t(agentPoint.value),
        d: common_vendor.t(merchantAmount.value),
        e: common_vendor.t(officerAmount.value),
        f: common_assets._imports_0$3,
        g: common_vendor.o(toMerchantList),
        h: common_assets._imports_0$3,
        i: common_vendor.o(toMerchantCode),
        j: common_assets._imports_0$3,
        k: common_vendor.o(toSecurityDeposit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aa1b4823"], ["__file", "D:/code/money_celestial/pages/agent/agent_management.vue"]]);
wx.createPage(MiniProgramPage);
