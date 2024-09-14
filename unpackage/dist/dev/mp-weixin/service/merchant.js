"use strict";
const service_index = require("./index.js");
const getMerchantInfo = async () => {
  return service_index.http.get("/merchant/get/");
};
exports.getMerchantInfo = getMerchantInfo;
