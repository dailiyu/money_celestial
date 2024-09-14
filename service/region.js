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








