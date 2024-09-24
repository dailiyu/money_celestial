import  {http} from "./index"


//获取账号信息，请求头需要携带token
export  const getUerAccountMessage=async ()=>{
	return http.get('/users/')
}

//注册账号
export  const postRegister=async (phone_number,password,username)=>{
	return http.post('/users/register/',{
		phone_number,password,username:phone_number
	})
}

//部分修改用户信息
export const changeUserInfo=async (userInfo)=>{
	return http.put('/users/update/',userInfo)
}


//登陆
export  const postProfileLogin=async (phone_number,password)=>{
	return http.post('/users/login/',{
		phone_number,password
	})
}











