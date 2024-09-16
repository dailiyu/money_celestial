"use strict";
require("../common/vendor.js");
const service_index = require("./index.js");
const getMerchantList = (data) => {
  return service_index.http.get("/shops/", data);
};
const getStoreList = () => {
  return service_index.http.get("/merchant/stores/list/");
};
exports.getMerchantList = getMerchantList;
exports.getStoreList = getStoreList;
