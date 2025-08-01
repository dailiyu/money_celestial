<template>
  <view class="order-detail-page flex-col">
    
    <!-- 加载状态 -->
    <view v-if="loading" class="loading-container flex-col">
      <text class="loading-text">加载中...</text>
    </view>
    
    <!-- 订单状态和商品信息 -->
    <view v-if="!loading" class="order-card flex-col">
      <!-- 订单状态区域 -->
      <view class="status-section flex-col">
        <text class="status-title">{{ orderInfo.statusTitle }}</text>
        <text class="status-subtitle">{{ orderInfo.statusSubtitle }}</text>
      </view>
      <!-- 订单内容 -->
      <view class="order-content flex-row">
        <image class="product-image" :src="orderInfo.productImage" mode="aspectFill" />
        
        <view class="order-right flex-col">
          <!-- 标题和积分 -->
          <view class="title-row flex-row">
            <text class="product-title">{{ orderInfo.productTitle }}</text>
            <view class="points-section flex-row">
              <text class="points-number">{{ orderInfo.unitEnergy }}</text>
              <image class="points-icon" src="https://static.maxcang.com/appstatic/discovery/d9_energy_icon.png" />
            </view>
          </view>
          
          <!-- 副标题和数量 -->
          <view class="subtitle-row flex-row">
            <text class="product-subtitle">{{ orderInfo.productSubtitle }}</text>
            <text class="quantity-text">x{{ orderInfo.quantity }}</text>
          </view>
        </view>
      </view>
      
      <!-- 实付金额 -->
      <view class="total-payment flex-row">
        <view></view>
        <view class="total-amount flex-row">
          <text class="total-label">实付</text>
          <text class="total-number">{{ orderInfo.totalEnergy }}</text>
          <image class="total-icon" src="https://static.maxcang.com/appstatic/discovery/d9_energy_icon.png" />
        </view>
      </view>
    </view>
    
    <!-- 兑换地址 -->
    <view v-if="!loading" class="address-section flex-col">
      <view class="address-card flex-col">
        <text class="section-title">兑换地址</text>
        <view class="address-info flex-row">
          <view class="address-text flex-col">
            <text class="address-name">{{ orderInfo.storeName }}</text>
            <text class="address-time">{{ orderInfo.storeTime }}</text>
          </view>
          <view class="address-actions flex-row">
            <view class="action-btn navigate-btn" @click="navigateToStore">
              <image class="action-icon" src="https://static.maxcang.com/appstatic/discovery/navigate_icon.png" />
            </view>
            <view class="action-btn call-btn" @click="callStore">
              <image class="action-icon" src="https://static.maxcang.com/appstatic/discovery/call_icon.png" />
            </view>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 订单信息 -->
    <view v-if="!loading" class="order-info-section flex-col">
      <view class="order-info-card flex-col">
        <text class="section-title">订单信息</text>
        <view class="info-row flex-row">
          <text class="info-label">订单编号</text>
          <text class="info-value">{{ orderInfo.orderNumber }}</text>
        </view>
        <view class="info-row flex-row">
          <text class="info-label">交易方式</text>
          <text class="info-value">{{ orderInfo.paymentMethod }}</text>
        </view>
        <view class="info-row flex-row">
          <text class="info-label">手机号</text>
          <text class="info-value">{{ orderInfo.phoneNumber }}</text>
        </view>
        <view class="info-row flex-row">
          <text class="info-label">购买数量</text>
          <text class="info-value">{{ orderInfo.quantity }}个</text>
        </view>
        <view class="info-row flex-row">
          <text class="info-label">下单时间</text>
          <text class="info-value">{{ orderInfo.orderTime }}</text>
        </view>
        <view class="info-row flex-row">
          <text class="info-label">退款时间</text>
          <text class="info-value">{{ orderInfo.refundTime }}</text>
        </view>
      </view>
    </view>
    
    <!-- 商家推荐 -->
    <view v-if="!loading" class="recommend-section flex-col">
      <!-- 加载中状态 -->
      <view v-if="storesLoading" class="stores-loading">
        <text class="loading-text">正在加载推荐商家...</text>
      </view>
      
      <!-- 无数据状态 -->
      <view v-else-if="!storesLoading && recommendStores.length === 0" class="no-stores">
        <text class="no-stores-text">暂无推荐商家</text>
      </view>
      
      <!-- 商家列表 -->
      <view 
        v-else
        v-for="(store, index) in recommendStores" 
        :key="store.id"
        class="store-item"
        @click="goToStore(store)"
      >
        <image class="store-avatar" :src="store.image" mode="aspectFill" />
        <view class="store-info">
          <view class="store-header">
            <text class="store-name">{{ store.name }}</text>
            <view class="store-badge" v-if="store.payCertMaterialState === 1">
              <image class="certified-icon" src="https://static.maxcang.com/appstatic/discovery/certified_badge.png" mode="aspectFit" />
            </view>
          </view>
          <view class="store-rating-container">
            <view class="store-rating">
              <image class="star" v-for="n in 5" :key="n" src="https://static.maxcang.com/appstatic/discovery/star_icon.png" mode="aspectFit" />
              <text class="rating-text">{{ store.rating }}</text>
            </view>
            <view class="reward-badge">
              <text class="reward-number">{{ store.cashback ? store.cashback.replace('%精选', '') : '100' }}</text>
              <text class="reward-suffix">%赠送</text>
            </view>
          </view>
          <text class="store-address">{{ store.address }}</text>
        </view>
      </view>
    </view>
    
    <!-- 底部按钮 -->
    <view v-if="!loading" class="bottom-actions flex-row">
      <view class="action-button primary-btn" @click="orderAgain">
        <text class="btn-text">再来一单</text>
      </view>
    </view>
    
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getOrderDetail, getCityShopList } from '@/service/shop.js';

// 日期格式化函数
const formatDateTime = (dateString) => {
  try {
    const date = new Date(dateString);
    
    // 检查日期是否有效
    if (isNaN(date.getTime())) {
      return '时间格式错误';
    }
    
    // 手动格式化日期
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  } catch (error) {
    console.error('日期格式化失败:', error);
    return '时间格式错误';
  }
};

// 订单信息
const orderInfo = ref({
  statusTitle: '退款成功',
  statusSubtitle: '本次兑换由 D9Network 提供区块链技术服务',
  productImage: '/static/merchant/product_placeholder.png',
  productTitle: '东北五常大米',
  productSubtitle: '五常大米 | 一袋',
  quantity: 2,
  unitEnergy: 52,
  totalEnergy: 104,
  storeName: '佛山智慧新城展示中心',
  storeTime: '营业中 09:00 - 18:00',
  orderNumber: '123456789012345S',
  paymentMethod: 'D9能量',
  phoneNumber: '17661234123',
  orderTime: '2025-08-10 20:00:00',
  refundTime: '2025-08-12 20:00:00'
});

const loading = ref(false);
const orderId = ref(null);
const storesLoading = ref(false);

// 推荐商家 - 改为动态获取
const recommendStores = ref([]);

// 获取推荐商家列表
const getRecommendStores = async () => {
  if (storesLoading.value) return;
  storesLoading.value = true;
  
  try {
    const city = uni.getStorageSync('city') || '佛山'; // 默认城市
    const params = {
      category: '', // 不限制分类
      name: city,
      page: 1,
      search: ''
    };

    const { results } = await getCityShopList(params);
    
    // 转换数据格式以匹配现有UI
    recommendStores.value = results.slice(0, 4).map(store => ({
      id: store.id,
      name: store.name,
      rating: store.rating || '4.9',
      address: store.address,
      cashback: (store.consume2coin_bit || '100') + '%精选',
      image: store.avatar || '/static/merchant/store_placeholder.png',
      merchant: store.merchant, // 用于跳转
      payCertMaterialState: store.pay_cert_material_state // 认证状态
    }));
    
  } catch (error) {
    console.error('获取推荐商家失败:', error);
    // 如果获取失败，保持空数组
    recommendStores.value = [];
  } finally {
    storesLoading.value = false;
  }
};

// 获取订单详情
const fetchOrderDetail = async (id) => {
  try {
    loading.value = true;
    
    const response = await getOrderDetail(id);
    
    // 转换订单数据格式
    const order = response;
    
    // 获取商品图片 - 优先获取Banner类型图片
    let productImage = '/static/merchant/product_placeholder.png';
    if (order.product && order.product.images && order.product.images.length > 0) {
      // 查找Banner类型图片
      const bannerImage = order.product.images.find(img => img.image_type_display === 'Banner');
      if (bannerImage && bannerImage.image_url) {
        productImage = bannerImage.image_url;
      } else if (order.product.images[0].image_url) {
        // 如果没有Banner图片，使用第一张图片
        productImage = order.product.images[0].image_url;
      }
    }
    
    // 获取用户信息
    const userInfo = uni.getStorageSync('userInfo') || {};
    
    // 更新订单信息
    orderInfo.value = {
      statusTitle: '退款成功',
      statusSubtitle: '本次兑换由 D9Network 提供区块链技术服务',
      productImage,
      productTitle: order.product ? order.product.name : '商品已删除',
      productSubtitle: order.product ? order.product.specs || '规格信息' : '',
      quantity: order.product_count,
      unitEnergy: order.product ? Math.round(order.product.price) : 0,
      totalEnergy: parseFloat(order.real_amount), // 转换为数字
      storeName: order.shop ? order.shop.name : '商家信息暂无',
      storeAddress: order.shop ? order.shop.address : '地址信息暂无',
      storePhone: order.shop ? order.shop.tel : null, // 商家电话
      storeTime: order.shop ? `营业中 ${order.shop.business_time1 || '09:00'} - ${order.shop.business_time2 || '18:00'}` : '营业中 09:00 - 18:00',
      // 商家经纬度信息（如果接口提供的话）
      shopLatitude: order.shop ? order.shop.latitude : null,
      shopLongitude: order.shop ? order.shop.longitude : null,
      orderNumber: order.order_id,
      paymentMethod: 'D9能量',
      phoneNumber: userInfo.phone || order.user_id || '未绑定',
      orderTime: formatDateTime(order.created_at),
      refundTime: order.return_time ? formatDateTime(order.return_time) : '退款时间暂无'
    };
    
  } catch (error) {
    console.error('获取订单详情失败:', error);
    uni.showToast({
      title: '获取订单详情失败',
      icon: 'none'
    });
  } finally {
    loading.value = false;
  }
};

// 方法定义
const navigateToStore = () => {
  // 如果没有经纬度信息，复制商家地址
  if (!orderInfo.value.shopLatitude || !orderInfo.value.shopLongitude) {
    const address = orderInfo.value.storeAddress || orderInfo.value.storeName || '商家地址信息暂无';
    uni.setClipboardData({
      data: address,
      success: () => {
        uni.showToast({
          title: '已复制商家地址',
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
    return;
  }
  
  // 微信小程序环境下使用经纬度导航
  // #ifdef MP-WEIXIN
  const latitude = orderInfo.value.shopLatitude;
  const longitude = orderInfo.value.shopLongitude;
  
  // 先获取用户位置权限（可选，用于更好的导航体验）
  wx.getSetting({
    success: (res) => {
      if (!res.authSetting['scope.userLocation']) {
        // 用户未授权位置信息，先申请授权
        wx.authorize({
          scope: 'scope.userLocation',
          success: () => {
            openLocationNav(latitude, longitude);
          },
          fail: () => {
            // 授权失败，直接打开导航
            openLocationNav(latitude, longitude);
          }
        });
      } else {
        // 已授权，直接打开导航
        openLocationNav(latitude, longitude);
      }
    },
    fail: () => {
      // 获取设置失败，直接打开导航
      openLocationNav(latitude, longitude);
    }
  });
  // #endif
  
  // 非微信小程序环境的处理
  // #ifndef MP-WEIXIN
  uni.showToast({
    title: '正在导航',
    icon: 'success'
  });
  // #endif
};

// 打开位置导航的辅助方法
// #ifdef MP-WEIXIN
const openLocationNav = (latitude, longitude) => {
  wx.openLocation({
    latitude: latitude,
    longitude: longitude,
    name: orderInfo.value.storeName,
    address: orderInfo.value.storeAddress || '商家地址',
    scale: 18,
    success: () => {
      console.log('导航成功');
    },
    fail: (error) => {
      console.error('导航失败:', error);
      uni.showToast({
        title: '导航失败，请稍后重试',
        icon: 'none',
        duration: 2000
      });
    }
  });
};
// #endif

const callStore = () => {
  const phoneNumber = orderInfo.value.storePhone || '400-123-4567';
  
  if (!phoneNumber || phoneNumber === '400-123-4567') {
    uni.showToast({
      title: '商家电话暂不可用',
      icon: 'none'
    });
    return;
  }
  
  uni.makePhoneCall({
    phoneNumber: phoneNumber,
    fail: (error) => {
      console.error('拨打电话失败:', error);
      uni.showToast({
        title: '拨打失败',
        icon: 'none'
      });
    }
  });
};

const goToStore = (store) => {
  // 跳转到商家详情页面
  uni.navigateTo({
    url: '/pages/merchant/merchant_detail?phone=' + store.merchant
  });
};

const orderAgain = () => {
  uni.navigateTo({
    url: '/pages/discovery/exchange_detail?id=1'
  });
};

// 页面加载时获取订单ID并获取详情
onLoad(async (options) => {
  if (options.id) {
    orderId.value = options.id;
    await fetchOrderDetail(options.id);
    await getRecommendStores(); // 在获取订单详情后获取推荐商家
  } else {
    uni.showToast({
      title: '订单ID不存在',
      icon: 'none'
    });
    setTimeout(() => {
      uni.navigateBack();
    }, 1500);
  }
});
</script>

<style lang="scss" scoped>
/* 基础样式 */
.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

/* 页面主体 */
.order-detail-page {
  width: 750rpx;
  min-height: 100vh;
  background-color: #F5F5F5;
  padding-bottom: calc(120rpx + env(safe-area-inset-bottom));
  box-sizing: border-box;
}

/* 加载状态 */
.loading-container {
  width: 100%;
  height: 50vh;
  align-items: center;
  justify-content: center;
  
  .loading-text {
    font-size: 30rpx;
    color: #999999;
  }
}

/* 订单状态区域 */
.order-card {
  width: 692rpx;
  height: 392rpx;
  background: #FFFFFF;
  border-radius: 30rpx;
  padding: 0;
  margin: 20rpx auto 20rpx auto;
  box-sizing: border-box;
  
  .status-section {
    padding: 40rpx 30rpx 24rpx 30rpx;
    
    .status-title {
      font-weight: 500;
      font-size: 42rpx;
      color: #FC5908;
      line-height: 48rpx;
      margin-bottom: 8rpx;
    }
    
    .status-subtitle {
      font-weight: 400;
      font-size: 24rpx;
      color: #A0A0A0;
      line-height: 32rpx;
    }
  }

  .order-content {
    align-items: flex-start;
    gap: 16rpx;
    padding: 0 24rpx;
    
    .product-image {
      width: 120rpx;
      height: 120rpx;
      border-radius: 12rpx;
      background: #F5F5F5;
      flex-shrink: 0;
    }
    
    .order-right {
      flex: 1;
      min-height: 120rpx;
      justify-content: center;
      gap: 4rpx;
      
      .title-row {
        align-items: flex-start;
        justify-content: space-between;
        
        .product-title {
          font-weight: 500;
          font-size: 27rpx;
          color: #333333;
          line-height: 36rpx;
          flex: 1;
          margin-right: 16rpx;
        }
        
        .points-section {
          align-items: flex-end;
          gap: 10rpx;
          flex-shrink: 0;
          
          .points-number {
            font-weight: bold;
            font-size: 35rpx;
            color: #FC5908;
            line-height: 1;
          }
          
          .points-icon {
            width: 98rpx;
            height: 34rpx;
            margin-bottom: 2rpx;
          }
        }
      }
      
      .subtitle-row {
        justify-content: space-between;
        align-items: center;
        
        .product-subtitle {
          font-weight: 300;
          font-size: 21rpx;
          color: #919191;
          line-height: 30rpx;
        }
        
        .quantity-text {
          font-weight: 300;
          font-size: 21rpx;
          color: #919191;
        }
      }
    }
  }
  
  .total-payment {
    justify-content: space-between;
    align-items: baseline;
    margin-top: 24rpx;
    padding: 24rpx;
    border-top: 1rpx solid #F5F5F5;
    
    .total-amount {
      align-items: baseline;
      gap: 8rpx;
      
      .total-label {
        font-weight: 400;
        font-size: 21rpx;
        color: #FC5908;
        line-height: 42rpx;
      }
      
      .total-number {
        font-weight: bold;
        font-size: 42rpx;
        color: #FC5908;
        line-height: 42rpx;
      }
      
      .total-icon {
        width: 98rpx;
        height: 34rpx;
        margin-bottom: -4rpx;
      }
    }
  }
}

/* 模块标题 */
.section-title {
  font-weight: 500;
  font-size: 32rpx;
  color: #333333;
  line-height: 44rpx;
  margin-bottom: 20rpx;
  padding: 0 30rpx;
}

/* 兑换地址 */
.address-section {
  margin-bottom: 20rpx;
  
  .address-card {
    background: #FFFFFF;
    padding: 30rpx;
    margin: 0 30rpx;
    border-radius: 20rpx;
    
    .section-title {
      font-weight: 500;
      font-size: 32rpx;
      color: #333333;
      line-height: 44rpx;
      margin-bottom: 20rpx;
      padding: 0;
    }
    
    .address-info {
      justify-content: space-between;
      align-items: center;
      
      .address-text {
        flex: 1;
        gap: 8rpx;
        
        .address-name {
          font-weight: 400;
          font-size: 24rpx;
          color: #919191;
          line-height: 40rpx;
        }
        
        .address-time {
          font-weight: 400;
          font-size: 21rpx;
          color: #919191;
          line-height: 32rpx;
        }
      }
      
      .address-actions {
        gap: 20rpx;
        
        .action-btn {
          width: 88rpx;
          height: 88rpx;
          border-radius: 44rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          
          .action-icon {
            width: 68rpx;
            height: 68rpx;
          }
        }
      }
    }
  }
}

/* 订单信息 */
.order-info-section {
  margin-bottom: 20rpx;
  
  .order-info-card {
    background: #FFFFFF;
    padding: 30rpx;
    margin: 0 30rpx;
    border-radius: 20rpx;
    gap: 20rpx;
    
    .section-title {
      font-weight: 500;
      font-size: 32rpx;
      color: #333333;
      line-height: 44rpx;
      margin-bottom: 20rpx;
      padding: 0;
    }
    
    .info-row {
      justify-content: flex-start;
      align-items: center;
      gap: 20rpx;
      
      .info-label {
        font-weight: 400;
        font-size: 24rpx;
        color: #919191;
        width: 120rpx;
        flex-shrink: 0;
      }
      
      .info-value {
        font-weight: 400;
        font-size: 24rpx;
        color: #333333;
      }
    }
  }
}

/* 商家推荐 */
.recommend-section {
  padding: 0 30rpx;
  display: flex;
  flex-direction: column;
  gap: 9rpx;
  margin-bottom: 40rpx;
  
  .stores-loading,
  .no-stores {
    text-align: center;
    padding: 40rpx 0;
    
    .loading-text,
    .no-stores-text {
      font-size: 28rpx;
      color: #999;
    }
  }
  
  .store-item {
    display: flex;
    background: white;
    padding: 30rpx;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
    align-items: center;
    position: relative;
  }
  
  .store-avatar {
    width: 127rpx;
    height: 127rpx;
    border-radius: 12rpx;
    margin-right: 24rpx;
    flex-shrink: 0;
  }
  
  .store-info {
    flex: 1;
    min-width: 0;
    min-height: 127rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .store-header {
    display: flex;
    align-items: center;
    margin-bottom: 12rpx;
    flex-wrap: wrap;
  }
  
  .store-name {
    font-weight: bold;
    margin-right: 6rpx;
    flex-shrink: 0;
    font-size: 24rpx;
    color: #333333;
  }
  
  .store-badge {
    display: flex;
    align-items: center;
  }
  
  .certified-icon {
    width: 143rpx;
    height: 44rpx;
  }
  
  .store-rating-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12rpx;
  }
  
  .store-rating {
    display: flex;
    align-items: center;
  }
  
  .star {
    width: 24rpx;
    height: 24rpx;
    margin-right: 2rpx;
  }
  
  .rating-text {
    font-size: 24rpx;
    color: #FF8C00;
    margin-left: 8rpx;
    font-weight: bold;
  }
  
  .reward-badge {
    width: 132rpx;
    height: 37rpx;
    border-radius: 17rpx 17rpx 17rpx 17rpx;
    background-color: #FC5908;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .reward-number {
    font-size: 25rpx;
    color: #FFFFFF;
  }
  
  .reward-suffix {
    font-size: 20rpx;
    color: #FFFFFF;
  }
  
  .store-address {
    font-size: 18rpx;
    color: #919191;
    line-height: 1.4;
    word-wrap: break-word;
    word-break: break-all;
  }
}

/* 底部按钮 */
.bottom-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 750rpx;
  height: 143rpx;
  background: #FFFFFF;
  padding: 20rpx 30rpx;
  padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
  justify-content: flex-end;
  align-items: center;
  gap: 20rpx;
  box-sizing: border-box;
  
  .action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &.primary-btn {
      width: 211rpx;
      height: 62rpx;
      background: linear-gradient(90deg, #FD8F36, #FC5908);
      border-radius: 31rpx;
      
      .btn-text {
        font-weight: 500;
        font-size: 30rpx;
        color: #FFFFFF;
      }
    }
    
    &:active {
      opacity: 0.8;
    }
  }
}
</style> 