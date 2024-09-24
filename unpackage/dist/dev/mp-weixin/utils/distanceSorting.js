"use strict";
const common_vendor = require("../common/vendor.js");
const sortShopsByDistance = async (origins, shopList, order = "asc") => {
  try {
    const distances = await calculateDistances(
      origins,
      shopList.map((shop) => ({ latitude: shop.latitude, longitude: shop.longitude }))
    );
    shopList.forEach((shop, index) => {
      shop.distance = distances[index].distance;
    });
    const sortedShopList = [...shopList].sort((a, b) => {
      if (a.distance === void 0 || b.distance === void 0) {
        return 0;
      }
      if (order === "asc") {
        return a.distance - b.distance;
      } else if (order === "desc") {
        return b.distance - a.distance;
      }
      return 0;
    });
    return sortedShopList;
  } catch (error) {
    console.error("Error sorting shops by distance:", error);
    throw error;
  }
};
const calculateDistances = (origins, destinations) => {
  return new Promise((resolve, reject) => {
    const url = `https://apis.map.qq.com/ws/distance/v1/matrix?mode=driving&from=${origins.latitude},${origins.longitude}&key=YQRBZ-P4SKQ-2L55P-4NYXP-XK6TH-LXBVA`;
    const destStr = destinations.map((loc) => `${loc.latitude},${loc.longitude}`).join(";");
    common_vendor.index.request({
      url: `${url}&to=${destStr}`,
      method: "GET",
      success: (res) => {
        if (res.data.status === 0) {
          const distances = res.data.result.rows[0].elements.map((element) => ({
            distance: element.distance
            // 单位为米
          }));
          resolve(distances);
        } else {
          reject("腾讯地图API错误: " + res.data.message);
        }
      },
      fail: (err) => reject("请求失败: " + err)
    });
  });
};
exports.sortShopsByDistance = sortShopsByDistance;
