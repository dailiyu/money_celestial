<template>
  <view class="container">
    <!-- 顶部位置和标题 -->
    <view class="header">
      <view class="location">
        <image
          class="location-icon"
          src="https://static.maxcang.com/appstatic/common/location_icon.png"
        ></image>
        <CityPicker v-if="isPageOnload" @changeCity="bindCityChange"></CityPicker>
      </view>
      <image class="app-title" src="https://static.maxcang.com/appstatic/common/title_logo.png" mode="aspectFit"></image>
      <view class="placeholder"></view>
      <!-- 用于flex布局平衡 -->
    </view>
    <view class="point_box">
      <!-- 绿色占位盒子 -->
      <!-- <view class="green-placeholder"></view> -->
      <div class="bottom_box">
        <image
          @click="toRequestPointsInput"
          class="top-gif"
          src="https://static.maxcang.com/appstatic/home/click.gif"
          mode="aspectFit"
        />
        <!-- 功能按钮区 - 使用图片 -->
        <view class="feature-buttons">
          <image
            @click="toPointsStrategy"
            class="feature-button-img"
            src="https://static.maxcang.com/appstatic/home/points_strategy.png"
            mode="widthFix"
          ></image>
          <image
            @click="toHamsterGroup"
            class="feature-button-img"
            src="https://static.maxcang.com/appstatic/home/communication_group.png"
            mode="widthFix"
          ></image>
        </view>

        <!-- 每日签到 - 使用图片 -->
        <image
		@click="showPointCode"
          class="daily-checkin-img"
          src="https://static.maxcang.com/appstatic/home/show_point_code.png"
          mode="widthFix"
        ></image>

        <!-- 功能卡片区 - 使用图片 -->
        <view class="function-cards">
          <image
            @click="showTips"
            class="function-card-img"
            src="https://static.maxcang.com/appstatic/home/clock_in.png"
            mode="widthFix"
          ></image>
          <image
            @click="showTips"
            class="function-card-img"
            src="https://static.maxcang.com/appstatic/home/invitation_list.png"
            mode="widthFix"
          ></image>
          <image
		  @click="toMerchantRank"
            class="function-card-img"
            src="https://static.maxcang.com/appstatic/home/rank.png"
            mode="widthFix"
          ></image>
        </view>
      </div>
    </view>

    <!-- 积分弹窗 -->
    <!-- <PointsPopup
      :visible="showPointsPopup"
      @close="closePointsPopup"
      @confirm="confirmPointsCollection"
    /> -->
  </view>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {onLoad,onShow} from "@dcloudio/uni-app"
import CityPicker from "@/components/cityPicker/cityPicker.vue";
import PointsPopup from "@/components/PointsPopup/PointsPopup.vue";

// 控制积分弹窗显示
const showPointsPopup = ref(false);
let token = ref('')
const isPageOnload = ref(false)

// 生命周期钩子
onLoad(() => {
  // 页面加载时的逻辑
  
  checkUnclaimedPoints();
  isPageOnload.value = true;
});

onShow(() => {
  token.value = uni.getStorageSync('accessToken')
})



// 检查是否有未领取的积分
const checkUnclaimedPoints = () => {
  // 这里可以添加实际的API调用来检查用户是否有未领取的积分
  // 模拟有未领取积分的情况
  setTimeout(() => {
    showPointsPopup.value = true;
	
  }, 1500); // 延迟1.5秒显示弹窗，给用户一些时间先看到页面
};

// 关闭积分弹窗
const closePointsPopup = () => {
  showPointsPopup.value = false;
};

// 确认领取积分
const confirmPointsCollection = () => {
  // 跳转到积分领取页面
  uni.navigateTo({
    url: "/pages/points/request_points_input",
  });
  showPointsPopup.value = false;
};

const bindCityChange = (e) => {
  uni.setStorageSync("city", e.city);
  console.log(e);
};

const toRequestPointsInput = () => {
	if(token.value){
		uni.scanCode({
    scanType: ["qrCode", "wxCode"],
    success: function (res) {
      console.log("扫描成功：", res);
      uni.navigateTo({
        url: "/" + res.path+"&isFromScan=1",
      });
    },
    fail: function (err) {
      console.log("扫描失败：", err);
    },
  });
	}else{
		uni.showToast({
			icon:'none',
			title:"请先登录"
		})
	}
 
};
const showTips = () => {
  uni.showToast({
    title: "敬请期待!",
    icon: "none",
    duration: 2000,
  });
};



const showPointCode = ()=>{
  if(token.value){
		uni.navigateTo({
			url: '/pages/myAccount/point_code'
		})
	}else{
		uni.showToast({
			icon:'none',
			title:"请先登录"
		})
	}
}

const toMerchantRank = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_sale_rank'
	})
}

const toPointsStrategy = () => {
	uni.navigateTo({
		url: '/pages/points/points_strategy'
	})
}

const toHamsterGroup = ()=>{
	uni.navigateTo({
		url: '/pages/discovery/hamster_group'
	})
}

</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: url("https://static.maxcang.com/appstatic/home/bg_big.png")
    no-repeat;
  background-size: 100% auto; /* 宽度100%，高度自适应 */
  background-position: top center;
  background-attachment: fixed; /* 固定背景，滚动时不移动 */
  position: relative; /* 添加相对定位，使子元素的绝对定位基于此容器 */
  overflow: hidden; /* 禁用滚动，页面不能滑动 */

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100rpx 30rpx 60rpx;
    position: absolute;
    top: 20rpx;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .location {
    display: flex;
    align-items: center;
    transform: translateY(12rpx);
  }

  .location-icon {
    width: 32rpx;
    height: 32rpx;
  }

  .location-text {
    color: #ffffff;
    font-size: 32rpx;
    margin-left: 10rpx;
  }

  .app-title {
    width: 177rpx;
    height: 40rpx;
    position: absolute;
    left: 50%;
    top: 54%;
    transform: translate(-50%, -50%);
    margin-top: 20rpx;
  }

  .placeholder {
    width: 80rpx; /* 与location区域宽度相近，保持平衡 */
  }

  .point_box {
    width: 100%;
    min-height: calc(100vh - 200rpx); /* 减去顶部距离 */
    background: url("https://static.maxcang.com/appstatic/home/sub_bg_top.png")
      no-repeat;
    background-size: 100% auto;
    background-position: top center;
    margin-top: 200rpx; /* 与顶部的距离 */
    position: relative;
    padding-top: 300rpx; /* 为bottom_box预留空间 */
    box-sizing: border-box; /* 确保padding不会增加元素总高度 */

    /* 绿色占位盒子样式 */
    .green-placeholder {
      width: 300rpx;
      height: 70rpx;
      background-color: green;
      position: absolute;
      top: 70rpx;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;
    }

    .bottom_box {
      width: 100%;
      min-height: calc(100vh - 200rpx); /* 从top: 200rpx开始填满到页面底部 */
      background: url("https://static.maxcang.com/appstatic/home/sub_bg_bottom_new.png")
       no-repeat;
      background-size: 100% auto;
      background-position: top center;
      position: absolute;
      top: 200rpx; /* 与point_box的margin-top对齐 */
      left: 0;
      padding-top: 330rpx; /* 从320rpx增加到360rpx，让内容往下移动40rpx */

      .top-gif {
        width: 400rpx; /* 设置固定宽度，可以根据需要调整 */
        height: 200rpx; /* 设置固定高度，可以根据需要调整 */
        display: block;
        margin: 0 auto; /* 水平居中 */
        margin-top: -70rpx; /* 移除之前的负边距 */
        transform: translateX(20rpx);
      }

      /* 功能按钮区 - 使用图片 */
      .feature-buttons {
        width: 90%;
        margin: 70rpx auto 0 auto;
        display: flex;
        justify-content: space-between;
        gap: 20rpx;
      }

      .feature-button-img {
        flex: 1;
        width: 48%;
        height: auto;
        border-radius: 20rpx;
        box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
      }

      /* 每日签到 - 使用图片 */
      .daily-checkin-img {
        width: 90%;
        height: auto;
        display: block;
        margin: 20rpx auto;
        border-radius: 20rpx;
        box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
      }

      /* 功能卡片区 - 使用图片 */
      .function-cards {
        width: 90%;
        margin: 30rpx auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10rpx;
      }

      .function-card-img {
        width: 32%;
        height: auto;
        border-radius: 20rpx;
        box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
