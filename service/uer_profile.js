import  {http} from "./index"


//获取账号信息，请求头需要携带token
export  const getUerAccountMessage=async ()=>{
	return http.get('/users_profile/get/')
}



//注册账号
export  const postRegister=async ()=>{
	return http.post('/users_profile/register/',{
		phone_number,
		password
	})
}

//登陆
export  const postProfileLogin=async (phone_number,password)=>{
	return http.post('/users_profile/login/',{
		phone_number,
		password
	})
}





