"use strict";
const service_index = require("./index.js");
const postProfileLogin = async (phone_number, password) => {
  return service_index.http.post("/users_profile/login/", {
    phone_number,
    password
  });
};
exports.postProfileLogin = postProfileLogin;
