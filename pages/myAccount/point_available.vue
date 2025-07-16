<template>
	<view class="page">
		<!-- 顶部橙色背景区域 -->
		<view class="top-section">
		
			
			<!-- 积分显示区域 -->
			<view class="point-display">
				<view class="point-label">
					<text>当前D9能量</text>
					<image src="https://static.maxcang.com/appstatic/my/energy_point/info_icon.png" class="info-icon"></image>
				</view>
				<view class="point-value">{{ formatPoints(redPoint) }}</view>
				
				<!-- 昨日和本月获得能量 -->
				<view class="point-stats">
					<view class="stat-item">
						<text class="stat-label">昨日获得能量</text>
						<text class="stat-value">+1.23401</text>
					</view>
					<view class="stat-item">
						<text class="stat-label">本月获得能量</text>
						<text class="stat-value">+1,000.23103</text>
					</view>
				</view>
				<!-- 按钮组 -->
				<view class="button-group">
					<view class="energy-btn recharge-btn" @click="toRechargePoint">
						充值D9能量
					</view>
					<view class="energy-btn withdraw-btn" @click="toWithdrawPoint">
						提取D9能量
					</view>
				
				</view>
			</view>
		</view>
		
		<!-- 功能卡片区域 -->
		<view class="content">
			<!-- 功能按钮 -->
			<view class="function-cards">
				<view class="function-card" @click="toWithdrawRecord">
					<image src="https://static.maxcang.com/appstatic/my/energy_point/energy_record_icon.png" class="card-icon"></image>
					<text class="card-text">能量记录</text>
					<image src="/static/myAccount/right_arrow_gray.png" class="card-arrow"></image>
				</view>
				<view class="function-card" @click="toStrategy">
					<image src="https://static.maxcang.com/appstatic/my/energy_point/energy_strategy_icon.png" class="card-icon"></image>
					<text class="card-text">D9能量攻略</text>
					<image src="/static/myAccount/right_arrow_gray.png" class="card-arrow"></image>
				</view>
			</view>
		</view>
		
		<pointsTipspop ref="tipsPop"></pointsTipspop>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAllPoint } from '../../service/point';
import { onShow } from '@dcloudio/uni-app'

onMounted(()=>{
	const isShowPointsTipspop = uni.getStorageSync('isShowPointsTipspop')
	if (isShowPointsTipspop!==1) {
		tipsPop.value.open()
		uni.setStorageSync('isShowPointsTipspop', 1)
	}
})

onShow(()=>{
	getPoint()
})

const tipsPop = ref()
const redPoint = ref(10000.9293) // 示例数据
const pointsAccount = ref('')

const getPoint = async()=>{
	const { red_points, points_account } = await getAllPoint()
	redPoint.value = red_points
	pointsAccount.value = points_account
}

// 格式化积分显示
const formatPoints = (points) => {
	if (!points) return '0'
	return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const goBack = () => {
	uni.navigateBack()
}

const openPop = ()=>{
	tipsPop.value.open()
}

const toWithdrawPoint = ()=>{
	if (redPoint.value==0) return uni.showToast({
		icon: 'none',
		title: '暂无可提取积分'
	})
	uni.navigateTo({
		url: '/pages/myAccount/red_point_withdraw'
	})
}

const toRechargePoint = ()=>{
	// 跳转到充值D9能量页面
	uni.navigateTo({
		url: '/pages/myAccount/exchange_point_step_1'
	})
}

const toWithdrawRecord = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/red_point_withdraw_record'
	})
}

const toStrategy = () => {
	// 跳转到D9能量攻略页面
	uni.showToast({
		icon: 'none',
		title: '功能开发中'
	})
}

const toBindPointAccount = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/bind_account'
	})
}

const toStepOne = ()=>{
	if (!pointsAccount.value) {
		toBindPointAccount()
		return
	}
	uni.navigateTo({
		url: '/pages/myAccount/exchange_point_step_1'
	})
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	min-height: 100vh;
	background-image: url('https://static.maxcang.com/appstatic/my/energy_point/top_background.png');
	background-size: cover;
	background-position: center -180rpx;
	background-repeat: no-repeat;
	background-attachment: fixed;
}

/* 顶部橙色背景区域 */
.top-section {
	position: relative;
	padding-bottom: 100rpx;
	overflow: hidden;
}

/* 自定义导航栏 */
.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 88rpx 30rpx 0;
	height: 180rpx;
	
	.nav-back, .nav-placeholder {
		width: 60rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.back-icon {
		width: 24rpx;
		height: 24rpx;
		transform: rotate(180deg);
	}
	
	.nav-title {
		font-size: 36rpx;
		font-weight: bold;
		color: #FFFFFF;
	}
}

/* 积分显示区域 */
.point-display {
	padding: 40rpx 60rpx;
	text-align: center;
	color: #FFFFFF;
	
	.point-label {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 30rpx;
		
		text {
			font-size: 28rpx;
			opacity: 0.9;
		}
		
		.info-icon {
			width: 24rpx;
			height: 24rpx;
			margin-left: 10rpx;
		}
	}
	
	.point-value {
		font-size: 72rpx;
		font-weight: bold;
		margin-bottom: 60rpx;
		line-height: 1;
	}
	
	.point-stats {
		display: flex;
		justify-content: space-between;
		margin-bottom: 60rpx;
		
		.stat-item {
			flex: 1;
			text-align: center;
			
			.stat-label {
				font-size: 24rpx;
				opacity: 0.8;
				display: block;
				margin-bottom: 10rpx;
			}
			
			.stat-value {
				font-size: 24rpx;
				font-weight: bold;
			}
		}
	}
	
	.button-group {
		display: flex;
		justify-content: center;
		align-items: center;
		/* H5和小程序兼容性 */
		/* #ifdef H5 */
		gap: 30rpx;
		/* #endif */
		
		.energy-btn {
			width: 240rpx;
			height: 81rpx;
			border-radius: 40rpx;
			font-size: 28rpx;
			font-weight: 500;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.1);
			transition: all 0.3s ease;
			
			/* 小程序使用margin代替gap */
			/* #ifndef H5 */
			margin-right: 30rpx;
			/* #endif */
			
			&:last-child {
				margin-right: 0;
			}
			
			&:active {
				transform: scale(0.95);
			}
		}
		
		.withdraw-btn {
			background: #FFFFFF;
			color: #FC5908;
			border: 2rpx solid #FC5908;
		}
		
		.recharge-btn {
			background: #FC5908;
			color: #FFFFFF;
			border: 2rpx solid #FC5908;
		}
	}
}

/* 内容区域 */
.content {
	padding: 40rpx 30rpx;
}

/* 功能卡片 */
.function-cards {
	display: flex;
	justify-content: space-between;
	gap: 20rpx;
	margin-bottom: 60rpx;
}

.function-card {
	width: 339rpx;
	height: 101rpx;
	background: #FFFFFF;
	border-radius: 30rpx;
	border: 2rpx solid #FC5908;
	padding: 31rpx 39rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.06);
	
	.card-icon {
		width: 41rpx;
		height: 41rpx;
	}
	
	.card-text {
		font-size: 24rpx;
		color: #333333;
		font-weight: 500;
		flex: 1;
		margin-left: 20rpx;
	}
	
	.card-arrow {
		width: 10rpx;
		height: 17rpx;
	}
}
</style>
