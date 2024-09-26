import { defineStore } from 'pinia';
import { postProfileLogin, getUerAccountMessage } from '../service/uer_profile';
import loginVue from '../pages/login/login.vue';

import { getShopInfo } from '../service/shop';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {},
      merchantInfo:{},
	  storeInfo:{}
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
	  console.log('accessToken', access);
	   console.log('登录成功的用户信息',results);
    },
    async getUserInfoAction() {
	  const res = await getUerAccountMessage();
	  uni.setStorageSync('userInfo',res)
		console.log('根据token获取到的用户信息',res);
    },
	async getMerchantInfoAction(){
		const res=await getMerchantInfo()
		this.merchantInfo=res?.data||{}
		 uni.setStorageSync('merchantId', res.data?.id);
	},
	async getStoreInfoAction(){
			const res=await getShopInfo()
			this.storeInfo=res
			console.log(res);
			uni.setStorageSync('storeId', res.id);
	},
	async fetchAllDataAction(){
		this.getUserInfoAction()
		// this.getMerchantInfoAction()
		 // this.getStoreInfoAction()
	}
  }
});
