<template>
	<view>
		<navBar title="能量积分"></navBar>
		<view class="content">
			<view class="top_box">
				<view class="c_title">
				当前能量积分
			</view>
			<image src="https://static.maxcang.com/appstatic/my/tips.png" mode="widthFix" class="tip_pic" @click="openPop"></image>
			</view>
			<view class="number flex_center">
				{{redPoint}}
			</view>
			
			// #ifndef MP-WEIXIN
			<view class="btns flex_between">
			// #endif
			
			// #ifdef MP-WEIXIN
			<view class="btns flex_center">
			// #endif
				
				// #ifndef MP-WEIXIN
				<view class="cancel_btn flex_center" @click="toStepOne">
					增加积分
				</view>
				// #endif
				
				<view class="add_btn flex_center" @click="toWithdrawPoint">
					提取积分
				</view>
			</view>
			
			<view class="list_box">
				<!-- <view class="list_item flex_between">
					<view class="">
						兑换商品
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
				<!-- <view class="list_item flex_between">
					<view class="">
						兑换商品
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toWithdrawPoint">
					<view class="">
						提取积分
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
				<view class="list_item flex_between" @click="toWithdrawRecord">
					<view class="">
						积分记录
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
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
const redPoint = ref(0)
const pointsAccount = ref('')
const getPoint = async()=>{
	const { red_points, points_account } = await getAllPoint()
	redPoint.value = red_points
	pointsAccount.value = points_account
}

const openPop = ()=>{
	tipsPop.value.open()
}

const toWithdrawPoint = ()=>{
	// if (!pointsAccount.value) {
	// 	toBindPointAccount()
	// 	return
	// }
	if (redPoint.value==0) return uni.showToast({
		icon: 'none',
		title: '暂无可提取积分'
	})
	uni.navigateTo({
		url: '/pages/myAccount/red_point_withdraw'
	})
}
const toWithdrawRecord = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/red_point_withdraw_record'
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

.top_box{
	display: flex;
	align-items: center;
	.c_title {
	font-size: 27rpx;
	padding-left: 36rpx;
	padding-top: 22rpx;
	margin-bottom: 20rpx;
}
.tip_pic {
		width: 26rpx;
		margin-left: 16rpx;
	}
}

.number {
	padding: 37rpx 0;
	background-color: #fff;
	font-size: 36rpx;
	color: #FC5908;
	font-weight: bold;
	margin-bottom: 30rpx;
}
.btns {
	margin-top: 68rpx;
	margin-bottom: 57rpx;
	padding: 0 46rpx;
	.add_btn {
		width: 290rpx;
		height: 84rpx;
		font-size: 27rpx;
		color: #FFFFFF;
		font-weight: bold;
		background-image: linear-gradient(to top right, #38b659, #6bd85b);
		border-radius: 13rpx;
	}
	.cancel_btn {
		width: 290rpx;
		height: 84rpx;
		font-size: 27rpx;
		color: #FFFFFF;
		font-weight: bold;
		background-image: linear-gradient(to right, #fe9646, #fd8d36);
		border-radius: 13rpx;
	}
}
.list_box {
	padding: 0 28rpx;
	background-color: #fff;
	.list_item {
		padding: 46rpx 14rpx;
		font-weight: 500;
		font-size: 27rpx;
		border-bottom: 1px solid #ececec;
		&:last-child {
			border-bottom: none;
		}
		.arrow_pic {
			width: 12rpx;
		}
	}
}
</style>
