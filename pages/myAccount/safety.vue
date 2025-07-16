<template>
  <view class="container">
    <!-- 菜单项列表 -->
    <view class="menu-list">
      <!-- 修改登录密码 -->
      <view class="menu-item" @click="toEditLoginPassword">
        <text class="menu-text">修改登录密码</text>
        <image class="arrow-icon" src="/static/myAccount/right_arrow_gray.png" mode="aspectFit"></image>
      </view>
      
      <!-- 修改支付密码 -->
      <view class="menu-item" @click="toEditPayPassword">
        <text class="menu-text">修改支付密码</text>
        <image class="arrow-icon" src="/static/myAccount/right_arrow_gray.png" mode="aspectFit"></image>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
const toEditLoginPassword=()=>{
	uni.navigateTo({
		url:'/pages/myAccount/change_login_password'
	})
}
	
const toEditPayPassword=()=>{
	uni.navigateTo({
		url:'/pages/myAccount/change_pay_password'
	})
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
  height: 221rpx;
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
</style>