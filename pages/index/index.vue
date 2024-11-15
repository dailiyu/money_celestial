<template>
	<scroll-view @scrolltolower="dealScrolltolower"  :scroll-y="true" class="page">
		<navBarForIndex :iconShow="false" title="满仓生态" @changeCity="getCity"></navBarForIndex>
		<!-- <view class="search_bar flex_between">
			<image src="https://static.maxcang.com/appstatic/locate.png" mode="widthFix" class="locate_img"></image>
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
			<swiper-item v-for="item in bannerList" :key="item.id" @click="toCityAgentRank(item)">
				<image :src="item.image_url" mode="widthFix" class="swipe_img"></image>
			</swiper-item>
		</swiper>
		<view class="function_list flex_between">
			<view class="function_item" @click="toMerchant">
				<view class="img_box flex_center">
					<image src="https://static.maxcang.com/appstatic/home/cart.png" mode="widthFix" class="img_item"></image>
				</view>
				<view class="" >
					商家
				</view>
			</view>
			<view class="function_item" @click="toRecommend">
				<view class="img_box flex_center">
					<image src="https://static.maxcang.com/appstatic/home/star.png" mode="widthFix" class="img_item" style="width: 56rpx;"></image>
				</view>
				<view class="">
					推荐官
				</view>
			</view>
			<view class="function_item" @click="toAgent">
				<view class="img_box flex_center">
					<image src="https://static.maxcang.com/appstatic/home/bag.png" mode="widthFix" class="img_item" style="width: 70rpx;"></image>
				</view>
				<view class="">
					代理
				</view>
			</view>
	
			<view class="function_item" @click="toMyAccount">
				<view class="img_box flex_center">
					<image src="https://static.maxcang.com/appstatic/home/profile.png" mode="widthFix" class="img_item" style="width: 58rpx;"></image>
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
						{{item?.name}}
					</view>
				</view>
				<view class="cate_item" @click="toAllMerchant(0)">
					<image src="https://static.maxcang.com/appstatic/home/all.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						全部类目
					</view>
				</view>
			</view>
			<view class="merchant_box" v-if="shopLists.length!==0">
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
					<view class="shop_item flex_between" v-for="(shop,index) in shopLists" :key="index"  @click="toDetail(shop)">
						<image :src="shop.avatar" mode="aspectFill" class="shop_img"></image>
						<view class="shop_info">
							<view class="shop_name">
								{{shop?.name}}
							</view>
							<view class="shop_address flex">
								<image src="https://static.maxcang.com/appstatic/locate_orange.png" mode="widthFix" class="address_img"></image>
								<view class="" style="flex: 1;" @click.stop="openLocation(shop)">
									{{shop?.address}}
								</view>
							</view>
						</view>
						<view :class="['percentage', {'red':!shop.consume2coin_bit||shop.consume2coin_bit>100||shop.consume2coin_bit==100, 'orange':shop.consume2coin_bit&&shop.consume2coin_bit<100}]">
							<image src="https://static.maxcang.com/appstatic/merchant/hot.png" mode="widthFix" class="hot_pic" v-if="!shop.consume2coin_bit||shop.consume2coin_bit>100||shop.consume2coin_bit==100"></image>
							<view class="">
								<text style="font-weight: bold;font-size: 26rpx;">{{shop.consume2coin_bit||'100'}}</text>%赠送
							</view>
						</view>
					</view>
					
				</view>
				<view style="width: 100%; text-align: center;font-size: 25rpx;padding:10rpx 0;color: #385ed2;" v-if="hasNext" >上拉加载更多</view>
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
		<!-- <view class="content">
			<image src="https://static.maxcang.com/appstatic/home/shop.jpg" mode="widthFix" class="shop_pic"></image>
			<image src="https://static.maxcang.com/appstatic/home/benefit.jpg" mode="widthFix" class="shop_pic"></image>
			<image src="https://static.maxcang.com/appstatic/home/earn.jpg" mode="widthFix" class="shop_pic"></image>
		</view> -->
	</scroll-view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {usePublicStore} from "@/store/public.js"
import { useUserStore } from '../../store/user';
import { getShopCategories, getShopInfo, getShopList,getCityShopList } from '@/service/shop';
import { getBannerList } from '@/service/bannner.js'
import { getRecommendOfficerInfo } from '../../service/recommend';
import { getUerAccountMessage, getUpdateMessage } from '../../service/uer_profile';
import { onShow } from '@dcloudio/uni-app'
// #ifdef MP-WEIXIN
import { onShareAppMessage } from '@dcloudio/uni-app'
onShareAppMessage(()=>{
	return {
	  title: '满仓生态',
	  path: '/pages/index/index',  // 分享路径
	}
})
// #endif
// var QQMapWX = require('../../static/qqmap/qqmap-wx-jssdk.min.js');

const isMask=ref(false)
const keyword = ref('')
const publicStore=  usePublicStore()
const userStore = useUserStore()
const userInfo = ref()
const shopInfo=ref()
const curPage = ref(1);
const hasNext = ref(false);
const token = uni.getStorageSync('accessToken')
onShow(async()=>{
	// #ifdef MP-WEIXIN
	if (!token) return
	// #endif
	await userStore.fetchAllDataAction()
	await publicStore.fetchAllDataAction()
	userInfo.value=await  uni.getStorageSync('userInfo')
	shopInfo.value=await uni.getStorageSync('shopInfo')
	
	// #ifdef APP-PLUS
	let versionInfo =  await getUpdateMessage();
	console.log(versionInfo);
	console.log(uni.getSystemInfoSync().appVersionCode)
	
	if(versionInfo.version>uni.getSystemInfoSync().appVersionCode){
		uni.showModal({
			title:"当前有新版本，请点击更新",
			confirmText:"立即更新",
			success: (e) => {
				if(e.confirm){
					plus.runtime.openURL(versionInfo.url);
				}
			}
		})
	}
	// #endif
	
})

onMounted(async()=>{
	// const accessToken = uni.getStorageSync('accessToken')
	// console.log(accessToken);
	// if (accessToken) {
		// await publicStore.fetchAllDataAction()
		// await userStore.fetchAllDataAction()
	// }
	const userInfo = uni.getStorageSync('userInfo')
	const localCity=uni.getStorageSync('city')
	city.value=localCity
	city.value=localCity||(userInfo.residence)?.split(' ')[1]||''
	city.value=localCity
	getCategory()
	getBanner()

	console.log(city.value)
	// generateQRCode()
})
const city = ref('')
const getCity = (e)=>{
	city.value = e.city
	uni.setStorageSync('city',city.value)
	console.log('当前选择的城市',city.value);
	shopLists.value=[]
	getList()
}
const shopLists = ref([])


const hiddenMask=()=>{
	isMask.value=false
}



// const getShopLists = async()=>{
	
// 	const {results} = await getCityShopList({name: city.value})
// 	shopLists.value = results[0]
// 	console.log('切换城市获取到对应的商店列表',results );
// }

const getList = async()=>{
	const city=uni.getStorageSync('city')
	const params = ref({
		category: '',
		name:city,
		page:curPage.value
	})
	// uni.showLoading({
	// 	title: '加载中'
	// })
	const {results,next} = await getCityShopList(params.value)
	shopLists.value.push(...results)
	console.log('111',results)
	if(!!next){
		hasNext.value=true
		curPage.value=curPage.value+1
	}else{
		hasNext.value=false
	}
	
	// uni.hideLoading()
}

const dealScrolltolower = async () => {
	if (hasNext.value) {
    await getList();
  } else {
    console.log('没有更多数据了');
  }
};

const categoryList = ref([])
const getCategory = async()=>{
	const {results} = await getShopCategories()
	categoryList.value = results
}
const bannerList = ref()
const getBanner = async()=>{
	bannerList.value = await getBannerList()
}

const toSettle = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_intro'
	})
}
const toMerchant =async () => {
	// #ifdef MP-WEIXIN
	if (!token){
		uni.showToast({
			icon:'none',
			title:'请登录!'
		})
		
	  return  setTimeout(()=>{
		  uni.navigateTo({
		  			url:'/pages/login/login'
		  		})
	  },700)
	}
	// #endif
	
	userInfo.value=await  uni.getStorageSync('userInfo')
	shopInfo.value=await uni.getStorageSync('shopInfo')
	const phoneNumber= uni.getStorageSync('phoneNumber')
	console.log('点击商家前获得的数据',userInfo.value?.is_seller,shopInfo.value.state);
/*  */
	console.log('进入商家前的用户信息',userInfo.value);
	console.log('进入商家前的店铺信息',shopInfo.value);
	//0 正在审核 1审核通过  -1审核不通过 
    if (userInfo.value?.is_seller&&shopInfo.value.state==1) {
        // 店铺已过审核
        uni.navigateTo({
            url: '/pages/merchant/merchant_management'
        });
		// await uni.setStorageSync('selectedShopInfo',shopInfo.value)
		//   uni.navigateTo({
		//     url: '/pages/merchant/merchant_detail'
		//   });
    } else if(!userInfo.value?.is_seller) {
        //还没成为商家
        uni.navigateTo({
            url: '/pages/merchant/merchant_intro'
        });
    } else if(userInfo.value?.is_seller&&!userInfo.value?.is_shop){
		//是商家 首次开通店铺
		uni.navigateTo({
			url:'/pages/merchant/before_create_shop'
		})
	}else if(userInfo.value?.is_seller&&shopInfo.value.state==-1){
		//是商家 审核不通过
		uni.navigateTo({
			url:'/pages/merchant/fail_create_shop'
		})
	}else if(userInfo.value?.is_seller&&shopInfo.value?.state==0){
		//正在审核
		uni.navigateTo({
			url:'/pages/merchant/before_create_merchant'
		})
	}
};


const toAgent = ()=>{
	// #ifdef MP-WEIXIN
	if (!token){
		uni.showToast({
			icon:'none',
			title:'请登录!'
		})
		
	  return  setTimeout(()=>{
		  uni.navigateTo({
		  			url:'/pages/login/login'
		  		})
	  },700)
	}
	// #endif
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
	// #ifdef MP-WEIXIN
	if (!token){
		uni.showToast({
			icon:'none',
			title:'请登录!'
		})
		
	  return  setTimeout(()=>{
		  uni.navigateTo({
		  			url:'/pages/login/login'
		  		})
	  },700)
	}
	// #endif
	const userInfo = uni.getStorageSync('userInfo')
	if(!userInfo.name||!userInfo.gender||!userInfo.icon||!userInfo.birthdate||!userInfo.residence){
		uni.showToast({
			icon:'none',
			title:'成为推荐官前先完善个人信息'
		})
		return uni.navigateTo({
			url:'/pages/login/more_info_edit'
		})
	}
	try{
		const phoneNumber=uni.getStorageSync('phoneNumber')
		const data=await getRecommendOfficerInfo(phoneNumber)
		console.log('进入推荐官页面前的推荐官信息',data);
		if (data?.is_approved&&data?.is_visible) {
			uni.navigateTo({
				url: '/pages/recommend/recommend_management'
			})
		}else if(!data?.is_approved){
			uni.navigateTo({
				url: '/pages/recommend/before_create_recommend'
			})
		}
	}catch(e){
		if(e.data?.detail){
			uni.navigateTo({
				url: '/pages/recommend/recommend_intro'
			})
		}
	}
}
const toAllMerchant = (id)=>{
	uni.navigateTo({
		url: '/pages/merchant/all_merchant?id='+id
	})
}

const toMyAccount = ()=>{
	// #ifdef MP-WEIXIN
	if (!token){
		uni.showToast({
			icon:'none',
			title:'请登录!'
		})
		
	  return  setTimeout(()=>{
		  uni.navigateTo({
		  			url:'/pages/login/login'
		  		})
	  },700)
	}
	// #endif
	uni.navigateTo({
		url: '/pages/myAccount/myAccount'
	})
}
const toDetail =async (shop)=>{
	await uni.setStorageSync('selectedShopInfo',shop)
	uni.navigateTo({
		url: '/pages/merchant/merchant_detail?city='+city.value
	})
}
const toCityAgentRank = (item)=>{
	if (item.title == 'agent-rank') {
		uni.navigateTo({
			url: '/pages/agent/city_agent_rank'
		})
	}
	else if (item.title == 'merchant-settle') {
		uni.navigateTo({
			url: '/pages/merchant/merchant_settle_process'
		})
	}
}
const openLocation = (item)=>{
	// #ifdef MP-WEIXIN
	if (!item.latitude || !item.longitude) return uni.showToast({
		icon: 'none',
		title: '获取位置失败'
	})
	uni.openLocation({
		latitude: item.latitude,
		longitude: item.longitude
	})
	// #endif
}
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
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
	padding: 0 22rpx 22rpx;
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
				align-items: flex-start;
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
				.percentage {
					position: relative;
					color: #fff;
					font-size: 22rpx;
					padding: 6rpx 18rpx;
					border-radius: 100px;
					// margin-top: 10rpx;
					&.red {
						background: linear-gradient(to bottom, #fd770b, #fb4706);
					}
					&.orange {
						background: linear-gradient(to bottom, #ffbc15, #ff850d);
					}
					.hot_pic {
						position: absolute;
						left: -16rpx;
						top: -20rpx;
						width: 70rpx;
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
