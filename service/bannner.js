import { func } from "prop-types"
import  {http} from "./index"



//获取省份列表
export const getProvincesList=()=>{
	return http.get('/divisions/provinces/')
}

//获取城市列表
export const getCitiesList=()=>{
	return http.get('/divisions/provinces/')
}
//获取区列表
export const getAreasList=()=>{
	return http.get('/divisions/provinces/')
}
//获取街道列表
export const getStreetsList=()=>{
	return http.get('/divisions/provinces/')
}


