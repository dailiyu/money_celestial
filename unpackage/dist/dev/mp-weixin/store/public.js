"use strict";
const common_vendor = require("../common/vendor.js");
const service_category = require("../service/category.js");
const service_merchant = require("../service/merchant.js");
const usePublicStore = common_vendor.defineStore("public", {
  state: () => {
    return {
      cateGoryList: [],
      merchantList: [],
      storeList: []
    };
  },
  actions: {
    async getCateGoryListAction() {
      const res = await service_category.getCateGoryList();
      console.log(res.results);
      this.cateGoryList = res.results;
    },
    async getMerchantListAction() {
      const res = await service_merchant.getMerchantList();
      this.merchantList = (res == null ? void 0 : res.results) || [];
    },
    async getStoreListAction() {
      const res = await service_merchant.getStoreList();
      this.storeList = (res == null ? void 0 : res.results) || [];
    },
    async fetchAllDataAction() {
      this.getCateGoryListAction(), this.getMerchantListAction(), this.getStoreListAction();
    }
  }
});
exports.usePublicStore = usePublicStore;
