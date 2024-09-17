"use strict";
const service_index = require("./index.js");
const getRecommendOfficerInfo = async () => {
  return service_index.http.get("/referral/officer/");
};
const createRecommendOfficer = async (data) => {
  return service_index.http.post("/referral/officer/create/", data);
};
exports.createRecommendOfficer = createRecommendOfficer;
exports.getRecommendOfficerInfo = getRecommendOfficerInfo;
