"use strict";
const service_index = require("./index.js");
const getCityAgent = () => {
  return service_index.http.get("/region/agent/city/get/");
};
const getProvinceAgent = () => {
  return service_index.http.get("/region/agent/province/get/");
};
exports.getCityAgent = getCityAgent;
exports.getProvinceAgent = getProvinceAgent;
