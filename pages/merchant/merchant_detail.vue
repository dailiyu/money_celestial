<template>
	  <view class="page">
    <!-- 轮播图区域 -->
		<view class="swiper-section">
			<swiper 
				class="banner-swiper" 
				:indicator-dots="true" 
				:autoplay="true" 
				:interval="3000" 
				:duration="1000" 
				indicator-active-color="#FC5908" 
				circular 
				v-if="swiperList.length"
			>
				<swiper-item v-for="item in swiperList" :key="item">
					<image :src="item" mode="aspectFill" class="banner-image"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 商家信息区域 -->
		<view class="shop-info-section" v-if="shopInfo.name">
			<!-- 商家名称和收藏 -->
			<view class="shop-header">
				<text class="shop-name" :class="{ 'is-referral-officer': shopInfo.is_referral_officer }">{{ shopInfo.name }}</text>
				<image 
					class="favorite-icon" 
					:src="token && shopInfo.favorited ? 'https://static.maxcang.com/appstatic/merchant/favorited.png' : 'https://static.maxcang.com/appstatic/merchant/unfavorited.png'"
					@click="token && shopInfo.favorited ? delCollect() : addCollect()"
				></image>
			</view>

			<!-- 评分和消费人数 -->
			<view class="rating-section">
				<view class="stars">
					<image 
						class="star" 
						src="https://static.maxcang.com/appstatic/star.png" 
						v-for="(item, index) in 5" 
						:key="index"
					></image>
				</view>
				<text class="rating-score">{{ shopInfo.rating || '4.9' }}</text>
				<!-- <text class="consumer-count">300人消费</text> -->
			</view>

			<!-- 营业时间 -->
			<text class="business-hours">
				营业时间：{{ shopInfo.business_time1 && shopInfo.business_time2 ? 
					`${shopInfo.business_time1}-${shopInfo.business_time2}` : 
					'09:00-19:00' }}
			</text>

			<!-- 地址和功能按钮 -->
			<view class="address-actions">
				<text class="shop-address" @click="openLocation(shopInfo)">
					{{ shopInfo.address }}
				</text>
				                <!-- 导航按钮 -->
                <view class="action-button" @click="shopInfo.latitude && shopInfo.longitude ? openLocation(shopInfo) : copy()">
                  <image 
                    class="action-icon" 
                    :src="shopInfo.latitude && shopInfo.longitude ? 'https://static.maxcang.com/appstatic/merchant/navigation_icon.png' : 'https://static.maxcang.com/appstatic/merchant/device_coin.png'"
                  ></image>
                </view>
                <!-- 分隔线 -->
                <view class="divider"></view>
                <!-- 电话按钮 -->
                <view class="action-button" @click="dial">
                  <image 
                    class="action-icon" 
                    src="https://static.maxcang.com/appstatic/merchant/phone_icon.png"
                  ></image>
                </view>
			</view>

			<!-- 付款功能 -->
			<view class="payment-section" @click="handlePayment">
				<image class="payment-icon" src="https://static.maxcang.com/appstatic/merchant/payment_icon.png"></image>
				<text class="payment-text">付款</text>
				<image class="arrow-right" src="https://static.maxcang.com/appstatic/merchant/gray_arrow_right.png"></image>
			</view>

			<!-- 店铺商品展示 -->
			<text class="goods-title">店铺商品展示</text>
			
			<!-- 商品列表 -->
			<view class="goods-section" v-if="shopInfo.products && shopInfo.products.length > 0">
				<view 
					class="goods-item" 
					v-for="(product, index) in displayProducts" 
					:key="product.id"
					@click="goToExchangeDetail(product)"
				>
					<view class="goods-card">
						<view class="goods-image-container">
							<image 
								v-if="getProductImage(product)"
								class="goods-image" 
								:src="getProductImage(product)"
								mode="aspectFill"
							></image>
							<view v-else class="goods-image-placeholder">
                          <view class="change-badge">
                            <image class="change-icon" src="https://static.maxcang.com/appstatic/merchant/change_icon.png"></image>
                          </view>
                        </view>
							<!-- 兑换状态图标 -->
							<view v-if="product.redeem_status === 2" class="redeem-status-badge">
								<image class="redeem-status-icon" src="https://static.maxcang.com/appstatic/merchant/change_icon.png"></image>
					</view>
				</view>
						<view class="goods-info">
							<text class="goods-name">{{ product.name }}</text>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 无商品状态 -->
			<view v-else class="no-products">
				<text class="no-products-text">暂无商品</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { favoriteShopsAdd, favoriteShopsDelete, browserShopAdd } from '@/service/uer_profile.js'
import { onLoad } from '@dcloudio/uni-app'
import { getMerchantDetail } from '@/service/merchant.js'

const phone = ref('')
const token = uni.getStorageSync('accessToken')
const shopInfo = ref({})
const swiperList = ref([])

// 显示的商品列表（最多显示6个）
const displayProducts = computed(() => {
	if (!shopInfo.value.products) return [];
	return shopInfo.value.products.slice(0, 6);
})

// 获取商品图片
const getProductImage = (product) => {
	if (!product.images || product.images.length === 0) return null;
	
	// 优先获取Banner类型图片
	const bannerImage = product.images.find(img => img.image_type_display === 'Banner');
	if (bannerImage && bannerImage.image_url) {
		return bannerImage.image_url;
	}
	
	// 如果没有Banner图片，使用第一张图片
	if (product.images[0] && product.images[0].image_url) {
		return product.images[0].image_url;
	}
	
	return null;
}

onLoad(async(option) => {
	phone.value = option.phone
	const res = await getMerchantDetail(phone.value)
	shopInfo.value = res;
	console.log('商家详情数据:', res);
	console.log('商品列表:', res.products);
	
	// 展示image_type为'banner'和'other'的图片
	const bannerImages = (shopInfo.value.images || []).filter(image => image.image_type === 'banner' || image.image_type === 'other').map(image => image.image_url);
	swiperList.value = bannerImages
	
	// 只有在登录状态下才发起浏览记录
	if (token) {
		browserShopAdd({shop: shopInfo.value.merchant})
	}
})

// 拨打电话
const dial = () => {
	uni.makePhoneCall({
		phoneNumber: shopInfo.value.tel || shopInfo.value.merchant
	})
}

// 打开地图导航
const openLocation = (item) => {
	// #ifdef MP-WEIXIN
	if (!item.latitude || !item.longitude) {
		copy();
		return;
	}
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

// 复制地址
const copy = () => {
	uni.setClipboardData({
		data: shopInfo.value.address
	})
}

// 检查登录状态并执行操作
const checkLoginAndExecute = (callback) => {
	const token = uni.getStorageSync("accessToken");
	if (!token) {
		uni.showToast({
			title: '请先登录',
			icon: 'none',
			duration: 2000
		});
		setTimeout(() => {
			uni.navigateTo({
				url: '/pages/login/login'
			});
		}, 2000);
		return;
	}
	
	// 已登录，执行回调函数
	if (typeof callback === 'function') {
		callback();
	}
}

// 添加收藏
const addCollect = async() => {
	checkLoginAndExecute(async () => {
		try {
			uni.showLoading({
				mask: true
			})
			const {id} = await favoriteShopsAdd({shop: shopInfo.value.merchant})
			shopInfo.value.favorited = id
			uni.hideLoading()
			uni.showToast({
				title: '收藏成功',
				icon: 'none'
			})
		} catch (e) {
			uni.hideLoading()
			uni.showToast({
				title: e.data.detail || '收藏失败',
				icon: 'none'
			})
		}
	})
}

// 取消收藏
const delCollect = async() => {
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
		uni.hideLoading()
		uni.showToast({
			title: e.data.detail || '操作失败',
			icon: 'none'
		})
	}
}

// 处理付款
const handlePayment = () => {
	checkLoginAndExecute(() => {
		uni.navigateTo({
			url: `/pages/points/pay?scene=${phone.value}`
		})
	})
}

// 跳转到商品详情页
const goToExchangeDetail = (product) => {
	checkLoginAndExecute(() => {
		// 根据redeem_status决定跳转到不同页面
		if (product.redeem_status === 2) {
			// redeem_status为2时，跳转到兑换详情页
			uni.navigateTo({
				url: `/pages/discovery/exchange_detail?id=${product.id}`
			});
		} else {
			// redeem_status不为2时，跳转到商品详情页
			uni.navigateTo({
				url: `/pages/discovery/product_detail?id=${product.id}`
			});
		}
	})
}

// #ifdef MP-WEIXIN
import { onShareAppMessage } from '@dcloudio/uni-app'
onShareAppMessage(() => {
	return {
		title: shopInfo.value.name,
		path: '/pages/merchant/merchant_detail',
	}
})
// #endif
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	min-height: 100vh;
	background-color: #F5F5F5;
}

/* 轮播图区域 */
.swiper-section {
	width: 100%;
	height: 418rpx;
	background-color: #000000;
}

.banner-swiper {
	width: 100%;
	height: 100%;
}

.banner-image {
	width: 100%;
	height: 100%;
}

/* 商家信息区域 */
.shop-info-section {
	padding: 46rpx 64rpx 0;
}

/* 商家头部 */
.shop-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15rpx;
}

.shop-name {
	font-size: 30rpx;
	font-weight: 500;
	color: #000000;
	line-height: 30rpx;
	max-width: 500rpx;
	
	&.is-referral-officer {
		color: #FC5908;
	}
}

.favorite-icon {
	width: 38rpx;
	height: 37rpx;
	margin-right: 16rpx;
}

/* 评分区域 */
.rating-section {
	display: flex;
	align-items: center;
	margin-bottom: 12rpx;
}

.stars {
	display: flex;
	margin-right: 19rpx;
}

.star {
	width: 23rpx;
	height: 22rpx;
	margin-right: 3rpx;
}

.rating-score {
	font-size: 20rpx;
	font-weight: 500;
	color: #FC5908;
	line-height: 20rpx;
	margin-right: 15rpx;
}

.consumer-count {
	font-size: 18rpx;
	font-weight: 300;
	color: #919191;
	line-height: 18rpx;
}

/* 营业时间 */
.business-hours {
	font-weight: 400;
	font-size: 21rpx;
	color: #919191;
	line-height: 21rpx;
	margin-bottom: 15rpx;
}

/* 地址和功能区域 */
.address-actions {
	display: flex;
	align-items: center;
	margin-bottom: 45rpx;
}

.shop-address {
	flex: 1;
	font-weight: 400;
	font-size: 21rpx;
	color: #919191;
	line-height: 31rpx;
	max-width: 335rpx;
	margin-right: 132rpx;
}

.action-button {
	width: 68rpx;
	height: 68rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.action-icon {
	width: 50rpx;
	height: 50rpx;
	object-fit: contain;
}

.divider {
	width: 1rpx;
	height: 53rpx;
	background-color: #E3E3E3;
	margin: 0 30rpx;
}

/* 付款区域 */
.payment-section {
	display: flex;
	align-items: center;
	background-color: #FFFFFF;
	border-radius: 30rpx;
	width: 692rpx;
	height: 108rpx;
	margin: 0 -34rpx 46rpx;
	padding: 0 35rpx;
}

.payment-icon {
	width: 50rpx;
	height: 50rpx;
	margin-right: 23rpx;
}

.payment-text {
	flex: 1;
	font-size: 30rpx;
	font-weight: 500;
	color: #000000;
	line-height: 45rpx;
}

.arrow-right {
	width: 17rpx;
	height: 30rpx;
}

/* 商品标题 */
.goods-title {
	font-size: 27rpx;
	color: #000000;
	line-height: 27rpx;
	margin-bottom: 0;
}

/* 商品展示区域 */
.goods-section {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 28rpx -18rpx 0;
	padding-bottom: 156rpx;
}

.goods-item {
	width: 318rpx;
	cursor: pointer;
	transition: transform 0.2s ease;
	margin-bottom: 40rpx;
	
	&:active {
		transform: scale(0.98);
	}
}

.goods-card {
	background-color: #FFFFFF;
	border-radius: 19rpx;
	overflow: hidden;
	height: 380rpx;
}

.goods-image-container {
	width: 100%;
	height: 319rpx;
	position: relative;
}

.goods-image {
	width: 100%;
	height: 100%;
}

.goods-image-placeholder {
	width: 100%;
	height: 100%;
	background: linear-gradient(135deg, #FFE5D6 0%, #FFF5F0 100%);
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
}

.change-badge {
	position: absolute;
	top: 0;
	right: 0;
	width: 58rpx;
	height: 58rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.change-icon {
	width: 58rpx;
	height: 58rpx;
}

.redeem-status-badge {
	position: absolute;
	top: 0;
	right: 0;
	width: 58rpx;
	height: 58rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.redeem-status-icon {
	width: 58rpx;
	height: 58rpx;
}

.goods-name {
	font-size: 23rpx;
	font-weight: 500;
	color: #000000;
	line-height: 45rpx;
	padding: 19rpx 0 0 25rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

/* 无商品状态 */
.no-products {
	text-align: center;
	padding: 80rpx 0;
	margin-top: 28rpx;
}

.no-products-text {
	font-size: 28rpx;
	color: #999999;
}

/* 适配不同屏幕 */
@media screen and (max-width: 750rpx) {
	.payment-section {
		width: calc(100% + 68rpx);
	}
}
</style>
