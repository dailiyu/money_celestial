import  {http} from "./index"



//获取省份列表
export const getProvincesList=()=>{
	return http.get('/divisions/provinces/')
}
/*
{
    "count": 31,
    "next": "http://max.q6z4kzhr.uk/api/divisions/provinces/?page=2",
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "北京市",
            "code": "11"
        },
        {
            "id": 2,
            "name": "天津市",
            "code": "12"
        }
		}
		}

*/




//根据城市名获取城市详情
export const getCitiesDetail = async (name) => {
    return http.get(`/divisions/cities/${name}/`)
}	
//获取区列表
export const getAreasList=()=>{
	return http.get('/divisions/provinces/')
}
//获取街道列表
export const getStreetsList=()=>{
	return http.get('/divisions/provinces/')
}

//获取城市兑换专区开放状态
export const getCityExchangeCenterOpen = () => {
	return http.get('/divisions/city_exchange_center_open/')
}
