<template>
	<view class="page">
		<navBarForIndex :iconShow="false" title="满仓"></navBarForIndex>
	<!-- 	<view class="search_bar flex_between">
			<image src="@/static/locate.png" mode="widthFix" class="locate_img"></image>
			<view class="location">
				{{city?city:'定位中'}}
			</view>
			<uni-search-bar v-model="keyword" placeholder="请输入你搜索的内容" :radius="100" cancel-text="cancel" cancelButton="none" clearButton="always">
				<template v-slot:clearIcon>
					<view class="search_btn flex_center" @click.stop="search" >搜索</view>
				</template>
			</uni-search-bar>
		</view> -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#a4b8ab" indicator-active-color="#fc5908" :circular="true" class="swiper">
			<swiper-item v-for="item in bannerList" :key="item.id">
				<image :src="item.image_url" mode="widthFix" class="swipe_img"></image>
			</swiper-item>
		</swiper>
		<view class="function_list flex_between">
			<view class="function_item" @click="toMerchant">
				<view class="img_box flex_center">
					<image src="@/static/home/cart.png" mode="widthFix" class="img_item"></image>
				</view>
				<view class="" >
					商家
				</view>
			</view>
			<view class="function_item" @click="toAgent">
				<view class="img_box flex_center">
					<image src="@/static/home/bag.png" mode="widthFix" class="img_item" style="width: 70rpx;"></image>
				</view>
				<view class="">
					代理
				</view>
			</view>
			<view class="function_item" @click="toRecommend">
				<view class="img_box flex_center">
					<image src="@/static/home/star.png" mode="widthFix" class="img_item" style="width: 56rpx;"></image>
				</view>
				<view class="">
					推荐官
				</view>
			</view>
			<view class="function_item" @click="toMyAccount">
				<view class="img_box flex_center">
					<image src="@/static/home/profile.png" mode="widthFix" class="img_item" style="width: 58rpx;"></image>
				</view>
				<view class="">
					我的账户
				</view>
			</view>
		</view>
		<view class="content">
			<view class="cate_list flex_between" v-if="categoryList.length">
				<view class="cate_item" v-for="item in categoryList" :key="item.id" @click="toAllMerchant(item.id)">
					<image :src="item.icon" mode="widthFix" class="cate_img"></image>
					<view class="">
						{{item.name}}
					</view>
				</view>
				<view class="cate_item" @click="toAllMerchant(0)">
					<image src="@/static/home/all.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						全部类目
					</view>
				</view>
			</view>
			<view class="merchant_box" v-if="userInfo.is_shop&&shopLists.merchant">
				<view class="merchant_top flex_between">
					<view class="flex_between">
						<text class="nearby">附近商家</text>
						<view class="hit">
							热门榜
						</view>
					</view>
					<!-- <view class="settle" @click="toSettle" v-if="!(userStore.storeInfo && Object.keys(userStore.storeInfo).length > 0)" >
						我要入驻
					</view> -->
				</view>
				<view class="shop_list">
					<view class="shop_item flex_between" @click="toDetail(shopLists.merchant)">
						<image :src="shopLists.avatar" mode="aspectFill" class="shop_img"></image>
						<view class="shop_info">
							<view class="shop_name">
								{{shopLists.name}}
							</view>
							<view class="shop_address flex">
								<image src="@/static/locate_orange.png" mode="widthFix" class="address_img"></image>
								<view class="" style="flex: 1;">
									{{shopLists.address}}
								</view>
							</view>
						</view>
						<!-- <view class="distance">
							{{shopLists.ascShopList[0]?.distance/1000}}km
						</view> -->
					</view>
					<view class="more" @click="toAllMerchant(0)">
						点击查看更多
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="headline flex_between">
			<view class="head_title">
				头条
			</view>
			<view class="head_hit">
				热门
			</view>
			<view class="news">
				新闻内容
			</view>
		</view> -->
		<!-- <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#a4b8ab" indicator-active-color="#fc5908" :circular="true" class="swiper" style="margin-bottom: 30rpx;">
			<swiper-item>
				<image src="" mode="widthFix" class="swipe_img"></image>
			</swiper-item>
		</swiper> -->
		<view class="content">
			<image src="@/static/home/shop.jpg" mode="widthFix" class="shop_pic"></image>
			<image src="@/static/home/benefit.jpg" mode="widthFix" class="shop_pic"></image>
			<image src="@/static/home/earn.jpg" mode="widthFix" class="shop_pic"></image>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {usePublicStore} from "@/store/public.js"
import { useUserStore } from '../../store/user';
import { getShopCategories, getShopInfo, getShopList } from '@/service/shop';
import { getBannerList } from '@/service/bannner.js'
import { getRecommendOfficerInfo } from '../../service/recommend';
import { getUerAccountMessage } from '../../service/uer_profile';


// var QQMapWX = require('../../static/qqmap/qqmap-wx-jssdk.min.js');


const keyword = ref('')
const publicStore=  usePublicStore()
const userStore = useUserStore()
const city = ref('')
const userInfo = uni.getStorageSync('userInfo')
onMounted(async()=>{
	// const accessToken = uni.getStorageSync('accessToken')
	// console.log(accessToken);
	// if (accessToken) {
		await publicStore.fetchAllDataAction(),
		await userStore.fetchAllDataAction()
	// }
	

	getCategory()
	getBanner()
	getShopLists()
})
const shopLists = ref({})
const getShopLists = async()=>{
	const {results} = await getShopList()
	shopLists.value = results[0]
}
const categoryList = ref([])
const getCategory = async()=>{
	const {results} = await getShopCategories()
	categoryList.value = results
}
const bannerList = ref()
const getBanner = async()=>{
	bannerList.value = await getBannerList()
}
const search = ()=>{
	console.log(keyword.value)
}
const toSettle = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_intro'
	})
}
const toMerchant =async () => {
	const phoneNumber= uni.getStorageSync('phoneNumber')
	const userData=uni.getStorageSync('userInfo')
	const  shopData=uni.getStorageSync('shopInfo')
	console.log('进入商家前的用户信息',userData);
	console.log('进入商家前的店铺信息',shopData);
    if (userData?.is_seller&&userData?.is_shop) {
        // 已入驻
        uni.navigateTo({
            url: '/pages/merchant/merchant_management'
        });
    } else if(!userData?.is_seller) {
        // 未入驻
        uni.redirectTo({
            url: '/pages/merchant/merchant_intro'
        });
    } else if(userData?.is_seller&&!userData?.is_shop){
		uni.redirectTo({
			url:'/pages/merchant/before_create_shop'
		})
	}
};


const toAgent = ()=>{
	const userInfo = uni.getStorageSync('userInfo')
	if (userInfo && (userInfo.is_province_agent||userInfo.is_city_agent)) {
		uni.navigateTo({
			url: '/pages/agent/agent_management'
		})
	} else {
		uni.navigateTo({
			url: '/pages/agent/agent_intro'
		})
	}
	
}
const toRecommend =async ()=>{
	const phoneNumber=uni.getStorageSync('phoneNumber')
	const data=await getRecommendOfficerInfo(phoneNumber)
	console.log('进入推荐官页面前的推荐官信息',data);
	if (data?.is_approved&&data?.is_visible) {
		uni.navigateTo({
			url: '/pages/recommend/recommend_management'
		})
	} else if(data?.detail) {
		uni.navigateTo({
			url: '/pages/recommend/recommend_intro'
		})
	} else if(!data?.is_approved){
		uni.navigateTo({
			url: '/pages/recommend/before_create_recommend'
		})
	}
}
const toAllMerchant = (id)=>{
	uni.navigateTo({
		url: '/pages/merchant/all_merchant?id='+id
	})
}

const toMyAccount = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/myAccount'
	})
}
const toDetail = (phone)=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_detail?phone='+phone
	})
}
</script>

<style lang="scss" scoped>
.page {
	min-height: 100%;
	background-color: #FC5908;
}
.search_bar {
	padding: 0 26rpx 48rpx;
	.locate_img {
		width: 43rpx;
		margin-right: 18rpx;
	}
	.location {  
		color: #fff;
		font-size: 24rpx;
		margin-right: 30rpx;
	}
	:deep(.uni-searchbar) {
		padding: 0;
		flex: 1;
	}
	:deep(.uni-searchbar__box) {
		height: 60rpx;
	}
	:deep(.uni-searchbar__box-search-input){
		font-size: 21rpx;
		margin-left: 0;
	}
	:deep(.uni-searchbar__text-placeholder) {
		color: #888888;
		font-size: 21rpx;
		margin-left: 0;
	}
	:deep(.uni-searchbar__box-icon-clear) {
		line-height: 0;
	}
	.search_btn {
		width: 85rpx;
		height: 45rpx;
		background-color: #f96e00;
		color: #fff;
		border-radius: 100px;
		font-size: 21rpx;
	}
}

.swiper {
	height: 300rpx;
	.swipe_img {
		width: 750rpx;
		height: 300rpx;
		// background-color: #ccc;
	}
}
.function_list {
	padding: 36rpx 46rpx;
	.function_item {
		text-align: center;
		font-size: 24rpx;
		color: #fff;
		margin-right: 60rpx;
		&:last-child {
			margin-right: 0;
		}
		.img_box {
			width: 117rpx;
			height: 117rpx;
			border-radius: 38rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			.img_item {
				width: 72rpx;
			}
		}
	}
}
.content {
	padding: 0 22rpx;
	.cate_list {
		background-color: #fff;
		border-radius: 38rpx;
		padding: 42rpx 46rpx 12rpx;
		margin-bottom: 34rpx;
		.cate_item {
			text-align: center;
			font-size: 21rpx;
			margin-right: 46rpx;
			margin-bottom: 30rpx;
			&:nth-child(5n) {
				margin-right: 0;
			}
			.cate_img {
				width: 86rpx;
			}
		}
	}
	.merchant_box {
		background-color: #fff;
		border-radius: 38rpx;
		padding: 50rpx 46rpx 0;
		margin-bottom: 34rpx;
		.merchant_top {
			padding-bottom: 20rpx;
			border-bottom: 1px solid #e1e1e1;
			.nearby {
				font-weight: bold;
				font-size: 27rpx;
				margin-right: 24rpx;
			}
			.hit {
				padding: 8rpx 10rpx;
				border-radius: 100px;
				font-size: 21rpx;
				background-image: linear-gradient(to right, #ff9342, #fe676c);
				color: #fff;
			}
			.settle {
				padding: 10rpx 18rpx;
				background-color: #fc5908;
				color: #fff;
				font-size: 21rpx;
				border-radius: 100px;
			}
		}
		.shop_list {
			.shop_item {
				padding: 20rpx 0;
				border-bottom: 1px solid #e1e1e1;
				.shop_img {
					width: 114rpx;
					height: 114rpx;
					margin-right: 22rpx;
					// background-color: #ccc;
					border-radius: 5px;
				}
				.shop_info {
					flex: 1;
					
					.shop_name {
						font-size: 24rpx;
						margin-bottom: 36rpx;
					}
					.shop_address {
						font-size: 18rpx;
						color: #385ed2;
						.address_img {
							width: 20rpx;
							margin-right: 10rpx;
						}
					}
				}
				.distance {
					font-size: 21rpx;
					color: #fc6216;
				}
			}
			.more {
				font-size: 24rpx;
				color: #ff6a07;
				text-align: center;
				padding: 30rpx 0;
			}
		}
	}
	.shop_pic {
		width: 100%;
		margin-bottom: 30rpx;
	}
}
.headline {
	padding: 30rpx 50rpx;
	.head_title {
		font-size: 30rpx;
		color: #fff;
		margin-right: 20rpx;
	}
	.head_hit {
		font-size: 24rpx;
		color: #fff;
		border: 1px solid #fff;
		border-radius: 3px;
		margin-right: 20rpx;
		padding: 6rpx 12rpx;
	}
	.news {
		font-size: 24rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		flex: 1;
	}
}
</style>
