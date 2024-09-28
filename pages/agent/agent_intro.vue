<template>
	<view>
		<navBar title="代理" ></navBar>
		<view class="content">
			<image src="@/static/agent/agent-intro.jpg" mode="widthFix" class="merchant_intro"></image>
			<view class="btn_full" @click="openPop">
				申请代理
			</view>
		</view>
		
		<uni-popup ref="popup" background-color="#fff" type="bottom" borderRadius="30rpx 30rpx 0 0">
			<view class="pop_box">
				<view class="p_title">
					我想成为代理
				</view>
				<input type="number" placeholder="请填写您的手机号" v-model="phone" maxlength="11" />
				<input type="text" placeholder="请填写您的邮箱" v-model="email" />
				<view class="btn_plain" @click="submit">
					提交
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { applyAgent } from '../../service/agent';


onMounted(()=>{
	
})

const popup = ref()
const openPop = ()=>{
	popup.value.open()
}
const phone = ref()
const email = ref()

const submit = async()=>{
	if (!phone.value || phone.value.length < 11) return uni.showToast({
		icon: 'none',
		title: '请输入正确手机号'
	})
	if (!email.value) return uni.showToast({
		icon: 'none',
		title: '请输入正确邮箱号'
	})
	try{
		uni.showLoading({
			mask: true,
			title: '正在提交申请'
		})
		await applyAgent({mail: email.value, phone_number: phone.value})
		uni.hideLoading()
		popup.value.close()
		uni.showToast({
			icon: 'none',
			title: '申请成功，请等待后台审核'
		})
	}catch(e){
		uni.showToast({
			icon: 'none',
			title: '申请失败'
		})
	}
	
}
</script>

<style lang="scss" scoped>
.content {
	position: relative;
	padding-top: 60rpx;
	// background: url('@/static/merchant-intro.jpg') no-repeat;
	// background-size: 100% 100%;
	padding: 0;
	.merchant_intro {
		width: 100%;
		height: 100%;
		display: block;
	}
	.btn_full {
		position: absolute;
		bottom: 152rpx;
		left: 76rpx;
		right: 76rpx;
		margin-top: 50rpx;
	}
	
}
.pop_box {
	padding: 96rpx 76rpx 130rpx;
	
	.p_title {
		font-size: 36rpx;
		color: #fc5908;
		margin-bottom: 80rpx;
		text-align: center;
	}
	:deep(uni-input) {
		height: 76rpx;
		background-color: #f8f8f8;
		border-radius: 100px;
		margin-bottom: 50rpx;
		font-size: 24rpx;
		color: #b0b0b0;
		padding-left: 54rpx;
	}
	:deep(.uni-input-placeholder) {
		color: #b0b0b0;
	}
	.btn_plain {
		width: 349rpx;
		margin-top: 110rpx;
	}
}
</style>
