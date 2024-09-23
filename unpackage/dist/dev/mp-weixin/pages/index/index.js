"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_public = require("../../store/public.js");
const store_user = require("../../store/user.js");
const service_shop = require("../../service/shop.js");
const service_bannner = require("../../service/bannner.js");
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
    var QQMapWX = require("../../static/qqmap/qqmap-wx-jssdk.min.js");
    const keyword = common_vendor.ref("");
    const publicStore = store_public.usePublicStore();
    const userStore = store_user.useUserStore();
    const city = common_vendor.ref("");
    common_vendor.onMounted(async () => {
      const accessToken = common_vendor.index.getStorageSync("accessToken");
      if (accessToken) {
        await publicStore.fetchAllDataAction(), await userStore.fetchAllDataAction();
      }
      common_vendor.index.getLocation({
        geocode: true,
        success(res) {
          var qqmapsdk = new QQMapWX({
            key: "YQRBZ-P4SKQ-2L55P-4NYXP-XK6TH-LXBVA"
            // 必填
          });
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success(address) {
              const ad_info = address.result.ad_info;
              common_vendor.index.setStorageSync("address_info", address.result.ad_info);
              city.value = ad_info.city;
            },
            fail(err) {
              console.log(err);
              common_vendor.index.showToast({
                icon: "none",
                title: "定位失败"
              });
            }
          });
        }
      });
      getCategory();
      getBanner();
    });
    const categoryList = common_vendor.ref([]);
    const getCategory = async () => {
      const { results } = await service_shop.getShopCategories();
      categoryList.value = results;
    };
    const bannerList = common_vendor.ref();
    const getBanner = async () => {
      bannerList.value = await service_bannner.getBannerList();
    };
    const search = () => {
      console.log(keyword.value);
    };
    const toMerchant = () => {
      if (userStore.storeInfo && Object.keys(userStore.storeInfo).length > 0) {
        console.log(userStore.storeInfo);
        common_vendor.index.navigateTo({
          url: "/pages/merchant/merchant_management"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/merchant/merchant_intro"
        });
      }
    };
    const toAgent = () => {
      if (userStore.userInfo.is_province_agent || userStore.userInfo.is_city_agent) {
        common_vendor.index.navigateTo({
          url: "/pages/agent/agent_management"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/agent/agent_intro"
        });
      }
    };
    const toRecommend = () => {
      if (userStore.userInfo.is_referral_officer) {
        common_vendor.index.navigateTo({
          url: "/pages/recommend/recommend_management"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/recommend/recommend_intro"
        });
      }
    };
    const toAllMerchant = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/all_merchant"
      });
    };
    const toMyAccount = () => {
      common_vendor.index.navigateTo({
        url: "/pages/myAccount/myAccount"
      });
    };
    const toDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_detail"
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return common_vendor.e({
        a: common_vendor.p({
          iconShow: false,
          title: "满仓"
        }),
        b: common_assets._imports_0$1,
        c: common_vendor.t(city.value ? city.value : "定位中"),
        d: common_vendor.o(search),
        e: common_vendor.o(($event) => keyword.value = $event),
        f: common_vendor.p({
          placeholder: "请输入你搜索的内容",
          radius: 100,
          ["cancel-text"]: "cancel",
          cancelButton: "none",
          clearButton: "always",
          modelValue: keyword.value
        }),
        g: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.image_url,
            b: item.id
          };
        }),
        h: common_vendor.o(toMerchant),
        i: common_vendor.o(toAgent),
        j: common_vendor.o(toRecommend),
        k: common_vendor.o(toMyAccount),
        l: categoryList.value.length
      }, categoryList.value.length ? {
        m: common_vendor.f(categoryList.value, (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.name),
            c: item.id
          };
        })
      } : {}, {
        n: common_vendor.unref(userStore).storeInfo && Object.keys(common_vendor.unref(userStore).storeInfo).length > 0
      }, common_vendor.unref(userStore).storeInfo && Object.keys(common_vendor.unref(userStore).storeInfo).length > 0 ? {
        o: common_vendor.t((_a = common_vendor.unref(publicStore).ascShopList[0]) == null ? void 0 : _a.name),
        p: common_assets._imports_1$1,
        q: common_vendor.t((_b = common_vendor.unref(publicStore).ascShopList[0]) == null ? void 0 : _b.address),
        r: common_vendor.t(((_c = common_vendor.unref(publicStore).ascShopList[0]) == null ? void 0 : _c.distance) / 1e3),
        s: common_vendor.o(toDetail),
        t: common_vendor.o(toAllMerchant)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/code/money_celestial/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
