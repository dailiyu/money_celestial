<template>
	<view>
		<navBar title="门店详情"></navBar>
		
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#FC5908" circular v-if="swiperList.length">
			<swiper-item v-for="item in swiperList" :key="item.id">
				<image :src="item" mode="widthFix" class="shop_pic"></image>
			</swiper-item>
		</swiper>
		<view class="shop_info" v-if="shopInfo.name">
			<view class="info_item flex" @click="to_merchant_mangment">
				<image :src="shopInfo.avatar" mode="aspectFill" class="shop_head"></image>
				<view class="" style="flex: 1;">
					<view class="flex">
						<view class="shop_name">
							{{shopInfo.name}}
						</view>
						<view class="level">
							Lv.5
						</view>
					</view>
					<view class="rate_box flex">
						<view class="flex">
							<image src="https://static.maxcang.com/appstatic/star.png" mode="widthFix" class="star_pic" v-for="(item, index) in 5" :key="index"></image>
						</view>
						<view class="point">
							5
						</view>
					</view>
					<view class="note">
						{{shopInfo.description}}
					</view>
				</view>
				<!-- <image src="https://static.maxcang.com/appstatic/star-plain.png" mode="widthFix" class="star_plain"></image> -->
			</view>
			<view class="info_item">
				<view class="flex" style="margin-bottom: 25rpx;">
					<image src="https://static.maxcang.com/appstatic/locate_orange.png" mode="widthFix" class="lo_pic"></image>
					<view class="address">
						{{shopInfo.address}}
					</view>
				</view>
				<!-- <view class="time_box flex">
					<image src="https://static.maxcang.com/appstatic/time.png" mode="widthFix" class="time_pic"></image>
					<view class="time_text">
						营业时间：09:00-19:00
					</view>
				</view> -->
				<view class="flex">
					<image src="https://static.maxcang.com/appstatic/phone.png" mode="widthFix" class="phone_pic"></image>
					<view class="time_text">
						联系方式：{{shopInfo.merchant}}
					</view>
				</view>
			</view>
		</view>
		<!-- <uni-segmented-control :current="current" :values="items" style-type="text" active-color="#FC5908" @clickItem="onClickItem" />
		<goodsList></goodsList> -->
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// import { getShopImages, getShopInfo } from '../../service/shop';


// const current = ref(0)
// const items = ref(['本店商品', '商家介绍', '评价'])
// const onClickItem = (e)=>{
// 	if (current.value !== e.currentIndex) {
// 		current.value = e.currentIndex
// 	}
// }
const phone = ref('')

const shopInfo = ref({})
onMounted(async()=>{
	// let routes = getCurrentPages()
	// let curParam = routes[routes.length - 1].options;
	// phone.value = curParam.phone
	shopInfo.value=await uni.getStorageSync('selectedShopInfo')
	const bannerImages =  shopInfo.value.images.filter(image => image.image_type === "banner").map(image => image.image_url);
	swiperList.value=bannerImages
	console.log('店铺详情的轮播图',swiperList.value);
	// getInfo()
	// getShopBanner()
})

const to_merchant_mangment=async()=>{
	const phoneNumber=await  uni.getStorageSync('phoneNumber')
	console.log();
	if(phoneNumber==shopInfo.value.merchant){
		uni.navigateTo({
		    url: '/pages/merchant/merchant_management'
		});
	}
	
}


// const getInfo = async()=>{
// 	uni.showLoading({
// 		title: '加载中'
// 	})
// 	const res = await getShopInfo(phone.value)
// 	uni.hideLoading()
// 	shopInfo.value = res
// }
 const swiperList = ref([])
// const getShopBanner = async()=>{
// 	const {results} = await getShopImages({shop: phone.value, image_type:'banner'})
// 	swiperList.value = results
// }
</script>

<style lang="scss" scoped>
.swiper {
	height: 418rpx;
}
.shop_pic {
	width: 100%;
	height: 418rpx;
	// background-color: #ccc;
	display: block;
}
.shop_info {
	padding: 24rpx 50rpx 30rpx 66rpx;
	background-color: #fff;
	margin-bottom: 40rpx;
	.info_item {
		&:last-child {
			margin-top: 20rpx;
		}
		.shop_head {
			width: 112rpx;
			height: 112rpx;
			// background-color: #ccc;
			margin-right: 30rpx;
			border-radius: 50%;
		}
		.shop_name {
			font-size: 26rpx;
			font-weight: bold;
		}
		.level {
			padding: 6rpx 14rpx;
			background-color: #fc5908;
			margin-left: 12rpx;
			color: #fff;
			border-radius: 100px;
			font-weight: bold;
			font-size: 20rpx;
		}
		.rate_box {
			margin: 14rpx 0;
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
		.note {
			font-size: 22rpx;
			color: #999999;
		}
		.star_plain {
			width: 24rpx;
		}
		.lo_pic {
			width: 20rpx;
			margin-right: 10rpx;
		}
		.address {
			font-size: 20rpx;
			color: #1B46CC;
		}
		.time_box {
			margin-bottom: 25rpx;
			.time_pic {
				width: 20rpx;
				margin-right: 10rpx;
			}
		}
		.time_text {
			font-size: 20rpx;
			color: #999999;
		}
		.phone_pic {
			width: 20rpx;
			margin-right: 10rpx;
		}
	}
}
:deep(.segmented-control) {
	background-color: #fff;
	font-size: 27rpx;
}
:deep(.segmented-control__text) {
	font-size: 27rpx;
}
</style>
