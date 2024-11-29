import { uploadUrl } from "../service/config";

export const uploadImage = async (filePath) => {
  console.log('图片本地临时地址',filePath);
  const token = uni.getStorageSync('accessToken'); // 获取 token
// 生成随机数作为文件名，可以结合当前时间戳确保唯一性
  const randomFileName = `file_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  // 返回一个 Promise
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: uploadUrl, // 上传接口 URL
      filePath: filePath, // 需要上传的文件路径
      name: 'image', // 后台接收文件的字段名
      header: {
        'Authorization': `Bearer ${token}`, // JWT Token 添加到 Authorization 请求头
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
    
    const start = input.slice(0, 7); // 获取前5个字符
    const end = input.slice(-7);     // 获取后5个字符
    const obscured = start + '******' + end; // 拼接前8个字符 + 6个* + 后7个字符
    
    return obscured;
}  

export const obscurePhoneNumber = (input)=>{
    if (input.length < 11) {
        return input; // 如果字符串长度小于等于15个字符，则不做处理，直接返回
    }
    
    const start = input.slice(0, 3); // 获取前5个字符
    const end = input.slice(-4);     // 获取后5个字符
    const obscured = start + '****' + end; // 拼接前8个字符 + 6个* + 后7个字符
    
    return obscured;
} 

export const transformTypeFilter = (item)=>{
	if(item.transaction_method=='gift_green_points'){
		return '商家赠送'
	}
	if(item.transaction_method=='gift_green_points_bonus'){
		return '推荐奖励'
	}
	if(item.transaction_method=='green_points'){
		if(item.transaction_type=='increase'){
			return '充值'
		}
		else{
			return '提取'
		}
		
	}
	if(item.transaction_method=='red_points'){
		if(item.transaction_type=='increase'){
			return '充值'
		}
		else{
			return '提取'
		}
	}
	if(item.transaction_method=='agent_bonus'){
		return '代理增加保证金'
	}
	if(item.transaction_method=='merchant_bonus'){
		return '商家增加保证金'
	}
	if(item.transaction_method=='every_red_bonus'){
		return '释放'
	}
	if(item.transaction_method=='every_green_bonus'){
		return '消耗'
	}
	return '--'
}