<template>
  <view>
    <uni-popup ref="popup" borderRadius="30rpx" background-color="#fff">
      <view class="step_pop">
        <view class="step_top">
          <view class="title"> 积分变更提示 </view>
        </view>
        <view class="step_bottom">
          <view class="subsection">
            <text class="title">1. 积分升级与比例调整</text>
            <view class="item"
              >- 原有的“可用积分”将按照
              <text class="highlight">100:1</text>
              的比例转换为“能量积分”。</view
            >
            <view class="item"
              >例如：您的账户中有
              <text class="highlight">10000</text> 个“可用积分”，将转换为
              <text class="highlight">100</text> 个“能量积分”。</view
            >
            <view class="item"
              >-
              本次调整旨在优化积分的使用方式，让积分体系更加高效和规范。</view
            >
          </view>
          <view class="subsection">
            <text class="title">2. 释放规则保持不变</text>
            <view class="item"
              >- 您的积分释放规则<text class="highlight">（万分之五）</text
              >将保持不变。</view
            >
            <view class="item"
              >-
              不同的是，释放后的积分数量将按新的比例计算，并直接转换为“能量积分”。</view
            >
            <view class="item"
              >例如：如果您释放了
              <text class="highlight">500</text> 个“可用积分”，调整后将显示为
              <text class="highlight">5</text> 个“能量积分”。</view
            >
          </view>
          <view class="subsection">
            <text class="title">3. 可用积分的退出</text>
            <view class="item"
              >- 调整完成后，“可用积分”将全面退出满仓系统。</view
            >
            <view class="item"
              >-
              所有原本基于“可用积分”的操作，如消费、兑换等，将完全转为基于“能量积分”进行操作。</view
            >
          </view>
          <view class="subsection">
            <text class="title">4. 对您的权益影响</text>
            <view class="item"
              >-
              您的积分总价值不会因为本次调整而受到影响，仅为计算和显示方式的改变。</view
            >
            <view class="item"
              >-
              调整后的“能量积分”将具备与原“可用积分”相同的功能，并继续支持平台内的所有使用场景。</view
            >
          </view>
        </view>
        <view class="btn_plain" @click="close"> 确定 </view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref } from "vue";

const popup = ref();
const open = () => {
  popup.value.open();
};
const close = () => {
  popup.value.close();
};
defineExpose({
  open,
  close,
});
</script>

<style lang="scss" scoped>
.step_pop {
  width: 600rpx;
  padding: 64rpx;
  .step_top {
    margin-bottom: 40rpx;
    text-align: center;
    .title {
      font-size: 42rpx;
      color: #fc5908;
      line-height: 28rpx;
      font-weight: bold;
      margin-bottom: 30rpx;
    }
    .top_content {
      font-size: 30rpx;
      line-height: 28rpx;
    }
  }
  .step_bottom {
    height: 580rpx;
    overflow: hidden;
    overflow-y: scroll;
    margin-bottom: 10rpx;
    .sub_ttl {
      font-size: 30rpx;
      color: #fc5908;
      line-height: 28rpx;
      font-weight: bold;
      margin-bottom: 24rpx;
    }
    .bottom_content {
      font-size: 26rpx;
      line-height: 44rpx;
      margin-bottom: 40rpx;
    }
	.update-page {
  padding: 20rpx;
  line-height: 1.6;
}

.header {
  font-size: 36rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
}

.content {
  font-size: 28rpx;
}

.section {
  margin-bottom: 20rpx;
}

.subsection {
  margin-bottom: 50rpx;
}

.title {
  font-size: 30rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}

.item {
  margin-left: 20rpx;
  margin-bottom: 10rpx;
  font-size: 30rpx;
}

.highlight {
  color: #ff6600;
  font-weight: bold;
}
  }
  .btn_plain {
    width: 340rpx;
  }
}
</style>
