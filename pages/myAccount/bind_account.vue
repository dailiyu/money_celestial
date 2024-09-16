<template>
	<view>
		<navBar title="绑定账号"></navBar>
		<view class="content">
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						绑定账号
					</view>
					<input v-model="number" type="number" class="uni-input" placeholder="请输入你的积分账号" placeholder-class="placeholder_class" />
				</view>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title">《绑定须知》</text>
			</view>
			<view class="btn_full" @click="confirm">
				绑定
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getPointAccount, bindPointAccount } from '@/service/point.js'
import { obscureString } from '@/utils/index.js'
const number = ref('')

const account = ref('')
onMounted(async ()=>{
	// 积分账号
	const {data} = await getPointAccount()
	account.value = obscureString(data.account_number)
})

const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}
const confirm = async ()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
	if (account.value) return uni.showToast({
		icon:'none',
		title: '已绑定积分账号，无法再绑定'
	})
	if (!number.value) return uni.showToast({
		icon:'none',
		title: '请输入绑定账号'
	})
	uni.showLoading({
		title: '绑定中'
	})
	await bindPointAccount({account_number: number.value})
	account.value = number.value
	uni.hideLoading()
	uni.showToast({
		icon: 'none',
		title: '绑定成功'
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
			color:#aaaaaa;
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
			margin-right: 34rpx;
		}
		.s_num {
			font-size: 24rpx;
			color: #FC5908;
		}
	}
	
}
.radio {
	// text-align: center;
	padding: 26rpx 0 38rpx;
	radio {
		transform:scale(0.6)
	}
	.read {
		font-size: 27rpx;
		color: #999999;
	}
	.c_title {
		font-size: 27rpx;
		color: #FC5908;
		font-family: HarmonyOS_Sans_SC_Medium;
	}
}
</style>
