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

//部分修改用户信息
export const changeUserInfo=async (userInfo)=>{
	return http.put(`/users/profile/${userInfo.phone_number}/`,userInfo)
}


//登陆
export  const postProfileLogin=async (phone_number,password)=>{
	return http.post('/users/login/',{
		phone_number,password
	})
}



//发放验证码
export  const sendVerifyCode=async ()=>{
	return http.get(`/users/send-verify-code/`,{
	})
}








