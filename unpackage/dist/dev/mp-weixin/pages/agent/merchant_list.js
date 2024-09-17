"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_agent = require("../../service/agent.js");
const service_shop = require("../../service/shop.js");
const utils_distanceSorting = require("../../utils/distanceSorting.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_publicShopList2 = common_vendor.resolveComponent("publicShopList");
  (_easycom_navBar2 + _easycom_uni_data_select2 + _easycom_publicShopList2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_publicShopList = () => "../../components/publicShopList/publicShopList.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_data_select + _easycom_publicShopList)();
}
const _sfc_main = {
  __name: "merchant_list",
  setup(__props) {
    const range = common_vendor.ref({});
    common_vendor.onMounted(async () => {
      getShopList();
      const { results } = await service_shop.getShopCategories();
      range.value = results.map((i) => {
        return {
          text: i.name,
          value: i.id,
          disable: false
        };
      });
    });
    const time = common_vendor.ref("created_at");
    const categoryId = common_vendor.ref("");
    const shopList = common_vendor.ref([]);
    const { location } = common_vendor.index.getStorageSync("address_info");
    const getShopList = async () => {
      const params = common_vendor.ref({
        ordering: time.value
      });
      if (categoryId.value) {
        params.value.categories = categoryId.value;
      }
      common_vendor.index.showLoading({
        title: "加载中"
      });
      const { results } = await service_agent.getAgentShopList(params.value);
      const locaList = results.map((shop) => ({ latitude: shop.latitude, longitude: shop.longitude }));
      shopList.value = await utils_distanceSorting.calculateDistances({ latitude: location.lat, longitude: location.lng }, locaList);
      common_vendor.index.hideLoading();
    };
    const filterTime = (i) => {
      time.value = i;
      shopList.value = [];
      getShopList();
    };
    const category = common_vendor.ref("");
    const changeRange = (e) => {
      categoryId.value = e;
      shopList.value = [];
      getShopList();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "商家列表"
        }),
        b: common_assets._imports_0$4,
        c: common_vendor.o(changeRange),
        d: common_vendor.o(($event) => category.value = $event),
        e: common_vendor.p({
          localdata: range.value,
          placeholder: "类目",
          clear: false,
          modelValue: category.value
        }),
        f: time.value == "created_at"
      }, time.value == "created_at" ? {
        g: common_assets._imports_1$2,
        h: common_assets._imports_2$1,
        i: common_vendor.o(($event) => filterTime("-created_at"))
      } : {}, {
        j: time.value == "-created_at"
      }, time.value == "-created_at" ? {
        k: common_assets._imports_2$1,
        l: common_assets._imports_1$2,
        m: common_vendor.o(($event) => filterTime("created_at"))
      } : {}, {
        n: common_vendor.p({
          list: shopList.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-017395ae"], ["__file", "D:/code/money_celestial/pages/agent/merchant_list.vue"]]);
wx.createPage(MiniProgramPage);
