<template>
	<view>
		<navBar title="提取积分"></navBar>
		<view class="content">
			<view class="a_title flex_between">
				<view class="">
					积分账号
				</view>
				<!-- <image src="@/static/account.png" mode="widthFix" class="a_pic"></image> -->
			</view>
			<view class="account_box">
				{{account?obscureString(account):''}}
			</view>
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						提取数量
					</view>
					<input v-model="number" type="number" class="uni-input" placeholder="请输入积分数量" placeholder-class="placeholder_class" />
				</view>
				<view class="info_item flex">
					<view class="s_text">
						积分余额
					</view>
					<view class="s_num">
						{{pointBalance||0}}
					</view>
				</view>
				<view class="info_item flex">
					<view class="s_text">
						到账数量
					</view>
					<view class="s_num" style="color: #999999;">
						{{number?number-(number*3/100):0}}
					</view>
				</view>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" @click="changeCheck" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title" @click.stop="toAgreement">《提取须知》</text>
			</view>
			<view class="btn_full" @click="confirm">
				提取
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getPointBindedAccount, withdrawGreenPoint } from '@/service/point.js'
import { obscureString } from '@/utils/index.js'

const number = ref()

const account = ref('')
const pointBalance = ref('')
onMounted(async ()=>{
	
	getPointInfo()
})
const getPointInfo = async()=>{
	const {green_points,  points_account} = await getPointBindedAccount()
	// account.value = user
	// 可用积分
	pointBalance.value = green_points
	account.value = points_account
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
	if (!account.value) return uni.showToast({
		icon:'none',
		title: '请先绑定积分账号'
	})
	if (!number.value) return uni.showToast({
		icon: 'none',
		title: '请输入提取数量'
	})
	if (number.value % 100 !== 0) return uni.showToast({
		icon:'none',
		title: '提取数量必须是100的倍数'
	})
	if (number.value > pointBalance.value) return uni.showToast({
		icon: 'none',
		title: '提取数量不可大于积分余额',
		duration: 3000
	})
	try{
		uni.showLoading({
			title: '提取中'
		})
		await withdrawGreenPoint({transaction_amount:number.value, point_account:account.value, transaction_type:'decrease', transaction_method: 'green_points'})
		// getPointInfo()
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: '请等待审核'
		})
	}catch(e){
		uni.showToast({
			icon: 'none',
			title: '提取失败'
		})
	}
	
}
const toAgreement = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/point_withdraw_agreement'
	})
}
</script>

<style lang="scss" scoped>
.a_title {
	font-size: 27rpx;
	padding: 22rpx 35rpx;
	.a_pic {
		width: 32rpx;
		height: 1rpx;
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
