"use strict";
const common_vendor = require("../common/vendor.js");
const service_shop = require("../service/shop.js");
const utils_distanceSorting = require("../utils/distanceSorting.js");
const usePublicStore = common_vendor.defineStore("public", {
  state: () => {
    return {
      cateGoryList: [],
      merchantList: [],
      storeList: [],
      ascShopList: [],
      descShopList: []
    };
  },
  actions: {
    async getCateGoryListAction() {
      const res = await service_shop.getShopCategories();
      console.log(res.results);
      this.cateGoryList = res.results;
    },
    async getMerchantListAction() {
      const res = await getMerchantList();
      this.merchantList = (res == null ? void 0 : res.results) || [];
    },
    async getStoreListAction() {
      const res = await service_shop.getShopList();
      const { location } = await common_vendor.index.getStorageSync("address_info");
      this.storeList = (res == null ? void 0 : res.results) || [];
      this.ascShopList = await utils_distanceSorting.sortShopsByDistance({ latitude: location.lat, longitude: location.lng }, this.storeList, "asc");
      this.descShopList = await utils_distanceSorting.sortShopsByDistance({ latitude: location.lat, longitude: location.lng }, this.storeList, "desc");
    },
    async fetchAllDataAction() {
      this.getCateGoryListAction();
      this.getStoreListAction();
    }
  }
});
exports.usePublicStore = usePublicStore;