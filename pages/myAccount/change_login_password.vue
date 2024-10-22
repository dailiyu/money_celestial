<template>
	<view>
		<navBar title="修改登录密码" ></navBar>
		<view class="content">
			<view class="title">
				手机号：{{ maskPhoneNumber(phoneNumber) }}
			</view>
			
			<uni-easyinput v-model="code" placeholder="请输入验证码" :inputBorder="false" type="number" primaryColor="#1B46CC">
				<template #right>
					<view class="send_btn flex_center">
						发送验证码
					</view>
				</template>
			</uni-easyinput>
			<view class="title">
				密码：
			</view>
			<uni-easyinput v-model="password" placeholder="密码长度最低8位" :inputBorder="false" primaryColor="#1B46CC"
				type="password" />
			<view class="title">
				确认密码：
			</view>
			<uni-easyinput v-model="ensure_password" placeholder="再次输入密码" :inputBorder="false" primaryColor="#1B46CC"
				type="password" />

			<view class="btn flex_center" @click="enSure">
				确定
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
import { useUserStore } from '../../store/user';
	
	import { onShow } from '@dcloudio/uni-app'
	 const userStore= useUserStore()
	const phoneNumber=ref()
	const password=ref()
	const ensure_password=ref()
	const code=ref()
	const enSure=()=>{
		
	}
	
   onShow(async()=>{
     phoneNumber.value=uni.getStorageSync('phoneNumber')
   })
	
const  maskPhoneNumber=(phoneNumber)=>{
    if (phoneNumber.length === 11) {
        return phoneNumber.slice(0, 3) + '****' + phoneNumber.slice(-4);
    }
    return 'Invalid phone number';
}
</script>

<style lang="scss" scoped>
	.content {
		padding: 40rpx 76rpx;
	}

	:deep(.uni-easyinput__content) {
		padding-right: 20rpx;
		border-radius: 100px;
		margin-top: 28rpx;
	}

	:deep(.uni-easyinput__content-input) {
		font-size: 24rpx;
		color: #333;
	}

	.title {
		font-size: 24rpx;
		margin-top: 58rpx;
		font-weight: bold;
	}

	.send_btn {
		padding: 18rpx 38rpx;
		color:  #FC5908;
		border: 1px solid  #FC5908;
		border-radius: 100px;
		font-size: 21rpx;
	}

	.btn {
		width: 100%;
		height: 95rpx;
		background-color: #FC5908;
		border-radius: 17rpx;
		color: #fff;
		margin-top: 172rpx;
		font-size: 30rpx;
	}
</style>