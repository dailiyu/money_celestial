<template>
	<view>
		<navBar title="保证金"></navBar>
		<view class="content">
			<view class="c_title flex">
				<view class="">
					我的保证金
				</view>
				<image src="https://static.maxcang.com/appstatic/my/tips.png" mode="widthFix" class="tip_pic" @click="openPop"></image>
			</view>
			<view class="number flex_center">
				{{amount||0}}
			</view>
			<view class="list_box">
				<!-- <view class="list_item flex_between" @click="toRecord">
					<view class="">
						保证金记录
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view> -->
			</view>
			<view class="btns flex_between">
				<view class="add_btn flex_center" @click="toAdd">
					增加保证金
				</view>
				<view class="cancel_btn flex_center" @click="toRemove">
					解除保证金
				</view>
			</view>
		</view>
		<depositPop ref="tipPop"></depositPop>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { onShow } from '@dcloudio/uni-app'
import { getDeposit } from '@/service/deposit';
const toRecord = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/deposit_record'
	})
}
const toAdd = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/add_deposit'
	})
}
const toRemove = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/remove_deposit'
	})
}
const amount = ref('')
onShow(async()=>{
	const res = await getDeposit()
	amount.value = res.amount
})

const tipPop = ref()
const openPop = ()=>{
	tipPop.value.open()
}
</script>

<style lang="scss" scoped>
.c_title {
	font-size: 27rpx;
	padding-left: 36rpx;
	padding-top: 22rpx;
	margin-bottom: 20rpx;
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
.btns {
	margin-top: 68rpx;
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
</style>
