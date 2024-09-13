<template>
	<view>
		<navBar title="可用积分"></navBar>
		<view class="content">
			<view class="list_box">
				<view class="list_item flex_between" @click="toBindAccount">
					<view class="">
						绑定账号
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toUnbindAccount">
					<view class="">
						解除绑定
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup>
const toBindAccount = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/bind_account'
	})
}
const toUnbindAccount = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/unbind_account'
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
