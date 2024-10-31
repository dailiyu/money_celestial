<template>
	<view>
		<navBar title="积分兑换券"></navBar>
		<view class="content">
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						输入券码
					</view>
					<input v-model="number" type="number" class="uni-input" placeholder="请输入积分券码" placeholder-class="placeholder_class" />
				</view>
			</view>
			<view class="btn_full" @click="confirm">
				兑换
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const number = ref('')
const confirm = async ()=>{
	
}
</script>

<style lang="scss" scoped>
.shop_info {
	padding: 0 26rpx;
	background-color: #fff;
	margin-bottom: 23rpx;
	.info_item {
		padding: 40rpx 8rpx 40rpx 0;
		border-bottom: 1px solid #E3E3E3;
		&:last-child {
			border-bottom: none;
		}
		.s_title {
			font-size: 27rpx;
			margin-right: 40rpx;
		}
		.uni-input {
			flex: 1;
			margin-right: 10rpx;
			font-size: 24rpx;
			color:#333;
		}
		:deep(.placeholder_class) {
			font-size: 24rpx;
			color:#aaaaaa;
		}
		.scan_pic {
			width: 38rpx;
		}
		.s_text {
			font-size: 27rpx;
			font-weight: bold;
			color: #999999;
		}
		.s_num {
			font-size: 24rpx;
			color: #FC5908;
		}
	}
	
}
.btn_full {
	margin-top: 390rpx;
}
</style>
