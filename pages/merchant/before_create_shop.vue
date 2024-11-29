<template>
	<view class="page">
		<navBar title="商家入驻"></navBar>
		<view class="img-box">
			<image class="img" src="https://static.maxcang.com/appstatic/success.jpg" mode="aspectFit"></image>
		</view>
		<view class="text-box">
			<view class="text">恭喜你，满仓商家注册成功！</view>
			<view class="text">
				快去创建店铺吧！
			</view>
		</view>
		<view class="buttom-box">
			// #ifdef MP-WEIXIN
					<view class="buttom" @click="toCreateShop">创建店铺</view>
			// #endif
			// #ifdef APP-PLUS
					<view class="buttom" @click="toMiniProgram">创建店铺</view>
			// #endif
		</view>
	</view>
</template>

<script setup>
	// 点击创建店铺跳转
	// #ifdef MP-WEIXIN
			const toCreateShop = () => {
				uni.redirectTo({
					url: '/pages/merchant/merchant_set_info' // 目标页面路径
				});
			};
		// #endif
	
	
	// #ifdef APP-PLUS
	const toMiniProgram=()=>{
			plus.runtime.openURL("weixin://dl/business/?appid=wx06423884fa78e5ba&path=pages/index/index")
	}
	
	// #endif
	
</script>

<style lang="scss" scoped>
.img-box {
  display: flex;
  justify-content: center;
  margin-top: 300rpx;
  .img {
    width: 231rpx;
    height: 223rpx;
  }
}

.text-box {
	margin: 72rpx 0;
  width: 100%;
  font-size: 36rpx;
  text-align: center;
  .text {
    text-align: center;  
	margin-top: 10rpx;
    color: #333;
  }
}

.buttom-box {
	display: flex;
	justify-content: center;
	align-items: center;
	.buttom {
		background-color: #FC5908;
		color: #fff;
		width: 598rpx;
		height: 95rpx;
		text-align: center;
		line-height: 95rpx;
		font-size: 30rpx;
		border-radius: 17rpx;
	}
}
</style>
