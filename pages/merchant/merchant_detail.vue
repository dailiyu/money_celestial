<template>
	<view>
		<navBar title="门店详情"></navBar>
		
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#FC5908" circular v-if="swiperList.length">
			<swiper-item v-for="item in swiperList" :key="item.id">
				<image :src="item" mode="widthFix" class="shop_pic"></image>
			</swiper-item>
		</swiper>
		<view class="shop_info" v-if="shopInfo.name">
			<view class="info_item flex">
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
				
			</view>
			<view class="info_item">
				<view class="time_phone_box">
					<view class="time_box flex">
					<image src="https://static.maxcang.com/appstatic/time.png" mode="widthFix" class="time_pic"></image>
					<view class="time_text" v-if="shopInfo.business_time1">
						营业时间：{{shopInfo?.business_time1}}-{{shopInfo?.business_time2  }}
					</view>
					<view class="time_text" v-else>
						营业时间：未提供
					</view>
					
				</view>
				<view class="flex ">
					<image   src="https://static.maxcang.com/appstatic/phone.png" mode="widthFix" class="phone_pic"></image>
					<view class="time_text" @click="dial">
						联系方式：{{shopInfo?.tel||shopInfo.merchant}}
					</view>
				</view>
				</view>
				<view class="address_function">
					<view class="flex address_box" style="margin-bottom: 25rpx;align-items: flex-start;">
					<image src="https://static.maxcang.com/appstatic/locate_orange.png" mode="widthFix" class="lo_pic"></image>
					<view class="address" @click.stop="openLocation(shopInfo)">
						{{shopInfo.address}}
					</view>
				</view>
				<view class="function_box">
					<image  class="img" @click.stop="openLocation(shopInfo)" src="https://static.maxcang.com/appstatic/navigate.png" mode="widthFix" v-if="shopInfo.latitude&&shopInfo.longitude"></image>
					<image src="https://static.maxcang.com/appstatic/copy.png" mode="widthFix" class="copy_pic" @click="copy" v-else></image>
					<image  class="img star" src="https://static.maxcang.com/appstatic/star_grey_outline.png" mode="widthFix" @click="addCollect" v-if="!shopInfo.favorited"></image>
					<image  class="img" src="https://static.maxcang.com/appstatic/star_full.png" mode="widthFix" @click="delCollect" v-else></image>
					
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
import { favoriteShopsAdd, favoriteShopsDelete, browserShopAdd } from '@/service/uer_profile.js'
import { onLoad } from '@dcloudio/uni-app'
import { getMerchantDetail } from '@/service/merchant.js'
// import { getShopImages, getShopInfo } from '../../service/shop';


// const current = ref(0)
// const items = ref(['本店商品', '商家介绍', '评价'])
// const onClickItem = (e)=>{
// 	if (current.value !== e.currentIndex) {
// 		current.value = e.currentIndex
// 	}
// }
const phone = ref('')
const token = uni.getStorageSync('accessToken')
const shopInfo = ref({})
onLoad(async(option)=>{
	phone.value = option.phone
	const res = await getMerchantDetail(phone.value)
	shopInfo.value=res;
	const bannerImages =  shopInfo.value.images.filter(image => image.image_type === "banner").map(image => image.image_url);
	swiperList.value=bannerImages
	browserShopAdd({shop:shopInfo.value.merchant})
})
// onMounted(async()=>{
// 	const pages = getCurrentPages();
	      
// 	      // 获取上一页
// 	//const prevPage = pages[pages.length - 2];
// 	// phone.value = curParam.phone
// 	//console.log(prevPage.$vm)
	
// 	shopInfo.value=uni.$mc.shopInfo;
// 	const bannerImages =  shopInfo.value.images.filter(image => image.image_type === "banner").map(image => image.image_url);
// 	swiperList.value=bannerImages
// 	console.log('店铺详情的轮播图',swiperList.value);
// 	// getInfo()
// 	// getShopBanner()
// 	browserShopAdd({shop:shopInfo.value.merchant})
// })

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
const dial = ()=>{
	uni.makePhoneCall({
		phoneNumber: shopInfo.value.tel
	})
}
const openLocation = (item)=>{
	// #ifdef MP-WEIXIN
	if (!item.latitude || !item.longitude) return
	uni.openLocation({
		latitude: item.latitude,
		longitude: item.longitude
	})
	// #endif
	
	// #ifndef MP-WEIXIN
	uni.showToast({
		icon: 'none',
		title: '请前往小程序进行导航'
	})
	// #endif
}
// #ifdef MP-WEIXIN
import { onShareAppMessage } from '@dcloudio/uni-app'
onShareAppMessage(()=>{
	return {
	  title: shopInfo.value.name,
	  path: '/pages/merchant/merchant_detail',  // 分享路径
	}
})
// #endif

const addCollect = async()=>{
	if (!token) {
		return uni.showToast({
			icon: 'none',
			title: '请先登录!'
		})
	}
	try {
		uni.showLoading({
			mask: true
		})
		const {id} = await favoriteShopsAdd({shop:shopInfo.value.merchant})
		
		shopInfo.value.favorited = id
		uni.hideLoading()
		uni.showToast({
			title: '收藏成功',
			icon: 'none'
		})
	} catch (e) {
		uni.showToast({
			title: e.data.detail,
			icon: 'none'
		})
	}
}
const delCollect = async()=>{
	try {
		uni.showLoading({
			mask: true
		})
		await favoriteShopsDelete(shopInfo.value.favorited)
		
		shopInfo.value.favorited = false
		uni.hideLoading()
		uni.showToast({
			title: '取消收藏',
			icon: 'none'
		})
	} catch (e) {
		uni.showToast({
			title: e.data.detail,
			icon: 'none'
		})
	}
}
const copy = ()=>{
	uni.setClipboardData({
		data: shopInfo.value.address
	})
}
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
		.time_phone_box{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 63rpx;
			margin-top: 38rpx;
			padding-right: 55rpx;
		}
		.address_function{
			display: flex;
			align-items: center;
			height: 50rpx;
			.function_box{
				width:200rpx ;
				height: 100%;
				display: flex;
				justify-content: center;
				// margin-left: 57rpx;
				// align-items: center;
				.img{
					width: 38rpx;
					margin-left: 57rpx;
				}
				.copy_pic {
					width: 30rpx;
					height: 30rpx;
				}
				// .star{
				// 	margin-right: 22rpx;
				// }
			}
		}
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
	
		.lo_pic {
			width: 20rpx;
			margin-right: 10rpx;
		}
		.address_box{
			width: 480rpx;
			word-wrap: break-word;
			padding-right: 50rpx;
			border-right: 1rpx #E3E3E3 solid;
		}
		.address {
			flex: 1;
			font-size: 20rpx;
			line-height: 30rpx;
			text-align: left;
			color: #A7A7A7;
		}
		.time_box {
			.time_pic {
				width: 26rpx;
				margin-right: 10rpx;
			}
		}
		.time_text {
			font-size: 20rpx;
			color: #999999;
		}
		.phone_pic {
			width: 27rpx;
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
