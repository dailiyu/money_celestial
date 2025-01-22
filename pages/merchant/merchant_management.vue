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
					<view class="" >
						资料编辑
					</view>
					<view class="flex">
						<view class="approval_state" v-if="shopInfo.state>0">
							审核通过
						</view>
						<view class="approval_state" v-else-if="shopInfo.state<0">
							审核驳回
						</view>
						<view class="approval_state" v-else-if="shopInfo.state==0">
							审核中
						</view>
						<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
					</view>
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
				<view class="list_item flex_between" @click="toMerchantDetail">
					<view class="">门店详情预览</view>
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
		<uni-popup ref="contactPop" borderRadius="30rpx" background-color="#fff">
			<view class="step_pop">
				<view class="title">
					提示
				</view>
				<view class="desc">
					您的店铺定位暂未完善，请到小程序商家后台->资料编辑->具体位置，使用定位功能完善位置信息。
				</view>
				<view class="btn_plain" @click="closeContactPop">
					好的
				</view>
			</view>
		</uni-popup>
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
	const contactPop = ref()
	const shopInfo = ref({})
	onMounted(()=>{
		shopInfo.value = uni.getStorageSync('shopInfo')
	})

onShow(async()=>{
      await  userStore.getStoreInfoAction()
		const phone=await uni.getStorageSync('phoneNumber')
		const {is_verified} = await getVertifyMerchantInfo(phone)
		isVerified.value = is_verified
		const pages = getCurrentPages();
		
		const prePageIsHome=uni.getStorageSync("prePageIsHome")
		console.log(prePageIsHome);
		
		if(userStore.shopInfo.latitude==0&&prePageIsHome){
			contactPop.value.open()
		}
})

const closeContactPop = ()=>{
	uni.setStorageSync('prePageIsHome',false)
	contactPop.value.close()
}

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
	

	const toMerchantDetail=async()=>{
		// await uni.setStorageSync('selectedShopInfo',userStore.shopInfo)
		const phone=await uni.getStorageSync('phoneNumber')
		  uni.navigateTo({
		    url: '/pages/merchant/merchant_detail?phone='+phone
		  });
	}
	
	const toMerchantCodeVerify=()=>{
		uni.navigateTo({
			url: '/pages/merchant/merchant_code_authentication'
		})
	}
	
	const  toUnbindMerchantCode=()=>{
		// uni.navigateTo({
		// 	url: '/pages/myAccount/unbind_merchant_code'
		// })
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
			
			.approval_state {
				font-size: 22rpx;
				color: #666;
				margin-right: 10rpx;
				font-weight: normal;
			}

			.arrow_pic {
				width: 12rpx;
			}
		}
	}
	.step_pop {
			width: 566rpx;
			padding: 64rpx;
			text-align: center;
			.title {
				font-size: 36rpx;
				color: #FC5908;
				line-height: 28rpx;
				font-weight: bold;
				margin-bottom: 50rpx;
			}
			.top_content {
				font-size: 42rpx;
				// line-height: 28rpx;
				margin-bottom: 58rpx;
				.copy_pic {
					width: 27rpx;
					margin-left: 10rpx;
				}
			}
			.desc {
				font-size: 28rpx;
				margin-bottom: 64rpx;
				text-align: left;
			}
			.btn_plain {
				width: 340rpx;
			}
		}
</style>