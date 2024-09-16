import  {http} from "./index"

//获取积分账号
export  const getPointAccount=async (data={})=>{
	return http.get('/points/accounts/get/', data)
}

//获取积分提取记录 
export  const getWithdrawRecord=async (data={})=>{
	return http.get('/points/redemptions/', data)
}

//获取积分余额
export  const getAvailablePoint=async ()=>{
	return http.get('/points/get/')
}

//绑定积分账号
export  const bindPointAccount=async (data)=>{
	return http.post('/points/accounts/create/', data)
}

//解绑积分账号
export  const unbindPointAccount=async (id)=>{
	return http.put(`/points/accounts/${id}/update/`, {account_number: ''})
}

//提取积分
export  const withdrawPoint=async (data)=>{
	return http.put('/points/redemptions/create/', data)
}