"use strict";
const service_index = require("./index.js");
const getAgentShopList = async (data) => {
  return service_index.http.get("/agent/province/shops/", data);
};
const getAgentShopAmount = async () => {
  return service_index.http.get("/agent/province/shops/");
};
const getRecommendOfficerAmount = async () => {
  return service_index.http.get("/agent/province/referral/officers/");
};
exports.getAgentShopAmount = getAgentShopAmount;
exports.getAgentShopList = getAgentShopList;
exports.getRecommendOfficerAmount = getRecommendOfficerAmount;
