import { defineStore } from 'pinia';
import { getProvincesList,getStreetsList,getAreasList,getCitiesList } from '../service/divisions'




export const  usePublicStore = defineStore('public', {
	state: () => {
		return {
			provinces_data:{},
			cities_data:{},
			areas_data:{},
			streets_data:{}
		}
	},
	actions: {
		async fetchAllPositionData(){
		this.provinces_data=await getProvincesList()
		this.cities_data=await getCitiesList()
		this.areas_data=await getAreasList()
		this.streets_data=await getStreetsList()
			
		},
		async fetchAllData(){
			this.fetchAllPositionData()
		}
		
	}
})




