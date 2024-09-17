"use strict";
const common_vendor = require("../common/vendor.js");
const service_config = require("../service/config.js");
const uploadImage = async (filePath) => {
  console.log(filePath);
  const token = common_vendor.index.getStorageSync("accessToken");
  return new Promise((resolve, reject) => {
    common_vendor.index.uploadFile({
      url: service_config.uploadUrl,
      // 上传接口 URL
      filePath,
      // 需要上传的文件路径
      name: "image",
      // 后台接收文件的字段名
      header: {
        "Authorization": `Bearer ${token}`,
        // JWT Token 添加到 Authorization 请求头
        "Content-Type": "multipart/form-data"
      },
      success: (uploadFileRes) => {
        if (uploadFileRes.statusCode == 201) {
          const data = JSON.parse(uploadFileRes.data);
          console.log("上传成功！");
          console.log("上传的图片 URL:", data.image_url);
          resolve(data.image_url);
        } else {
          console.log("上传失败，状态码：", uploadFileRes.statusCode);
          reject(new Error(`上传失败，状态码：${uploadFileRes.statusCode}`));
        }
      },
      fail: (err) => {
        console.error("上传文件出错:", err);
        reject(err);
      }
    });
  });
};
const convertTime = (timeStamp, format = "yyyy/MM/dd hh:mm:ss") => {
  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  return format.replace("yyyy", year).replace("MM", month).replace("dd", day).replace("hh", hours).replace("mm", minutes).replace("ss", seconds);
};
exports.convertTime = convertTime;
exports.uploadImage = uploadImage;
