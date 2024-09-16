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
        if (uploadFileRes.statusCode == 201) {
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


export const convertTime = (timeStamp,format='yyyy/MM/dd hh:mm:ss') => {
	const date = new Date(timeStamp);
	const year = date.getFullYear();
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const day = ('0' + date.getDate()).slice(-2);
	const hours = ('0' + date.getHours()).slice(-2);
	const minutes = ('0' + date.getMinutes()).slice(-2);
	const seconds = ('0' + date.getSeconds()).slice(-2);
 
	return format
		.replace('yyyy', year)
		.replace('MM', month)
		.replace('dd', day)
		.replace('hh', hours)
		.replace('mm', minutes)
		.replace('ss', seconds);
}

//处理地址字符串s
export const obscureString = (input)=>{
    if (input.length <= 15) {
        return input; // 如果字符串长度小于等于15个字符，则不做处理，直接返回
    }
    
    const start = input.slice(0, 8); // 获取前8个字符
    const end = input.slice(-7);     // 获取后7个字符
    const obscured = start + '******' + end; // 拼接前8个字符 + 6个* + 后7个字符
    
    return obscured;
}