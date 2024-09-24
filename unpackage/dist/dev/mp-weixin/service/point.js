"use strict";
const service_index = require("./index.js");
const getPointAccount = async (data = {}) => {
  return service_index.http.get("/points/accounts/get/", data);
};
const getWithdrawRecord = async (data = {}) => {
  return service_index.http.get("/points/redemptions/", data);
};
const getAvailablePoint = async () => {
  return service_index.http.get("/points/get/");
};
const bindPointAccount = async (data) => {
  return service_index.http.post("/points/accounts/create/", data);
};
const unbindPointAccount = async (id) => {
  return service_index.http.put(`/points/accounts/${id}/update/`, { account_number: "" });
};
exports.bindPointAccount = bindPointAccount;
exports.getAvailablePoint = getAvailablePoint;
exports.getPointAccount = getPointAccount;
exports.getWithdrawRecord = getWithdrawRecord;
exports.unbindPointAccount = unbindPointAccount;
