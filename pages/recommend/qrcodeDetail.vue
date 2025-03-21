<template>
  <view class="page">
  	
	
	
	
  	<view class="content">
		<view class="title">第一步</view>
		<view class="code_box">
			
			<img class="qrCode" src="https://static.maxcang.com/appstatic/merchantqrcode.png" alt="QR Code" />
			<view class="tip">
				<view>微信扫一扫</view>
				<view>进入商家申请页面</view>
			</view>
		</view>
		
		
		<view class="title next" >第二步</view>
  		<view class="code_box">
  			<view>
  					{{obscurePhoneNumber(phone)}}
  			</view>
  			<img class="qrCode" :src="qrCodeUrl" alt="QR Code" />
  			<view class="tip">
  				在商家入驻页面 扫描邀请码获得入驻资格
  			</view>
  		</view>
  	</view>
  </view>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { getOfficerQRCode } from '@/service/recommend.js';
import { obscurePhoneNumber } from '../../utils';
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
	background: url('https://static.maxcang.com/appstatic/my/code_bg.png') no-repeat;
	background-size: 100% 100%;
	.content {
		padding: 0 76rpx;
	}
}
.title{
	&.next{
		border-top: 1rpx solid rgba(2555, 255, 255, 0.4);
		padding: 30rpx 0;
		margin-top: 50rpx;
	}
	text-align: center;
	font-size: 40rpx;
	margin: 0 20rpx;
}
.code_box {
	background-color: #fff;
	border-radius: 30rpx;
	padding: 60rpx 120rpx;
	text-align: center;
	font-size: 30rpx;
	color: #918E8F;
	.qrCode {
		width: 300rpx;
		height: 300rpx;
		text-align: center;
		
	}
}
</style>
