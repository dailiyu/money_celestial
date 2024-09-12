"use strict";
const common_vendor = require("../common/vendor.js");
const TIME_OUT = 6e4;
const BASE_URL = "https://max.q6z4kzhr.uk/api";
class Request {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      const accessToken = common_vendor.index.getStorageSync("accessToken");
      common_vendor.index.request({
        url: BASE_URL + url,
        method: method || "GET",
        timeout: TIME_OUT,
        data,
        header: {
          "Authorization": `Bearer ${accessToken}`
          // 携带 accessToken
        },
        success: (res) => {
          if (res.statusCode === 200) {
            resolve(res.data);
          } else if (res.statusCode === 401) {
            this.refreshToken().then((newAccessToken) => {
              this.request(url, method, data).then(resolve).catch(reject);
            }).catch((err) => {
              this.logout();
              reject(err);
            });
          } else {
            reject(res);
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  get(url, params) {
    return this.request(url, "GET", params);
  }
  post(url, data) {
    return this.request(url, "POST", data);
  }
  put(url, data) {
    return this.request(url, "PUT", data);
  }
  patch(url, data) {
    return this.request(url, "PATCH", data);
  }
  delete(url, params) {
    return this.request(url, "DELETE", params);
  }
  // 刷新 Token
  refreshToken() {
    return new Promise((resolve, reject) => {
      const refreshToken = common_vendor.index.getStorageSync("refreshToken");
      if (!refreshToken) {
        reject(new Error("No refresh token available"));
        return;
      }
      common_vendor.index.request({
        url: `${BASE_URL}/refresh-token`,
        // 刷新 Token 接口
        method: "POST",
        header: {
          "Authorization": `Bearer ${refreshToken}`
        },
        success: (res) => {
          if (res.statusCode === 200) {
            const { accessToken } = res.data;
            common_vendor.index.setStorageSync("accessToken", accessToken);
            resolve(accessToken);
          } else {
            reject(new Error("Failed to refresh token"));
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  // 登出逻辑
  logout() {
    common_vendor.index.removeStorageSync("accessToken");
    common_vendor.index.removeStorageSync("refreshToken");
    common_vendor.index.navigateTo({
      url: "/pages/login/login"
      // 假设有一个登录页面
    });
  }
}
const http = new Request();
exports.http = http;
