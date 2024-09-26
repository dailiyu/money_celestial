import  {http} from "./index"


//获取代理商家列表及数量
export  const getAgentShopList=async (data)=>{
	return http.get('/divisions/province_merchants', data)
}

// 获取商家数量
export  const getAgentShopAmount=async (data)=>{
	return http.get('/divisions/province_merchants', data)
}

// 获取推荐官数量
export  const getRecommendOfficerAmount=async (data)=>{
	return http.get('/divisions/province_referral_officer', data)
}

// 获取省份id
export  const getProvinceId=async ()=>{
	return http.get('/agent/province/')
}

// 获取省份名称
export  const getProvinceName=async ()=>{
	const {results} = await getProvinceId()
	const code = results[0].province
	return http.get(`/divisions/provinces/${code}/`)
}