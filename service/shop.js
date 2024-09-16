import  {http} from "./index"



export const uploadShopImg=(image_url,image_type,shop)=>{
	return http.post('/shops/images/create/',{
		image_url,image_type,shop
	})
}


//创建店铺
export const postMerchantSettleIn=(name,description,category_ids,avatar,address,latitude,longitude,city)=>{
	return http.post('/shops/create/',{
		name,description,category_ids,avatar,address,latitude,longitude,city
	})
}


export const updateShopInfo=async ()=>{
	const id=await uni.getStorageSync('storeId')
	return http.put(`/shops/${id}/update/`,{
		name,description,category_ids,avatar,address,latitude,longitude,city
	})
}



//获取商品分类列表
export const getShopCategories= ()=>{
	return http.get('/shops/categories/')
}


//获取店铺信息
export const getShopInfo=()=>{
	return http.get('/shops/retrieve/')
}





