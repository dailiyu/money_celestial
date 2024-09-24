"use strict";
const service_index = require("./index.js");
const getDeposit = () => {
  return service_index.http.get("/deposit/get/");
};
const getDepositList = (data) => {
  return service_index.http.get("/deposit/records/", data);
};
const getDepositBalance = () => {
  return service_index.http.get("/deposit/get/");
};
const addDeposit = (data) => {
  return service_index.http.put("/deposit/add/", data);
};
const removeDeposit = (data) => {
  return service_index.http.put(`/deposit/remove/`, data);
};
exports.addDeposit = addDeposit;
exports.getDeposit = getDeposit;
exports.getDepositBalance = getDepositBalance;
exports.getDepositList = getDepositList;
exports.removeDeposit = removeDeposit;
