<template>
  <view class="container">
    <!-- 菜单项列表 -->
    <view class="menu-list">
      <!-- 个人资料 -->
      <view class="menu-item" @click="goToPersonalInfo">
        <text class="menu-text">个人资料</text>
        <image class="arrow-icon" src="https://static.maxcang.com/appstatic/myAccount/right_arrow_gray.png" mode="aspectFit"></image>
      </view>
      
      <!-- 密码与安全 -->
      <view class="menu-item" @click="goToSafety">
        <text class="menu-text">密码与安全</text>
        <image class="arrow-icon" src="https://static.maxcang.com/appstatic/myAccount/right_arrow_gray.png" mode="aspectFit"></image>
      </view>
      
      <!-- 积分账号 -->
      <view class="menu-item" @click="goToPointAccount">
        <text class="menu-text">积分账号</text>
        <image class="arrow-icon" src="https://static.maxcang.com/appstatic/myAccount/right_arrow_gray.png" mode="aspectFit"></image>
      </view>
    </view>
    
    <!-- 退出登录按钮 -->
    <view class="logout-container">
      <button class="logout-btn" @click="logout">退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'EditInfo',
  data() {
    return {
      
    }
  },
  methods: {
    // 跳转到个人资料页面
    goToPersonalInfo() {
      uni.navigateTo({
        url: '/pages/login/more_info_edit'
      });
    },
    
    // 跳转到密码与安全页面
    goToSafety() {
      uni.navigateTo({
        url: '/pages/myAccount/safety'
      });
    },
    
    // 跳转到积分账号页面
    goToPointAccount() {
      uni.navigateTo({
        url: '/pages/myAccount/point_account'
      });
    },
    
    // 退出登录
    logout() {
      uni.showModal({
        title: '提示',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            // 清除本地存储的用户信息
            // uni.removeStorageSync('token');
            // uni.removeStorageSync('userInfo');
            uni.clearStorageSync();
            // 跳转到登录页面
            uni.reLaunch({
              url: '/pages/login/login'
            });
          }
        }
      });
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #F5F5F5;
  padding-top: 20rpx;
}

.menu-list {
  width: 692rpx;
  height: 331rpx;
  background: #FFFFFF;
  border-radius: 30rpx;
  margin: 20rpx auto 0;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110rpx;
  padding: 0 40rpx;
  border-bottom: 1rpx solid #F0F0F0;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-text {
  font-size: 27rpx;
  color: #333333;
  font-weight: 400;
}

.arrow-icon {
  width: 12rpx;
  height: 21rpx;
}

.logout-container {
  position: fixed;
  bottom: 100rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 598rpx;
}

.logout-btn {
  width: 598rpx;
  height: 95rpx;
  background: linear-gradient(135deg, #FD8F36 0%, #FC5908 100%);
  color: #FFFFFF;
  font-size: 30rpx;
  font-weight: 500;
  border-radius: 17rpx;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logout-btn:active {
  opacity: 0.8;
}
</style> 