<template>
  <view class="points-popup-overlay" v-if="visible" @click.self="closePopup">
    <view class="points-popup-container">
      <!-- 使用背景图片的弹窗内容 -->
      <view class="points-popup-content">
        <!-- 背景图片已包含所有文字内容 -->
        
        <!-- 按钮区域 -->
        <view class="popup-buttons">
          <!-- <button class="btn-later" >稍后领</button> -->
          <button class="btn-confirm" @click="closePopup">我知道了</button>
        </view>
        
        <!-- 关闭按钮 -->
        <view class="close-button" @click="closePopup">
          <text>×</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'confirm']);

const closePopup = () => {
  emit('close');
};

const confirmPoints = () => {
  emit('confirm');
};
</script>

<style lang="scss" scoped>
.points-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url('https://static.maxcang.com/appstatic/point/points_mask_bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.points-popup-container {
  width: 85%;
  max-width: 600rpx;
  position: relative;
}

.points-popup-content {
  width: 100%;
  background: url('https://static.maxcang.com/appstatic/point/points_popup_bg.png') no-repeat;
  background-size: 100% 100%;
  border-radius: 20rpx;
  overflow: hidden;
  position: relative;
  padding-bottom: 40rpx; /* 为按钮留出空间 */
  
  .popup-buttons {
    display: flex;
    justify-content: space-between;
    gap: 20rpx;
    height: 88rpx;
    padding: 0 40rpx;
    margin-top: 410rpx; /* 调整此值以匹配背景图片中文字的底部位置 */
    border-radius: 16rpx 16rpx 16rpx 16rpx;
    
    .btn-later {
      flex: 1;
      background-color: #ffffff;
      color: #999;
      border: 1px solid #ddd;
      width: 200rpx;
      padding: 20rpx 0;
      font-size: 28rpx;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
    
    .btn-confirm {
      flex: 2;
      background-color: #e93a3a;
      color: #ffffff;
      border: none;
      width: 348rpx;
      padding: 20rpx 0;
      font-size: 28rpx;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
  }
  
  .close-button {
    position: absolute;
    bottom: -100rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 80rpx;
    height: 80rpx;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 50rpx;
  }
}
</style> 