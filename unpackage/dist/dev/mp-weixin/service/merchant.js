"use strict";
require("../common/vendor.js");
const service_index = require("./index.js");
const getMerchantList = (data) => {
  return service_index.http.get("/shops/", data);
};
const getStoreList = () => {
  return service_index.http.get("/merchant/stores/list/");
};
const merchantCodeAuthentication = (data) => {
  return service_index.http.post("/users/merchant/code/verification/", data);
};
exports.getMerchantList = getMerchantList;
exports.getStoreList = getStoreList;
exports.merchantCodeAuthentication = merchantCodeAuthentication;
