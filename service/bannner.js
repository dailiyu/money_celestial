import  {http} from "./index"


//获取轮播图列表
export const getBannerList=async ()=>{
	return http.get('/banners/')
}
/*
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "title": "banner1",
            "image_url": "https://maxfiles.q6z4kzhr.uk/RyVHAz2g6drXd27116e0e218a5e714c7aebf21faee1c.jpg",
            "link": null,
            "is_visible": true,
            "created_at": "2024-09-13T07:35:08.831021Z",
            "updated_at": "2024-09-13T07:35:08.831038Z"
        }
    ]
}
*/





