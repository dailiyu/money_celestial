"use strict";
const service_index = require("./index.js");
const getCateGoryList = async () => {
  return service_index.http.get("/category/list/");
};
exports.getCateGoryList = getCateGoryList;
