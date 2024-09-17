import { uploadUrl } from "../service/config"; // 从服务的配置中引入上传 URL

// 上传图片的异步函数
export const uploadUserInfo = async (filePath,name,email,gender,birthdate,residence) => {
  console.log(filePath,name,email,gender,birthdate,residence); // 打印要上传的文件路径

  // 从本地存储中获取 token，通常用于用户身份认证
  const token = uni.getStorageSync('accessToken');

  // 返回一个 Promise，以便在异步操作中可以使用
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: 'https://max.q6z4kzhr.uk/api/users/', // 上传接口的 URL
      filePath: filePath, // 要上传的文件路径
      name: 'icon', // 后端接收文件的字段名
      header: {
        'Authorization': `Bearer ${token}`, // 使用 Bearer Token 进行身份认证
        'Content-Type': 'multipart/form-data', // 设置为 multipart/form-data 以支持文件上传
      },
	   formData: {
		      'name':name,
	          'email': email,         
	          'gender': gender,
	          'birthdate': birthdate,
			  'residence':residence
	        },
      success: (uploadFileRes) => {
        if (uploadFileRes.statusCode == 201) { // 检查上传是否成功，201 表示资源创建成功
          const data = JSON.parse(uploadFileRes.data); // 解析服务器返回的 JSON 数据
          console.log('上传成功！');
          resolve(data); 
        } else {
          console.log('上传失败，状态码：', uploadFileRes.statusCode); // 打印错误状态码
          reject(new Error(`上传失败，状态码：${uploadFileRes.statusCode}`)); // 使用 reject 返回错误信息
        }
      },
      fail: (err) => {
        console.error('上传文件出错:', err); // 打印上传文件的错误信息
        reject(err); // 使用 reject 返回错误对象
      }
    });
  });
};
