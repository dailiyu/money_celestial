<template>
	<view>
		<view class="content">
			<view class="shop_info">
				<!-- <view class="info_item flex_between">
					<view class="s_title">
						钱包地址
					</view>
					<uni-easyinput v-model="address" :inputBorder="false" class="uni-input" placeholder="请输入充值钱包地址" placeholder-class="placeholder_class" :styles="{'padding': '0'}" >
					<template #right>
						<view class="error_text">
							格式错误
						</view>
					</template>
					</uni-easyinput>
				</view> -->
				<view class="info_item flex_between">
					<view class="s_title">
						充值订单
					</view>
					<uni-easyinput v-model="order" :inputBorder="false" class="uni-input" placeholder="请输入充值订单哈希值" placeholder-class="placeholder_class" >
						<!-- <template #right>
							<view class="error_text">
								格式错误
							</view>
						</template> -->
					</uni-easyinput>
				</view>
				<view class="info_item flex_between">
					<view class="s_title">
						充值账号
					</view>
					<uni-easyinput v-model="phone" maxlength="11" type="number" :inputBorder="false" class="uni-input" placeholder="请输入手机号" placeholder-class="placeholder_class" >
						<!-- <template #right>
							<view class="" style="text-align: right;">
								<view class="error_text">
									手机号错误
								</view>
								<view class="error_text">
									请输入正确的手机号
								</view>
							</view>
						</template> -->
					</uni-easyinput>
				</view>
			</view>
			
			<view class="tip">
				·  您可以选择将积分兑换到自己或者他人账户里，输入的账号为满仓用户的注册手机号
			</view>
			
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" @click.stop="changeCheck" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title" @click.stop="toAgreement">《兑换须知》</text>
			</view>
			<view class="btn_full" @click="confirm">
				增加
			</view>
		</view>
		
		<popup ref="pop" status="success"></popup>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { addRedPoints } from '../../service/point';

const phone = ref('')
onMounted(()=>{
	phone.value = uni.getStorageSync('phoneNumber')
})

const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}

const pop = ref()
const address = ref('')
const order = ref('')
const confirm = async()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
	// if (!address.value) return uni.showToast({
	// 	icon: 'none',
	// 	title: '请输入钱包地址'
	// })
	if (!order.value) return uni.showToast({
		icon: 'none',
		title: '请输入订单哈希值'
	})
	if (!phone.value || phone.value.length < 11) return uni.showToast({
		icon: 'none',
		title: '请输入正确手机号'
	})
	const params = ref({
		point_account: phone.value,
		// from_address: address.value,
		consumer_coupon: order.value,
		transaction_type: 'increase',
		transaction_method: 'red_points'
	})
	try{
		uni.showLoading({
			mask: true,
			title: '正在提交'
		})
		await addRedPoints(params.value)
		uni.hideLoading()
		
		// 显示成功提示
		uni.showToast({
			icon: 'success',
			title: '充值成功',
			duration: 2000
		})
		
		// 延迟跳转到D9能量页面
		setTimeout(() => {
			uni.navigateTo({
				url: '/pages/myAccount/point_available'
			})
		}, 2000)
	}catch(e){
		uni.hideLoading()
		console.log('兑换错误:', e)
		
		// 提取错误信息
		let errorMessage = '兑换失败'
		if (e.data && e.data.error) {
			errorMessage = e.data.error
		} else if (e.error) {
			errorMessage = e.error
		} else if (e.message) {
			errorMessage = e.message
		} else if (typeof e === 'string') {
			errorMessage = e
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
		url: '/pages/myAccount/add_red_point_agreement'
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
		&.error {
			color: #FC0808;
			.uni-input {
				color:#FC0808;
			}
			:deep(.placeholder_class) {
				color:#FC0808;
			}
			.error_text {
				font-size: 18rpx;
			}
			:deep(.uni-easyinput__placeholder-class) {
				color:#FC0808;
			}
			:deep(.uni-easyinput__content-input) {
				color:#FC0808;
			}
		}
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
		:deep(.uni-easyinput__placeholder-class) {
			font-size: 24rpx;
			color:#aaaaaa;
		}
		:deep(.uni-easyinput__content-input) {
			padding-left: 0 !important;
		}
	}
}
.tip {
	font-size: 24rpx;
	color: #FC5908;
	line-height: 49rpx;
	padding: 0 40rpx;
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
