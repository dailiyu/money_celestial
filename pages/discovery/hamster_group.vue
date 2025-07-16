<template>
  <view class="page">
    <!-- 主内容区域 -->
    <view class="content-container">
      <!-- 返回按钮 -->
      <view class="back-button" @click="goBack">
        <text class="back-arrow">‹</text>
      </view>
      <!-- 插画区域 -->
      <view class="illustration-section">
        <view class="illustration-placeholder">
          <!-- 多人聊天插画 -->
          <view class="chat-people">
            <view class="person person-1">👤</view>
            <view class="person person-2">👤</view>
            <view class="person person-3">👤</view>
            <view class="person person-4">👤</view>
            <view class="person person-5">👤</view>
          </view>
          <view class="phone-mockup">
            <view class="phone-screen">
              <view class="chat-bubble">💬</view>
              <view class="chat-bubble">💬</view>
              <view class="chat-bubble">💬</view>
            </view>
          </view>
          <view class="floating-icons">
            <view class="icon">📱</view>
            <view class="icon">💭</view>
            <view class="icon">⭐</view>
          </view>
        </view>
      </view>
      
      <!-- 文字内容区域 -->
      <view class="text-section">
        <!-- 滑动内容区域 -->
        <swiper 
          class="content-swiper" 
          :indicator-dots="false" 
          :autoplay="true" 
          :interval="3000"
          :circular="true"
          @change="onSwiperChange"
          :current="currentIndex"
        >
          <swiper-item v-for="(item, index) in contentList" :key="index" class="swiper-item">
            <!-- 主标题 -->
            <view class="main-title">
              <text class="title-highlight" v-if="item.highlightTitle">{{ item.highlightTitle }}</text>
              <view class="title-normal-wrapper">
                <text class="title-normal">{{ item.normalTitle }}</text>
                <view class="underline-block"></view>
              </view>
            </view>
            
            <!-- 描述文字 -->
            <view class="description">
              <text class="desc-text" v-for="(desc, descIndex) in item.descriptions" :key="descIndex">{{ desc }}</text>
            </view>
          </swiper-item>
        </swiper>
        
        <!-- 分页指示器 -->
        <view class="pagination-dots">
          <view 
            class="dot" 
            :class="{ 'active': index === currentIndex }"
            v-for="(item, index) in contentList" 
            :key="index"
            @click="goToPage(index)"
          ></view>
        </view>
        
        <!-- 加入群聊按钮 -->
        <view class="join-button" @click="joinGroup">
          <text class="button-text">加入仓鼠交流群</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 当前页面索引
const currentIndex = ref(0);

// 内容列表
const contentList = ref([
  {
    highlightTitle: '满仓的第一手消息',
    normalTitle: '都从群里发出',
    descriptions: [
      '活动什么时候开始？鸡蛋兑完了没？',
      '不用再问客服，群里早就有人发截图了。'
    ]
  },
  {
    highlightTitle: '不是"进群"',
    normalTitle: '是"进圈"',
    descriptions: [
      '在这里，满仓不再只是一个App，',
      '而是一群人共同踩出来的路。'
    ]
  },
  {
    highlightTitle: '你看到的，是系统',
    normalTitle: '你不知道的，在群里',
    descriptions: [
      '积分记录告诉你得了多少，',
      '但群会告诉你该怎么用得更值。'
    ]
  },
  {
    highlightTitle: '好用的东西',
    normalTitle: '总有人在群里先发现',
    descriptions: [
      '平台还没推送，群里已经有人在发截图了。',
      '不是爆料，是老玩家的习惯。'
    ]
  },
  {
    highlightTitle: '这里不只是消息',
    normalTitle: '更是线索',
    descriptions: [
      '进群，不只是获取答案，',
      '有时候，是你发现别人走了哪些路径。'
    ]
  }
]);

// 滑动切换事件
const onSwiperChange = (e) => {
  currentIndex.value = e.detail.current;
};

// 点击分页指示器跳转
const goToPage = (index) => {
  currentIndex.value = index;
};

// 返回上一页
const goBack = () => {
  uni.navigateBack();
};

// 加入群聊
const joinGroup = () => {
  uni.showModal({
    title: '加入群聊',
    content: '请联系客服获取群聊二维码',
    confirmText: '联系客服',
    cancelText: '取消',
    success: (res) => {
      if (res.confirm) {
        // 这里可以跳转到客服页面或者显示客服信息
        uni.showToast({
          title: '客服QQ: 3833194083',
          icon: 'none',
          duration: 3000
        });
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #FFF5F0 0%, #FFFFFF 100%);
  display: flex;
  flex-direction: column;
}

/* 返回按钮 */
.back-button {
  position: absolute;
  top: calc(var(--status-bar-height) + 30rpx);
  left: 30rpx;
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10rpx);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:active {
    transform: scale(0.95);
    background: rgba(255, 255, 255, 0.9);
  }
}

.back-arrow {
  font-size: 40rpx;
  font-weight: bold;
  color: #FC5908;
  line-height: 1;
  margin-left: -2rpx;
}

.content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 75rpx;
  box-sizing: border-box;
  position: relative;
  padding-top: calc(var(--status-bar-height) + 20rpx); /* 为状态栏和返回按钮留出空间 */
}

/* 插画区域 */
.illustration-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600rpx;
  padding-top: 50rpx; /* 减少顶部间距 */
}

.illustration-placeholder {
  width: 600rpx;
  height: 500rpx;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-people {
  position: absolute;
  width: 100%;
  height: 100%;
}

.person {
  position: absolute;
  width: 80rpx;
  height: 80rpx;
  background: linear-gradient(135deg, #FFB366 0%, #FF9A5A 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40rpx;
  box-shadow: 0 8rpx 20rpx rgba(252, 89, 8, 0.2);
  
  &.person-1 {
    top: 50rpx;
    left: 100rpx;
  }
  
  &.person-2 {
    top: 60rpx;
    right: 120rpx;
    background: linear-gradient(135deg, #FD8F36 0%, #FC5908 100%);
  }
  
  &.person-3 {
    bottom: 150rpx;
    left: 50rpx;
    background: linear-gradient(135deg, #FF7A2E 0%, #FC5908 100%);
  }
  
  &.person-4 {
    bottom: 120rpx;
    right: 80rpx;
    background: linear-gradient(135deg, #FFB366 0%, #FF7A2E 100%);
  }
  
  &.person-5 {
    top: 200rpx;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #FD8F36 0%, #FF9A5A 100%);
  }
}

.phone-mockup {
  width: 200rpx;
  height: 350rpx;
  background: #333;
  border-radius: 30rpx;
  padding: 20rpx;
  box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #FFE5D6 0%, #FFF5F0 100%);
  border-radius: 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20rpx;
}

.chat-bubble {
  background: #FC5908;
  color: white;
  padding: 10rpx 20rpx;
  border-radius: 20rpx;
  font-size: 24rpx;
  animation: bounce 2s ease-in-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.3s;
    align-self: flex-end;
    background: #2AC2A4;
  }
  
  &:nth-child(3) {
    animation-delay: 0.6s;
    background: #FF7A2E;
  }
}

.floating-icons {
  position: absolute;
  width: 100%;
  height: 100%;
  
  .icon {
    position: absolute;
    font-size: 36rpx;
    opacity: 0.7;
    animation: float 3s ease-in-out infinite;
    
    &:nth-child(1) {
      top: 80rpx;
      right: 50rpx;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      bottom: 100rpx;
      left: 100rpx;
      animation-delay: 1s;
    }
    
    &:nth-child(3) {
      top: 150rpx;
      left: 20rpx;
      animation-delay: 2s;
    }
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10rpx);
  }
  60% {
    transform: translateY(-5rpx);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20rpx);
  }
}

/* 文字内容区域 */
.text-section {
  padding-bottom: 100rpx;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* 滑动内容 */
.content-swiper {
  width: 100%;
  height: 300rpx;
  margin-bottom: 43rpx;
}

.swiper-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* 主标题 */
.main-title {
  margin-bottom: 46rpx;
  line-height: 71rpx;
  width: 100%;
}

.title-highlight {
  display: block;
  font-size: 48rpx;
  font-weight: 700;
  color: #333333;
}

.title-normal-wrapper {
  position: relative;
  display: inline-block;
}

.title-normal {
  display: block;
  font-size: 48rpx;
  font-weight: 700;
  color: #333333;
  position: relative;
}

.underline-block {
  height: 16rpx;
  background: linear-gradient(90deg, #FD8F36, #FC5908);
  width: 100%;
  position: absolute;
  bottom: 8rpx;
  left: 0;
  opacity: 0.8;
}

/* 描述文字 */
.description {
  width: 100%;
}

.desc-text {
  display: block;
  font-size: 24rpx;
  color: #333333;
  line-height: 45rpx;
  margin-bottom: 0;
}

/* 分页指示器 */
.pagination-dots {
  display: flex;
  gap: 6rpx;
  margin-bottom: 84rpx;
  justify-content: flex-start;
  width: 100%;
}

.dot {
  width: 15rpx;
  height: 9rpx;
  border-radius: 4rpx;
  background-color: #C8C8C8;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.active {
    width: 39rpx;
    background-color: #FC5908;
  }
}

/* 加入群聊按钮 */
.join-button {
  width: 598rpx;
  height: 95rpx;
  background: linear-gradient(135deg, #FD8F36 0%, #FC5908 100%);
  border-radius: 17rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:active {
    opacity: 0.8;
  }
}

.button-text {
  font-size: 30rpx;
  font-weight: 500;
  color: #FFFFFF;
  text-align: center;
}

/* 适配不同屏幕尺寸 */
@media screen and (max-width: 750rpx) {
  .content-container {
    padding: 0 40rpx;
  }
  
  .join-button {
    width: 100%;
  }
  
  .main-illustration {
    width: 500rpx;
    height: 400rpx;
  }
}
</style> 