<template>
	<view class="page">
		<navBar title="推荐官二维码" ></navBar>
		<div class="content">
			<img class="img"  v-if="qrCodeUrl" :src="qrCodeUrl" alt="QR Code" />
		</div>
	</view>
</template>

<script setup>
import { onMounted ,ref} from 'vue';
import { getOfficerQRCode, getRecommendOfficerInfo } from '@/service/recommend.js'
import QRCode from 'qrcode'
	const qrcode = ref('')
	onMounted(async()=>{
		const {referral_url} = await getOfficerQRCode()
		qrcode.value=referral_url
		 await generateQRCode(referral_url)
	})
	
	
const qrCodeUrl = ref('')
	// 生成二维码的函数
	const generateQRCode = async (url) => {
		
	  try {
	    // 使用 qrcode.js 生成二维码并将其转换为 Data URL
	    const qrCodeDataUrl = await QRCode.toDataURL(url, {
	      width: 200,  // 二维码宽度
	      height: 200, // 二维码高度
	    })
	    // 将生成的二维码 URL 存储在 qrCodeUrl 中
	    qrCodeUrl.value = qrCodeDataUrl
	  } catch (err) {
	    console.error('二维码生成失败:', err)
	  }
	}
</script>

<style lang="scss" scoped>
	.content{
		display: flex;
		justify-content: center;
		.img{
			margin-top: 300rpx;
		}
	}
</style>
