<template>
  <view class="page">
    <!-- 主内容区域 -->
    <view class="content-container">
      <!-- 上半部分背景区域 -->
      <view class="top-background-section">
        <!-- 返回按钮 -->
        <view class="back-button" @click="goBack">
          <text class="back-arrow">‹</text>
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
        <view class="join-button" :class="{ 'disabled': !groupAvailable || loading }" @click="joinGroup">
          <text class="button-text">
            {{ loading ? '加载中...' : (groupAvailable ? '加入仓鼠交流群' : '当地暂未开通') }}
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { getCityAgent } from '@/service/agent.js';

// 当前页面索引
const currentIndex = ref(0);

// 城市代理信息
const cityAgentInfo = ref(null);
const wechatGroup = ref('');
const groupAvailable = ref(false);
const loading = ref(false);

// 内容列表
// 页面显示时获取数据
onShow(() => {
  getCityAgentInfo();
});

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

// 获取城市代理信息
const getCityAgentInfo = async () => {
  try {
    loading.value = true;
    
    // 获取当前城市
    const currentCity = uni.getStorageSync('city');
    
    // 使用新接口获取指定城市的代理信息
    const response = await getCityAgent(currentCity);
    
    if (response) {
      cityAgentInfo.value = response;
      
      // 检查是否有QQ群且状态为1（审核通过）
      if (response.contact_wechat_group_state === 1 && response.contact_wechat_group) {
        groupAvailable.value = true;
        wechatGroup.value = response.contact_wechat_group;
      } else {
        groupAvailable.value = false;
      }
    } else {
      groupAvailable.value = false;
    }
  } catch (error) {
    console.error('获取城市代理信息失败:', error);
    
    // 处理404错误
    if (error.status === 404) {
      if (error.data && error.data.error) {
        if (error.data.error === '代理不存在') {
          uni.showToast({
            title: '该城市暂无代理',
            icon: 'none',
            duration: 2000
          });
        } else if (error.data.error === '城市代理未生效') {
          uni.showToast({
            title: '该城市代理暂未生效',
            icon: 'none',
            duration: 2000
          });
        }
      }
    }
    
    groupAvailable.value = false;
  } finally {
    loading.value = false;
  }
};

// 加入群聊
const joinGroup = () => {
  if (loading.value) {
    return;
  }
  
  if (!groupAvailable.value) {
    let content = '当地暂未开通仓鼠交流群，敬请期待';
    
    // 根据代理状态显示不同的提示信息
    if (cityAgentInfo.value) {
      if (cityAgentInfo.value.contact_wechat_group_state === 0) {
        content = '仓鼠群正在审核中，请稍后再试';
      } else if (cityAgentInfo.value.contact_wechat_group_state === -1) {
        content = '仓鼠群审核未通过，请联系客服';
      } else if (!cityAgentInfo.value.contact_wechat_group) {
        content = '该城市暂未设置仓鼠群，敬请期待';
      }
    }
    
    uni.showModal({
      title: '提示',
      content: content,
      showCancel: false,
      confirmText: '知道了'
    });
    return;
  }

  uni.showModal({
    title: '加入群聊',
    content: `QQ群：${wechatGroup.value}\r\n\r\n请复制群号到QQ搜索加入`,
    confirmText: '复制群号',
    cancelText: '取消',
    success: (res) => {
      if (res.confirm) {
        uni.setClipboardData({
          data: wechatGroup.value,
          success: () => {
                    uni.showToast({
          title: 'QQ群号已复制',
          icon: 'success'
        });
          },
          fail: () => {
            uni.showToast({
              title: '复制失败',
              icon: 'none'
            });
          }
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
  display: flex;
  flex-direction: column;
}

/* 返回按钮 */
.back-button {
  position: absolute;
  top: calc(var(--status-bar-height) + 50rpx);
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
  box-sizing: border-box;
  position: relative;
}

/* 上半部分背景区域 */
.top-background-section {
  background-image: url('https://static.maxcang.com/appstatic/agent/group_bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 750rpx;
  height: 901rpx;
  padding: 0 75rpx;
  padding-top: calc(var(--status-bar-height) + 20rpx); /* 为状态栏和返回按钮留出空间 */
  position: relative;
}

/* 文字内容区域 */
.text-section {
  padding: 0 75rpx 100rpx;
  margin-top: 85rpx;
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
  margin-bottom: 54rpx;
  line-height: 71rpx;
  width: 100%;
}

.title-highlight {
  display: block;
  font-size: 48rpx;
  font-weight: bold;
  color: #333333;
}

.title-normal-wrapper {
  position: relative;
  display: inline-block;
}

.title-normal {
  display: block;
  font-size: 48rpx;
  font-weight: bold;
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
  margin-bottom: 43rpx;
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
  
  &.disabled {
    background: #CCCCCC;
    opacity: 0.6;
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
  .join-button {
    width: 100%;
  }
}
</style> 