<template>
	<view class="page">
		<!-- 顶部绿色背景区域 -->
		<view class="top-section">
			
			
			<!-- 积分显示区域 -->
			<view class="point-display">
				<view class="point-label">
					<text>当前绿色积分</text>
					<image src="https://static.maxcang.com/appstatic/my/green_point/info_icon.png" class="info-icon"></image>
				</view>
				<view class="point-value">{{ formatPoints(greenPoints) }}</view>
				
				<!-- 昨日和本月获得积分 -->
				<view class="point-stats">
					<view class="stat-item">
						<text class="stat-label">昨日获得积分</text>
						<text class="stat-value">+{{ formatPoints(yesterdayGreenPoints) }}</text>
					</view>
					<view class="stat-item">
						<text class="stat-label">本月获得积分</text>
						<text class="stat-value">+{{ formatPoints(monthGreenPoints) }}</text>
					</view>
				</view>
				<!-- 提取积分按钮 -->
				<view class="withdraw-btn" @click="toWithdrawPoint">
					提取积分
				</view>
			</view>
		</view>
		
		<!-- 功能卡片区域 -->
		<view class="content">
			<!-- 功能按钮 -->
			<view class="function-cards">
				<view class="function-card" @click="toWithdrawRecord">
					<image src="https://static.maxcang.com/appstatic/my/green_point/point_record_icon.png" class="card-icon"></image>
					<text class="card-text">积分记录</text>
					<image src="https://static.maxcang.com/appstatic/my/green_point/gray_arrow_icon.png" class="card-arrow"></image>
				</view>
				<view class="function-card" @click="toStrategy">
					<image src="https://static.maxcang.com/appstatic/my/green_point/green_strategy_icon.png" class="card-icon"></image>
					<text class="card-text">绿色积分攻略</text>
					<image src="https://static.maxcang.com/appstatic/my/green_point/gray_arrow_icon.png" class="card-arrow"></image>
				</view>
			</view>
			
			<!-- 赚积分区域 -->
			<view class="earn-section">
				<!-- 赚积分标题 -->
				<view class="earn-title">赚积分</view>
				
				<!-- 赚积分卡片 -->
				<view class="earn-cards">
					<view class="earn-card">
						<view class="earn-card-left">
							<image src="https://static.maxcang.com/appstatic/my/green_point/reward_icon.png" class="earn-icon"></image>
							<view class="earn-text">
								<text class="earn-name">消费送积分</text>
								<text class="earn-desc">积分自动返账</text>
							</view>
						</view>
					</view>
					
					<view class="earn-card">
						<view class="earn-card-left">
							<image src="https://static.maxcang.com/appstatic/my/green_point/new_icon.png" class="earn-icon"></image>
							<view class="earn-text">
								<text class="earn-name">新店有惊喜</text>
								<text class="earn-desc">首次消费奖励多</text>
							</view>
						</view>
					</view>
					
					<view class="earn-card">
						<view class="earn-card-left">
							<image src="https://static.maxcang.com/appstatic/my/green_point/invite_icon.png" class="earn-icon"></image>
							<view class="earn-text">
								<text class="earn-name">邀请送积分</text>
								<text class="earn-desc">好友消费你得分</text>
							</view>
						</view>
					</view>
					
					<view class="earn-card">
						<view class="earn-card-left">
							<image src="https://static.maxcang.com/appstatic/my/green_point/checkin_icon.png" class="earn-icon"></image>
							<view class="earn-text">
								<text class="earn-name">签到得积分</text>
								<text class="earn-desc">坚持也有好奖励</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAllPoint } from '@/service/point';
import { onShow } from '@dcloudio/uni-app'

onShow(()=>{
	getPoint()
})

const pointsAccount = ref('')
const greenPoints = ref(0)
const yesterdayGreenPoints = ref(0)
const monthGreenPoints = ref(0)

const getPoint = async()=>{
	const { points_account, green_points, yesterday_green_points, month_green_points } = await getAllPoint()
	pointsAccount.value = points_account
	greenPoints.value = green_points
	yesterdayGreenPoints.value = yesterday_green_points || 0
	monthGreenPoints.value = month_green_points || 0
}

// 格式化积分显示
const formatPoints = (points) => {
	if (!points) return '0'
	return Number(points).toFixed(4)
}

const goBack = () => {
	uni.navigateBack()
}

const toWithdrawPoint = ()=>{
	if (greenPoints.value==0) return uni.showToast({
		icon: 'none',
		title: '暂无可提取积分'
	})
	uni.navigateTo({
		url: '/pages/myAccount/green_point_withdraw'
	})
}

const toWithdrawRecord = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/green_point_withdraw_record'
	})
}

const toStrategy = () => {
	// 跳转到绿色积分攻略页面
	uni.showToast({
		icon: 'none',
		title: '功能开发中'
	})
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	min-height: 100vh;
	background-image: url('https://static.maxcang.com/appstatic/my/green_point/top_background.png');
	background-size: cover;
	background-position: center -180rpx;
	background-repeat: no-repeat;
	background-attachment: fixed;
}

/* 顶部绿色背景区域 */
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
	
	.withdraw-btn {
	
	
	
	
		color: #2AC2A4;
		font-size: 28rpx;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		box-shadow: 0 8rpx 20rpx rgba(255, 255, 255, 0.3);
		width: 277rpx;
height: 81rpx;
background: #FFFFFF;
border-radius: 40rpx 40rpx 40rpx 40rpx;
	}
}

/* 波浪背景 */
.wave-bg {
	position: absolute;
	bottom: -2rpx;
	left: 0;
	right: 0;
	height: 100rpx;
	background: #F5F5F5;
	border-radius: 50% 50% 0 0 / 100% 100% 0 0;
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
	border: 2rpx solid #2AC2A4;
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

/* 赚积分区域 */
.earn-section {
	background: #FFFFFF;
	border-radius: 20rpx;
	padding: 30rpx;
	box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.06);
}

/* 赚积分标题 */
.earn-title {
	font-size: 30rpx;

	color: #333333;
	margin-bottom: 30rpx;
}

/* 赚积分卡片 */
.earn-cards {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20rpx;
}

.earn-card {
	width: 317rpx;
	height: 121rpx;
	background: linear-gradient(180deg, #FFFFFF 0%, #CDF1EA 100%);
	border-radius: 30rpx;
	padding: 25rpx 41rpx;
	box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.06);
	
	.earn-card-left {
		display: flex;
		align-items: center;
		
		.earn-icon {
			width: 63rpx;
			height: 72rpx;
			margin-right: 24rpx;
		}
		
		.earn-text {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			.earn-name {
				font-size: 24rpx;
				color: #333333;
				font-weight: 500;
				display: block;
				margin-bottom: 4rpx;
			}
			
			.earn-desc {
				font-size: 18rpx;
				color: #333333;
			}
		}
	}
}
</style>
