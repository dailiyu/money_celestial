import  {http} from "./index"


//回传url将图片与店铺关联
export const uploadShopImg=(data)=>{
	return http.post('/shops-images/',data)
}

//更新店铺图片的url
export const updateShopImg=(id,data)=>{
		return http.put(`/shops-images/${id}/update/`,data)
	}

//创建店铺
export const postMerchantSettleIn=(data)=>{
	return http.post('/shops/',data)
}

/*  */
//更新店铺信息
export const changeShopInfo=(merchant,data)=>{
	return http.patch(`/shops/${merchant}/`,data)
}

//获取商店分类列表
export const getShopCategories= ()=>{
	return http.get('/shops/categories/')
}


//获取店铺信息
export const getShopInfo=(merchant)=>{
	return http.get(`/shops/${merchant}/`)
}




export const getShopList=(data)=>{
	return http.get('/shops/', data)
}


//获取店铺图片
export const getShopImages=(data)=>{
	return http.get('/shops-images/', data)
}


//获取城市商家列表
export const getCityShopList=(data)=>{
	return http.get('/divisions/city_shops', data)
}

// 搜索店铺
export const searchShops = (params) => {
	return http.get('/search/', params)
}

// 获取城市兑换商品列表
export const getCityExchangeProducts = (params) => {
	return http.get('/divisions/city_exchange_center/', params)
}

// 获取商品详情
export const getProductDetail = (id) => {
	return http.get(`/products/${id}/`)
}

// 兑换商品
export const redeemProduct = (data) => {
	return http.post('/orders/redeem/product/', data)
}

// 获取订单列表
export const getOrderList = (params) => {
	return http.get('/orders/', params)
}

// 获取订单详情
export const getOrderDetail = (id) => {
	return http.get(`/orders/${id}`)
}

// 申请退款
export const applyRefund = (orderId) => {
	return http.put(`/orders/redeem/refund/${orderId}/`, {})
}




