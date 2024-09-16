"use strict";
const service_index = require("./index.js");
const uploadShopImg = (image_url, image_type) => {
  return service_index.http.post("/shops/images/create/", {
    image_url,
    image_type
  });
};
exports.uploadShopImg = uploadShopImg;
