import  {http} from "./index"


//获取推荐官信息
export  const getRecommendOfficerInfo=async (user)=>{
	return http.get(`/referral/officers/${user}/`)
}

//获取推荐官商铺列表
export  const getRecommendShopList=async (data)=>{
	return http.get('/referral/merchants/', data)
}


//成为推荐官
export  const createRecommendOfficer=async (data)=>{
	return http.post('/referral/officers/', data)
}

// 获取二维码
export  const getOfficerQRCode=async ()=>{
	return http.get('/referral/qrcode/')
}




