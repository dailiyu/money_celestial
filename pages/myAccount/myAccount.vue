<template>
  <view class="page">
    <!-- 顶部橙色背景区域 -->
    <view class="header-bg">
      <image
        src="https://static.maxcang.com/appstatic/my/myAccount/top_orange_bg.png"
        class="header-bg-img"
      ></image>
      
      <!-- 用户信息区域 -->
      <view class="user-profile" @click="handleUserProfileClick">
        <view class="avatar">
          <image class="avatar-img" :src="ionc_url" mode="aspectFill" v-if="ionc_url"></image>
          <image
            class="avatar-img"
            src="https://static.maxcang.com/appstatic/my/maxcang_avatar.png"
            mode="aspectFill"
            v-else
          ></image>
        </view>
        <view class="user-info">
          <view class="username" v-if="token">
            {{ user_name || "满小仓" }}
            <image
              class="edit-icon"
              src="https://static.maxcang.com/appstatic/my/myAccount/edit_icon.png"
              @click.stop="toEdteInfo"
            ></image>
          </view>
          <view class="username" v-else>
            点击登录
            <image
              class="login-icon"
              src="https://static.maxcang.com/appstatic/my/myAccount/right_arrow_white.png"
            ></image>
          </view>
          <view class="user-id" v-if="token">ID: {{ user_id || "" }}</view>
          <view class="user-id" v-else>登录后查看个人信息</view>
        </view>
      </view>
    </view>

    <!-- 内容区域 -->
    <view class="content">
      <!-- 绿色积分卡片 -->
      <view class="points-card green-card">
        <image
          class="card-bg"
          src="https://static.maxcang.com/appstatic/my/myAccount/my_points_card_bg.png"
        ></image>
        <view class="card-content">
          <view class="card-header">
            <view class="card-title">绿色积分</view>
            <view class="card-detail" @click="handlePointDetailClick">
              积分详情
              <image
                class="arrow-icon"
                src="https://static.maxcang.com/appstatic/my/myAccount/right_arrow_white.png"
              ></image>
            </view>
          </view>
          <view class="points-amount">{{ token && dataLoadSuccess ? formatPointsRaw(green_points) : '---' }}</view>
          <view class="points-stats">
            <view class="stat-item">
              <view class="stat-label">昨日获得积分</view>
              <view class="stat-value">{{ token && dataLoadSuccess ? '+' + formatNumber(yesterday_points) : '---' }}</view>
            </view>
            <view class="stat-item">
              <view class="stat-label">本月获得积分</view>
              <view class="stat-value">{{ token && dataLoadSuccess ? '+' + formatNumber(month_points) : '---' }}</view>
            </view>
          </view>
       
        </view>
      </view>

      <!-- D9能量卡片 -->
      <view class="energy-card">
        <image
          class="card-bg"
          src="https://static.maxcang.com/appstatic/my/myAccount/d9_energy_card_bg.png"
        ></image>
        <view class="card-content">
          <view class="card-header">
            <view class="card-title">D9能量</view>
            <view class="card-detail" @click="handleEnergyDetailClick">
              能量详情
              <image
                class="arrow-icon"
                src="https://static.maxcang.com/appstatic/my/myAccount/right_arrow_white.png"
              ></image>
            </view>
          </view>
          <view class="energy-amount">{{ token && dataLoadSuccess ? formatPointsRaw(red_points) : '---' }}</view>
          <view class="energy-stats">
            <view class="stat-item">
              <view class="stat-label">昨日获得能量</view>
              <view class="stat-value">{{ token && dataLoadSuccess ? '+' + formatNumber(yesterday_energy) : '---' }}</view>
            </view>
            <view class="stat-item">
              <view class="stat-label">本月获得能量</view>
              <view class="stat-value">{{ token && dataLoadSuccess ? '+' + formatNumber(month_energy) : '---' }}</view>
            </view>
          </view>
        </view>
      </view>

      <!-- 收藏和浏览记录 -->
      <view class="action-buttons">
        <view class="action-btn" @click="toCollect">
          <image
            class="action-icon"
            src="https://static.maxcang.com/appstatic/my/myAccount/my_collection_icon.png"
          ></image>
          <text class="action-text">我的收藏</text>
          <image
            class="arrow-right"
            src="https://static.maxcang.com/appstatic/my/myAccount/right_arrow_white.png"
          ></image>
        </view>
        <view class="action-btn" @click="toBrowseRecord">
          <image
            class="action-icon"
            src="https://static.maxcang.com/appstatic/my/myAccount/browse_record_icon.png"
          ></image>
          <text class="action-text">浏览记录</text>
          <image
            class="arrow-right"
            src="https://static.maxcang.com/appstatic/my/myAccount/right_arrow_white.png"
          ></image>
        </view>
      </view>

      <!-- 服务菜单 -->
      <view class="service-menu">
        <view class="service-item" @click="toHelpCenter">
          <image
            class="service-icon"
            src="https://static.maxcang.com/appstatic/my/myAccount/help_center_icon.png"
          ></image>
          <text class="service-text">帮助中心</text>
          <image
            class="arrow-right"
            src="https://static.maxcang.com/appstatic/my/myAccount/right_arrow_gray.png"
          ></image>
        </view>
        <view class="service-item" @click="toAboutUs">
          <image
            class="service-icon"
            src="https://static.maxcang.com/appstatic/my/myAccount/about_us_icon.png"
          ></image>
          <text class="service-text">关于我们</text>
          <image
            class="arrow-right"
            src="https://static.maxcang.com/appstatic/my/myAccount/right_arrow_gray.png"
          ></image>
        </view>
        <view class="service-item" @click="toService">
          <image
            class="service-icon"
            src="https://static.maxcang.com/appstatic/my/myAccount/customer_service_icon.png"
          ></image>
          <text class="service-text">联系客服</text>
          <image
            class="arrow-right"
            src="https://static.maxcang.com/appstatic/my/myAccount/right_arrow_gray.png"
          ></image>
        </view>
      </view>

      <!-- 版本信息 -->
      <view class="version-info">
        版本号：{{ version || '2.0.0' }}
      </view>
    
    </view>

   

    <!-- 联系客服弹窗 -->
    <uni-popup ref="contactPop" borderRadius="30rpx" background-color="#fff">
      <view class="contact-popup">
        <view class="popup-title">联系客服</view>
        <view class="popup-content">
          <view class="qq-number">3833194083</view>
          <image
            src="https://static.maxcang.com/appstatic/copy.png"
            mode="widthFix"
            class="copy-icon"
            @click="copy"
          ></image>
        </view>
        <view class="popup-desc">更多问题请联系满仓客服QQ</view>
        <view class="popup-btn" @click="closeContactPop">确定</view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAllPoint, getPointBindedAccount } from "@/service/point.js";
import { getRecommendOfficerInfo } from "@/service/recommend";
import { getUerAccountMessage } from "@/service/uer_profile.js";
import { useUserStore } from "../../store/user";
import { obscureString, obscurePhoneNumber } from "@/utils";
import { onShow, onLoad } from "@dcloudio/uni-app";

const userStore = useUserStore();
const phoneNumber = ref("");
const ionc_url = ref();
const user_name = ref();
const user_id = ref();
const version = ref("");
const api_auth = ref(0);
const shopInfo = ref({});
const token = ref('');
const showShopPage = ref(false);

// 积分和能量数据
const green_points = ref(0);
const red_points = ref(0);
const yesterday_points = ref(0);
const month_points = ref(0);
const yesterday_energy = ref(0);
const month_energy = ref(0);
const dataLoadSuccess = ref(false);

onLoad((e) => {
  if (e.recommand) {
    showShopPage.value = true;
  }
});

onShow(() => {
  token.value = uni.getStorageSync("accessToken");
  phoneNumber.value = uni.getStorageSync("phoneNumber");
  
  if (token.value && phoneNumber.value) {
    dataLoadSuccess.value = false; // 重置状态
    getUserInfo();
    getPointInfo();
  }
  
  shopInfo.value = uni.getStorageSync("shopInfo");
  if (shopInfo.value && shopInfo.value.merchant) {
    showShopPage.value = true;
  }

  // #ifdef MP-WEIXIN
  try {
    const accountInfo = uni.getSystemInfoSync();
    console.log('accountInfo', accountInfo);
    version.value = accountInfo.appVersion || '2.0.0';
  } catch (error) {
    version.value = '2.0.0';
  }
  // #endif
});

// 格式化数字显示
const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + "K";
  }
  return parseFloat(num).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 格式化绿色积分原数值显示（不使用K、M、B缩写）
const formatPointsRaw = (num) => {
  return parseFloat(num).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 获取用户个人信息
const getUserInfo = async () => {
  try {
    const res = await getUerAccountMessage(phoneNumber.value);
    console.log('用户信息响应:', res);
    
    // 更新用户信息
    ionc_url.value = res.icon || '';
    user_name.value = res.name || '满小仓';
    user_id.value = res.phone_number || '';
    api_auth.value = res.is_api || false;
    
    // 更新本地存储的用户信息
    uni.setStorageSync("userInfo", res);
  } catch (error) {
    console.error("获取用户信息失败:", error);
    // 获取失败时使用默认值
    ionc_url.value = '';
    user_name.value = '满小仓';
    user_id.value = '';
    api_auth.value = false;
  }
};

const getPointInfo = async () => {
  try {
    const res = await getAllPoint();
    green_points.value = res.green_points || 0;
    red_points.value = res.red_points || 0;
    yesterday_points.value = res.yesterday_green_points || 0;
    month_points.value = res.month_green_points || 0;
    yesterday_energy.value = res.yesterday_red_points || 0;
    month_energy.value = res.month_red_points || 0;
    dataLoadSuccess.value = true;
  } catch (error) {
    console.error("获取积分信息失败:", error);
    dataLoadSuccess.value = false;
  }
};

const handleUserProfileClick = () => {
  console.log('点击用户信息区域, token值:', token.value);
  if (!token.value) {
    toLogin();
  } else {
    // 登录状态下直接跳转到编辑信息页面
    uni.navigateTo({
      url: '/pages/myAccount/edit_info'
    });
  }
};

const showLoginToast = () => {
  uni.showToast({
    icon: "none",
    title: "请先登录!",
  });
};

const toLogin = () => {
  console.log('跳转到登录页');
  uni.navigateTo({
    url: "/pages/login/login",
  });
};

const logout = () => {
  uni.clearStorageSync();
  uni.redirectTo({
    url: "/pages/login/login",
  });
};

const toEdteInfo = () => {
  if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  // uni.navigateTo({
  //   url: "/pages/login/more_info_edit",
  // });
  uni.navigateTo({
  url: '/pages/myAccount/edit_info'
});
};

// 处理积分详情点击
const handlePointDetailClick = () => {
  console.log('点击积分详情, token值:', token.value);
  if (!token.value) {
    uni.showToast({
      icon: "none",
      title: "请先登录!",
    });
    return;
  }
  console.log('跳转到绿色积分页面');
  uni.navigateTo({
    url: "/pages/myAccount/my_point",
  });
};

// 处理能量详情点击
const handleEnergyDetailClick = () => {
  console.log('点击能量详情, token值:', token.value);
  if (!token.value) {
    uni.showToast({
      icon: "none",
      title: "请先登录!",
    });
    return;
  }
  console.log('跳转到D9能量页面');
  uni.navigateTo({
    url: "/pages/myAccount/point_available",
  });
};

const toMyPoint = () => {
  if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  uni.navigateTo({
    url: "/pages/myAccount/my_point",
  });
};

const toPointAvailable = () => {
  if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  uni.navigateTo({
    url: "/pages/myAccount/point_available",
  });
};

const toCollect = () => {
  if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  uni.navigateTo({
    url: "/pages/myAccount/my_collection",
  });
};

const toBrowseRecord = () => {
  if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  uni.navigateTo({
    url: "/pages/myAccount/browse_record",
  });
};

const toHelpCenter = () => {
  uni.navigateTo({
    url: "/pages/myAccount/helpCenter",
  });
};

const toAboutUs = () => {
  uni.navigateTo({
    url: "/pages/myAccount/about_us",
  });
};

const contactPop = ref();
const toService = () => {
  contactPop.value.open();
};

const closeContactPop = () => {
  contactPop.value.close();
};

const copy = () => {
  uni.setClipboardData({ data: "3833194083" });
};

onMounted(() => {
  // 初始化完成
});
</script>

<style lang="scss">
.page {
  width: 100%;
  min-height: 100vh;
  // background: linear-gradient(180deg, #FF7A00 0%, #F5F5F5 45%);
  padding-bottom: 120rpx;
}

/* 顶部背景区域 */
.header-bg {
  position: relative;
  width: 100%;
  height: 505rpx;
  background: linear-gradient(135deg, #FF7A00 0%, #FF9500 50%, #FFB800 100%);
  background-image: url('https://static.maxcang.com/appstatic/my/myAccount/top_orange_bg.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  
  .header-bg-img {
    display: none;
  }
  
  .user-profile {
    position: absolute;
    top: 171rpx;
    left: 0;
    right: 0;
    height: 151rpx;
    z-index: 2;
    display: flex;
    align-items: center;
    padding: 0 40rpx;
    
    .avatar {
      width: 149rpx;
      height: 151rpx;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 30rpx;
      border: 4rpx solid rgba(255, 255, 255, 0.3);
      
      .avatar-img {
        width: 100%;
        height: 100%;
      }
    }
    
    .user-info {
      flex: 1;
      
      .username {
        display: flex;
        align-items: center;
        font-size: 45rpx;
        font-weight: bold;
        color: #FFFFFF;
        margin-bottom: 10rpx;
        
        .edit-icon {
          width: 26rpx;
          height: 26rpx;
          margin-left: 15rpx;
        }
        
        .login-icon {
          width: 20rpx;
          height: 20rpx;
          margin-left: 15rpx;
        }
      }
      
      .user-id {
        font-size: 24rpx;
        color: #FFFFFF;
      }
    }
  }
}

/* 内容区域 */
.content {
  padding: 0 30rpx;
  margin-top: -150rpx;
  position: relative;
  z-index: 3;
}

/* 绿色积分卡片 */
.points-card.green-card {
  position: relative;
  width: 692rpx;
  height: 279rpx;
  margin-bottom: 15rpx;
  border-radius: 20rpx;
  overflow: hidden;
  // background: linear-gradient(135deg, #CDF1EA 0%, #2AC2A4 100%);

  
  .card-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0; // background

  }
  
  .card-content {
    position: relative;
    z-index: 2;
    padding: 30rpx;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;
      
      .card-title {
        font-size: 28rpx;
        color: #2AC2A4;
        font-weight: 500;
      }
      
      .card-detail {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18rpx;
        color: #FFFFFF;
        // background: rgba(255, 255, 255, 0.3);
        padding: 8rpx 15rpx;
        border-radius: 15rpx;
        width: 132rpx;
        height: 36rpx;
        background: #2AC2A4;
        border-radius: 18rpx 18rpx 18rpx 18rpx;
        cursor: pointer;
        position: relative;
        z-index: 10;
        
        .arrow-icon {
          width: 10rpx;
          height: 17rpx;
          margin-left: 8rpx;
          pointer-events: none;
        }
      }
    }
    
    .points-amount {
      font-size: 48rpx;
      font-weight: bold;
      color: #2AC2A4;
      margin-bottom: 30rpx;
    }
    
    .points-stats {
      display: flex;
      width: 350rpx;
      justify-content: space-between;
      flex: 1;
      
      .stat-item {
        .stat-label {
          font-size: 22rpx;
          color: #2AC2A4;
          margin-bottom: 8rpx;
        }
        
        .stat-value {
          font-size: 26rpx;
          color: #2AC2A4;
          font-weight: 600;
        }
      }
    }
    
    .d9-logo {
      position: absolute;
      right: 30rpx;
      bottom: 30rpx;
      background: rgba(255, 255, 255, 0.3);
      padding: 12rpx 20rpx;
      border-radius: 50rpx;
      
      text {
        font-size: 20rpx;
        color: #2AC2A4;
      }
    }
  }
}

/* D9能量卡片 */
.energy-card {
  position: relative;
  width: 692rpx;
  height: 279rpx;
  margin-bottom: 30rpx;
  border-radius: 20rpx;
  overflow: hidden;
  
  .card-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  
  .card-content {
    position: relative;
    z-index: 2;
    padding: 30rpx;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;
      
      .card-title {
        font-size: 28rpx;
        color: #FC5908;
        font-weight: 500;
      }
      
      .card-detail {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18rpx;
        color: #FFFFFF;
        // background: rgba(255, 255, 255, 0.2);
        padding: 8rpx 15rpx;
        border-radius: 15rpx;
        width: 132rpx;
        height: 36rpx;
        background: #FC5908;
        border-radius: 18rpx 18rpx 18rpx 18rpx;
        cursor: pointer;
        position: relative;
        z-index: 10;
        
        .arrow-icon {
          width: 10rpx;
          height: 17rpx;
          margin-left: 8rpx;
          pointer-events: none;
        }
      }
    }
    
    .energy-amount {
      font-size: 48rpx;
      font-weight: bold;
      color: #FC5908;
      margin-bottom: 30rpx;
    }
    
    .energy-stats {
      display: flex;
      width: 350rpx;
      justify-content: space-between;
      flex: 1;
      
      .stat-item {
        .stat-label {
          font-size: 22rpx;
          color: #FC5908;
          margin-bottom: 8rpx;
        }
        
        .stat-value {
          font-size: 26rpx;
          color: #FC5908;
          font-weight: 600;
        }
      }
    }
  }
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  gap: 20rpx;
  margin-bottom: 30rpx;
  
  .action-btn {
    width: 337rpx;
    height: 99rpx;
    background: linear-gradient(90deg, #FD8F36 0%, #FC5908 100%);
    border-radius: 30rpx;
    display: flex;
    align-items: center;
    box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
    padding: 31rpx 44rpx;
    
    .action-icon {
      width: 35rpx;
height: 34rpx;
      margin-right: 15rpx;
    }
    
    .action-text {
      flex: 1;
      font-size: 24rpx;
color: #FFFFFF;
      
    }
    
    .arrow-right {
      width: 10rpx;
      height: 17rpx;
    }
  }
}

/* 服务菜单 */
.service-menu {
  width: 692rpx;
  height: 331rpx;
  background: #FFFFFF;
  border-radius: 30rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
  margin-bottom: 40rpx;
  
  .service-item {
    display: flex;
    align-items: center;
    height: 110rpx;
    padding: 52rpx 46rpx;
    border-bottom: 1rpx solid #F5F5F5;
    
    &:last-child {
      border-bottom: none;
    }
    
    .service-icon {
      width: 30rpx;
      height: 30rpx;
      margin-right: 20rpx;
    }
    
    .service-text {
      flex: 1;
      font-size: 24rpx;
      color: #333333;
    }
    
    .arrow-right {
      width: 10rpx;
      height: 17rpx;
    }
  }
}

/* 版本信息 */
.version-info {
  text-align: center;
  font-size: 24rpx;
  color: #999999;
  margin-bottom: 40rpx;
}



/* 联系客服弹窗 */
.contact-popup {
  width: 480rpx;
  padding: 40rpx;
  text-align: center;
  
  .popup-title {
    font-size: 32rpx;
    color: #FF7A00;
    font-weight: bold;
    margin-bottom: 30rpx;
  }
  
  .popup-content {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36rpx;
    margin-bottom: 40rpx;
    
    .copy-icon {
      width: 24rpx;
      margin-left: 8rpx;
    }
  }
  
  .popup-desc {
    font-size: 24rpx;
    color: #666666;
    margin-bottom: 40rpx;
  }
  
  .popup-btn {
    width: 280rpx;
    height: 70rpx;
    background: #FF7A00;
    color: #FFFFFF;
    border-radius: 35rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26rpx;
    margin: 0 auto;
  }
}
</style>
