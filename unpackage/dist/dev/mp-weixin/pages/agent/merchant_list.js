"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_region = require("../../service/region.js");
const service_merchant = require("../../service/merchant.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_shopList2 = common_vendor.resolveComponent("shopList");
  (_easycom_navBar2 + _easycom_shopList2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_shopList = () => "../../components/shopList/shopList.js";
if (!Math) {
  (_easycom_navBar + _easycom_shopList)();
}
const _sfc_main = {
  __name: "merchant_list",
  setup(__props) {
    const getType = () => {
      common_vendor.index.showActionSheet({
        itemList: ["美食", "服饰"],
        success(res) {
          console.log(res.tapIndex);
        }
      });
    };
    const distance = common_vendor.ref("up");
    common_vendor.onMounted(async () => {
      try {
        const cityAgent = await service_region.getCityAgent();
        const provinceAgent = await service_region.getProvinceAgent();
        if (cityAgent.data && cityAgent.data.id) {
          getShopList({ city_agent: cityAgent.data.id });
        }
      } catch (e) {
      }
    });
    const getShopList = async (data) => {
      await service_merchant.getMerchantList(data);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "商家列表"
        }),
        b: common_assets._imports_0$10,
        c: common_vendor.o(getType),
        d: distance.value == "up"
      }, distance.value == "up" ? {
        e: common_assets._imports_1$4,
        f: common_assets._imports_2$3,
        g: common_vendor.o(($event) => distance.value = "down")
      } : {}, {
        h: distance.value == "down"
      }, distance.value == "down" ? {
        i: common_assets._imports_2$3,
        j: common_assets._imports_1$4,
        k: common_vendor.o(($event) => distance.value = "up")
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-017395ae"], ["__file", "D:/code/money_celestial/pages/agent/merchant_list.vue"]]);
wx.createPage(MiniProgramPage);
