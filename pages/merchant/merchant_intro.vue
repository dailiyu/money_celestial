<template>
	<view>
		<navBar title="商家" ></navBar>
		<view class="content">
			<image src="https://static.maxcang.com/appstatic/merchant/merchant-intro.jpg" mode="widthFix" class="merchant_intro"></image>
			<view class="btn_full" @click="toNotice">
				我要入驻
			</view>
		</view>
	</view>
</template>

<script setup>
const toNotice = ()=>{
	uni.redirectTo({
		url: '/pages/merchant/settle_notice'
	})
}
</script>

<style lang="scss" scoped>
.content {
	position: relative;
	padding-top: 60rpx;
	padding: 0;
	.merchant_intro {
		width: 100%;
		height: 100%;
		display: block;
	}
	.btn_full {
		position: absolute;
		bottom: 234rpx;
		left: 76rpx;
		right: 76rpx;
		margin-top: 50rpx;
	}
	
}

</style>
