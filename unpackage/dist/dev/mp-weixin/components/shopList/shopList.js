"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_public = require("../../store/public.js");
const _sfc_main = {
  __name: "shopList",
  props: {
    sort: {
      type: String,
      default: "asc"
    },
    shopType: {
      type: Number,
      default: -1
    }
  },
  setup(__props) {
    const props = __props;
    const publicStore = store_public.usePublicStore();
    common_vendor.onMounted(async () => {
    });
    const curShopList = common_vendor.computed(() => {
      if (props.sort == "desc") {
        return publicStore.descShopList;
      } else {
        return publicStore.ascShopList;
      }
    });
    const filterShopsByCategoryId = (shops, categoryId) => {
      if (categoryId == -1) {
        return shops;
      }
      return shops.filter((shop) => {
        return shop.categories.some((category) => category.id == categoryId);
      });
    };
    const seletedShop = common_vendor.computed(() => {
      return filterShopsByCategoryId(curShopList.value, props.shopType);
    });
    const toDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_detail"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(publicStore).storeList.length !== 0
      }, common_vendor.unref(publicStore).storeList.length !== 0 ? {
        b: common_vendor.f(seletedShop.value, (item, index, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.name),
            c: common_vendor.f(5, (star, i, i1) => {
              return {
                a: i
              };
            }),
            d: common_vendor.t(item.address),
            e: common_vendor.t(item.distance / 1e3)
          };
        }),
        c: common_assets._imports_0$2,
        d: common_assets._imports_1$1,
        e: common_vendor.o(toDetail)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-69f4d838"], ["__file", "D:/code/money_celestial/components/shopList/shopList.vue"]]);
wx.createComponent(Component);
