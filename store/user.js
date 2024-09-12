import { defineStore } from 'pinia';
import { postProfileLogin } from '../service/uer_profile';
import loginVue from '../pages/login/login.vue';





export const  useUserStore = defineStore('user', {
	state: () => {
		return {
			
		}
	},
	actions: {
		async loginAction(phone_number,password){
		 const results=	await postProfileLogin(phone_number,password)
			const { access, refresh } = results
			 // 保存 Token
			      uni.setStorageSync('accessToken', access);
			      uni.setStorageSync('refreshToken', refresh);
		}
		
	}
})




