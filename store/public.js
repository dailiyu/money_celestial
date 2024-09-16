import { defineStore } from 'pinia';
import {getCateGoryList} from "../service/category"
import { getMerchantList,getStoreList } from '../service/merchant';




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
			const res=await getCateGoryList()
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
			this.getCateGoryListAction(),
			this.getMerchantListAction(),
			this.getStoreListAction()
		}
		
	}
})




