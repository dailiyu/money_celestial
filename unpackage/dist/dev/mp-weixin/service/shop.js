"use strict";
const common_vendor = require("../common/vendor.js");
const service_index = require("./index.js");
const uploadShopImg = (image_url, image_type, shop) => {
  return service_index.http.post("/shops/images/create/", {
    image_url,
    image_type,
    shop
  });
};
const postMerchantSettleIn = (name2, description2, category_ids2, avatar2, address2, latitude2, longitude2, city2) => {
  return service_index.http.post("/shops/create/", {
    name: name2,
    description: description2,
    category_ids: category_ids2,
    avatar: avatar2,
    address: address2,
    latitude: latitude2,
    longitude: longitude2,
    city: city2
  });
};
const updateShopInfo = async () => {
  const id = await common_vendor.index.getStorageSync("storeId");
  return service_index.http.put(`/shops/${id}/update/`, {
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
  return service_index.http.get("/shops/retrieve/");
};
exports.getShopCategories = getShopCategories;
exports.getShopInfo = getShopInfo;
exports.postMerchantSettleIn = postMerchantSettleIn;
exports.updateShopInfo = updateShopInfo;
exports.uploadShopImg = uploadShopImg;
