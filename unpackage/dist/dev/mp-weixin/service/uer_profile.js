"use strict";
const service_index = require("./index.js");
const getUerAccountMessage = async () => {
  return service_index.http.get("/users/");
};
const postRegister = async (username, password) => {
  return service_index.http.post("/users/register/", {
    username,
    password
  });
};
const changeUserInfo = async (name, icon, gander, birthdate, residence, email) => {
  return service_index.http.patch("/users/", {
    name,
    icon,
    gander,
    birthdate,
    residence,
    email
  });
};
const postProfileLogin = async (username, password) => {
  return service_index.http.post("/users/login/", {
    username,
    password
  });
};
exports.changeUserInfo = changeUserInfo;
exports.getUerAccountMessage = getUerAccountMessage;
exports.postProfileLogin = postProfileLogin;
exports.postRegister = postRegister;
