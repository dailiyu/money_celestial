"use strict";
require("../common/vendor.js");
const service_index = require("./index.js");
const getMerchantList = (data) => {
  return service_index.http.get("/shops/", data);
};
const merchantCodeAuthentication = (data) => {
  return service_index.http.post("/users/merchant/code/verification/", data);
};
exports.getMerchantList = getMerchantList;
exports.merchantCodeAuthentication = merchantCodeAuthentication;
