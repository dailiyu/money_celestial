import { defineStore } from 'pinia';

import { getMerchantList,getStoreList } from '../service/merchant';
import { getShopCategories } from '../service/shop';




export const  usePublicStore = defineStore('public', {
	state: () => {
		return {
			cateGoryList:[],
			merchantList:[],
			storeList:[]
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
			const res=await getStoreList()
			this.storeList=res?.results||[]
		},
		
		async fetchAllDataAction(){
			this.getCateGoryListAction()
			
		}
		
	}
})




