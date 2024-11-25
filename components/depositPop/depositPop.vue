<template>
	<view>
		<uni-popup ref="popup" borderRadius="30rpx" background-color="#fff">
			<view class="step_pop">
				<view class="step_top">
					<view class="title">
						保证金更改提示
					</view>
					<!-- <view class="top_content">
						快速完成二维码扫描绑定
					</view> -->
				</view>
				<view class="step_bottom">
					<view class="sub_ttl">
						保证金规则已调整：  
					</view>
					<view class="bottom_content">
						- 原“可用积分”按100:1转换为“能量积分”。
					</view>
					<view class="bottom_content">
						- 新保证金比例为1:1能量积分。
					</view>
					<view class="bottom_content">
						请确保账户内“能量积分”充足，如有疑问联系客服。
					</view>
				</view>
				<view class="btn_plain" @click="close">
					确定
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';


const popup = ref()
const open = ()=>{
	popup.value.open()
}
const close = ()=>{
	popup.value.close()
}
defineExpose({
	open,
	close
})
</script>

<style lang="scss" scoped>
.step_pop {
	width: 566rpx;
	padding: 64rpx;
	.step_top {
		margin-bottom: 50rpx;
		text-align: center;
		.title {
			font-size: 36rpx;
			color: #FC5908;
			line-height: 28rpx;
			font-weight: bold;
			margin-bottom: 30rpx;
		}
		.top_content {
			font-size: 30rpx;
			line-height: 28rpx;
		}
	}
	.step_bottom {
		height: 380rpx;
		overflow: hidden;
		overflow-y: scroll;
		margin-bottom: 10rpx;
		.sub_ttl {
			font-size: 30rpx;
			// color: #FC5908;
			line-height: 28rpx;
			font-weight: bold;
			margin-bottom: 24rpx;
		}
		.bottom_content {
			font-size: 26rpx;
			line-height: 44rpx;
			margin-bottom: 40rpx;
		}
	}
	.btn_plain {
		width: 340rpx;
	}
}
</style>