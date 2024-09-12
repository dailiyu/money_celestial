"use strict";
const service_index = require("./index.js");
const getProvincesList = () => {
  return service_index.http.get("/divisions/provinces/");
};
const getCitiesList = () => {
  return service_index.http.get("/divisions/provinces/");
};
const getAreasList = () => {
  return service_index.http.get("/divisions/provinces/");
};
const getStreetsList = () => {
  return service_index.http.get("/divisions/provinces/");
};
exports.getAreasList = getAreasList;
exports.getCitiesList = getCitiesList;
exports.getProvincesList = getProvincesList;
exports.getStreetsList = getStreetsList;
