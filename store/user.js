import { defineStore } from 'pinia';
import { postProfileLogin, getUerAccountMessage } from '../service/uer_profile';
import loginVue from '../pages/login/login.vue';
import { getMerchantInfo } from '../service/merchant';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {},
      getMerchantInfo
    };
  },
  actions: {
    async loginAction(phone_number, password) {
      const results = await postProfileLogin(phone_number, password);
      const { access, refresh } = results;
      // 保存 Token
      uni.setStorageSync('accessToken', access);
      uni.setStorageSync('refreshToken', refresh);

      const res = await getUerAccountMessage();
      const { id } = res.data;

      uni.setStorageSync('userId', id);
    },
    async getUserInfoAction() {
      // 在这里添加用户信息获取的逻辑
    }
  }
});
