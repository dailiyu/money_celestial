"use strict";
const common_vendor = require("../common/vendor.js");
const service_index = require("./index.js");
const getUerAccountMessage = async () => {
  return service_index.http.get("/users_profile/get/");
};
const postRegister = async (phone_number, password) => {
  return service_index.http.post("/users_profile/register/", {
    phone_number,
    password
  });
};
const postProfileLogin = async (phone_number, password) => {
  return service_index.http.post("/users_profile/login/", {
    phone_number,
    password
  });
};
const updateUserProfile = async (icon, name, email, gender, birthdate, residence) => {
  const userId = await common_vendor.index.getStorageSync("userId");
  return service_index.http.put(`/users_profile/update/${userId}/`, {
    icon,
    name,
    email,
    gender,
    birthdate,
    residence
  });
};
exports.getUerAccountMessage = getUerAccountMessage;
exports.postProfileLogin = postProfileLogin;
exports.postRegister = postRegister;
exports.updateUserProfile = updateUserProfile;
