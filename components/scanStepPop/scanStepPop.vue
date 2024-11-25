<template>
	<view>
		<uni-popup ref="popup" borderRadius="30rpx" background-color="#fff">
			<view class="step_pop">
				<view class="step_top">
					<view class="title">
						操作步骤
					</view>
					<view class="top_content">
						快速完成二维码扫描绑定
					</view>
				</view>
				<view class="step_bottom">
					<view class="sub_ttl">
						1、打开D9钱包
					</view>
					<view class="bottom_content">
						确保您的D9钱包已安装并登录，进入应用程序主界面。
					</view>
					<view class="sub_ttl">
						2、点击“接收”按钮
					</view>
					<view class="bottom_content">
						在首页找到并点击“接收”功能按钮， 进入二维码界面。
					</view>
					<view class="sub_ttl">
						3、扫描目标二维码
					</view>
					<view class="bottom_content">
						使用满仓的扫描功能， 对准二维码，等待系统识别。
					</view>
					<view class="sub_ttl">
						4、完成操作
					</view>
					<view class="bottom_content">
						扫描成功后，系统会自动完成关联。
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
		margin-bottom: 66rpx;
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
			color: #FC5908;
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