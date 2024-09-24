<template>
	<view>
		<navBar title="推荐官" ></navBar>
		<view class="content">
			<image src="@/static/recommend/recommend-intro.jpg" mode="widthFix" class="merchant_intro"></image>
			<view class="btn_full" @click="toNext">
				我要成为推荐官
			</view>
		</view>
	</view>
</template>

<script setup>
const toNext = ()=>{
	uni.navigateTo({
		// url: '/pages/recommend/recommend_management'
		url: '/pages/recommend/recommend_test'
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
		bottom: 193rpx;
		left: 76rpx;
		right: 76rpx;
		margin-top: 50rpx;
	}
	
}

</style>
