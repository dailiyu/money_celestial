<template>
	<view>
		<navBar title="可用积分"></navBar>
		<view class="content">
			<view class="c_title">
				当前可用积分
			</view>
			<view class="number flex_center">
				{{redPoint}}
			</view>
			<view class="btns flex_between">
				<view class="cancel_btn flex_center" @click="toStepOne">
					增加积分
				</view>
				<view class="add_btn flex_center" @click="toWithdrawPoint">
					提取积分
				</view>
			</view>
			<view class="list_box">
				<!-- <view class="list_item flex_between">
					<view class="">
						兑换商品
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
				<!-- <view class="list_item flex_between">
					<view class="">
						兑换商品
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toWithdrawPoint">
					<view class="">
						提取积分
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
				<view class="list_item flex_between" @click="toWithdrawRecord">
					<view class="">
						积分记录
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAllPoint } from '../../service/point';


onMounted(()=>{
	getPoint()
})
const redPoint = ref(0)
const getPoint = async()=>{
	const { red_points } = await getAllPoint()
	redPoint.value = red_points
}

const toWithdrawPoint = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/red_point_withdraw'
	})
}
const toWithdrawRecord = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/red_point_withdraw_record'
	})
}
const toStepOne = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/exchange_point_step_1'
	})
}
</script>

<style lang="scss" scoped>
.c_title {
	font-size: 27rpx;
	padding-left: 36rpx;
	padding-top: 22rpx;
	margin-bottom: 20rpx;
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
