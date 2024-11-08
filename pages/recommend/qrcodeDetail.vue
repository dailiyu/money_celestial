<template>
  <view class="page">
  	<navBar title="推荐官二维码"></navBar>
  	<view class="content">
  		<view class="code_box">
  			<view>
  				{{obscurePhoneNumber(phone)}}
  			</view>
  			<img class="qrCode" :src="qrCodeUrl" alt="QR Code" />
  			<view class="tip">
  				扫描二维码，成为商家
  			</view>
  		</view>
  	</view>
  </view>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { getOfficerQRCode } from '@/service/recommend.js';
import { obscurePhoneNumber } from '@/utils/index.js'

const qrCodeUrl = ref('');
const phone = uni.getStorageSync('phoneNumber')
onMounted(async () => {
  const { referral_url } = await getOfficerQRCode();
  generateQRCode(referral_url);
});

// 生成二维码的函数
const generateQRCode = (url) => {
  // 使用在线 API 生成二维码
  qrCodeUrl.value = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
};
</script>


<style lang="scss" scoped>
.page {
	height: 100vh;
	// background-color: #FC5908;
	background: url('@/static/my/code_bg.png') no-repeat;
	background-size: 100% 100%;
	.content {
		padding: 84rpx 76rpx;
	}
}
.code_box {
	background-color: #fff;
	border-radius: 30rpx;
	padding: 60rpx 120rpx;
	text-align: center;
	font-size: 30rpx;
	color: #918E8F;
	.qrCode {
		width: 350rpx;
		height: 350rpx;
		text-align: center;
		margin: 50rpx auto 60rpx;
	}
}
</style>
