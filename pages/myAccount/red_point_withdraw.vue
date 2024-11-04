<template>
	<view>
		<navBar title="提取积分"></navBar>
		<view class="content">
			<view class="a_title flex_between">
				<view class="">
					积分账号
				</view>
				<image src="https://static.maxcang.com/appstatic/scan.png" mode="widthFix" class="a_pic" @click="scanQRCode"></image>
			</view>
			<view class="account_box">
				<input v-model="account" class="uni-input" placeholder="请输入积分账号" placeholder-class="placeholder_class" />
			</view>
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						到账数量
					</view>
					<input v-model="number" type="digit" class="uni-input" placeholder="请输入积分数量" placeholder-class="placeholder_class" @input="inputNumber" />
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
						提取数量
					</view>
					<view class="s_num" style="color: #999999;">
						{{number?Number(number.value)/0.97:''}}
					</view>
				</view>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" @click="changeCheck" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title" @click.stop="toAgreement">《提取须知》</text>
			</view>
			<view class="btn_full" @click="validPassword">
				提取
			</view>
		</view>
		<validatePasswordPop @confirm="confirm" ref="passwordPop"></validatePasswordPop>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAllPoint, withdrawRedPoints } from '@/service/point.js'
import { obscureString } from '@/utils/index.js'



const account = ref('')
onMounted(async ()=>{
	
	getPointInfo()
})
const pointBalance = ref('')
const getPointInfo = async()=>{
	const {red_points, points_account} = await getAllPoint()
	// 可用积分
	pointBalance.value = red_points
	account.value = points_account
}
const isChecked = ref(false)

const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}
const number = ref('')
const inputNumber = (e)=>{
	// number.value = Math.floor(e.detail.value * 100) / 100
	const value = e.detail.value;
      
      // 正则表达式允许输入数字和最多两位小数
    const regex = /^\d+(\.\d{0,2})?$/;
      
      // 仅当输入值符合正则表达式时才更新数据
    if (regex.test(value) || value === '') {
        number.value = value;
    } else {
        // 如果输入不合法，截断小数点后两位
        number.value = parseFloat(value).toFixed(2);
    }
}
const passwordPop = ref()
const validPassword = ()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
	if (!account.value) return uni.showToast({
		icon:'none',
		title: '请先输入积分账号'
	})
	if (!number.value) return uni.showToast({
		icon: 'none',
		title: '请输入提取数量'
	})
	if (Number(number.value)/0.97 > pointBalance.value) return uni.showToast({
		icon: 'none',
		title: '提取数量不可大于积分余额'
	})
	
	passwordPop.value.open()
}
const confirm = async()=>{
	
	const params = ref({
		point_account: account.value,
		transaction_amount: Number(number.value)/0.97,
		transaction_type: 'decrease',
		transaction_method: 'red_points',
		address: account.value
	})
	try{
		uni.showLoading({
			mask: true,
			title: '提取中',
			mask: true
		})
		await withdrawRedPoints(params.value)
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
const scanQRCode = ()=>{
	uni.scanCode({
		onlyFromCamera: true,
		scanType: ['qrCode'],
		success(res) {
			account.value = JSON.parse(res.result).data.accountId
		}
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
	padding: 34rpx 26rpx;
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
