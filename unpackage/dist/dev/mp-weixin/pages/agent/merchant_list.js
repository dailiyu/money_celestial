"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const service_agent = require("../../service/agent.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_navBar2 + _easycom_uni_load_more2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_navBar + common_vendor.unref(shopList) + _easycom_uni_load_more)();
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
    common_vendor.onMounted(async () => {
      getShopList();
    });
    const page = common_vendor.ref(1);
    const time = common_vendor.ref("");
    const categoryId = common_vendor.ref("");
    const shopList2 = common_vendor.ref([]);
    const status = common_vendor.ref("loading");
    const getShopList = async () => {
      const params = common_vendor.ref({
        page: page.value,
        time: time.value,
        categoryId: categoryId.value
      });
      status.value = "loading";
      await service_agent.getAgentShopList(params.value);
    };
    const filterTime = (i) => {
      page.value = 1;
      time.value = i;
      shopList2.value = [];
      getShopList();
    };
    const getMoreList = () => {
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "商家列表"
        }),
        b: common_assets._imports_0$10,
        c: common_vendor.o(getType),
        d: time.value == ""
      }, time.value == "" ? {
        e: common_assets._imports_1$3,
        f: common_assets._imports_2$4,
        g: common_vendor.o(($event) => filterTime("-"))
      } : {}, {
        h: time.value == "-"
      }, time.value == "-" ? {
        i: common_assets._imports_2$4,
        j: common_assets._imports_1$3,
        k: common_vendor.o(($event) => filterTime(""))
      } : {}, {
        l: common_vendor.o(getMoreList),
        m: common_vendor.p({
          status: status.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-017395ae"], ["__file", "D:/code/money_celestial/pages/agent/merchant_list.vue"]]);
wx.createPage(MiniProgramPage);
