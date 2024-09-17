import  {http} from "./index"

// 获取保证金
export const getDeposit=()=>{
	return http.get('/deposit/')
}


// 获取保证金记录
export const getDepositList=async(data)=>{
	return http.get('/deposit/records/', data)
}


// 增加保证金
export const addDeposit=(data)=>{
	return http.post('/wallets/add/collateral/', data)
}

// 解除保证金
export const removeDeposit=(data)=>{
	return http.post('/wallets/remove/collateral/', data)
}


// 获取积分和保证金记录
export const getRecords=(data)=>{
	return http.get('/wallets/transactions/', data)
}