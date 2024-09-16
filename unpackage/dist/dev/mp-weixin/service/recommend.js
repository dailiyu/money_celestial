"use strict";
const service_index = require("./index.js");
const getRecommendOfficerInfo = async () => {
  return service_index.http.get("/referral/officer/");
};
exports.getRecommendOfficerInfo = getRecommendOfficerInfo;
