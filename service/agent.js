import  {http} from "./index"


//获取代理商家列表
export  const getAgentShopList=async (data)=>{
	return http.get('/agent/province/shops/', data)
}

// 获取商家数量
export  const getAgentShopAmount=async ()=>{
	return http.get('/agent/province/shops/')
}

// 获取推荐官数量
export  const getRecommendOfficerAmount=async ()=>{
	return http.get('/agent/province/referral/officers/')
}
