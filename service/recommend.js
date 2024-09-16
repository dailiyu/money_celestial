import  {http} from "./index"


//获取推荐官心思
export  const getRecommendOfficerInfo=async ()=>{
	return http.get('/recommended/officer/get/')
}