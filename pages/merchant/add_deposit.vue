<template>
	<view>
		<navBar title="增加保证金"></navBar>
		<view class="content">
			<!-- <view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						增加账号
					</view>
					<input v-model="address" class="uni-input" placeholder="请输入手机号" placeholder-class="placeholder_class" />
					<image src="@/static/scan.png" mode="widthFix" class="scan_pic" @click="scan"></image>
				</view>
			</view> -->
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						增加金额
					</view>
					<input v-model="number" type="number" class="uni-input" placeholder="请输入金额" placeholder-class="placeholder_class" />
				</view>
				<view class="info_item flex_between">
					<view class="s_text">
						保证金余额
					</view>
					<view class="s_num">
						{{amount}}
					</view>
				</view>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title">《保证金须知》</text>
			</view>
			<view class="btn_full" @click="confirm">
				确认增加
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { addDeposit, getDeposit } from '@/service/deposit.js'
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



onMounted(()=>{
	getDepositInfo()
})
const amount = ref(0)
const getDepositInfo = async()=>{
	const res = await getDeposit()
	amount.value = res.amount
}
const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}
const confirm = async ()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
	// if (!address.value) return uni.showToast({
	// 	icon:'none',
	// 	title: '请输入账号'
	// })
	if (!number.value) return uni.showToast({
		icon:'none',
		title: '请输入金额'
	})
	try{
		uni.showLoading({
			title: '正在提交'
		})
		await addDeposit({amount:number.value})
		getDepositInfo()
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: '增加成功'
		})
	}catch(e){
		uni.showToast({
			icon: 'none',
			title: '出错了'
		})
	}
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
