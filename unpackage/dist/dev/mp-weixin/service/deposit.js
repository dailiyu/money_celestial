"use strict";
const service_index = require("./index.js");
const getDeposit = () => {
  return service_index.http.get("/deposit/");
};
const getDepositList = async (data) => {
  return service_index.http.get("/deposit/records/", data);
};
const addDeposit = (data) => {
  return service_index.http.post("/wallets/add/collateral/", data);
};
const removeDeposit = (data) => {
  return service_index.http.post("/wallets/remove/collateral/", data);
};
exports.addDeposit = addDeposit;
exports.getDeposit = getDeposit;
exports.getDepositList = getDepositList;
exports.removeDeposit = removeDeposit;
