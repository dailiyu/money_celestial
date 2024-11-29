<template>
	<view class="page">
		<navBar :isToHome="true" title="商家入驻"></navBar>
		<view class="img-box">
			<image class="img" src="https://static.maxcang.com/appstatic/success.jpg" mode="aspectFit"></image>
		</view>
		<view class="text-box">
			<view class="text">店铺信息已提交，请等待审核！</view>
		</view>
		<view class="buttom-box">
			
		</view>
	</view>
</template>

<script setup>
	
	const toCreateShop=async ()=>{
		uni.redirectTo({
			url:'merchant_set_info'
		})
	}
	// #ifdef APP-PLUS
		// 拦截返回操作
		import { onBackPress } from '@dcloudio/uni-app';
		onBackPress((options) => {
			uni.reLaunch({
								url: '/pages/index/index' // 首页路径
							});
			// console.log(111122);
			// if (options.from === 'navigateBack') {
			// 	console.log('navigateBack');
			// 	// 如果是右滑返回或物理返回，跳转到首页
			// 	uni.reLaunch({
			// 		url: '/pages/index/index' // 首页路径
			// 	});
			// 	return true; // 阻止默认返回
			// }
			 return true; // 允许其他情况继续执行返回
		});
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
  display: flex;
  justify-content: center; 
  align-items: center;   
	margin: 72rpx 0;
  width: 100%;
  .text {
    text-align: center;  
    font-size: 36rpx;   
    color: #333;
	
  }
}

.buttom-box{
	display: flex;
	justify-content: center;
	align-items: center;
	
	.buttom{
		background-color:#FC5908 ;
		color: #fff;
		width: 598rpx;
		height: 95rpx;
		text-align: center;
		line-height:95rpx ;
		font-size: 30rpx;
		border-radius: 17rpx 17rpx 17rpx 17rpx;
	}
}

</style>
