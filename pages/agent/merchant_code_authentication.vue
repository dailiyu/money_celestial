<template>
	<view>
		<navBar title="商家码认证"></navBar>
		<view class="content">
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						商家码地址
					</view>
					<input v-model="address" class="uni-input" placeholder="请输入商家码地址" placeholder-class="placeholder_class" />
				</view>
			</view>
			<view class="btn_full" @click="confirm">
				认证
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const address = ref('')

const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}
const confirm = ()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
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
	}
	
}
.btn_full {
	margin-top: 56rpx;
}
</style>
