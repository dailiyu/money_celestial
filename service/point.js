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
export  const withdrawPoint=async (data)=>{
	return http.post('/wallets/convert/green-to-red/points/', data)
}

// 赠送积分
export  const giftPoint=async (data)=>{
	return http.post('/wallets/gift/green/point/', data)
}

// 获取红积分，绿积分，代理总积分，保证金
export  const getAllPoint=async ()=>{
	return http.get('/wallets/')
}

// 获取积分绑定账号
export  const getPointBindedAccount=async ()=>{
	return http.get('/wallets/')
}