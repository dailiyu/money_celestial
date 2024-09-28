<template>
	<view>
		<navBar title="积分赠送"></navBar>
		<view class="content">
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						赠送账号
					</view>
					<input v-model="address" class="uni-input" maxlength="11" text="number" placeholder="请输入手机号" placeholder-class="placeholder_class" />
					<!-- <image src="@/static/scan.png" mode="widthFix" class="scan_pic" @click="scan"></image> -->
				</view>
			</view>
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						赠送数量
					</view>
					<input v-model="number" type="number" class="uni-input" placeholder="请输入积分数量" placeholder-class="placeholder_class" />
				</view>
				<view class="info_item flex">
					<view class="s_title">
						到账积分
					</view>
					<view class="s_num" style="color: #999999;">
						{{number}}
					</view>
				</view>
				<view class="info_item flex_between">
					<view class="s_text">
						最多可赠送金额
					</view>
					<view class="s_num">
						{{totalPoints}}
					</view>
				</view>
				<view class="info_item flex_between">
					<view class="s_text">
						消耗
					</view>
					<view class="s_num">
						{{number/0.16}}
					</view>
				</view>
				<view class="info_item flex_between">
					<view class="s_text">
						保证金余额
					</view>
					<view class="s_num">
						{{balance}}
					</view>
				</view>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title">《积分赠送须知》</text>
			</view>
			<view class="btn_full" @click="confirm">
				确认赠送
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { giftPoint } from '@/service/point.js'
import { getAllPoint } from '@/service/point';
import { getDeposit } from '@/service/deposit';


const totalPoints = ref(0)
const balance = ref(0)
onMounted(async()=>{
	const data = await getAllPoint()
	totalPoints.value = data.red_points*6.25
	const res = await getDeposit()
	balance.value = res.amount
})

const address = ref('')
const number = ref('')


const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}
const confirm = async()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
	if (!address.value || address.value.length < 11) return uni.showToast({
		icon:'none',
		title: '请输入正确手机号'
	})
	if (!number.value) return uni.showToast({
		icon:'none',
		title: '请输入赠送数量'
	})
	if (number.value > totalPoints.value) return uni.showToast({
		icon: 'none',
		title: '赠送数量不可超过最多可赠送金额',
		duration: 3000
	})
	try{
		uni.showLoading({
			title: '赠送中'
		})
		await giftPoint({phone_number:address.value, transaction_amount: number.value})
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: '赠送成功'
		})
	}catch(e){
		uni.showToast({
			icon: 'none',
			title: '赠送失败'
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
