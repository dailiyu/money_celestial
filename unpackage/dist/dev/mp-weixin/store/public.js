"use strict";
const common_vendor = require("../common/vendor.js");
const usePublicStore = common_vendor.defineStore("public", {
  state: () => {
    return {};
  },
  actions: {
    async loginAction() {
    },
    async fetchAllData() {
    }
  }
});
exports.usePublicStore = usePublicStore;
