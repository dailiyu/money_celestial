import { defineStore } from 'pinia';
import { postProfileLogin, getUerAccountMessage } from '../service/uer_profile';
import loginVue from '../pages/login/login.vue';
import { getMerchantInfo } from '../service/merchant';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {},
      merchantInfo:{}
    };
  },
  actions: {
    async loginAction(phone_number, password) {
      const results = await postProfileLogin(phone_number, password);
      const { access, refresh } = results;
      // 保存 Token
      uni.setStorageSync('accessToken', access);
      uni.setStorageSync('refreshToken', refresh);

     
    },
    async getUserInfoAction() {
     
	  const res = await getUerAccountMessage();
	  const { id } = res?.data;
	  this.userInfo= res?.data||{};
	  uni.setStorageSync('userId', id);
    },
	async getMerchantInfoAction(){
		const res=await getMerchantInfo()
		this.merchantInfo=res?.data||{}
		 uni.setStorageSync('merchantId', res.data.id);
	}
  }
});
