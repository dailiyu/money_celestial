import  {http} from "./index"


//获取账号信息，请求头需要携带token
export  const getUerAccountMessage=async ()=>{
	return http.get('/users/')
}
/*
{
    "status": "success",
    "message": "User information retrieved successfully.",
    "data": {
        "id": "9f6aafda-c277-40be-9353-dffea019f1e1",
        "phone_number": "12345654321",
        "name": "二狗",
        "email": "123123@qq.com",
        "icon": "https://maxfiles.q6z4kzhr.uk/RyVHAz2g6drXd27116e0e218a5e714c7aebf21faee1c.jpg",
        "gender": "male",
        "birthdate": "2024-09-05T00:00:00Z",
        "residence": "广东省佛山市",
        "created_at": "2024-09-12T09:01:04.600052Z",
        "updated_at": "2024-09-13T07:01:45.429358Z"
    }
}
*/

//注册账号
export  const postRegister=async (username,password)=>{
	return http.post('/users/register/',{
		username,password
	})
}

//部分修改用户信息
export const changeUserInfo=async (name,icon,gander,birthdate,residence,email)=>{
	return http.patch('/users/',{
			name,icon,gander,birthdate,residence,email
		})
}



//登陆
export  const postProfileLogin=async (username,password)=>{
	return http.post('/users/login/',{
		username,password
	})
}











