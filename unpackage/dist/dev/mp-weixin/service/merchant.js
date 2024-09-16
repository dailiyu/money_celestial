"use strict";
const common_vendor = require("../common/vendor.js");
const service_index = require("./index.js");
const getMerchantInfo = async () => {
  return service_index.http.get("/merchant/get/");
};
const getMerchantList = () => {
  return service_index.http.get("/merchant/list/");
};
const uploadMerchantBanner = (url) => {
  return service_index.http.post("/merchant/stores/banner/", { url });
};
const uploadMerchantDetail = (url) => {
  return service_index.http.post("/merchant/stores/detail/image/", { url });
};
const postMerchantSettleIn = (icon, name, address, detail) => {
  return service_index.http.post("/merchant/stores/", {
    icon,
    name,
    address,
    detail
  });
};
const getStoreInfo = () => {
  return service_index.http.get("/merchant/stores/get/");
};
const updataStoreInfo = (icon, name, address, detail) => {
  const id = common_vendor.index.getStorageSync("storeId");
  return service_index.http.put(`/merchant/stores/update/${id}/`, {
    icon,
    name,
    address,
    detail
  });
};
const getStoreList = () => {
  return service_index.http.get("/merchant/stores/list/");
};
const getDeposit = (id) => {
  return service_index.http.get(`/deposit/get/`);
};
const getDepositList = (id) => {
  return service_index.http.get(`/deposit/records/`);
};
exports.getDeposit = getDeposit;
exports.getDepositList = getDepositList;
exports.getMerchantInfo = getMerchantInfo;
exports.getMerchantList = getMerchantList;
exports.getStoreInfo = getStoreInfo;
exports.getStoreList = getStoreList;
exports.postMerchantSettleIn = postMerchantSettleIn;
exports.updataStoreInfo = updataStoreInfo;
exports.uploadMerchantBanner = uploadMerchantBanner;
exports.uploadMerchantDetail = uploadMerchantDetail;
