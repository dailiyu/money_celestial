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

// 申请代理
export  const applyAgent=async (data)=>{
	return http.post('/agent/register/', data)
}

// 增加代理保证金
export  const addAgentDeposit=async (data)=>{
	return http.put('/agent/margin/update/', data)
}

// 查看代理保证金
export  const getAgentDeposit=async ()=>{
	return http.get('/agent/margin/update/')
}

// 撤销代理保证金
export  const removeAgentDeposit=async (data)=>{
	return http.put('/agent/margin/cancel/', data)
}

// 获取保证金记录
export  const getDepositRecord=async ()=>{
	return http.get('/agent/margin/records/')
}