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
			<view class="forget">
				忘记密码
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
 const userStore=   useUserStore()
const moblie = ref('')
const password = ref('')

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
	  userStore.loginAction(moblie.value,password.value).then((res)=>{
		  console.log('登录成功的用户信息',res);
		  uni.hideLoading()
		 uni.showToast({
		 	title:'登录成功',
			icon:'success',
			duration:1000
		 })
		 setTimeout(()=>{
			uni.navigateTo({
				url: '/pages/index/index'
			})
		 },1000)
	  }).catch((err)=>{
		uni.hideLoading()
		if(err?.data?.error){
			uni.showToast({
				duration:2000,
						icon:'error',
						title:"登录失败"
			})
		}
		 
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
