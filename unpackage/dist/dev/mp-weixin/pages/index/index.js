"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_public = require("../../store/public.js");
const store_user = require("../../store/user.js");
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
    store_public.usePublicStore();
    const userStore = store_user.useUserStore();
    const city = common_vendor.ref("");
    common_vendor.onMounted(async () => {
      await userStore.fetchAllDataAction();
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
    });
    const search = () => {
      console.log(keyword.value);
    };
    const toSettle = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/merchant_intro"
      });
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
      return {
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
        g: common_assets._imports_1$1,
        h: common_vendor.o(toMerchant),
        i: common_assets._imports_2$1,
        j: common_vendor.o(toAgent),
        k: common_assets._imports_3$1,
        l: common_vendor.o(toRecommend),
        m: common_assets._imports_4,
        n: common_vendor.o(toMyAccount),
        o: common_assets._imports_5,
        p: common_assets._imports_6,
        q: common_assets._imports_7,
        r: common_assets._imports_8,
        s: common_assets._imports_9,
        t: common_assets._imports_10,
        v: common_assets._imports_11,
        w: common_assets._imports_12,
        x: common_assets._imports_13,
        y: common_assets._imports_14,
        z: common_vendor.o(toSettle),
        A: common_assets._imports_2$2,
        B: common_vendor.o(toDetail),
        C: common_vendor.o(toAllMerchant),
        D: common_assets._imports_16,
        E: common_assets._imports_17,
        F: common_assets._imports_18
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/code/money_celestial/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
