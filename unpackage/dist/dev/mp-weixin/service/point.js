"use strict";
const service_index = require("./index.js");
const getPointAccount = async (data = {}) => {
  return service_index.http.get("/points/account/", data);
};
const getWithdrawRecord = async (data = {}) => {
  return service_index.http.get("/points/transactions/", data);
};
const bindPointAccount = async (data) => {
  return service_index.http.post("/points/accounts/create/", data);
};
const unbindPointAccount = async (id) => {
  return service_index.http.put(`/points/accounts/${id}/update/`, { account_number: "" });
};
const withdrawPoint = async (data) => {
  return service_index.http.post("/points/add/red-point/", data);
};
exports.bindPointAccount = bindPointAccount;
exports.getPointAccount = getPointAccount;
exports.getWithdrawRecord = getWithdrawRecord;
exports.unbindPointAccount = unbindPointAccount;
exports.withdrawPoint = withdrawPoint;
