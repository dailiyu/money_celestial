<template>
	<view>
		<view class="content">
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						绑定账号
					</view>
					<input v-model="number" type="text" class="uni-input" placeholder="请输入你的积分账号" placeholder-class="placeholder_class" />
				</view>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" @click.stop="changeCheck" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title" @click.stop="toAgreement">《绑定须知》</text>
			</view>
			<view class="btn_full" @click="validPassword">
				绑定
			</view>
		</view>
		<validatePasswordPop @confirm="confirm" ref="passwordPop"></validatePasswordPop>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { bindPointAccount, getPointBindedAccount } from '@/service/point.js'
import { obscureString } from '@/utils/index.js'
const number = ref('')



const address = ref('')
onMounted(async()=>{
	const {points_account} = await getPointBindedAccount()
	address.value = points_account
})
const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}
const passwordPop = ref()
const validPassword = ()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
	if (address.value) return uni.showToast({
		icon:'none',
		title: '已绑定积分账号，无法再绑定'
	})
	if (!number.value) return uni.showToast({
		icon:'none',
		title: '请输入绑定账号'
	})
	if (number.value.length !== 49) return uni.showToast({
		icon:'none',
		title: '账号格式有误'
	})
	
	passwordPop.value.open()
}
const confirm = async ()=>{
	
	try{
		uni.showLoading({
			title: '绑定中'
		})
		await bindPointAccount({points_account: number.value})
		address.value = number.value
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: '绑定成功'
		})
		uni.navigateBack()
	}catch(e){
		uni.hideLoading()
		console.log('绑定错误:', e)
		
		// 直接显示接口返回的数据
		let errorMessage = ''
		if (e.data) {
			errorMessage = JSON.stringify(e.data)
		} else {
			errorMessage = JSON.stringify(e)
		}
		
		uni.showToast({
			icon: 'none',
			title: errorMessage,
			duration: 3000
		})
	}
}
const toAgreement = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/bind_account_agreement'
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
