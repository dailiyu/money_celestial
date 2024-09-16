import  {http} from "./index"


const getCityAgentList=async ()=>{
	return http.get('/region/agent/city-agents/')
}



const getCityAgentById=async (id)=>{
	return http.get(`/region/agent/city-agents/${id}/`)
}


const updataCityAgent=async ()=>{
	return http.put(`/region/agent/city-agents/${id}/`)
}


//获取市代
export  const getCityAgent=()=>{
	return http.get('/region/agent/city/get/')
}

//获取省代
export  const getProvinceAgent=()=>{
	return http.get('/region/agent/province/get/')
}







