import { defineStore } from 'pinia';
import { postProfileLogin,getUerAccountMessage } from '../service/uer_profile';
import loginVue from '../pages/login/login.vue';





export const  useUserStore = defineStore('user', {
	state: () => {
		return {
			userInfo:{}
		}
	},
	actions: {
		async loginAction(phone_number,password){
		 const results=	await postProfileLogin(phone_number,password)
			const { access, refresh } = results
			 // 保存 Token
			      uni.setStorageSync('accessToken', access);
			      uni.setStorageSync('refreshToken', refresh);
				  
				  const res=await getUerAccountMessage()
				  const {id}=res.data
		
				  uni.setStorageSync('userId',id)
		},
		async getUserInfoAction(){
			const res=await getUerAccountMessage()
			this.userInfo=res.data
			
		}
	}
})




