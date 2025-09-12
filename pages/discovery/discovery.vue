<template>
	<view class="discovery-container">
		<!-- 顶部橙色渐变区域 -->
		<view class="header-container">
			<!-- 地址选择器和标题 -->
			<view class="header-content">
				<view class="location-selector">
					<image class="location-icon" src="https://img.icons8.com/material-rounded/96/ffffff/marker.png"></image>
					<CityPicker @changeCity="bindCityChange"></CityPicker>
				</view>
				<view class="title-container">
					<image class="main-title-img" src="https://static.maxcang.com/appstatic/common/title_logo.png" mode="aspectFit"></image>
				</view>
				<view class="placeholder"></view>
			</view>
		</view>

		<!-- 活动海报区域 -->
		<view class="banner-section" >
			<image
				v-if="exchangeCenterOpen === 1"
				class="banner-image" 
				src="https://static.maxcang.com/appstatic/discovery/banner_bg.png" 
				mode="aspectFill"
				@click="goToExchangeZone"
			></image>
		</view>

		<!-- 筛选条件区域 -->
		<view class="filter-bar">
			<!-- 左侧类型选择滑动区域 -->
			<scroll-view class="category-scroll" scroll-x :scroll-into-view="scrollIntoView">
				<view class="category-tabs">
					<view 
						class="category-tab" 
						:class="{ 'active': !selectedCategory }"
						@tap="selectCategory(null)"
						id="category-all"
					>
						<text class="category-text">全部</text>
					</view>
					<view 
						class="category-tab" 
						:class="{ 'active': selectedCategory && selectedCategory.id === category.id }"
						v-for="(category, index) in categories" 
						:key="index" 
						@tap="selectCategory(category)"
						:id="`category-${category.id}`"
					>
						<text class="category-text">{{ category.name }}</text>
					</view>
					<view 
						class="category-tab"
						:class="{ 'active': selectedCategory && selectedCategory.id === 'supermarket' }"
						@tap="selectCategory({ name: '超市便利', id: 'supermarket' })"
						id="category-supermarket"
					>
						<text class="category-text">超市便利</text>
					</view>
					<view 
						class="category-tab"
						:class="{ 'active': selectedCategory && selectedCategory.id === 'health' }"
						@tap="selectCategory({ name: '养生健康', id: 'health' })"
						id="category-health"
					>
						<text class="category-text">养生健康</text>
					</view>
				</view>
			</scroll-view>
			<!-- 右侧搜索框 -->
			<view class="search-container">
				<view class="search-box" @tap="goToSearch">
					<image class="search-icon" src="https://static.maxcang.com/appstatic/common/search.png"></image>
					<input 
						class="search-input" 
						placeholder="搜索商家"
						v-model="searchKeyword"
						@input="onSearchInput"
						disabled
					/>
				</view>
			</view>
		</view>

		<!-- 店铺列表区域 -->
		<view class="store-section">
			<!-- 店铺列表 -->
			<scroll-view 
				class="store-list-scroll" 
				scroll-y 
				@scrolltolower="loadMore"
				:refresher-enabled="true"
				:refresher-triggered="isRefreshing"
				@refresherrefresh="onRefresh"
				lower-threshold="50"
				enable-back-to-top
			>
				<view class="store-list">
					<!-- 加载中状态 -->
					<view class="empty-state" v-if="isLoading && shopLists.length === 0">
						<view class="loading-spinner"></view>
						<text class="empty-text">正在加载店铺...</text>
					</view>
					<!-- 无数据状态 -->
					<view class="empty-state" v-else-if="!isLoading && shopLists.length === 0">
						<text class="empty-text">暂无店铺数据</text>
					</view>
					
					<!-- 店铺列表 -->
					<view class="store-item" v-for="(store, index) in shopLists" :key="index" @tap="toStoreDetail(store)">
						<image class="store-avatar" :src="store.avatar || 'https://static.maxcang.com/appstatic/default_shop.png'" mode="aspectFill"></image>
						<view class="store-info">
							<view class="store-header">
								<text class="store-name">{{ store.name }}</text>
															<view class="store-badge" v-if="store.pay_cert_material_state === 1">
								<image class="certified-icon" src="https://static.maxcang.com/appstatic/discovery/certified_badge.png" mode="aspectFit"></image>
							</view>
							</view>
							<view class="store-rating-container">
								<view class="store-rating">
									<image class="star" v-for="n in 5" :key="n" src="https://static.maxcang.com/appstatic/discovery/star_icon.png" mode="aspectFit"></image>
									<text class="rating-text">{{ store.rating || '4.9' }}</text>
								</view>
								<view class="reward-badge">
									<text class="reward-number">{{ store.consume2coin_bit || '100' }}</text>
									<text class="reward-suffix">%赠送</text>
								</view>
							</view>
							<text class="store-address">{{ store.address }}</text>
						</view>
					</view>
					
					<!-- 加载更多状态 -->
					<view class="loading-status" v-if="shopLists.length > 0">
						<view class="loading-indicator" v-if="isLoading">
							<view class="loading-spinner small"></view>
							<text>正在加载更多...</text>
						</view>
						<view class="no-more-shops" v-if="!hasNext && !isLoading">
							<text>———— 没有更多店铺了 ————</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { onShow } from '@dcloudio/uni-app'
import { getShopCategories, getShopInfo, getShopList, getCityShopList } from '@/service/shop';
import { getCityExchangeCenterOpen } from '@/service/divisions';
import CityPicker from "@/components/cityPicker/cityPicker.vue";

// 生命周期钩子
onMounted(() => {
	getCategory()
});

onShow(() => {
	getExchangeCenterStatus();
	resetAndLoadStores()
	token.value = uni.getStorageSync('accessToken')
})


// 数据定义
const categories = ref([]);
const curPage = ref(1);
const hasNext = ref(false);
const shopLists = ref([])
const isLoading = ref(false);
const selectedCategory = ref(null);
const searchKeyword = ref('');
const scrollIntoView = ref(null);
const isRefreshing = ref(false);
const exchangeCenterOpen = ref(0); // 兑换专区开放状态：0-关闭，1-开启
let token = ref('')
// 获取分类数据
const getCategory = async() => {
	const {results} = await getShopCategories()
	categories.value = results
}

// 获取兑换专区开放状态
const getExchangeCenterStatus = async() => {
	try {
		const { open } = await getCityExchangeCenterOpen();
		exchangeCenterOpen.value = open;
		console.log('兑换专区开放状态:', open);
	} catch (error) {
		console.error('获取兑换专区开放状态失败:', error);
		exchangeCenterOpen.value = 0; // 默认关闭
	}
}

// 地址选择器变化事件
const bindCityChange = (e) => {
	uni.setStorageSync("city", e.city);
	resetAndLoadStores();
}

// 重置并加载商店列表
const resetAndLoadStores = () => {
	curPage.value = 1
	shopLists.value = []
	hasNext.value = false
	console.log('重置商店列表，开始加载第一页');
	getStoreList()
}

// 选择类目
const selectCategory = (category) => {
	selectedCategory.value = category;
	resetAndLoadStores();
}

// 搜索输入事件
const onSearchInput = () => {
	resetAndLoadStores();
}

// 监听类目变化
watch(selectedCategory, () => {
	resetAndLoadStores();
});

// 获取店铺列表
const getStoreList = async() => {
	if (isLoading.value) return;
	isLoading.value = true;
	
	try {
		const city = uni.getStorageSync('city')
		const params = ref({
			category: selectedCategory.value ? selectedCategory.value.id : '',
			name: city,
			page: curPage.value,
			search: searchKeyword.value
		})

		const {results, next} = await getCityShopList(params.value)
		console.log('API响应:', { results: results.length, next, currentPage: curPage.value });
		
		if (curPage.value === 1) {
			shopLists.value = results;
		} else {
			shopLists.value.push(...results);
		}
		
		if(!!next) {
			hasNext.value = true
			curPage.value = curPage.value + 1
		} else {
			hasNext.value = false
		}
		
		console.log('更新后状态:', { totalShops: shopLists.value.length, hasNext: hasNext.value, nextPage: curPage.value });
	} catch (error) {
		console.error('获取商店列表失败:', error);
	} finally {
		isLoading.value = false;
	}
}

// 加载更多数据
const loadMore = () => {
	console.log('触发加载更多:', { hasNext: hasNext.value, isLoading: isLoading.value, currentPage: curPage.value });
	if (hasNext.value && !isLoading.value) {
		console.log('开始加载更多数据');
		getStoreList();
	} else {
		console.log('不满足加载条件:', { hasNext: hasNext.value, isLoading: isLoading.value });
	}
}

// 跳转到店铺详情
const toStoreDetail = (store) => {
	uni.navigateTo({
		url: '/pages/merchant/merchant_detail?phone='+store.merchant
	});
}

// 跳转到店铺搜索页面
const goToSearch = () => {
	uni.navigateTo({
		url: '/pages/store/store_search'
	})
}

// 跳转到兑换专区
const goToExchangeZone = () => {
	const token = uni.getStorageSync("accessToken");
	if(!token) {
		uni.showToast({
			title: '请先登录',
			icon: 'none',
			duration: 2000
		});
	}else{
		uni.navigateTo({
			url: '/pages/discovery/exchange_zone'
		});
	}
		
}

// 下拉刷新
const onRefresh = () => {
	isRefreshing.value = true;
	curPage.value = 1;
	shopLists.value = [];
	
	getStoreList().finally(() => {
		isRefreshing.value = false;
	});
}
</script>

<style lang="scss" scoped>
.discovery-container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #F5F5F5;
}

/* 顶部橙色渐变区域 */
.header-container {
	width: 750rpx;
	height: 253rpx;
	background: radial-gradient( #FD8F36 0%, #FC5908 100%);
	border-radius: 0rpx 0rpx 40rpx 40rpx;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
}

.status-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 40rpx 0;
	color: white;
	font-size: 32rpx;
	font-weight: bold;
}

.status-icons {
	display: flex;
	align-items: center;
	gap: 10rpx;
}

.header-content {
	display: flex;
	height: 250rpx;
	justify-content: space-between;
	align-items: center;
	padding: 40rpx 40rpx 20rpx;
	margin-top: 15rpx;
}

.location-selector {
	display: flex;
	align-items: center;
	gap: 12rpx;
	flex: 1;
}

.location-icon {
	width: 32rpx;
	height: 32rpx;
}

.title-container {
	flex: 1;
	text-align: center;
}

.main-title-img {
	width: 200rpx;
	height: 40rpx;
}

.placeholder {
	flex: 1;
}

/* 活动海报区域 */
.banner-section {
	padding: 30rpx 40rpx;
	margin-top: 253rpx;
	flex-shrink: 0;
}

.banner-image {
	width: 100%;
	height: 300rpx;
	border-radius: 24rpx;
	overflow: hidden;
}

/* 店铺列表区域 */
.store-section {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0 40rpx;
	min-height: 0;
	height: calc(100vh - 583rpx); /* 减去header(253rpx) + banner(330rpx) 的高度 */
}

.filter-bar {
	width: 100%;
	height: 94rpx;
	padding: 0 32rpx;
	display: flex;
	align-items: center;
	margin-bottom: 10rpx;
	gap: 20rpx;
	background-color: white;
	flex-shrink: 0;
}

.category-scroll {
	flex: 1;
	white-space: nowrap;
	min-width: 0;
}

.category-tabs {
	display: flex;
	gap: 16rpx;
	padding-right: 20rpx;
}

.category-tab {
	padding: 0rpx 16rpx;
	
	white-space: nowrap;
	
	flex-shrink: 0;
}

.category-tab.active {
	// background: #FF6B35;
	border-bottom: 4rpx solid #FC5908 ;
}

.category-text {
	font-size: 24rpx;
color: #333333;
line-height: 34rpx;

}

.category-tab.active .category-text {
	// color: white;
	font-size: 30rpx;
color: #333333;
line-height: 34rpx;
}

.search-container {
	width: 200rpx;
	flex-shrink: 0;
	display: flex;
	justify-content: flex-end;
}

.search-box {
	display: flex;
	align-items: center;
	padding: 16rpx 24rpx;

	width: 191rpx;
height: 45rpx;
background: #F8F8F8;
border-radius: 22rpx 22rpx 22rpx 22rpx;
}

.search-icon {
	width: 28rpx;
	height: 28rpx;
	margin-right: 12rpx;
	opacity: 0.6;
}

.search-input {
	flex: 1;
	
	border: none;
	outline: none;
	font-size: 21rpx;
color: #919191;
line-height: 34rpx;
text-align: center;
}

.search-input::placeholder {
	font-size: 21rpx;
color: #919191;
line-height: 34rpx;
text-align: center;
}

/* 店铺列表样式 */
.store-list-scroll {
	flex: 1;
	height: 100%;
}

.store-list {
	display: flex;
	flex-direction: column;
	gap: 9rpx;
	padding-bottom: 40rpx;
}

.empty-state {
	text-align: center;
	padding: 80rpx 0;
}

.empty-text {
	font-size: 28rpx;
	color: #999;
}

.store-item {
	display: flex;
	background: white;
	
	padding: 30rpx;
	box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
	align-items: center;
	position: relative;
}

.store-avatar {
	width: 127rpx;
height: 127rpx;
border-radius: 12rpx;
margin-right: 24rpx;
flex-shrink: 0;
}

.store-info {
	flex: 1;
	min-width: 0;
	min-height: 127rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.store-header {
	display: flex;
	align-items: center;
	margin-bottom: 12rpx;
	flex-wrap: wrap;
}

.store-name {
	
	font-weight: bold;
	
	margin-right: 6rpx;
	flex-shrink: 0;
	font-size: 24rpx;
color: #333333;
}

.store-badge {
	display: flex;
	align-items: center;
}

.certified-icon {
	width: 143rpx;
height: 44rpx;
}

.store-rating-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 12rpx;
}

.store-rating {
	display: flex;
	align-items: center;
}

.star {
	width: 24rpx;
	height: 24rpx;
	margin-right: 2rpx;
}

.rating-text {
	font-size: 24rpx;
	color: #FF8C00;
	margin-left: 8rpx;
	font-weight: bold;
}

.reward-badge {
	width: 132rpx;
	height: 37rpx;
	border-radius: 17rpx 17rpx 17rpx 17rpx;
	background-color: #FC5908;
	display: flex;
	align-items: center;
	justify-content: center;
}

.reward-number {
	font-size: 25rpx;
	color: #FFFFFF;
}

.reward-suffix {
	font-size: 20rpx;
	color: #FFFFFF;
}

.store-address {
	font-size: 18rpx;
color: #919191;
	line-height: 1.4;
	word-wrap: break-word;
	word-break: break-all;
}

/* 加载状态样式 */
.loading-status {
	text-align: center;
	padding: 40rpx 0;
}

.loading-indicator {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20rpx;
	font-size: 28rpx;
	color: #999;
}

.no-more-shops {
	font-size: 28rpx;
	color: #999;
	opacity: 0.7;
}

/* 加载动画 */
.loading-spinner {
	width: 60rpx;
	height: 60rpx;
	border: 6rpx solid #f3f3f3;
	border-top: 6rpx solid #FC5908;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

.loading-spinner.small {
	width: 40rpx;
	height: 40rpx;
	border-width: 4rpx;
}

@keyframes spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}

.empty-state {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20rpx;
}

/* CityPicker 组件样式覆盖 */
:deep(.uni-input) {
	color: white !important;
	font-size: 28rpx !important;
	border: none !important;
}
</style>