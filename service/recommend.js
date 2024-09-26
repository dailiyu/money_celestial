import  {http} from "./index"


//获取推荐官信息
export  const getRecommendOfficerInfo=async (user)=>{
	return http.get(`/referral/officers/${user}/`)
}

//获取推荐官商铺列表
export  const getRecommendShopList=async ()=>{
	return http.get('/referral/officers/merchants/')
}


//成为推荐官
export  const createRecommendOfficer=async (data)=>{
	return http.post('/referral/officers/', data)
}

// 获取二维码
export  const getOfficerQRCode=async ()=>{
	return http.get('/referral/qrcode/')
}

//获取推荐官推荐了哪些商家列表
export  const getMerchantList=async ()=>{
	return http.get('/referral/qrcode/')
}



