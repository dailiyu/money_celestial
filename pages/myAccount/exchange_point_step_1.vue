<template>
	<view>
		<view class="content">
			<view class="tip">
				首次增加积分操作，请在推荐人的指导下进行！
			</view>
			
			<!-- 当前绑定的积分账号 -->
			<view v-if="pointsAccount" class="info-section">
				<view class="section-title">当前绑定积分账号</view>
				<view class="info_box">
					<view class="info_text">{{ obscureString(pointsAccount) }}</view>
				</view>
			</view>
			
			<!-- 充值地址 -->
			<view class="info-section">
				<view class="section-title">充值地址</view>
				<view class="copy_box flex_between">
					<view class="copy_text">
						{{obscureString(address)}}
					</view>
					<image src="https://static.maxcang.com/appstatic/copy.png" mode="widthFix" class="copy_pic" @click="copy"></image>
				</view>
			</view>
			<view class="text_box">
				<view class="">
					1、复制当前分配的充值地址。
				</view>
				<view class="">
					2、务必使用当前账号绑定的积分账号进行充值。 
				</view>
				<view class="">
					3、请提交成功充值后的订单“哈希值”。
				</view>
				<view class="">
					4、选择需增加积分的手机账号。
				</view>
			</view>
			<view class="btn_full" @click="toNext">
				我已充值
			</view>
			<!-- <view class="record-link" @click="toRecord">
				<image src="https://static.maxcang.com/appstatic/record.png" mode="widthFix" class="record_pic"></image>
				<text>查看记录</text>
			</view> -->
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getWalletAddress, getAllPoint } from '@/service/point';
import { obscureString } from '@/utils';
const address = ref('')
const pointsAccount = ref('')

onMounted(async()=>{
	// 获取钱包地址
	const {results} = await getWalletAddress()
	address.value = results[0].address
	
	// 获取当前绑定的积分账号
	try {
		const pointData = await getAllPoint()
		pointsAccount.value = pointData.points_account || ''
	} catch (error) {
		console.error('获取积分账号失败:', error)
	}
})
const copy = ()=>{
	console.log(address.value)
	uni.setClipboardData({
		data: address.value,
		success() {
			uni.showToast({
				icon: 'none',
				title: '复制成功'
			})
		}
	})
}
const toNext = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/exchange_point_step_2'
	})
}
const toRecord = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/red_point_add_record'
	})
}
</script>

<style lang="scss" scoped>
.record-link {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30rpx;
	padding: 20rpx;
	
.record_pic {
	width: 33rpx;
		margin-right: 10rpx;
	}
	
	text {
		font-size: 24rpx;
		color: #666;
	}
}
.tip {
	font-size: 27rpx;
	color: #999999;
	line-height: 49rpx;
	padding: 40rpx;
}

.info-section {
	margin: 0 40rpx 30rpx;
	
	.section-title {
		font-size: 25rpx;
		color: #333333;
		font-weight: 500;
		margin-bottom: 15rpx;
		padding-left: 10rpx;
	}
}

.info_box {
	background-color: #EAEAEA;
	padding: 28rpx 44rpx;
	font-size: 24rpx;
	color: #999999;
	border-radius: 8rpx;
	
	.info_text {
		flex: 1;
	}
}

.copy_box {
	background-color: #EAEAEA;
	padding: 28rpx 44rpx;
	font-size: 24rpx;
	color: #999999;
	border-radius: 8rpx;
	
	.copy_text {
		flex: 1;
	}
	.copy_pic {
		width: 27rpx;
		height: 1rpx;
	}
}
.text_box {
	padding: 0 40rpx;
	font-size: 24rpx;
	color: #999999;
	line-height: 49rpx;
}
.btn_full {
	margin-top: 70rpx;
}
</style>
