import { defineStore } from 'pinia';


import { getShopCategories, getShopList } from '../service/shop';
import { sortShopsByDistance } from '../utils/distanceSorting';




export const  usePublicStore = defineStore('public', {
	state: () => {
		return {
			cateGoryList:[],
			merchantList:[],
			storeList:[],
			ascShopList:[],
			descShopList:[]
		}
	},
	actions: {
		async getCateGoryListAction(){
			const res=await getShopCategories()
			console.log(res.results);
			this.cateGoryList=res.results
		},
		async getMerchantListAction(){
			const res= await getMerchantList()
			this.merchantList=res?.results||[]
			
		},
		async getStoreListAction(){
			const res=await getShopList()
			const {location}=await uni.getStorageSync('address_info')
			this.storeList=res?.results||[]
			this.ascShopList=await sortShopsByDistance({latitude:location.lat,longitude:location.lng},this.storeList,'asc')
			this.descShopList= await sortShopsByDistance({latitude:location.lat,longitude:location.lng},this.storeList,'desc')
		},
		
		async fetchAllDataAction(){
			this.getCateGoryListAction()
			this.getStoreListAction()
		}
		
	}
})




