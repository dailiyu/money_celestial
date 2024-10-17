<template>
	<view>
		<navBar title="积分账号"></navBar>
		<view class="content">
			<view class="list_box">
				<view class="list_item flex_between" @click="toCode">
					<view class="">
						商家码认证
					</view>
					<view class="flex">
						<view class="account" v-if="isVerified">
							{{address?obscureString(address):''}}
						</view>
						<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
					</view>
				</view>
				<view class="list_item flex_between" @click="toBindAccount">
					<view class="">
						绑定账号
					</view>
					<view class="flex">
						<view class="account">
							{{address?obscureString(address):''}}
						</view>
						<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
					</view>
				</view>
				<view class="list_item flex_between" @click="toUnbindAccount">
					<view class="">
						解除绑定
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getPointBindedAccount } from '@/service/point.js'
import { obscureString } from '@/utils';
import { onShow } from '@dcloudio/uni-app'
import { getVertifyMerchantInfo } from '@/service/merchant';


const address = ref('')
const isVerified = ref(false)
onShow(async()=>{
	const {points_account} = await getPointBindedAccount()
	address.value = points_account
	
	const phone = uni.getStorageSync('phoneNumber')
	const {is_verified} = await getVertifyMerchantInfo(phone)
	isVerified.value = is_verified
})     
const toBindAccount = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/bind_account'
	})
}
const toUnbindAccount = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/unbind_account'
	})
}
const toCode = () => {
	uni.navigateTo({
			url: '/pages/merchant/merchant_code_authentication'
	})
}
</script>

<style lang="scss" scoped>
.list_box {
	padding: 0 28rpx;
	background-color: #fff;
	.list_item {
		padding: 46rpx 14rpx;
		font-weight: 500;
		font-size: 27rpx;
		border-bottom: 1px solid #ececec;
		&:last-child {
			border-bottom: none;
		}
		.arrow_pic {
			width: 12rpx;
		}
		.account {
			color: #999999;
			font-size: 21rpx;
			margin-right: 34rpx;
		}
	}
}
</style>
