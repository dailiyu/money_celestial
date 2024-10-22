import  {http} from "./index"


//获取账号信息，请求头需要携带token
export  const getUerAccountMessage=async (phone_number)=>{
	return http.get(`/users/profile/${phone_number}/`)
}

//注册账号
export  const postRegister=async (phone_number,password)=>{
	return http.post('/users/register/',{
		phone_number,password
	})
}

//部分修改用户信息 如果填写trade_psk 交易密码，则必须同时提交verify_code验证码
export const changeUserInfo=async (data)=>{
	const userInfo=await uni.getStorageSync('userInfo')
	return http.put(`/users/profile/${userInfo.phone_number}/`,data)
}


//登陆
export  const postProfileLogin=async (phone_number,password)=>{
	return http.post('/users/login/',{
		phone_number,password
	})
}



//发放验证码 修改密码与修改交易密码需要用到
export  const sendVerifyCode=async ()=>{
	return http.get(`/users/send-verify-code/`,{
	})
}








