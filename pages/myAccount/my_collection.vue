<template>
	<view class="collection-container">
		
		<!-- 搜索和筛选器容器 -->
		<view class="search_filter_container">
			<!-- 搜索框 -->
			<view class="search_section">
				<view class="search_box">
					<input class="search_input" placeholder="搜索商家" v-model="searchKeyword" @input="onSearchInput" />
					<image class="search_icon" src="https://img.icons8.com/ios/50/search.png"></image>
				</view>
			</view>
			
			<!-- 筛选器区域 -->
			<view class="filter_section">
				<view class="filter_item">
					<image src="https://static.maxcang.com/appstatic/category.png" mode="widthFix" class="filter_icon"></image>
					<uni-data-select v-model="category" :localdata="range" placeholder="全部类目" :clear="false"
						@change="changeRange"></uni-data-select>
				</view>
				<view class="filter_item">
					<view class="filter_text" :style="{'color': timeSort?'#FC5908':'#333', 'font-size': '24rpx'}" @click="toggleTimeSort">
						收藏时间
					</view>
					<view class="sort_arrows" @click="toggleTimeSort">
						<image src="https://static.maxcang.com/appstatic/arrow-inactive.png" 
							mode="widthFix" 
							class="arrow_icon arrow_up" 
							:class="{'active': timeSort === 'asc'}"
							style="transform: rotate(180deg);"></image>
						<image src="https://static.maxcang.com/appstatic/arrow-inactive.png" 
							mode="widthFix" 
							class="arrow_icon arrow_down"
							:class="{'active': timeSort === 'desc'}"></image>
					</view>
				</view>
				<view class="filter_item">
					<view class="filter_text" :style="{'color': rewardSort?'#FC5908':'#333', 'font-size': '24rpx'}" @click="toggleRewardSort">
						赠送比例
					</view>
					<view class="sort_arrows" @click="toggleRewardSort">
						<image src="https://static.maxcang.com/appstatic/arrow-inactive.png" 
							mode="widthFix" 
							class="arrow_icon arrow_up" 
							:class="{'active': rewardSort === 'asc'}"
							style="transform: rotate(180deg);"></image>
						<image src="https://static.maxcang.com/appstatic/arrow-inactive.png" 
							mode="widthFix" 
							class="arrow_icon arrow_down"
							:class="{'active': rewardSort === 'desc'}"></image>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 商家列表 -->
		<view class="store-section">
			<scroll-view class="store-list-scroll" scroll-y @scrolltolower="loadMore">
				<view class="store-list">
					<!-- 加载中状态 -->
					<view class="empty-state" v-if="isLoading && filteredShopList.length === 0">
						<text class="empty-text">加载中...</text>
					</view>
					
					<!-- 无数据状态 -->
					<view class="empty-state" v-else-if="!isLoading && filteredShopList.length === 0">
						<text class="empty-text">暂无收藏的店铺</text>
					</view>
					
					<!-- 店铺列表 -->
					<uni-swipe-action>
						<uni-swipe-action-item v-for="(item, index) in filteredShopList" :key="item.shop_detail.merchant">
							<template #right>
								<view class="swipe_right" @click="del(item)">
									<image src="https://static.maxcang.com/appstatic/my/del-collect.png" mode="widthFix" class="del_pic"></image>
									<view>删除</view>
								</view>
							</template>
							<view class="store-item" @tap="toStoreDetail(item.shop_detail)">
								<image class="store-avatar" :src="item.shop_detail.avatar || 'https://static.maxcang.com/appstatic/default_shop.png'" mode="aspectFill"></image>
								<view class="store-info">
									<view class="store-header">
										<text class="store-name">{{ item.shop_detail.name }}</text>
																			<view class="store-badge" v-if="item.shop_detail.pay_cert_material_state === 2">
										<image class="certified-icon" src="https://static.maxcang.com/appstatic/discovery/certified_badge.png" mode="aspectFit"></image>
									</view>
									</view>
									<view class="store-rating-container">
										<view class="store-rating">
											<image class="star" v-for="n in 5" :key="n" src="https://static.maxcang.com/appstatic/discovery/star_icon.png" mode="aspectFit"></image>
											<text class="rating-text">4.9</text>
										</view>
										<view class="reward-badge">
											<text class="reward-number">{{ item.shop_detail.consume2coin_bit || '100' }}</text>
											<text class="reward-suffix">%赠送</text>
										</view>
									</view>
									<text class="store-address">{{ item.shop_detail.address }}</text>
								</view>
							</view>
						</uni-swipe-action-item>
					</uni-swipe-action>
					
					<!-- 加载更多状态 -->
					<view class="loading-status" v-if="filteredShopList.length > 0">
						<view class="loading-indicator" v-if="isLoading">
							<text>加载中...</text>
						</view>
						<view class="no-more-shops" v-if="count <= shopList.length && !isLoading && shopList.length > 0">
							<text>没有更多店铺了</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { favoriteShopsList } from '@/service/uer_profile.js'
import { getShopCategories } from '@/service/shop.js'
import { calculateDistances } from "@/utils/distanceSorting.js"
import { favoriteShopsDelete } from '@/service/uer_profile.js'
import { onReachBottom } from '@dcloudio/uni-app'

const toSettle = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_intro'
	})
}

const range = ref([])
onMounted(async()=>{
	getShopList()
	// 类目
	const {results} = await getShopCategories()
	const dealData = results.map(i=>{
		return {
			text: i.name,
			value: i.id,
			disable: false
		}
	})
	range.value = [{ text: "全部类目", value: '', disable: false }, ...dealData];
})

// 数据定义
const timeSort = ref('desc')  // 'asc' | 'desc' - 默认按时间倒序
const rewardSort = ref('')  // 'asc' | 'desc'
const categoryId = ref('')
const shopList = ref([])
const page = ref(1)
const count = ref(0)
const searchKeyword = ref('')
const isLoading = ref(false)

const {location} = uni.getStorageSync('address_info')

// 搜索功能
const onSearchInput = () => {
	// 重置页码和列表
	shopList.value = []
	page.value = 1
	// 延迟搜索以避免频繁请求
	clearTimeout(searchTimer.value)
	searchTimer.value = setTimeout(() => {
		getShopList()
	}, 500)
}

const searchTimer = ref(null)

// 筛选后的商家列表
const filteredShopList = computed(() => {
	let filtered = [...shopList.value]
	
	// 搜索过滤
	if (searchKeyword.value.trim()) {
		filtered = filtered.filter(item => 
			item.shop_detail.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
		)
	}
	
	return filtered
})

// 切换时间排序
const toggleTimeSort = () => {
	if (timeSort.value === 'desc') {
		timeSort.value = 'asc'
	} else {
		timeSort.value = 'desc'
	}
	rewardSort.value = ''  // 清除其他排序
	shopList.value = []
	page.value = 1
	getShopList()
}

// 切换赠送比例排序
const toggleRewardSort = () => {
	if (rewardSort.value === 'desc') {
		rewardSort.value = 'asc'
	} else {
		rewardSort.value = 'desc'
	}
	timeSort.value = ''  // 清除其他排序
	shopList.value = []
	page.value = 1
	getShopList()
}

const getShopList = async()=>{
	if (isLoading.value) return
	isLoading.value = true
	
	let ordering = ''
	if (rewardSort.value === 'asc') {
		ordering = 'shop__consume2coin_bit'
	} else if (rewardSort.value === 'desc') {
		ordering = '-shop__consume2coin_bit'
	} else if (timeSort.value === 'asc') {
		ordering = 'created_at'
	} else if (timeSort.value === 'desc') {
		ordering = '-created_at'
	}
	
	try {
		const res = await favoriteShopsList(categoryId.value, ordering, page.value)
		if (page.value === 1) {
			shopList.value = res.results
		} else {
			shopList.value = [...shopList.value, ...res.results]
		}
		count.value = res.count
	} catch (error) {
		console.log(error)
		uni.showToast({
			title: '加载失败',
			icon: 'none'
		})
	} finally {
		isLoading.value = false
	}
}

const category = ref('')
const changeRange = (e) => {
	categoryId.value = e
	shopList.value = []
	page.value = 1
	getShopList()
}

const del = async(item)=>{
	try {
		uni.showLoading({
			mask: true
		})
		await favoriteShopsDelete(item.shop_detail.favorited)
		uni.hideLoading();
		uni.showToast({
			title: '取消收藏',
			icon: 'none'
		})
		shopList.value = []
		page.value = 1
		getShopList()
	} catch (e) {
		uni.hideLoading()
		uni.showToast({
			title: e.data.detail,
			icon: 'none'
		})
	}
}

// 加载更多
const loadMore = () => {
	if (count.value > shopList.value.length && !isLoading.value) {
		page.value++
		getShopList()
	}
}

// 跳转到店铺详情
const toStoreDetail = (store) => {
	uni.navigateTo({
		url: '/pages/merchant/merchant_detail?phone=' + store.merchant
	})
}

onReachBottom(() => {
	loadMore()
})
</script>

<style lang="scss" scoped>
.collection-container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #F5F5F5;
}

/* 搜索和筛选器容器 */
.search_filter_container {
	width: 750rpx;
	height: 193rpx;
	display: flex;
	flex-direction: column;
}
/* 搜索框样式 */
.search_section {
	background-color: #fff;
	padding: 0 40rpx;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	
	.search_box {
		display: flex;
		align-items: center;
		width: 689rpx;
		height: 57rpx;
		background: #F8F8F8;
		border-radius: 28rpx 28rpx 28rpx 28rpx;
		padding: 0 30rpx;
		
		.search_icon {
			width: 25rpx;
			height: 25rpx;
			margin-left: 12rpx;
			opacity: 0.6;
		}
		
		.search_input {
			flex: 1;
			font-size: 24rpx;
			color: #919191;
			
			&::placeholder {
				font-size: 24rpx;
				color: #919191;
			}
		}
	}
}

/* 筛选器样式 */
.filter_section {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	padding: 0 40rpx;
	border-bottom: 1rpx solid #F5F5F5;
	flex: 1;
	
	.filter_item {
		display: flex;
		align-items: center;
		flex: 1;
		justify-content: center;
		
		&:first-child {
			justify-content: flex-start;
		}
		
		.filter_icon {
			width: 26rpx;
			height: 18rpx;
			margin-right: 10rpx;
		}
		
		.filter_text {
			font-size: 24rpx;
			color: #333;
			margin-right: 10rpx;
		}
		
		.sort_arrows {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 4rpx;
		}
		
		.arrow_icon {
			width: 20rpx;
			height: 10rpx;
			transition: all 0.3s;
			opacity: 0.4;
			
			&.active {
				opacity: 1;
			}
		}
	}
}

/* uni-data-select 样式重写 */
:deep(.uni-select) {
	border: none;
	padding: 0;
	
	.uni-select__input-box {
		height: fit-content;
		justify-content: flex-start;
	}
	
	.uni-select__input-placeholder,
	.uni-select__input-text {
		font-size: 24rpx;
		color: #333333;
	}
	
	.uni-select__input-placeholder {
		font-size: 24rpx;
		color: #333333;
	}
}

:deep(.uni-select__selector-item) {
	min-width: 160rpx;
	box-sizing: border-box;
	white-space: nowrap;
	text-align: center;
	padding-left: 24rpx;
	padding-right: 24rpx;
	font-size: 28rpx;
}

:deep(.uni-select__selector) {
	min-width: 160rpx;
}

/* 店铺列表区域 */
.store-section {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0 40rpx;
	min-height: 0;
	background-color: #F5F5F5;
}

/* 店铺列表样式 */
.store-list-scroll {
	flex: 1;
}

.store-list {
	display: flex;
	flex-direction: column;
	gap: 9rpx;
	padding: 12rpx 0 40rpx 0;
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

.loading-indicator, .no-more-shops {
	font-size: 28rpx;
	color: #999;
}

/* 滑动删除样式 */
:deep(.uni-swipe_text--center) {
	margin-bottom: 18rpx;
}

.swipe_right {
	width: 190rpx;
	background: #FD2E42;
	font-size: 21rpx;
	color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	
	.del_pic {
		width: 48rpx;
		height: 1px;
		margin-bottom: 10rpx;
	}
}
</style>
