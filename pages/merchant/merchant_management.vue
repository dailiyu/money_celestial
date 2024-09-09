<template>
	<view>
		<navBar title="商家后台"></navBar>
		<view class="content">
			<view class="merchant_info flex">
				<image src="" mode="" class="head"></image>
				<view class="">
					<view class="name flex">
						<view class="">
							佛山英朗达百货超市西城店
						</view>
						<view class="level">
							Lv.5
						</view>
					</view>
					<view class="flex">
						<uni-rate :readonly="true" :value="2" active-color="#fc5908" size="12" />
						<view class="point">
							4.9
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.merchant_info {
	padding: 50rpx 42rpx 34rpx;
	.head {
		width: 110rpx;
		height: 110rpx;
		border-radius: 50%;
		background-color: #ccc;
		margin-right: 28rpx;
	}
	.name {
		font-size: 26rpx;
		margin-bottom: 22rpx;
		.level {
			padding: 6rpx 14rpx;
			background-color: #fc5908;
			margin-left: 12rpx;
			color: #fff;
			border-radius: 100px;
		}
	}
	.point {
		font-size: 16rpx;
		color: #fc5908;
		margin-left: 20rpx;
		font-weight: 500;
	}
}
</style>
