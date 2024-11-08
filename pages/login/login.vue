<template>
	<view>
		<navBar title="用户登录" bgc="#1B46CC" :iconShow="false"></navBar>
		<view class="content">
			<image src="@/static/logo.png" mode="widthFix" class="logo"></image>
			<uni-easyinput v-model="moblie" placeholder="请输入手机号" maxlength="11" :inputBorder="false" primaryColor="#1B46CC" type="number">
				<template #left>
					<image src="@/static/phone-grey.png" mode="widthFix" class="m_pic"></image>
				</template>
			</uni-easyinput>
			<uni-easyinput v-model="password" placeholder="请输入密码" :inputBorder="false" type="password" primaryColor="#1B46CC">
				<template #left>
					<image src="@/static/lock-grey.png" mode="widthFix" class="m_pic"></image>
				</template>
			</uni-easyinput>
			<view class="forget" >
				<text @click="forgetPassword">忘记密码</text>
			</view>
			<view class="l_btn flex_center" @click="login">
				立即登录
			</view>
			<view class="r_btn flex_center" @click="toRegister">
				注册新用户
			</view>
			<!-- <view class="wx_btn flex_center">
				<image src="@/static/wechat.png" mode="widthFix" class="wx_logo"></image>
				<view class="">
					微信一键登录
				</view>
			</view> -->
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../store/user';
import { postProfileLogin, getUerAccountMessage } from '@/service/uer_profile.js';
import { onShow } from '@dcloudio/uni-app'; 
const userStore=   useUserStore()
const moblie = ref('')
const password = ref('')
const errorTimes=ref(0)
const version = ref('');


/*  */
onShow(()=>{
	version.value = uni.getSystemInfoSync().appVersionCode
	console.log(version.value);
	
})


const toRegister = ()=>{
	uni.navigateTo({
		url: '/pages/login/register'
	})
}
  
  const login=async()=>{	
	  if (!moblie.value) return uni.showToast({
	  	icon: 'none',
		title: '请输入手机号'
	  })
	  if (!password.value) return uni.showToast({
	  	icon: 'none',
	  	title: '请输入密码'
	  })
	  uni.showLoading({
	  	title: '登录中'
	  })
	  
	  postProfileLogin({phone_number:moblie.value,password:password.value,version:version.value}).then(async(res)=>{
		  console.log('登录成功的用户信息',res);
		  const { access, refresh } = res;
		  // 保存 Token
		  await uni.setStorageSync('accessToken', access);
		   await uni.setStorageSync('refreshToken', refresh);
		    console.log('accessToken', access);
		  await uni.setStorageSync('phoneNumber',moblie.value)
		  console.log('登录传入的手机号',moblie.value);
		  await userStore.getUserInfoAction()
		   
		  uni.hideLoading()
		 uni.showToast({
		 	title:'登录成功',
			icon:'success',
			duration:1000
		 })
		 errorTimes.value=0
		 setTimeout(()=>{
			uni.redirectTo({
				url: '/pages/index/index'
			})
		 },1000)
	  }).catch((err)=>{
		uni.hideLoading()
		errorTimes.value=errorTimes.value+1
		if(errorTimes.value>3){
			return uni.showToast({
			icon: 'none',
			title:`您已多次输入错误的账号或密码，建议找回密码`
		})
		}
		uni.showToast({
			icon: 'none',
			title:`登录失败,${err?.data?.error}`
		})
		 console.log('登录错误信息',err);
		 
	  })
	  
  }

const forgetPassword=()=>{
	uni.navigateTo({
		url:'/pages/myAccount/forget_password'
	})
}

</script>

<style lang="scss" scoped>
.content {
	padding: 156rpx 76rpx 30px;
}
.logo {
	width: 294rpx;
	display: block;
	margin: 0 auto 120rpx;
}
.m_pic {
	width: 28rpx;
}
:deep(.uni-easyinput__content) {
	padding-left: 40rpx;
	border-radius: 100px;
	margin-top: 70rpx;
}
:deep(.uni-easyinput__content-input) {
	font-size: 24rpx;
	color: #333;
}
.forget {
	font-size: 24rpx;
	color: #1B46CC;
	padding: 50rpx 0 80rpx;
	text-align: center;
	text-decoration: underline;
}
.l_btn {
	width: 100%;
	height: 94rpx;
	background-color: #1B46CC;
	border-radius: 17rpx;
	font-size: 30rpx;
	color: #FFFFFF;
	margin-bottom: 50rpx;
}
.r_btn {
	width: 100%;
	height: 94rpx;
	border-radius: 17rpx;
	font-size: 30rpx;
	color: #1B46CC;
	border: 1px solid #1B46CC;
	margin-bottom: 50rpx;
}
.wx_btn {
	width: 100%;
	height: 94rpx;
	border-radius: 17rpx;
	font-size: 30rpx;
	background-color: #44c25c;
	color: #fff;
	.wx_logo {
		width: 50rpx;
		display: block;
		margin-right: 10rpx;
	}
}
</style>
