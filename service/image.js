import  {http} from "./index"




export const uploadImg=(store,name,description)=>{
	return http.post('/image/upload/',{
		store,
		name,
		description
	})
}


