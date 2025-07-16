<template>
	<view class="page">
		<navBar :isToHome="true" title="商家入驻"></navBar>
		<view class="img-box">
			<image class="img" src="https://static.maxcang.com/appstatic/success.jpg" mode="aspectFit"></image>
		</view>
		<view class="text-box">
			<view class="text">已提交，请等待！</view>
		</view>
		<view class="buttom-box">
			
		</view>
	</view>
</template>


<script>
export default {


  // 页面方法：跳转到商家设置页面
  methods: {
    toCreateShop() {
      uni.redirectTo({
        url: 'merchant_set_info'
      });
    }
  },

  // #ifdef APP-PLUS
  // 拦截返回操作（仅限 APP 平台）
  onBackPress(options) {
    uni.reLaunch({
      url: '/pages/index/index' // 首页路径
    });
    return true; // 阻止返回操作
  },
  // #endif

	//  #ifdef MP-WEIXIN

	onUnload() {
	    console.log('小程序页面卸载');
	    // 小程序卸载页面时跳转到首页
	   uni.navigateBack({
		   delta:2
	   })
	  }
	// #endif

}
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
