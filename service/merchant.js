import  {http} from "./index"




//创建商家
export const createMerchant=async (data)=>{
	return http.post('/merchant/',data)
}



//验证商家码
export const vertifyMerchant=async (user,data)=>{
	return http.put(`/merchant/code/verifications/${user}/`,data)
}

//查看验证商家码信息
export const getVertifyMerchantInfo=async (user)=>{
	return http.get(`/merchant/code/verifications/${user}/`)
}


export const getMerchantInfo=async ()=>{
	return http.get('/merchant/get/')
}


//商家列表
// export const getMerchantList=()=>{
// 	return http.get('/merchant/')
// }
/*
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "user": "admin",
            "name": "merchant1",
            "is_approved": false,
            "created_at": "2024-09-12T08:16:27.723885Z",
            "updated_at": "2024-09-12T08:16:27.723901Z"
        }
    ]
}
*/

//
export const postMerchant=()=>{
	return http.post('/merchant/',{
		
	})
}


//获取商家分类列表
export const getMerchantCategoriesList=()=>{
	return http.get('/merchant/categories/')
}

//添加商店类型
export const createMerchantCategoriesList=(store,name,description)=>{
	return http.post('/merchant/categories/',{
		store,
		name,
		description
	})
}

//通过分类id查询分类信息
export const queryMerchantCategoriesById=(id)=>{
	return http.get(`/merchant/categories/${id}/`)
}

//获取商家列表
export const getMerchantList=(data)=>{
	return http.get('/shops/', data)
}

export const uploadMerchantBanner=(url)=>{
	return http.post('/merchant/stores/banner/',{url})
}

export const uploadMerchantDetail=(url)=>{
	return http.post('/merchant/stores/detail/image/',{url})
}


// export const postMerchantSettleIn=(icon,name,address,detail)=>{
// 	return http.post('/merchant/stores/',{
// 		icon,name,address,detail
// 	})
// }

export const postBindingStoreCategory=(store,category)=>{
	return http.post('/merchant/stores/category/',{store,category})
}


export const getStoreInfo=()=>{
	return http.get('/merchant/stores/get/')
}

export const updataStoreInfo=(icon,name,address,detail)=>{
	const id= uni.getStorageSync('storeId')
	return http.put(`/merchant/stores/update/${id}/`,{
		icon,name,address,detail
	})
}

export const getStoreList=()=>{
	return http.get('/merchant/stores/list/')
}

export const getTotalRanking=(data)=>{
	return http.get('/stats/total-rankings/', data)
}

export const getNewRanking=(data)=>{
	return http.get('/stats/rankings/', data)
}

export const getMerchantDetail=(data)=>{
	return http.get(`/shops/${data}/`)
}




















