import  {http} from "./index"

//商家列表
export const getMerchantList=()=>{
	return http.get('/merchant/')
}
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

// 获取保证金
export const getDeposit=(id)=>{
	return http.get(`/deposit/get/`)
}


// 获取保证金记录
export const getDepositList=(id)=>{
	return http.get(`/deposit/records/`)
}



















