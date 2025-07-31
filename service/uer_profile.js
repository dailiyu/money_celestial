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
	const phone_number=uni.getStorageSync('phoneNumber')
	return http.put(`/users/profile/${phone_number}/`,data)
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



export  const getSessionKey=async (data)=>{
 return http.post('/users/get_session_key', data)
}


export  const wxLogin=async (data)=>{
 return http.post('/users/wxapp_phone_login', data)
}


export  const favoriteShopsList=async (category_id='',ordering="", page=1)=>{
 //ordering： -shop__consume2coin_bit 降序  shop__consume2coin_bit 增序
 return http.get("/users/favorite-shops/",{search:category_id,ordering, page})
}

//favoriteShopsAdd({shop:"18138524553"}
export  const favoriteShopsAdd=async (data)=>{
 return http.post('/users/favorite-shops/', data)
}


//favoriteShopsDelete(1);
export  const favoriteShopsDelete=async (id)=>{
 return http.delete(`/users/favorite-shops/${id}/`)
}

export  const browserShopsList=async (category_id='',ordering="", page=1)=>{
 //ordering： -shop__consume2coin_bit 降序  shop__consume2coin_bit 增序
 return http.get('/users/browser-history/', {search:category_id,ordering,page})
}

export  const browserShopAdd=async (data)=>{
 return http.post('/users/browser-history/', data)
}

export  const browserShopDelete=async (id)=>{
 return http.delete(`/users/browser-history/${id}/`)
}

//每天签到
export  const sign_data=async ()=>{
 return http.get(`/orders/sign_data`)
}
//每天签到数据
export  const sign=async ()=>{
 return http.post(`/orders/sign`)
}