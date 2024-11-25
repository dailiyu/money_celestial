<template>
    <navBar title="更新日志"></navBar>
        <view class="update-page" style="background-color: #fff; margin: 22rpx 24rpx;">
      <view class="header">
        满仓2.7.0更新日志：
      </view>
      <view class="content">
        <view class="section">
          为了优化积分体系，更好地服务广大用户，我们将对现有的“可用积分”进行调整，升级为全新的“能量积分”。以下是具体说明：
        </view>
        <view class="subsection">
          <text class="title">1. 积分升级与比例调整</text>
          <view class="item">- 原有的“可用积分”将按照 <text class="highlight">100:1</text> 的比例转换为“能量积分”。</view>
          <view class="item">例如：您的账户中有 <text class="highlight">10000</text> 个“可用积分”，将转换为 <text class="highlight">100</text> 个“能量积分”。</view>
          <view class="item">- 本次调整旨在优化积分的使用方式，让积分体系更加高效和规范。</view>
        </view>
        <view class="subsection">
          <text class="title">2. 释放规则保持不变</text>
          <view class="item">- 您的积分释放规则（<text class="highlight">万分之五</text>）将保持不变。</view>
          <view class="item">- 不同的是，释放后的积分数量将按新的比例计算，并直接转换为“能量积分”。</view>
          <view class="item">例如：如果您释放了 <text class="highlight">500</text> 个“可用积分”，调整后将显示为 <text class="highlight">5</text> 个“能量积分”。</view>
        </view>
        <view class="subsection">
          <text class="title">3. 可用积分的退出</text>
          <view class="item">- 调整完成后，“可用积分”将全面退出满仓系统。</view>
          <view class="item">- 所有原本基于“可用积分”的操作，如消费、兑换等，将完全转为基于“能量积分”进行操作。</view>
        </view>
        <view class="subsection">
          <text class="title">4. 对您的权益影响</text>
          <view class="item">- 您的积分总价值不会因为本次调整而受到影响，仅为计算和显示方式的改变。</view>
          <view class="item">- 调整后的“能量积分”将具备与原“可用积分”相同的功能，并继续支持平台内的所有使用场景。</view>
        </view>
        <view class="footer">
          请您留意账户积分的变化。如有任何疑问，请随时联系平台客服。
          <view>感谢您一直以来的支持和理解，我们将持续优化产品，为您提供更优质的服务！</view>
        </view>
      </view>
    </view>
 
  </template>
  
  <script setup>
  // 无需额外逻辑，此页面为静态内容展示页面
  </script>
  
  <style scoped>
  .update-page {
    padding: 20rpx;
    line-height: 1.6;
  }
  
  .header {
    font-size: 36rpx;
    font-weight: bold;
    margin-bottom: 20rpx;
    color: #FC5908;
  }
  
  .content {
    font-size: 28rpx;
  }
  
  .section {
    margin-bottom: 20rpx;
  }
  
  .subsection {
    margin-bottom: 20rpx;
  }
  
  .title {
    font-size: 30rpx;
    font-weight: bold;
    margin-bottom: 10rpx;
    color: #FC5908;
  }
  
  .item {
    margin-left: 20rpx;
    margin-bottom: 10rpx;
  }
  
  .highlight {
    color: #ff6600;
    font-weight: bold;
  }
  
  .footer {
    margin-top: 100rpx;
    font-size: 28rpx;
    color: #888;
  }
  </style>
  