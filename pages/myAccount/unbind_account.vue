<template>
	<view>
		<navBar title="解除绑定"></navBar>
		<view class="content">
			<view class="a_title flex_between">
				<view class="">
					已绑定的积分账号
				</view>
			</view>
			<view class="account_box">
				{{address?obscureString(address):''}}
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" @click="changeCheck" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title" @click.stop="toAgreement">《解除绑定须知》</text>
			</view>
			<view class="btn_full" @click="confirm">
				解除绑定
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { unbindPointAccount, getPointBindedAccount } from '@/service/point.js'
import { obscureString } from '@/utils/index.js'

const id = ref('')
onMounted(async ()=>{
	getPointAccount()
})
const address = ref('')
const getPointAccount = async()=>{
	const {points_account} = await getPointBindedAccount()
	address.value = points_account
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
	if (!address.value) return uni.showToast({
		icon:'none',
		title: '未绑定积分账号，请先绑定'
	})
	try{
		uni.showLoading({
			title: '解绑中'
		})
		await unbindPointAccount({confirm:true})
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: '解绑成功'
		})
		address.value = ''
	}catch(e){
		uni.showToast({
			icon: 'none',
			title: '解绑失败'
		})
	}
}
const toAgreement = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/unbind_account_agreement'
	})
}
</script>

<style lang="scss" scoped>
.a_title {
	font-size: 27rpx;
	padding: 22rpx 35rpx;
	.a_pic {
		width: 32rpx;
		display: block;
	}
}
.account_box {
	padding: 34rpx 0;
	font-size: 24rpx;
	color: #999999;
	background-color: #fff;
	margin-bottom: 30rpx;
	text-align: center;
	background-color: #EAEAEA;
}
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
