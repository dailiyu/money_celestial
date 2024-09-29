import  {http} from "./index"



export const uploadShopImg=(data)=>{
	return http.post('/shops/images/create/',data)
}


//创建店铺
export const postMerchantSettleIn=(data)=>{
	return http.post('/shops/',data)
}


//更新店铺信息
export const changeShopInfo=(merchant,data)=>{
	return http.put(`/shops/${merchant}/`,data)
}

//获取商品分类列表
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






