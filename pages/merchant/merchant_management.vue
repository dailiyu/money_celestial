<template>
	<view>
		<navBar title="商家后台"></navBar>
		<view class="content">
			<view class="merchant_info flex">
				<image :src="userStore.shopInfo.avatar" mode="aspectFill" class="head"></image>
				<image src="https://static.maxcang.com/appstatic/recommend/verified.png"  @click="toUnbindMerchantCode"   mode="widthFix" class="verify_pic" v-if="isVerified"></image>
				<image src="https://static.maxcang.com/appstatic/recommend/verified-not.png"  @click="toMerchantCodeVerify" mode="widthFix" class="verify_pic" v-else></image>
				<view class="">
					<view class="name flex">
						<view class="">
							{{userStore.shopInfo.name}}
						</view>
						<!-- <view class="level">
							Lv.5
						</view> -->
					</view>
					<view class="flex">
						<!-- <uni-rate :readonly="true" :value="2" active-color="#fc5908" size="12" /> -->
						<view class="flex">
							<!-- <image src="https://static.maxcang.com/appstatic/star.png" mode="widthFix" class="star_pic" v-for="(item, index) in 5" :key="index"></image> -->
						</view>
						<!-- <view class="point">
							5
						</view> -->
					</view>
				</view>
			</view>
			<view class="list_box">
				<view class="list_item flex_between" @click="toEdit">
					<view class="">
						资料编辑
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toPoinGift">
					<view class="">
						积分赠送
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<!-- <view class="list_item flex_between" @click="toCode" v-if="!userStore.vertifyMerchantInfo.is_verified">
					<view class="">
						商家码认证
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
				<view class="list_item flex_between" @click="toSecurityDeposit">
					<view class="">
						保证金
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toMerchantCode">
					<view class="">商家码认证</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<!-- <view class="list_item flex_between" @click="toUploadGoods">
					<view class="">
						上传产品
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
				<!-- <view class="list_item flex_between">
					<view class="">
						编辑产品
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	import {
		useUserStore
	} from '../../store/user';
import { getVertifyMerchantInfo } from '@/service/merchant';
import { onShow } from '@dcloudio/uni-app'
	const userStore = useUserStore()
	const isVerified = ref(false)
	

onShow(async()=>{
      await  userStore.getStoreInfoAction()
		const phone=await uni.getStorageSync('phoneNumber')
		const {is_verified} = await getVertifyMerchantInfo(phone)
		isVerified.value = is_verified
})

	const toEdit = () => {
		uni.navigateTo({
			url: '/pages/merchant/merchant_edit_info'
		})
	}
	const toPoinGift = () => {
		uni.navigateTo({
			url: '/pages/merchant/point_gift'
		})
	}
	const toCode = () => {
		uni.navigateTo({
			url: '/pages/merchant/merchant_code_authentication'
		})
	}
	const toSecurityDeposit = () => {
		uni.navigateTo({
			url: '/pages/merchant/security_deposit'
		})
	}
	const toUploadGoods = () => {
		uni.navigateTo({
			url: '/pages/merchant/upload_goods'
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
	
</script>

<style lang="scss" scoped>
	.merchant_info {
		padding: 50rpx 42rpx 34rpx;
		position: relative;
			.verify_pic {
				position: absolute;
				top: 16rpx;
				right: 40rpx;
				z-index: 10;
				width: 206rpx;
			}
		.head {
			width: 110rpx;
			height: 110rpx;
			border-radius: 50%;
			// background-color: #ccc;
			margin-right: 28rpx;
		}

		.name {
			font-size: 26rpx;
			margin-bottom: 22rpx;
			font-weight: 500;

			.level {
				padding: 6rpx 14rpx;
				background-color: #fc5908;
				margin-left: 12rpx;
				color: #fff;
				border-radius: 100px;
				font-weight: bold;
			}
		}

		.star_pic {
			width: 22rpx;
			display: block;
		}

		.point {
			font-size: 16rpx;
			color: #fc5908;
			margin-left: 20rpx;
			font-weight: 500;
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