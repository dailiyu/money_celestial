import  {http} from "./index"


//获取积分提取记录 
export  const getWithdrawRecord=async (data={})=>{
	return http.get('/points/transactions/', data)
}


//绑定积分账号
export  const bindPointAccount=async (data)=>{
	return http.post('/wallets/wallet/bind/points/account/', data)
}

//解绑积分账号
export  const unbindPointAccount=async (data)=>{
	return http.post('/wallets/wallet/unbind/points/account/', data)
}

//提取绿积分
export  const withdrawGreenPoint=async (data)=>{
	return http.post('/orders/withdraw/green/points/', data)
}

// 赠送积分
export  const giftPoint=async (data)=>{
	return http.post('/orders/merchant/give/green/points/', data)
}

// 获取红积分，绿积分，代理总积分，保证金
export  const getAllPoint=async ()=>{
	return http.get('/wallets/')
}

// 获取积分绑定账号
export  const getPointBindedAccount=async ()=>{
	return http.get('/wallets/')
}

// 获取积分列表
export  const getPointsRecords=async (data)=>{
	return http.get('/orders/points/transactions/', data)
}

// 兑换红积分
export  const addRedPoints=async (data)=>{
	return http.post('/orders/add/red/points/', data)
}

// 获取交易地址
export  const getWalletAddress=async ()=>{
	return http.get('/cards/address/')
}

// 提取红积分
export  const withdrawRedPoints=async (data)=>{
	return http.post('/orders/withdraw/red/points/', data)
}

// 提取所有记录列表
export  const getAllRecords=async ()=>{
	return http.get('/orders/')
}