import  {http} from "./index"

// 获取保证金
export const getDeposit=()=>{
	return http.get('/deposit/get/')
}


// 获取保证金记录
export const getDepositList=(data)=>{
	return http.get('/deposit/records/', data)
}

// 获取保证金余额
export const getDepositBalance=()=>{
	return http.get('/deposit/get/')
}

// 增加保证金
export const addDeposit=(data)=>{
	return http.put('/deposit/add/', data)
}

// 解除保证金
export const removeDeposit=(data)=>{
	return http.put(`/deposit/remove/`, data)
}