import { defineStore } from 'pinia';
import { postProfileLogin, getUerAccountMessage } from '../service/uer_profile';
import loginVue from '../pages/login/login.vue';

import { getShopInfo } from '../service/shop';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {},
      merchantInfo:{},
	  shopInfo:{}
    };
  },
  actions: {
    async loginAction(phone_number, password) {
      const results = await postProfileLogin(phone_number, password);
	 
      const { access, refresh } = results;
      // 保存 Token
      uni.setStorageSync('accessToken', access);
      uni.setStorageSync('refreshToken', refresh);
	  uni.setStorageSync('userInfo',results)
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
	  uni.setStorageSync('userInfo',res)
		console.log('根据token获取到的用户信息',res);
    },
	async getMerchantInfoAction(){
		const res=await getMerchantInfo()
		console.log('store中获得的店铺信息',res);
		
	},
	async getStoreInfoAction(){
			const phone=uni.getStorageSync('userInfo').phone_number
			const res=await getShopInfo(phone)
			this.shopInfo=res
			console.log('获取到的店铺信息',res);
			uni.setStorageSync('shopInfo',res)
	},
	async fetchAllDataAction(){
		this.getUserInfoAction()
		 // this.getMerchantInfoAction()
		  this.getStoreInfoAction()
	}
  }
});
