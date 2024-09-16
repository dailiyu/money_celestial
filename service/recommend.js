import  {http} from "./index"


//获取推荐官信息
export  const getRecommendOfficerInfo=async ()=>{
	return http.get('/referral/officer/')
}