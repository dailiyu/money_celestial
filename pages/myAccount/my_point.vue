<template>
	<view>
		<navBar title="我的积分"></navBar>
		<view class="content">
			<view class="list_box">
				<view class="list_item flex_between" @click="toWithdrawPoint">
					<view class="">
						提取积分
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toWithdrawRecord">
					<view class="">
						提取记录
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup>
const toWithdrawPoint = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/green_point_withdraw'
	})
}
const toWithdrawRecord = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/green_point_withdraw_record'
	})
}
</script>

<style lang="scss" scoped>
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
