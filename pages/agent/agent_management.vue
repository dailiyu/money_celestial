<template>
	<view>
		<navBar title="代理后台" ></navBar>
		<!-- <image src="@/static/agent/agent-bg.png" mode="widthFix" class="agent_pic"></image> -->
		<view class="content">
			<view class="total_data">
				
				<view class="data_item">
					<view class="location">
						<text class="city">{{cityAgent}}</text>
						<text>代理</text>
					</view>
					<view class="point_box flex">
						<view class="point_text">
							获得积分
						</view>
						<view class="point_num">
							{{agentPoint}}
						</view>
					</view>
					<view class="flex">
						<view class="" style="margin-right: 112rpx;">
							<view class="data_text">
								商家数量
							</view>
							<view class="data_num">
								{{merchantAmount}}
							</view>
						</view>
						<view class="">
							<view class="data_text">
								推荐官数量
							</view>
							<view class="data_num">
								{{officerAmount}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list_box">
				<view class="list_item flex_between" @click="toMerchantList">
					<view class="">
						商家列表
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toMerchantCode">
					<view class="">
						商家码认证
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toSecurityDeposit">
					<view class="">
						保证金
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getRecommendOfficerAmount, getAgentShopAmount, getProvinceId } from '@/service/agent.js'
import { getRecords } from '@/service/deposit';

const provinceId = ref()
onMounted(async()=>{
	const {results} = await getProvinceId()
	provinceId.value = results[0].province
	getShopAmount()
	getOfficerAmount()
	getAgentPoint()
})

const merchantAmount = ref(0)
const cityAgent = ref('')

const getShopAmount = async()=>{
	const {count, results} = await getAgentShopAmount({code:provinceId.value})
	merchantAmount.value = count
	cityAgent.value = results[0]?.city
}

const officerAmount = ref(0)
const getOfficerAmount = async()=>{
	const {count} = await getRecommendOfficerAmount({code:provinceId.value})
	officerAmount.value = count
}
const agentPoint = ref(0)
const getAgentPoint = async()=>{
	const {total_amount} = await getRecords({transaction_type:'bonus'})
	agentPoint.value = total_amount
}



const toMerchantList = ()=>{
	if (!provinceId.value) return
	uni.navigateTo({
		url: '/pages/agent/merchant_list?provinceId='+provinceId.value
	})
}
const toMerchantCode = ()=>{
	// uni.navigateTo({
	// 	url: '/pages/merchant/merchant_code_authentication'
	// })
	uni.navigateTo({
		url: '/pages/merchant/merchant_code_authentication'
	})
}
const toSecurityDeposit = ()=>{
	uni.navigateTo({
		url: '/pages/agent/security_deposit'
	})
	// uni.navigateTo({
	// 	url: '/pages/merchant/security_deposit'
	// })
}

</script>

<style lang="scss" scoped>
// .agent_pic {
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	z-index: -1;
// 	width: 100%;
// 	display: block;
// 	margin-bottom: 20rpx;
// }
.content {
	background: url('@/static/agent/bg.png') no-repeat;
	background-size: 100% auto;
}
.total_data {
	// position: relative;
	.data_item {
		// position: absolute;
		// top: 113rpx;
		// left: 44rpx;
		padding: 60rpx 44rpx 0;
		margin-bottom: 280rpx;
		.location {
			font-size: 49rpx;
			color: #FC5908;
			margin-bottom: 25rpx;
			.city {
				font-weight: bold;
			}
		}
		.point_box {
			border: 1rpx solid #fff;
			font-size: 21rpx;
			font-weight: bold;
			margin-bottom: 46rpx;
			width: fit-content;
			.point_text {
				background-color: #fff;
				color: #0E3360;
				padding: 8rpx 14rpx;
			}
			.point_num {
				padding: 8rpx 38rpx;
				color: #fff;
			}
		}
		.data_text {
			margin-bottom: 20rpx;
			font-size: 24rpx;
			color: #fff;
		}
		.data_num {
			font-size: 55rpx;
			color: #FC5908;
			font-weight: bold;
		}
	}
}
.list_box {
	padding: 0 28rpx;
	background-color: #fff;
	.list_item {
		padding: 46rpx 14rpx;
		font-weight: 500;
		font-size: 27rpx;
		border-bottom: 1px solid #ececec;
		&:last-child {
			border-bottom: none;
		}
		.arrow_pic {
			width: 12rpx;
		}
	}
}
</style>
