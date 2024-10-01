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


//获取店铺图片
export const getShopImages=(data)=>{
	return http.get('/shops-images/', data)
}



