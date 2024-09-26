import  {http} from "./index"


//获取代理商家列表及数量
export  const getAgentShopList=async (id, data)=>{
	return http.get(`/divisions/merchants/province/${id}/list/`, data)
}

// 获取商家数量
export  const getAgentShopAmount=async ()=>{
	return http.get('/agent/province/shops/')
}

// 获取推荐官数量
export  const getRecommendOfficerAmount=async (id)=>{
	return http.get(`/divisions/referral-officers/province/${id}/list/`)
}

// 获取省份id
export  const getProvinceId=async ()=>{
	return http.get('/agent/province/')
}