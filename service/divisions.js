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
