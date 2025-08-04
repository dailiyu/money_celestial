<template>
	<view>
		<view class="content">
			<view class="a_title flex_between">
				<view class="flex_center">
					<view class="">
						积分账号
					</view>
					<image src="https://static.maxcang.com/appstatic/my/tips.png" mode="widthFix" class="tip_pic" @click="openPop"></image>
				</view>
				<image src="https://static.maxcang.com/appstatic/scan.png" mode="widthFix" class="a_pic" @click="scanQRCode"></image>
			</view>
			<view class="account_box">
				<textarea v-model="account" class="uni-input" placeholder="请输入Dn开头的49位积分账号或扫描接收码" placeholder-class="placeholder_class" auto-height></textarea>
			</view>
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						提取数量
					</view>
					<input v-model="number" type="number" class="uni-input" placeholder="请输入提取数量" placeholder-class="placeholder_class" />
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
						预计扣除
					</view>
					<view class="s_num" style="color: #999999; flex: 1;">
						{{number?(Number(number) /0.97).toFixed(4):''}}
					</view>
					<view class="fee_rate">
						提现费率 3%
					</view>
				</view>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" @click.stop="changeCheck" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title" @click.stop="toAgreement">《提取须知》</text>
			</view>
			<view class="btn_full" @click="validPassword">
				提取
			</view>
		</view>
		<validatePasswordPop @confirm="confirm" ref="passwordPop"></validatePasswordPop>
		<scanStepPop ref="stepPop"></scanStepPop>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAllPoint, withdrawRedPoints } from '@/service/point.js'
import { obscureString } from '@/utils/index.js'
import {substrateAddressValidator} from '../../utils/index'

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
	if (!substrateAddressValidator(account.value)) return uni.showToast({
		icon:'none',
		title: '请输入正确的积分账号'
	})
	if (!number.value) return uni.showToast({
		icon: 'none',
		title: '请输入提取数量'
	})
	if (Number(number.value) > pointBalance.value) return uni.showToast({
		icon: 'none',
		title: '提取数量不可大于积分余额'
	})
	
	passwordPop.value.open()
}
const confirm = async()=>{
	
	const params = ref({
		point_account: account.value,
		amount: Number(number.value)/0.97,
		origin_amount: Number(number.value),
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
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: '请等待审核'
		})
		
		// 提取成功后清空表单和重置状态
		number.value = ''
		isChecked.value = false
		getPointInfo()
	}catch(e){
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: e.data?.error || '提取失败，请重试'
		})
	}
}
const toAgreement = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/point_withdraw_agreement'
	})
}

const scanQRCode = () => {
    uni.scanCode({
        onlyFromCamera: true,
        scanType: ['qrCode'],
        success(res) {
            try {
                const walletAddress = JSON.parse(res.result).data.accountId;
                const walletAddressRegex = /^Dn[a-zA-Z0-9]{47}$/; // 匹配 Dn 开头后跟 47 位数字或字母
                
                if (walletAddress && walletAddressRegex.test(walletAddress)) {
                    account.value = walletAddress;
                } else {
                    uni.showToast({
                        title: '请扫描正确的二维码',
                        icon: 'none'
                    });
                }
            } catch (error) {
                uni.showToast({
                    title: '无效的二维码',
                    icon: 'none'
                });
            }
        },
        fail() {
            uni.showToast({
                title: '扫描失败，请重试',
                icon: 'none',
				duration: 2000
				
            });
        }
    });
};

const stepPop = ref()
const openPop = ()=>{
	stepPop.value.open()
}
</script>

<style lang="scss" scoped>
// 全局样式类
.flex_between {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.flex_center {
	display: flex;
	align-items: center;
}

.flex {
	display: flex;
	align-items: center;
}

// 页面容器
.content {
	padding: 30rpx;
	background: #f5f5f5;
	min-height: 100vh;
}

.a_title {
	font-size: 27rpx;
	padding: 22rpx 26rpx;
	background: #fff;
	border-radius: 20rpx;
	margin-bottom: 20rpx;
	
	.a_pic {
		width: 32rpx;
		height: 32rpx;
		display: block;
	}
	.tip_pic {
		width: 26rpx;
		margin-left: 16rpx;
	}
}
.account_box {
	padding: 34rpx 26rpx;
	font-size: 24rpx;
	color: #999999;
	background-color: #fff;
	border-radius: 20rpx;
	margin-bottom: 30rpx;
	
	.uni-input {
		width: 100%;
		min-height: 80rpx;
		line-height: 1.5;
		color: #333;
		font-size: 24rpx;
	}
}
.shop_info {
	padding: 0 26rpx;
	background-color: #fff;
	border-radius: 20rpx;
	margin-bottom: 30rpx;
	
	.info_item {
		padding: 40rpx 8rpx 40rpx 0;
		border-bottom: 1px solid #E3E3E3;
		&:last-child {
			border-bottom: none;
		}
		.s_title {
			font-size: 27rpx;
			margin-right: 40rpx;
			color: #333;
			font-weight: 500;
		}
		.uni-input {
			flex: 1;
			margin-right: 10rpx;
			font-size: 24rpx;
			color: #333;
			text-align: right;
		}
		:deep(.placeholder_class) {
			margin-right: 0;
			font-size: 24rpx;
			color: #aaaaaa;
		}
		.scan_pic {
			width: 38rpx;
		}
		.s_text {
			font-size: 27rpx;
			font-weight: 500;
			color: #333;
			margin-right: 34rpx;
		}
		.s_num {
			font-size: 24rpx;
			color: #FC5908;
			font-weight: 500;
		}
		.fee_rate {
			font-size: 20rpx;
			color: #999999;
			margin-left: 10rpx;
			flex-shrink: 0;
		}
	}
}
.radio {
	padding: 26rpx 30rpx 38rpx;
	display: flex;
	align-items: center;
	
	radio {
		transform: scale(0.8);
		margin-right: 10rpx;
	}
	.read {
		font-size: 27rpx;
		color: #666;
		margin-right: 8rpx;
	}
	.c_title {
		font-size: 27rpx;
		color: #FC5908;
		font-weight: 500;
	}
}

// 添加按钮样式
.btn_full {
	width: 100%;
	height: 88rpx;
	background: linear-gradient(90deg, #FC5908 0%, #FF7A3D 100%);
	border-radius: 44rpx;
	color: #FFFFFF;
	font-size: 32rpx;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 40rpx;
	box-shadow: 0 8rpx 20rpx rgba(252, 89, 8, 0.3);
	transition: all 0.3s ease;
	
	&:active {
		transform: scale(0.98);
		box-shadow: 0 4rpx 10rpx rgba(252, 89, 8, 0.4);
	}
}

// 添加占位符样式
.placeholder_class {
	color: #aaaaaa !important;
	font-size: 24rpx !important;
}
</style>
