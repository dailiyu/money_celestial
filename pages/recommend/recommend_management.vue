<template>
	<view>
		<navBar title="推荐官后台" ></navBar>
		<view class="total_data">
			<image src="https://static.maxcang.com/appstatic/recommend/verified.png"  @click="toUnbindMerchantCode"   mode="widthFix" class="verify_pic" v-if="isVerified"></image>
			<image src="https://static.maxcang.com/appstatic/recommend/verified-not.png"  @click="toMerchantCodeVerify" mode="widthFix" class="verify_pic" v-else></image>
			<image src="https://static.maxcang.com/appstatic/recommend/code.png" mode="widthFix" class="code_pic" @click="toqrDetail"></image>
			<image src="https://static.maxcang.com/appstatic/recommend/recommend_bg.png" mode="widthFix" class="agent_pic"></image>
			<view class="data_item">
				<image src="https://static.maxcang.com/appstatic/recommend/lv1.png" mode="widthFix" class="lv_pic"></image>
				<view class="lv_name">
					荣耀推荐官
				</view>
				<view class="name">
					{{info?.name}}
				</view>
				<view class="total_item flex_between">
					<view class="">
						<view class="total_text">
							已推荐店铺数
						</view>
						<view class="total_num">
							{{recommendedShopAmount}}
						</view>
					</view>
					<view class="">
						<view class="total_text">
							已获得积分
						</view>
						<view class="total_num">
							{{points}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content">
			
			<view class="list_box">
				<view class="list_item flex_between" @click="toMerchantList">
					<view class="">
						推荐店铺列表
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<!-- <view class="list_item flex_between" @click="toMerchantCode">
					<view class="">
						商家码认证
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
				<!-- <view class="list_item flex_between" @click="toMerchantCode" v-if="!userStore.vertifyMerchantInfo.is_verified">
					<view class="">
						商家码认证
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
				<!-- <view class="list_item flex_between" @click="toSecurityDeposit">
					<view class="">
						保证金
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
			</view>
		</view>
		
		<canvas style="width: 200px; height: 200px;" canvas-id="myQrcode"></canvas>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getOfficerQRCode, getRecommendOfficerInfo, getRecommendShopList } from '@/service/recommend.js'
import { getGreenPoints } from '@/service/point';
import { getVertifyMerchantInfo } from '@/service/merchant';


const info = ref({})
const user = ref({})
const isVerified = ref(false)
onMounted(async()=>{
	getPoint()
	getShopAmount()
	user.value = uni.getStorageSync('userInfo')
	info.value = await getRecommendOfficerInfo(user.value.phone_number)
	// getMPQRCode()
	const phone = uni.getStorageSync('phoneNumber')
	const {is_verified} = await getVertifyMerchantInfo(phone)
	isVerified.value = is_verified
})

const recommendedShopAmount = ref(0)
const getShopAmount = async()=>{
	const res = await getRecommendShopList()
	recommendedShopAmount.value = res.length
}
const points = ref(0)
const getPoint = async()=>{
	const {total} = await getGreenPoints()
	points.value = total
}
const toMerchantList = ()=>{
	uni.navigateTo({
		url: '/pages/recommend/merchant_list'
	})
}

const toMerchantCodeVerify=()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_code_authentication'
	})
}

const  toUnbindMerchantCode=()=>{
	uni.navigateTo({
		url: '/pages/myAccount/unbind_merchant_code'
	})
}


	const toMerchantCode=()=>{
		if(isVerified.value){
			uni.navigateTo({
					url: '/pages/myAccount/unbind_merchant_code'
			})
		}else{
			uni.navigateTo({
					url: '/pages/merchant/merchant_code_authentication'
			})
		}
	}
	
const toSecurityDeposit = ()=>{
	// uni.navigateTo({
	// 	url: '/pages/recommend/security_deposit'
	// })
	uni.navigateTo({
		url: '/pages/merchant/security_deposit'
	})
}

const toqrDetail=()=>{
	uni.navigateTo({
		url:'/pages/recommend/qrcodeDetail'
	})
}





</script>

<style lang="scss" scoped>
.total_data {
	position: relative;
	margin-top: 88rpx;
	.verify_pic {
		position: absolute;
		top: 16rpx;
		left: 30rpx;
		z-index: 10;
		width: 206rpx;
	}
	.code_pic {
		position: absolute;
		top: 86rpx;
		right: 72rpx;
		width: 34rpx;
		z-index: 10;
		// margin-left: 32rpx;
	}
	.agent_pic {
		width: 100%;
		display: block;
		// margin-bottom: 20rpx;
	}
	.data_item {
		position: absolute;
		top: -46rpx;
		left: 0;
		right: 0;
		padding: 0 72rpx;
		.lv_pic {
			width: 212rpx;
			display: block;
			margin: 0 auto;
		}
		.lv_name {
			font-size: 27rpx;
			font-weight: bold;
			// text-shadow: 3px 100px 1px #D00404;
			background-image: linear-gradient(to bottom, #FFFACD, #F0BF6A);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			text-align: center;
			margin-bottom: 20rpx;
		}
		.name {
			font-size: 42rpx;
			color: #FFFFFF;
			text-align: center;
		}
		
		.total_item {
			padding-top: 40rpx;
			margin-top: 40rpx;
			border-top: 1px solid #970606;
			text-align: center;
			.total_text {
				font-size: 24rpx;
				color: #FFFFFF;
				margin-bottom: 20rpx;
			}
			.total_num {
				font-size: 30rpx;
				color: #FFFFFF;
				font-weight: bold;
			}
		}
		
	}
}
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
	}
}
</style>
