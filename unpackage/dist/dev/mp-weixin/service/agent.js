"use strict";
const service_index = require("./index.js");
const getAgentShopList = async (data) => {
  return service_index.http.get(`/api/agent/shops/?ordering=${data.time}created_at&categories=${data.categoryId}`, { page: data.page });
};
exports.getAgentShopList = getAgentShopList;
