import  {http} from "./index"


//获取代理商家列表
export  const getAgentShopList=async (data)=>{
	return http.get(`/api/agent/shops/?ordering=${data.time}created_at&categories=${data.categoryId}`, {page: data.page})
}

