<template>
	<view>
		<navBar title="兑换积分" :isShow="true">
			<template class="skip" #right>
				<image src="@/static/record.png" mode="widthFix" class="record_pic"></image>
			</template>
		</navBar>
		<view class="content">
			<view class="tip">
				兑换积分前，请先复制下方地址，确保充值完成后，提交您的兑换记录。
			</view>
			<view class="copy_box flex_between">
				<view class="copy_text">
					{{obscureString(address)}}
				</view>
				<image src="@/static/copy.png" mode="widthFix" class="copy_pic" @click="copy"></image>
			</view>
			<view class="text_box">
				<view class="" style="color: #FC5908;">
					·  请复制您充值时的哈希值
				</view>
				<view class="">
					·  兑换时间：AM 9:00 ~ pm 9:00
				</view>
			</view>
			<view class="btn_full" @click="toNext">
				我要兑换
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getWalletAddress } from '@/service/point';
import { obscureString } from '@/utils';
const address = ref('')
onMounted(async()=>{
	const {results} = await getWalletAddress()
	address.value = results[0].address
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
</script>

<style lang="scss" scoped>
.record_pic {
	width: 33rpx;
}
.tip {
	font-size: 27rpx;
	color: #999999;
	line-height: 49rpx;
	padding: 40rpx;
}
.copy_box {
	background-color: #EAEAEA;
	padding: 28rpx 44rpx;
	margin-bottom: 40rpx;
	font-size: 24rpx;
	color: #999999;
	
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
