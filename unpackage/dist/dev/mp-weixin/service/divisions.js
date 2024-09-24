"use strict";
const common_vendor = require("../common/vendor.js");
const service_index = require("./index.js");
const getCitiesDetail = async () => {
  const { city } = await common_vendor.index.getStorageSync("address_info");
  console.log(city);
  return service_index.http.post("/divisions/citys/wechat/", {
    filters: {
      name: city
    }
  });
};
exports.getCitiesDetail = getCitiesDetail;
