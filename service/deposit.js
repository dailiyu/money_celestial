import  {http} from "./index"

// 获取商家保证金
export const getDeposit=()=>{
	return http.get('/merchant/margin/cancel/')
}


// 获取保证金记录
export const getDepositList=async(data)=>{
	return http.get('/deposit/records/', data)
}


// 增加商家保证金
export const addDeposit=(data)=>{
	return http.put('/merchant/margin/update/', data)
}

// 解除商家保证金
export const removeDeposit=(data)=>{
	return http.put('/merchant/margin/cancel/', data)
}


// 获取积分和保证金记录
export const getRecords=(data)=>{
	return http.get('/wallets/transactions/', data)
}

// 获取商家保证金记录
export const getMerchantDepositRecord=()=>{
	return http.get('/merchant/margin/records/')
}