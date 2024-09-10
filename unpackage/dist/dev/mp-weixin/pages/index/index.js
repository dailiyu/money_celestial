"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_easycom_navBar2 + _easycom_uni_search_bar2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_search_bar)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const keyword = common_vendor.ref("");
    const search = () => {
      console.log(keyword.value);
    };
    const toSettle = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_intro"
      });
    };
    const toMerchant = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_intro"
      });
    };
    const toAgent = () => {
      common_vendor.index.navigateTo({
        url: "/pages/agent/agent_intro"
      });
    };
    const toRecommend = () => {
      common_vendor.index.navigateTo({
        url: "/pages/recommend/recommend_intro"
      });
    };
    const toAllMerchant = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/all_merchant"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          iconShow: false,
          title: "满仓"
        }),
        b: common_assets._imports_0,
        c: common_vendor.o(search),
        d: common_vendor.o(($event) => keyword.value = $event),
        e: common_vendor.p({
          placeholder: "请输入你搜索的内容",
          radius: 100,
          ["cancel-text"]: "cancel",
          cancelButton: "none",
          clearButton: "always",
          modelValue: keyword.value
        }),
        f: common_assets._imports_1,
        g: common_vendor.o(toMerchant),
        h: common_assets._imports_2,
        i: common_vendor.o(toAgent),
        j: common_assets._imports_3,
        k: common_vendor.o(toRecommend),
        l: common_assets._imports_4,
        m: common_assets._imports_5,
        n: common_assets._imports_6,
        o: common_assets._imports_7,
        p: common_assets._imports_8,
        q: common_assets._imports_9,
        r: common_assets._imports_10,
        s: common_assets._imports_11,
        t: common_assets._imports_12,
        v: common_assets._imports_13,
        w: common_assets._imports_14,
        x: common_vendor.o(toSettle),
        y: common_assets._imports_1$1,
        z: common_vendor.o(toAllMerchant),
        A: common_assets._imports_16,
        B: common_assets._imports_17,
        C: common_assets._imports_18
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/code/money_celestial/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
