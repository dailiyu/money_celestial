import  {http} from "./index"


//获取推荐官信息
export  const getRecommendOfficerInfo=async ()=>{
	return http.get('/referral/officer/shops/')
}

//获取推荐官商铺列表
export  const getRecommendShopList=async ()=>{
	return http.get('/referral/officer/shops/')
}

//成为推荐官
export  const createRecommendOfficer=async (data)=>{
	return http.post('/referral/officer/create/', data)
}

// 获取二维码
export  const getOfficerQRCode=async (data)=>{
	return http.post('/referral/qrcode/', data)
}