"use strict";
const service_index = require("./index.js");
const bindPointAccount = async (data) => {
  return service_index.http.post("/wallets/wallet/bind/points/account/", data);
};
const unbindPointAccount = async (data) => {
  return service_index.http.post("/wallets/wallet/unbind/points/account/", data);
};
const withdrawPoint = async (data) => {
  return service_index.http.post("/wallets/convert/green-to-red/points/", data);
};
const giftPoint = async (data) => {
  return service_index.http.post("/wallets/gift/green/point/", data);
};
const getAllPoint = async () => {
  return service_index.http.get("/wallets/");
};
const getPointBindedAccount = async () => {
  return service_index.http.get("/wallets/");
};
exports.bindPointAccount = bindPointAccount;
exports.getAllPoint = getAllPoint;
exports.getPointBindedAccount = getPointBindedAccount;
exports.giftPoint = giftPoint;
exports.unbindPointAccount = unbindPointAccount;
exports.withdrawPoint = withdrawPoint;
