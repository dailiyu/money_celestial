import  {http} from "./index"



export const uploadShopImg=(image_url,image_type)=>{
	return http.post('/shops/images/create/',{
		image_url,image_type
	})
}

export const postMerchantSettleIn=(name,description,category_ids,avatar,address,latitude,longitude)=>{
	return http.post('/shops/create/',{
		name,description,category_ids,avatar,address,latitude,longitude
	})
}


//获取商品分类列表
export const getShopCategories=async ()=>{
	return http.get('/shops/categories/')
}






