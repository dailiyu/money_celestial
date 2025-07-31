<template>
  <view class="page">
    <!-- 顶部背景区域 -->
    <view class="header-section">
      <image class="header-bg" src="https://static.maxcang.com/appstatic/discovery/top_background.png" />
    </view>
    
    <!-- 主要内容区域 -->
    <view class="main-content">
      <!-- 积分展示卡片 -->
      <view class="points-card">
        <image class="d9-logo" src="https://static.maxcang.com/appstatic/common/d9_energy_icon.png" mode="aspectFit" />
                  <view class="points-info">
            <text class="points-number">{{ formatPoints(redPoints) }}</text>
            <text class="points-desc">积分来自你每一笔消费，是你的数字权益</text>
          </view>
          <view class="action-buttons">
          <view class="action-btn orders-btn" @click="goToOrders">
            <image class="btn-icon" src="https://static.maxcang.com/appstatic/discovery/my_orders_icon.png" />
              <text class="btn-text">我的订单</text>
            <image class="arrow-icon" src="https://static.maxcang.com/appstatic/discovery/white_arrow_right.png" />
            </view>
            <view class="action-btn rules-btn" @click="goToRules">
            <image class="btn-icon" src="https://static.maxcang.com/appstatic/discovery/exchange_rules_icon.png" />
              <text class="btn-text">兑换规则</text>
            <image class="arrow-icon" src="https://static.maxcang.com/appstatic/discovery/white_arrow_right.png" />
            </view>
          </view>
        </view>

      <!-- 商品轮播展示 -->
      <!-- <view class="product-banner">
          <swiper 
          class="banner-swiper" 
            :indicator-dots="true" 
            :autoplay="true" 
            :interval="3000" 
            :duration="1000"
            indicator-color="rgba(255, 255, 255, 0.5)"
            indicator-active-color="#FFFFFF"
          >
            <swiper-item>
            <view class="banner-slide">
                <view class="product-info">
                  <text class="product-title">五常稻花香大米</text>
                  <text class="product-desc">香甜软糯，粒粒分明</text>
                </view>
                <view class="price-tag">
                  <text class="energy-points">52</text>
                  <text class="price-text">能量 / ￥168</text>
                </view>
              </view>
            </swiper-item>
            <swiper-item>
            <view class="banner-slide">
                <view class="product-info">
                  <text class="product-title">优质东北大米</text>
                  <text class="product-desc">颗颗饱满，营养丰富</text>
                </view>
                <view class="price-tag">
                  <text class="energy-points">68</text>
                  <text class="price-text">能量 / ￥218</text>
                </view>
              </view>
            </swiper-item>
          </swiper>
      </view> -->
      
      <!-- 商品标题 -->
      <view class="goods-header">
        <text class="section-title">可兑换商品</text>
        </view>

        <!-- 商品列表 -->
      <view class="goods-list">
          <view v-if="loading" class="loading-state">
            <text class="loading-text">加载中...</text>
          </view>
          <view v-else-if="goodsList.length === 0" class="empty-state">
            <text class="empty-text">暂无兑换商品</text>
          </view>
          <view v-else class="goods-item" v-for="(item, index) in goodsList" :key="item.id" @click="goToExchange(item)">
            <view class="goods-card">
            <image class="goods-image" :src="item.image" />
            <view class="goods-info">
              <text class="goods-name">{{ item.name }}</text>
            <view class="goods-price">
              <text class="energy-number">{{ item.energy }}</text>
              <text class="price-info">能量 / ￥{{ item.cnyPrice }}</text>
            </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { getCityExchangeProducts } from '@/service/shop.js';
import { getAllPoint } from '@/service/point.js';

// 数据定义
const goodsList = ref([]);
const currentCity = ref('');
const loading = ref(false);
const rateCny = ref(1); // D9能量对人民币汇率
const redPoints = ref(0); // 红色积分数据

// 方法定义
const goBack = () => {
  uni.navigateBack();
};

const goToOrders = () => {
  uni.navigateTo({
    url: '/pages/discovery/exchange_order'
  });
};

const goToRules = () => {
  uni.navigateTo({
    url: '/pages/discovery/redemptionRules'
  });
};

const goToExchange = (item) => {
  uni.navigateTo({
    url: `/pages/discovery/exchange_detail?id=${item.id}`
  });
};

const goToMoreGoods = () => {
  uni.navigateTo({
    url: '/pages/exchange/goods_list'
  });
};

// 格式化积分显示
const formatPoints = (points) => {
  if (points === null || points === undefined) {
    return '0.00';
  }
  return parseFloat(points).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 获取当前城市
const getCurrentCity = () => {
  // 从本地存储获取城市名
  const city = uni.getStorageSync('city');
  if (city) {
    currentCity.value = city;
    return city;
  } else {
    // 如果本地存储中没有城市信息，使用默认城市
    currentCity.value = '佛山市';
    return '佛山市';
  }
};

// 获取汇率信息和积分数据
const getRateInfo = async () => {
  try {
    const walletData = await getAllPoint();
    if (walletData && walletData.rateCny) {
      rateCny.value = walletData.rateCny;
    }
    if (walletData && walletData.red_points !== undefined) {
      redPoints.value = walletData.red_points;
    }
  } catch (error) {
    console.error('获取汇率失败:', error);
    // 使用默认汇率
    rateCny.value = 1;
    redPoints.value = 0;
  }
};

// 获取兑换商品列表
const getExchangeProducts = async () => {
  try {
    loading.value = true;
    
    // 获取城市信息
    const city = getCurrentCity();
    
    // 获取汇率信息
    await getRateInfo();
    
    const params = {
      city: city,
      redeem: 2, // 已通过的商品
      page: 1,
      page_size: 20
    };
    
    const response = await getCityExchangeProducts(params);
    
    // 转换数据格式
    goodsList.value = response.results.map(item => {
      const energy = Math.round(item.price); // 使用price字段作为能量值
      const cnyPrice = (energy * rateCny.value).toFixed(2); // 计算人民币价格
      
      return {
        id: item.id,
        name: item.name,
        energy: energy,
        price: item.price,
        cnyPrice: cnyPrice, // 添加人民币价格
        image: item.images && item.images.length > 0 
          ? item.images[0].image_url 
          : 'https://static.maxcang.com/appstatic/default_goods.png',
        description: item.description,
        specs: item.specs,
        stock: item.stock,
        category: item.category_info
      };
    });
    
  } catch (error) {
    console.error('获取兑换商品失败:', error);
    uni.showToast({
      title: '获取商品失败',
      icon: 'none'
    });
    
    // 失败时使用默认数据
    goodsList.value = [
    
    ];
  } finally {
    loading.value = false;
  }
};

// 页面显示时刷新数据
onShow(() => {
  getExchangeProducts();
});
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background-color: #F5F5F5;
}

/* 顶部区域 */
.header-section {
  width: 100%;
  height: 300rpx;
  position: relative;
  
  .header-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}

/* 主要内容区域 */
.main-content {
  width: 100%;
  position: relative;
  z-index: 2;
  padding: 40rpx 43rpx 0;
  margin-top: -285rpx;
}

/* 积分展示卡片 */
.points-card {
  width: 100%;
  height: 400rpx;
  background-color: #FFFFFF;
  border-radius: 30rpx;
  position: relative;
  margin-bottom: 38rpx;
  box-shadow: 0 8rpx 30rpx rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32rpx 48rpx 54rpx;
}

.d9-logo {
  width: 157rpx;
  height: 54rpx;
  object-fit: contain;
  flex-shrink: 0;
}

.points-info {
  width: 530rpx;
  text-align: center;
  margin-top: 30rpx;
}

.points-number {
  font-weight: bold;
  font-size: 72rpx;
  color: #FC5908;
  line-height: 80rpx;
  display: block;
}

.points-desc {
  font-weight: 400;
  font-size: 21rpx;
  color: #919191;
  line-height: 28rpx;
  margin-top: 19rpx;
  display: block;
}

.action-buttons {
  width: 597rpx;
  height: 70rpx;
  display: flex;
  justify-content: space-between;
  margin-top: 29rpx;
}

.action-btn {
  width: 283rpx;
  height: 70rpx;
  border-radius: 35rpx;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  position: relative;
}

.orders-btn {
  width: 283rpx;
  height: 70rpx;
  background: linear-gradient(0deg, #FD8F36, #FC5908);
  border-radius: 20rpx;
  opacity: 0.7;
}

.rules-btn {
  width: 283rpx;
  height: 70rpx;
  background: linear-gradient(0deg, #FD8F36, #FC5908);
  border-radius: 20rpx;
  opacity: 0.7;
}

.btn-icon {
  width: 24rpx;
  height: 27rpx;
}

.btn-text {
  font-size: 24rpx;
  font-weight: 500;
  color: #FFFFFF;
  margin-left: 16rpx;
  flex: 1;
}

.arrow-icon {
  width: 10rpx;
  height: 17rpx;
}

/* 商品轮播展示 */
.product-banner {
  width: 100%;
  height: 261rpx;
  background: linear-gradient(135deg, #FF8C5A 0%, #FF6B35 100%);
  border-radius: 30rpx;
  margin-bottom: 38rpx;
  overflow: hidden;
}

.banner-swiper {
  width: 100%;
  height: 100%;
}

.banner-slide {
  width: 100%;
  height: 100%;
  padding: 44rpx 47rpx 22rpx;
  position: relative;
}

.product-info {
  width: 334rpx;
  margin-bottom: 21rpx;
}

.product-title {
  font-size: 48rpx;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 39rpx;
  display: block;
  margin-bottom: 18rpx;
}

.product-desc {
  font-size: 26rpx;
  color: #FFFFFF;
  line-height: 28rpx;
  display: block;
}

.price-tag {
  background-color: #FFFFFF;
  border-radius: 28rpx;
  width: 216rpx;
  height: 56rpx;
  display: flex;
  align-items: center;
  padding: 0 22rpx;
}

.energy-points {
  font-size: 34rpx;
  font-weight: 900;
  color: #FC5908;
  line-height: 37rpx;
  margin-right: 5rpx;
}

.price-text {
  font-size: 21rpx;
  color: #FC5908;
  line-height: 26rpx;
}

/* 商品标题区域 */
.goods-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25rpx;
  padding: 0 20rpx;
}

.section-title {
  font-weight: 500;
  font-size: 30rpx;
  color: #333333;
  line-height: 27rpx;
}

/* 商品列表 */
.goods-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20rpx;
}

.goods-item {
  width: calc((100% - 27rpx) / 2);
  height: 424rpx;
  background: #FFFFFF;
  border-radius: 20rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 27rpx;
  display: flex;
  flex-direction: column;
}

.goods-card {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.goods-image {
  width: 100%;
  height: 319rpx;
  background-color: #F5F5F5;
  object-fit: cover;
  flex-shrink: 0;
}

.goods-info {
  flex: 1;
  padding: 19rpx 25rpx 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.goods-name {
  font-weight: 500;
  font-size: 24rpx;
  color: #000000;
  line-height: 32rpx;
  margin-bottom: 8rpx;
}

.goods-price {
  display: flex;
  align-items: center;
}

.energy-number {
  font-weight: 900;
  font-size: 34rpx;
  color: #FC5908;
  line-height: 37rpx;
  margin-right: 5rpx;
}

.price-info {
  font-weight: 400;
  font-size: 22rpx;
  color: #FC5908;
  line-height: 26rpx;
}

/* 加载状态 */
.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100rpx 0;
  
  .loading-text {
    font-size: 28rpx;
    color: #999999;
  }
}

/* 空状态 */
.empty-state {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100rpx 0;
  text-align: center;

  .empty-text {
    font-size: 28rpx;
    color: #999999;
}
}

/* 适配安全区域 */
@supports (bottom: env(safe-area-inset-bottom)) {
  .main-content {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style> 