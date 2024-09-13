import  {http} from "./index"


//获取账号信息，请求头需要携带token
export  const getUerAccountMessage=async ()=>{
	return http.get('/users_profile/get/')
}
/*
{
    "id": "941f06f9-a930-4ab6-9837-2415c09c3f6d",
    "phone_number": "1122334455",
    "name": "name",
    "email": "123123@qq.com",
    "icon": "https://baidu.com",
    "gender": "female",
    "birthdate": "2024-09-13T04:45:58Z",
    "residence": "111112333",
    "created_at": "2024-09-13T04:19:08.881837Z",
    "updated_at": "2024-09-13T04:47:59.577477Z"
}
*/

//注册账号
export  const postRegister=async (phone_number,password)=>{
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

//更新用户信息
export  const updateUserProfile=async (icon,name,email,gender,birthdate,residence)=>{
	
	const userId=await  uni.getStorageSync('userId')

	return http.put(`/users_profile/update/${userId}/`,{
		icon,name,email,gender,birthdate,residence
	})
}









