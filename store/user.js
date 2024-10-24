import { defineStore } from 'pinia';
import { postProfileLogin, getUerAccountMessage } from '../service/uer_profile';
import { getShopInfo } from '../service/shop';
import { getVertifyMerchantInfo } from '../service/merchant';
import { getRecommendShopList } from '../service/recommend';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {},
      merchantInfo:{},
	  shopInfo:{},
	  vertifyMerchantInfo:{},
	  recommendShopList:[]
    };
  },
  actions: {
    async loginAction(phone_number, password) {
      const results = await postProfileLogin(phone_number, password);
	 
      const { access, refresh } = results;
      // 保存 Token
      await uni.setStorageSync('accessToken', access);
       await uni.setStorageSync('refreshToken', refresh);
	  await  uni.setStorageSync('userInfo',results)
	  await uni.setStorageSync('phoneNumber',phone_number)
	  console.log('登录传入的手机号',phone_number);
	  const number=  await uni.getStorageSync('phoneNumber')
	  console.log('----',number);
	  await this.getUserInfoAction()
	  console.log('accessToken', access);
	   console.log('登录成功的用户信息',results);
    },
    async getUserInfoAction() {
		const phoneNumber=uni.getStorageSync('phoneNumber')
	  const res = await getUerAccountMessage(phoneNumber);
	  await uni.removeStorageSync('userInfo')
	 await uni.setStorageSync('userInfo',res)
		console.log('根据token获取到的用户信息',res);
    },
	async getMerchantInfoAction(){
		const res=await getMerchantInfo()
		console.log('store中获得的商家信息',res);
	},
	async getStoreInfoAction(){
			const phone=uni.getStorageSync('userInfo').phone_number
			 getShopInfo(phone).then(async(res)=>{
				this.shopInfo=res
				console.log('获取到的店铺信息',res);
				await uni.removeStorageSync('shopInfo')
				await uni.setStorageSync('shopInfo',res)
			}).catch(async(err)=>{
				console.log('获取店铺信息失败',err);
				await uni.removeStorageSync('shopInfo')
				await uni.setStorageSync('shopInfo',{})
			})
			
	},
	async getVertifyMerchantInfoAction(){
		const phoneNumber=uni.getStorageSync('phoneNumber')
		const res=await getVertifyMerchantInfo(phoneNumber)
		console.log('获取到的验证商家码信息',res);
		this.vertifyMerchantInfo=res
	},
	async getRecommendShopListAction(){
	   getRecommendShopList({}).then(async(res)=>{
		  this.recommendShopList=res
		  console.log('推荐官的推荐商家列表',res);
	   }).catch((err)=>{
		   console.log('获取推荐官的推荐商家列表失败',err);
	   })
	 
	},
	async fetchAllDataAction(){
		await this.getUserInfoAction()
		 // this.getMerchantInfoAction()
		  this.getStoreInfoAction()
		  this.getVertifyMerchantInfoAction()
		  this.getRecommendShopListAction()
	}
  }
});
