"use strict";
const service_index = require("./index.js");
const addDeposit = (data) => {
  return service_index.http.post("/wallets/add/collateral/", data);
};
const removeDeposit = (data) => {
  return service_index.http.post("/wallets/remove/collateral/", data);
};
const getRecords = (data) => {
  return service_index.http.get("/wallets/transactions/", data);
};
exports.addDeposit = addDeposit;
exports.getRecords = getRecords;
exports.removeDeposit = removeDeposit;
