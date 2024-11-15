<template>
	<view>
		<navBar title="解除保证金"></navBar>
		<view class="content">
			<!-- <view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						解除账号
					</view>
					<input v-model="address" class="uni-input" placeholder="请输入手机号" placeholder-class="placeholder_class" />
				</view>
			</view> -->
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						解除金额
					</view>
					<input v-model="number" type="number" class="uni-input" placeholder="请输入金额" placeholder-class="placeholder_class" :disabled="canceled_at" />
				</view>
				<view class="info_item flex_between">
					<view class="s_text">
						可解除余额
					</view>
					<view class="s_num"> 
						{{amount}}
					</view>
				</view>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" @click="changeCheck" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title" @click.stop="toAgreement">《保证金须知》</text>
			</view>
			<view class="btn_full" @click="confirm">
				确认解除
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { removeDeposit, getDeposit } from '@/service/deposit.js'


onMounted(()=>{
	getDepositInfo()
})
const amount = ref(0)
const canceled_at = ref('')
const getDepositInfo = async()=>{
	const res = await getDeposit()
	amount.value = res.amount
	canceled_at.value = res.canceled_at
	if (canceled_at.value) {
		number.value = res.amount_applying
	}
}
const address = ref('')
const number = ref('')

const scan = ()=>{
	uni.scanCode({
		scanType: ['qrCode'],
		success(res) {
			console.log(res)
		}
	})
}
const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}
const confirm = async()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
	// if (!address.value) return uni.showToast({
	// 	icon:'none',
	// 	title: '请输入地址'
	// })
	if (!number.value) return uni.showToast({
		icon:'none',
		title: '请输入金额'
	})
	if (number.value > amount.value) return uni.showToast({
		icon:'none',
		title: '可解除余额不足'
	})
	uni.showLoading({
		title: '解除中'
	})
	try{
		await removeDeposit({amount: number.value})
		getDepositInfo()
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: '申请已提交，保证金将在14天后解冻'
		})
	}catch(e){
		uni.showToast({
			icon: 'none',
			title: e.data.error
		})
	}
}
const toAgreement = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/deposit_agreement'
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
