"use strict";
const service_index = require("./index.js");
const getDeposit = (id) => {
  return service_index.http.get(`/deposit/get/`);
};
const getDepositList = (id) => {
  return service_index.http.get(`/deposit/records/`);
};
exports.getDeposit = getDeposit;
exports.getDepositList = getDepositList;
