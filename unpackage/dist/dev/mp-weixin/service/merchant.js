"use strict";
const service_index = require("./index.js");
const getMerchantInfo = async () => {
  return service_index.http.get("/merchant/get/");
};
const getMerchantList = (data) => {
  return service_index.http.get("/shops/", data);
};
exports.getMerchantInfo = getMerchantInfo;
exports.getMerchantList = getMerchantList;
