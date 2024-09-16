import  {http} from "./index"


//获取店铺种类列表
 export const getCateGoryList=async ()=>{
	return http.get('/category/list/')
}






