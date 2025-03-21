<template>
  <view class="points-container">
    <!-- 背景图 -->
    <image
      class="bg-image"
      src="https://static.maxcang.com/appstatic/jifen-bg.jpg"
      mode="aspectFill"
    ></image>

    <!-- 购物篮图片 -->
    <view class="basket-container">
      <image
        class="basket-image"
        src="https://static.maxcang.com/appstatic/jifen-freeworld.jpg"
        mode="aspectFit"
      ></image>
    </view>

    <!-- 按钮区域 -->
    <view class="buttons-container">
      <view class="btn receive-btn" @click="toReceive">
        <view class="btn-icon">
          <image
            src="https://static.maxcang.com/appstatic/jifen-qrcode.jpg"
            mode="aspectFit"
            class="icon-image"
          ></image>
        </view>
        <text class="btn-text">接收积分</text>
      </view>

      <view class="btn send-btn " @click="toSend">
        <view class="btn-icon">
          <image
            src="https://static.maxcang.com/appstatic/jifen-scan.jpg"
            mode="aspectFit"
            class="icon-image"
          ></image>
        </view>
        <text class="btn-text">赠送积分</text>
      </view>
    </view>
  </view>
</template>

<script setup>
// 使用script setup语法，无需返回data和methods
import {
		useUserStore
	} from '../../store/user';
	const userStore = useUserStore()



const token = uni.getStorageSync("accessToken");

const toReceive = () => {
	 if (!token) {
	    return uni.showToast({
	      icon: "none",
	      title: "请登录!",
	    });
	  }
	uni.navigateTo({
				url: '/pages/myAccount/point_code'
			})
}

const toSend = () => {
	 if (!token) {
	    return uni.showToast({
	      icon: "none",
	      title: "请登录!",
	    });
	  }
	
	if(userStore.shopInfo.state>0){
		scanCode()
	}else{
		uni.showToast({
			title: '请前往我的-商家服务-开通商家服务',
			icon: 'none'
		})
	}
	
}


const scanCode = async () => {

uni.scanCode({
	onlyFromCamera: true, // 只允许从摄像头扫码
	success: async (res) => {
		const scanResult = res.result.trim();
		// 验证是否为有效的11位手机号码
		if (/^\d{11}$/.test(scanResult)) {
			console.log('扫码结果: ', scanResult);
			uni.navigateTo({
				url: '/pages/merchant/point_gift?phone=' + scanResult
			});
		} else {
			// 如果扫码结果无效，继续等待用户重新扫码，不做任何其他操作
			console.warn('未扫描到有效的11位手机号码');
			uni.showToast({
				icon: 'none',
				title: '无效二维码，请重新扫码'
			})
		}
	},
	fail: (err) => {
		console.error('扫码失败: ', err);
		uni.showToast({
			title: '扫码失败',
			icon: 'none'
		});
	}
});
};


</script>

<style>
/* 添加这个全局样式重置 */
page {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.points-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 40rpx;
  box-sizing: border-box;
}

.bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  object-fit: contain;
  object-position: top;
  background-color: #f0f8ff;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60rpx;
  margin-bottom: 40rpx;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}

.logo {
  width: 80rpx;
  height: 80rpx;
  margin-right: 20rpx;
}

.title {
  font-size: 48rpx;
  font-weight: bold;
  color: #0052d9;
}

.subtitle {
  font-size: 28rpx;
  color: #333;
  letter-spacing: 4rpx;
  margin-top: 10rpx;
}

.basket-container {
	
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 160rpx 0;
  
}

.basket-image {
height: 378rpx;

}

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30rpx;
  margin-top: 270rpx;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100rpx;
  border-radius: 50rpx;
  padding: 0 30rpx;
}

.btn-icon {
  margin-right: 20rpx;
  width: 40rpx;
  height: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-image {
	width: 42rpx;
	height: 42rpx;
}

.btn-text {
	font-weight: 400;
	font-size: 34rpx;
}

.receive-btn {
  color: white;
  width: 462rpx;
  height: 104rpx;
  background: linear-gradient(179deg, #ff924d 0%, #e64046 100%);
  box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(252, 89, 8, 0.15);
  border-radius: 16rpx 16rpx 16rpx 16rpx;
  margin: 0 auto;
 
}

.send-btn {
  color: white;
  width: 462rpx;
  height: 104rpx;
  background: linear-gradient(177deg, #83ebf3 0%, #335fe8 100%);
  border-radius: 16rpx 16rpx 16rpx 16rpx;
  border: 2rpx solid rgba(39, 178, 138, 0.15);
  margin: 0 auto;
  margin-top: 10rpx;
  
}
</style>
