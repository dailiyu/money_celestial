"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_public = require("../../store/public.js");
const _sfc_main = {
  __name: "shopList",
  setup(__props) {
    const publicStore = store_public.usePublicStore();
    const toDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_detail"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(publicStore).storeList.length !== 0
      }, common_vendor.unref(publicStore).storeList.length !== 0 ? {
        b: common_vendor.f(common_vendor.unref(publicStore).storeList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.icon,
            c: common_vendor.t(item.address)
          };
        }),
        c: common_assets._imports_0$3,
        d: common_vendor.o(toDetail)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-69f4d838"]]);
wx.createComponent(Component);
