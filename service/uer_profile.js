import  {http} from "./index"


//获取账号信息，请求头需要携带token
export  const getUerAccountMessage=async (phone_number)=>{
	return http.get(`/users/profile/${phone_number}/`)
}

//注册账号
export  const postRegister=async (data)=>{
	return http.post('/users/register/',data)
}

//部分修改用户信息 如果填写trade_psk 交易密码，则必须同时提交verify_code验证码
export const changeUserInfo=async (data)=>{
	const userInfo=await uni.getStorageSync('userInfo')
	return http.put(`/users/profile/${userInfo.phone_number}/`,data)
}


//登陆
export  const postProfileLogin=async (data)=>{
	console.log('-----1111');
	return http.post('/users/login/',data)
}



//修改密码
export  const changePassword=async (phone_number,password,verify_code)=>{
 return http.post(`/users/change-password`,{
  phone_number,password,verify_code
 })
}

//发放验证码 修改密码与修改交易密码需要用到
export  const sendVerifyCode=async (phone_number)=>{
 return http.post(`/users/send-verify-code/`,{
  phone_number
 })
}


export  const getUpdateMessage=async ()=>{
 return http.get('/users/app-version')
}






