"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_agent = require("../../service/agent.js");
const service_shop = require("../../service/shop.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_navBar2 + _easycom_uni_data_select2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_data_select + common_vendor.unref(shopList))();
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
    const shopList2 = common_vendor.ref([]);
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
      const result = await service_agent.getAgentShopList(params.value);
      common_vendor.index.hideLoading();
      shopList2.value = result;
    };
    const filterTime = (i) => {
      time.value = i;
      shopList2.value = [];
      getShopList();
    };
    const category = common_vendor.ref("");
    const changeRange = (e) => {
      categoryId.value = e;
      shopList2.value = [];
      getShopList();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "商家列表"
        }),
        b: common_assets._imports_0$10,
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
        g: common_assets._imports_1$3,
        h: common_assets._imports_2$4,
        i: common_vendor.o(($event) => filterTime("-created_at"))
      } : {}, {
        j: time.value == "-created_at"
      }, time.value == "-created_at" ? {
        k: common_assets._imports_2$4,
        l: common_assets._imports_1$3,
        m: common_vendor.o(($event) => filterTime("created_at"))
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-017395ae"]]);
wx.createPage(MiniProgramPage);
