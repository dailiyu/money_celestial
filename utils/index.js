import { uploadUrl } from "../service/config";



export const uploadImage = async (filePath) => {
  console.log(filePath);
  const token = uni.getStorageSync('accessToken'); // 获取 token

  // 返回一个 Promise
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: uploadUrl, // 上传接口 URL
      filePath: filePath, // 需要上传的文件路径
      name: 'image', // 后台接收文件的字段名
      header: {
        'Authorization': `Bearer ${token}`, // JWT Token 添加到 Authorization 请求头
        'Content-Type': 'multipart/form-data'
      },
      success: (uploadFileRes) => {
        if (uploadFileRes.statusCode === 201) {
          const data = JSON.parse(uploadFileRes.data); // 解析返回的数据
          console.log('上传成功！');
          console.log('上传的图片 URL:', data.image_url);
          resolve(data.image_url); // 成功时 resolve 返回数据
        } else {
          console.log('上传失败，状态码：', uploadFileRes.statusCode);
          reject(new Error(`上传失败，状态码：${uploadFileRes.statusCode}`)); // 失败时 reject 错误信息
        }
      },
      fail: (err) => {
        console.error('上传文件出错:', err);
        reject(err); // 错误时 reject
      }
    });
  });
};
