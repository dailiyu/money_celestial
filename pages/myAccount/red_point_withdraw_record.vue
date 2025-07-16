<template>
	<view class="points-record-page flex-col">
		<!-- 波浪装饰背景图 -->
		<image
			class="wave-decoration-bg"
			src="https://static.maxcang.com/appstatic/my/energy_point/energy_record_background.png"
			mode="widthFix"
			style="top: -88rpx;"
		/>
		<!-- 主要内容区域 -->
		<view class="main-content-area flex-col">
			<!-- 积分展示区域 -->
			<view class="points-display-area flex-col">
				<!-- 积分标题和信息图标 -->
				<view class="points-header flex-row justify-between">
					<text class="current-points-label">当前D9能量</text>
					<image
						class="info-help-icon"
						src="https://static.maxcang.com/appstatic/my/energy_point/exclamation_icon.png"
						mode="aspectFit"
					/>
				</view>
				<text class="total-points-number">{{pointData.red_points || '0'}}</text>
			</view>
			
			<!-- 标签页和记录列表容器 -->
			<view class="tabs-and-records-container flex-col">
				<!-- 筛选标签页区域 -->
				<view class="filter-tabs-area flex-col justify-end">
					<view class="tabs-navigation flex-row justify-between">
						<view class="single-tab-wrapper flex-col" @click="tabIndex=0; handleTabChange()">
							<text class="tab-text" :class="{selected: tabIndex===0}">全部</text>
							<view class="active-indicator-line" v-show="tabIndex===0"></view>
						</view>
						<view class="single-tab-wrapper flex-col" @click="tabIndex=1; handleTabChange()">
							<text class="tab-text" :class="{selected: tabIndex===1}">获得</text>
							<view class="active-indicator-line" v-show="tabIndex===1"></view>
						</view>
						<view class="single-tab-wrapper flex-col" @click="tabIndex=2; handleTabChange()">
							<text class="tab-text" :class="{selected: tabIndex===2}">消耗</text>
							<view class="active-indicator-line" v-show="tabIndex===2"></view>
						</view>
					</view>
				</view>
				<!-- 交易记录列表 -->
				<scroll-view 
					class="transaction-records-list flex-col"
					scroll-y="true"
					@scrolltolower="loadMore"
					refresher-enabled="true"
					:refresher-triggered="refreshing"
					@refresherrefresh="onRefresh"
				>
					<!-- 加载状态 -->
					<view v-if="loading && transactionsList.length === 0" class="loading-state flex-col">
						<text class="loading-text">加载中...</text>
					</view>
					
					<!-- 空状态 -->
					<view v-else-if="!loading && transactionsList.length === 0" class="empty-state flex-col">
						<text class="empty-text">暂无交易记录</text>
					</view>
					
					<!-- 交易记录列表 -->
					<view
						v-else
						class="transaction-record-card flex-col"
						v-for="(item, index) in filteredList"
						:key="item.originalData?.transaction_id || index"
					>
						<view class="card-top-row flex-row justify-between">
							<text class="merchant-or-action-name">{{item.lanhutext0}}</text>
							<text class="transaction-status">{{item.lanhutext1}}</text>
						</view>
						<view class="card-middle-row flex-row justify-between">
							<text class="transaction-type-desc">{{item.lanhutext2}}</text>
							<text class="points-change-amount" :style="{color: item.lanhufontColor3}">{{item.lanhutext3}}</text>
						</view>
						<view class="card-bottom-row flex-row justify-between">
							<text class="transaction-datetime">{{item.lanhutext4}}</text>
							<text class="equivalent-value">{{item.lanhutext5}}</text>
						</view>
					</view>
					
					<!-- 加载更多 -->
					<view v-if="loading && transactionsList.length > 0" class="loading-more flex-col">
						<text class="loading-text">加载更多...</text>
					</view>
					
					<!-- 没有更多数据 -->
					<view v-else-if="!hasMore && transactionsList.length > 0" class="no-more flex-col">
						<text class="no-more-text">没有更多数据了</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getAllPoint, getPointsTransactions } from '@/service/point.js'

const tabIndex = ref(0)
const pointData = ref({})
const transactionsList = ref([])
const loading = ref(false)
const currentPage = ref(1)
const hasMore = ref(true)
const refreshing = ref(false)

// 获取积分数据
const getPointInfo = async () => {
	try {
		const res = await getAllPoint()
		pointData.value = res
	} catch (error) {
		console.error('获取积分数据失败:', error)
	}
}

// 获取能量交易记录
const getTransactions = async (page = 1, append = false) => {
	try {
		loading.value = true
		
		// 根据当前选中的标签页设置交易类型
		let transactionType = null
		if (tabIndex.value === 1) {
			transactionType = 'increase' // 获得
		} else if (tabIndex.value === 2) {
			transactionType = 'decrease' // 消耗
		}
		
		const params = {
			page: page,
			page_size: 10,
			transaction_method: 'red_points', // 红积分/能量
			ordering: '-created_at' // 按创建时间倒序
		}
		
		// 如果选择了特定类型，添加交易类型参数
		if (transactionType) {
			params.transaction_type = transactionType
		}
		
		const response = await getPointsTransactions(params)
		
		// 处理分页数据
		if (append) {
			transactionsList.value = [...transactionsList.value, ...response.results]
		} else {
			transactionsList.value = response.results
		}
		
		// 更新分页状态
		hasMore.value = !!response.next
		currentPage.value = page
		
	} catch (error) {
		console.error('获取交易记录失败:', error)
		uni.showToast({
			title: '获取记录失败',
			icon: 'none'
		})
	} finally {
		loading.value = false
	}
}

// 映射API数据到页面显示格式
const mapTransactionData = (apiData) => {
	return apiData.map(item => {
		// 根据交易类型设置显示内容
		const isIncrease = item.transaction_type === 'increase'
		const amount = Math.abs(item.transaction_amount)
		
		// 处理point_account的脱敏显示
		let displayAccount = ''
		if (item.point_account && item.point_account.length > 10) {
			// 显示前四位和后六位，中间用*****省略
			const prefix = item.point_account.substring(0, 4)
			const suffix = item.point_account.substring(item.point_account.length - 6)
			displayAccount = `${prefix}*****${suffix}`
		} else if (item.point_account) {
			// 如果账号长度不够，直接显示原账号
			displayAccount = item.point_account
		}
		
		return {
			lanhutext0: item.transaction_remark || '能量交易',
			lanhutext1: item.is_processed ? '已到账' : '处理中',
			lanhutext2: displayAccount, // 脱敏后的账户信息
			lanhutext3: `${isIncrease ? '+' : '-'}${amount.toFixed(2)}`,
			lanhufontColor3: isIncrease ? 'rgba(255,107,53,1)' : 'rgba(205,78,69,1)', // 能量使用橙色
			lanhutext4: formatDateTime(item.created_at),
			lanhutext5: `价值：$${(amount * 0.27).toFixed(2)}`, // 假设1能量=0.27美元
			type: isIncrease ? 'add' : 'sub',
			originalData: item // 保存原始数据
		}
	})
}

// 格式化日期时间
const formatDateTime = (dateString) => {
	const date = new Date(dateString)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')
	const seconds = String(date.getSeconds()).padStart(2, '0')
	
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

// 监听标签页变化
const handleTabChange = () => {
	currentPage.value = 1
	hasMore.value = true
	getTransactions(1, false)
}

// 计算过滤后的列表
const filteredList = computed(() => {
	return mapTransactionData(transactionsList.value)
})

// 下拉刷新
const onRefresh = async () => {
	refreshing.value = true
	currentPage.value = 1
	hasMore.value = true
	await getTransactions(1, false)
	refreshing.value = false
}

// 上拉加载更多
const loadMore = () => {
	if (hasMore.value && !loading.value && !refreshing.value) {
		currentPage.value++
		getTransactions(currentPage.value, true)
	}
}

onMounted(() => {
	getPointInfo()
	getTransactions(1, false)
})
</script>

<style lang="scss" scoped>
.points-record-page {
	position: relative;
	width: 750rpx;
	min-height: 100vh;
	overflow: hidden;
	background: #f8f8f8;

	.wave-decoration-bg {
		position: absolute;
		left: 0;
		top: -88rpx;
		width: 750rpx;
		height: 300rpx;
		z-index: 1;
	}
	.main-content-area {
		position: absolute;
		left: 0;
		top: 0;
		width: 750rpx;
		min-height: 100vh;
		z-index: 3;
		.points-display-area {
			position: absolute;
			top: 60rpx;
			left: 0;
			width: 100%;
			align-items: center;
			z-index: 3;
			.points-header {
				height: 24rpx;
				margin: 0 auto;
				align-items: center;
				.current-points-label {
					font-size: 24rpx;
					color: #fff;
				}
				.info-help-icon {
					width: 22rpx;
					height: 22rpx;
					margin-left: 10rpx;
				}
			}
			.total-points-number {
				width: 100%;
				color: #fff;
				font-size: 60rpx;
				font-weight: 700;
				text-align: center;
				margin: 30rpx 0 0 0;
			}
		}
		.tabs-and-records-container {
			width: 750rpx;
			margin-top: 250rpx;
			position: relative;
			z-index: 4;
			.filter-tabs-area {
				min-height: 113rpx;
				background: #fff;
				border-radius: 40rpx 40rpx 0 0;
				margin-top: 50rpx;
				width: 750rpx;
				.tabs-navigation {
					width: 650rpx;
					margin: 30rpx auto 0 auto;
					.single-tab-wrapper {
						position: relative;
						align-items: center;
						flex: 1;
						min-width: 200rpx;
						.tab-text {
							font-size: 30rpx;
							color: #919191;
							font-weight: normal;
							text-align: center;
							white-space: nowrap;
							line-height: 27rpx;
							cursor: pointer;
						}
						.selected {
							color: #FF6B35;
							font-weight: 400;
							font-size: 30rpx;
						}
						.active-indicator-line {
							width: 209rpx;
							height: 8rpx;
							background: #FF6B35;
							border-radius: 4rpx;
							margin-top: 38rpx;
							flex-shrink: 0;
						}
					}
				}
			}
			.transaction-records-list {
				width: 692rpx;
				margin: 30rpx auto 0 auto;
				height: calc(100vh - 400rpx); // 设置固定高度
				overflow-y: auto;
				
				.loading-state, .loading-more, .empty-state, .no-more {
					min-height: 100rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					
					.loading-text, .empty-text, .no-more-text {
						font-size: 28rpx;
						color: #999;
					}
				}
				
				.transaction-record-card {
					background-color: #fff;
					border-radius: 30rpx;
					min-height: 120rpx;
					margin-bottom: 15rpx;
					width: 692rpx;
					box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.03);
					.card-top-row {
						width: 595rpx;
						margin: 20rpx 0 0 47rpx;
						display: flex;
						align-items: center;
						.merchant-or-action-name {
							font-size: 24rpx;
							color: #333;
							font-weight: 500;
						}
						.transaction-status {
							font-size: 21rpx;
							color: #a7a7a7;
							font-weight: 300;
							margin-left: auto;
						}
					}
					.card-middle-row {
						width: 596rpx;
						margin: 16rpx 0 0 47rpx;
						display: flex;
						align-items: center;
						.transaction-type-desc {
							font-size: 24rpx;
							color: #a7a7a7;
						}
						.points-change-amount {
							font-size: 30rpx;
							font-weight: 700;
							margin-left: auto;
						}
					}
					.card-bottom-row {
						width: 597rpx;
						margin: 12rpx 0 20rpx 46rpx;
						display: flex;
						align-items: center;
						.transaction-datetime {
							font-size: 18rpx;
							color: #a7a7a7;
							margin-top: 5rpx;
						}
						.equivalent-value {
							font-size: 21rpx;
							color: #a7a7a7;
							margin-left: auto;
						}
					}
				}
			}
		}
	}
}

.flex-col {
	display: flex;
	flex-direction: column;
}
.flex-row {
	display: flex;
	flex-direction: row;
}
.justify-between {
	justify-content: space-between;
}
</style>
