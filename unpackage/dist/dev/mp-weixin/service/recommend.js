"use strict";
const service_index = require("./index.js");
const getRecommendOfficerInfo = async () => {
  return service_index.http.get("/referral/officer/shops/");
};
const createRecommendOfficer = async (data) => {
  return service_index.http.post("/referral/officer/create/", data);
};
const getOfficerQRCode = async (data) => {
  return service_index.http.post("/referral/qrcode/", data);
};
exports.createRecommendOfficer = createRecommendOfficer;
exports.getOfficerQRCode = getOfficerQRCode;
exports.getRecommendOfficerInfo = getRecommendOfficerInfo;
