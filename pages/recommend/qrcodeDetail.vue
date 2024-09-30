<template>
  <view class="page">
    <navBar title="推荐官二维码"></navBar>
    <div class="content">
      <!-- 使用图片展示二维码 -->
      <img class="img" v-if="qrCodeUrl" :src="qrCodeUrl" alt="QR Code" />
    </div>
  </view>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { getOfficerQRCode } from '@/service/recommend.js';

const qrCodeUrl = ref('');

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
	.content{
		display: flex;
		justify-content: center;
		.img{
			margin-top: 300rpx;
		}
	}
</style>
