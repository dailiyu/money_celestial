<template>
	<view class="store-search-page">
		<!-- 顶部橙色背景区域 -->
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
			
			<!-- 搜索框区域 -->
			<view class="search-section">
				<view class="search-input-wrapper">
					<image src="https://img.icons8.com/ios/50/search.png" class="search-icon"></image>
					<input 
						class="search-input" 
						placeholder="搜索商家" 
						v-model="searchKeyword"
						@input="onSearchInput"
						@confirm="onSearch"
						confirm-type="search"
						focus
					/>
					<view class="clear-btn" v-if="searchKeyword" @click="clearSearch">
						<image src="/static/common/close_icon.png" class="clear-icon"></image>
					</view>
				</view>
				<text class="cancel-btn" @click="goBack">取消</text>
			</view>
		</view>

		<!-- 搜索内容区 -->
		<view class="search-content">
			<!-- 搜索建议 -->
			<view class="search-suggestions" v-if="showSuggestions && suggestions.length > 0">
				<view 
					class="suggestion-item" 
					v-for="(item, index) in suggestions" 
					:key="index"
					@click="selectSuggestion(item)"
				>
					<image src="https://img.icons8.com/ios/50/search.png" class="suggestion-icon"></image>
					<text class="suggestion-text">{{ item }}</text>
				</view>
			</view>

			<!-- 搜索历史 -->
			<view class="search-history-section" v-if="!showSuggestions && !showResults">
				<!-- 搜索历史 -->
				<view class="history-section" v-if="searchHistory.length > 0">
					<view class="section-header">
						<text class="section-title">搜索历史</text>
						<view class="clear-history-btn" @click="clearHistory">
							<image src="/static/common/trash_icon.png" class="trash-icon"></image>
						</view>
					</view>
					<view class="history-tags">
						<view 
							class="history-tag" 
							v-for="(item, index) in searchHistory" 
							:key="index"
							@click="selectHistory(item)"
						>
							{{ item }}
						</view>
					</view>
				</view>
			</view>

			<!-- 搜索结果 -->
			<view class="search-results" v-if="showResults">
				<view class="results-header">
					<text class="results-count">找到{{ storeList.length }}家店铺</text>
				</view>
				
				<view class="store-list">
					<view 
						class="store-item" 
						v-for="(store, index) in storeList" 
						:key="store.id || index"
						@click="goToStore(store)"
					>
						<image class="store-avatar" :src="store.avatar || 'https://static.maxcang.com/appstatic/default_shop.png'" mode="aspectFill"></image>
						<view class="store-info">
							<view class="store-header">
								<text class="store-name">{{ store.name }}</text>
															<view class="store-badge" v-if="store.pay_cert_material_state === 2">
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
				</view>

				<!-- 搜索加载状态 -->
				<view class="loading-state" v-if="isSearching">
					<view class="loading-spinner"></view>
					<text class="loading-text">正在搜索...</text>
				</view>

				<!-- 无搜索结果 -->
				<view class="no-results" v-if="storeList.length === 0 && hasSearched && !isSearching">
					<image src="/static/common/no_result_icon.png" class="no-result-icon"></image>
					<text class="no-result-text">未找到相关店铺</text>
					<text class="no-result-tip">换个关键词试试吧</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import CityPicker from "@/components/cityPicker/cityPicker.vue"
import { getCityShopList } from '@/service/shop'

// 响应式数据
const searchKeyword = ref('')
const suggestions = ref([])
const searchHistory = ref([])
const storeList = ref([])
const hasSearched = ref(false)
const isSearching = ref(false)
const currentCity = ref('') // 当前城市

// 防抖定时器
let debounceTimer = null

// 计算属性
const showSuggestions = computed(() => {
	return false // 不再显示搜索建议
})

const showResults = computed(() => {
	return hasSearched.value
})

// 页面加载
onMounted(() => {
	loadSearchHistory()
	loadCurrentCity()
})

onShow(() => {
	// 页面显示时的逻辑
	loadCurrentCity()
})

// 方法
const goBack = () => {
	uni.navigateBack({
		delta: 1
	})
}

const clearSearch = () => {
	searchKeyword.value = ''
	suggestions.value = []
	hasSearched.value = false
	storeList.value = []
}

const onSearchInput = (e) => {
	const value = e.detail.value
	searchKeyword.value = value
	
	// 清除之前的防抖定时器
	if (debounceTimer) {
		clearTimeout(debounceTimer)
	}
	
	if (value.length === 0) {
		suggestions.value = []
		hasSearched.value = false
		storeList.value = []
	} else {
		// 使用防抖，避免频繁调用搜索API
		debounceTimer = setTimeout(() => {
			performSearch(value)
		}, 500) // 500ms防抖，给用户足够时间输入
	}
}

const onSearch = () => {
	if (searchKeyword.value.trim()) {
		performSearch(searchKeyword.value.trim(), true)
	}
}

const selectSuggestion = (suggestion) => {
	searchKeyword.value = suggestion
	performSearch(suggestion, true)
}

const selectHistory = (historyItem) => {
	searchKeyword.value = historyItem
	performSearch(historyItem, true)
}

const performSearch = async (keyword, addToHistoryFlag = false) => {
	if (!keyword.trim()) return
	
	isSearching.value = true
	hasSearched.value = true
	suggestions.value = []
	
	// 只有在主动搜索时才添加到搜索历史
	if (addToHistoryFlag) {
		addToHistory(keyword)
	}
	
	try {
		const results = await searchStores(keyword)
		storeList.value = results
		
		// 只有在主动搜索且没有结果时才显示提示
		if (results.length === 0 && addToHistoryFlag) {
			uni.showToast({
				title: '未找到相关店铺',
				icon: 'none'
			})
		}
	} catch (error) {
		console.error('搜索失败:', error)
		// 只有在主动搜索时才显示错误提示
		if (addToHistoryFlag) {
			uni.showToast({
				title: '搜索失败，请重试',
				icon: 'none'
			})
		}
		storeList.value = []
	} finally {
		isSearching.value = false
	}
}

// 移除getSuggestions函数，不再需要

const searchStores = async (keyword) => {
	try {
		const params = {
			q: keyword
		}
		
		// 添加城市筛选参数
		if (currentCity.value) {
			params.name = currentCity.value
		}
		
		const response = await getCityShopList(params)
		console.log('搜索API原始响应:', response)
		
		// 处理不同的响应格式
		let rawData = []
		if (Array.isArray(response)) {
			rawData = response
		} else if (response.results && Array.isArray(response.results)) {
			rawData = response.results
		} else if (response.data && Array.isArray(response.data)) {
			rawData = response.data
		} else {
			console.log('未知的响应格式:', response)
			return []
		}
		
		console.log('处理后的原始数据:', rawData)
		
		// 将API返回的店铺数据转换为展示格式
		const formattedStores = rawData.map(store => {
			console.log('处理单个店铺数据:', store)
			
			// 获取店铺头像图片
			const avatarImage = store.images?.find(img => img.image_type === 'avatar')
			
			const formattedStore = {
				id: store.id,
				merchant: store.merchant,
				name: store.name || store.shop_name || '未知店铺',
				avatar: avatarImage?.image_url || 'https://static.maxcang.com/appstatic/default_shop.png',
				address: store.address || store.city || '地址未知',
				rating: store.rating || '4.9',
				consume2coin_bit: store.consume2coin_bit || '100',
				categories: store.categories || []
			}
			
			console.log('格式化后的店铺数据:', formattedStore)
			return formattedStore
		})
		
		console.log('最终返回的店铺列表:', formattedStores)
		return formattedStores
	} catch (error) {
		console.error('搜索店铺失败:', error)
		return []
	}
}

const addToHistory = (keyword) => {
	// 移除重复项
	const index = searchHistory.value.indexOf(keyword)
	if (index > -1) {
		searchHistory.value.splice(index, 1)
	}
	
	// 添加到开头
	searchHistory.value.unshift(keyword)
	
	// 限制历史记录数量
	if (searchHistory.value.length > 10) {
		searchHistory.value = searchHistory.value.slice(0, 10)
	}
	
	// 保存到本地存储
	uni.setStorageSync('storeSearchHistory', searchHistory.value)
}

const loadSearchHistory = () => {
	const history = uni.getStorageSync('storeSearchHistory')
	if (history && Array.isArray(history)) {
		searchHistory.value = history
	}
}

const clearHistory = () => {
	uni.showModal({
		title: '提示',
		content: '确定要清空搜索历史吗？',
		success: (res) => {
			if (res.confirm) {
				searchHistory.value = []
				uni.removeStorageSync('storeSearchHistory')
			}
		}
	})
}

const goToStore = (store) => {
	// 跳转到店铺详情页
	uni.navigateTo({
		url: `/pages/merchant/merchant_detail?phone=${store.merchant}`
	})
}

// 加载当前城市
const loadCurrentCity = () => {
	const city = uni.getStorageSync("city")
	if (city) {
		currentCity.value = city
		console.log('当前城市:', currentCity.value)
	}
}

const bindCityChange = (e) => {
	uni.setStorageSync("city", e.city);
	currentCity.value = e.city
	console.log('城市已切换为:', currentCity.value)
	
	// 如果当前有搜索关键词，重新搜索
	if (searchKeyword.value.trim()) {
		performSearch(searchKeyword.value.trim(), false)
	}
}
</script>

<style lang="scss" scoped>
.store-search-page {
	background: #F5F5F5;
	min-height: 100vh;
}

/* 顶部橙色背景区域 */
.header-container {
	width: 750rpx;
	background: radial-gradient(#FD8F36 0%, #FC5908 100%);
	border-radius: 0rpx 0rpx 40rpx 40rpx;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	padding: 128rpx 40rpx 40rpx;
}

.header-content {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40rpx;
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

.search-section {
	display: flex;
	align-items: center;
	gap: 20rpx;
}

.search-input-wrapper {
	flex: 1;
	display: flex;
	align-items: center;
	background: #FFFFFF;
	border-radius: 40rpx;
	padding: 20rpx 30rpx;
	
	.search-icon {
		width: 32rpx;
		height: 32rpx;
		margin-right: 20rpx;
		opacity: 0.6;
	}
	
	.search-input {
		flex: 1;
		font-size: 28rpx;
		color: #333333;
		border: none;
		outline: none;
	}
	
	.clear-btn {
		margin-left: 20rpx;
		
		.clear-icon {
			width: 32rpx;
			height: 32rpx;
		}
	}
}

.cancel-btn {
	font-size: 28rpx;
	color: #FFFFFF;
}

/* 搜索内容 */
.search-content {
	padding: 30rpx;
	margin-top: 280rpx;
}

/* 搜索建议 */
.search-suggestions {
	background: #FFFFFF;
	border-radius: 20rpx;
	overflow: hidden;
}

.suggestion-item {
	display: flex;
	align-items: center;
	padding: 30rpx;
	border-bottom: 1rpx solid #F5F5F5;
	
	&:last-child {
		border-bottom: none;
	}
	
	.suggestion-icon {
		width: 32rpx;
		height: 32rpx;
		margin-right: 20rpx;
	}
	
	.suggestion-text {
		font-size: 28rpx;
		color: #333333;
	}
}

/* 搜索历史区域 */
.search-history-section {
	.history-section {
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 30rpx;
		margin-bottom: 30rpx;
	}
	
	.section-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 30rpx;
		
		.section-title {
			font-size: 28rpx;
			font-weight: 500;
			color: #333333;
		}
		
		.clear-history-btn {
			.trash-icon {
				width: 32rpx;
				height: 32rpx;
			}
		}
	}
	
	.history-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 20rpx;
	}
	
	.history-tag {
		background: #F5F5F5;
		border-radius: 30rpx;
		padding: 16rpx 32rpx;
		font-size: 26rpx;
		color: #666666;
	}
}

/* 搜索结果 */
.search-results {
	margin-top: 30rpx;
	.results-header {
		margin-bottom: 30rpx;
		
		.results-count {
			font-size: 26rpx;
			color: #666666;
		}
	}
}

.store-list {
	display: flex;
	flex-direction: column;
	gap: 9rpx;
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

/* 加载状态 */
.loading-state {
	text-align: center;
	padding: 100rpx 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20rpx;
}

.loading-spinner {
	width: 60rpx;
	height: 60rpx;
	border: 6rpx solid #f3f3f3;
	border-top: 6rpx solid #FC5908;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

.loading-text {
	font-size: 28rpx;
	color: #666666;
}

@keyframes spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}

/* 无结果 */
.no-results {
	text-align: center;
	padding: 100rpx 0;
	
	.no-result-icon {
		width: 120rpx;
		height: 120rpx;
		margin-bottom: 30rpx;
	}
	
	.no-result-text {
		font-size: 28rpx;
		color: #666666;
		display: block;
		margin-bottom: 10rpx;
	}
	
	.no-result-tip {
		font-size: 24rpx;
		color: #999999;
	}
}

/* CityPicker 组件样式覆盖 */
:deep(.uni-input) {
	color: white !important;
	font-size: 28rpx !important;
	border: none !important;
}
</style> 