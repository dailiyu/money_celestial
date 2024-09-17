"use strict";
const service_index = require("./index.js");
const uploadShopImg = (image_url, image_type, shop) => {
  return service_index.http.post("/shops/images/create/", {
    image_url,
    image_type,
    shop
  });
};
const postMerchantSettleIn = (name, description, category_ids, avatar, address, latitude, longitude, city) => {
  return service_index.http.post("/shops/create/", {
    name,
    description,
    category_ids,
    avatar,
    address,
    latitude,
    longitude,
    city
  });
};
const updateShopInfo = async (name, description, category_ids, avatar, address, latitude, longitude, city) => {
  return service_index.http.put("/shops/update/", {
    name,
    description,
    category_ids,
    avatar,
    address,
    latitude,
    longitude,
    city
  });
};
const getShopCategories = () => {
  return service_index.http.get("/shops/categories/");
};
const getShopInfo = () => {
  return service_index.http.get("/shops/mine/");
};
const getShopList = () => {
  return service_index.http.get("/shops/");
};
exports.getShopCategories = getShopCategories;
exports.getShopInfo = getShopInfo;
exports.getShopList = getShopList;
exports.postMerchantSettleIn = postMerchantSettleIn;
exports.updateShopInfo = updateShopInfo;
exports.uploadShopImg = uploadShopImg;
