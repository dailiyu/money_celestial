<template>
  <!-- 密码验证弹窗 - 全局最顶层 -->
  <validatePasswordPop ref="passwordPopRef" @confirm="onPasswordConfirm" />
  
  <view class="page flex-col">
    <view class="main-container flex-col justify-between">
      <!-- 自定义导航栏 -->
      <view class="custom-navbar">
        <view class="navbar-content">
          <view class="navbar-left" @click="goBack">
            <image class="back-icon" src="/static/discovery/white_left_arrow.png" />
          </view>
          <view class="navbar-title">
            <text class="title-text"></text>
          </view>
          <view class="navbar-right"></view>
        </view>
      </view>

      <!-- 顶部图片轮播区域 -->
      <view class="gallery-section flex-col">
        <!-- 商品图片轮播 -->
        <swiper class="product-swiper" :indicator-dots="false" :autoplay="true" :circular="true" :interval="3000">
          <swiper-item v-for="(image, index) in productImages" :key="index">
            <image class="product-image" :src="image" mode="aspectFill" />
          </swiper-item>
          <!-- 默认占位图 -->
          <swiper-item v-if="productImages.length === 0">
            <view class="product-placeholder placeholder-1"></view>
          </swiper-item>
        </swiper>
        
        <!-- 轮播指示器 -->
        <view class="swiper-indicators flex-row" v-if="productImages.length > 1">
          <view 
            class="indicator-dot" 
            :class="{ active: index === 0 }" 
            v-for="(image, index) in productImages" 
            :key="index"
          ></view>
        </view>
        <!-- 价格信息卡片 -->
        <view class="price-card flex-row">
          <text class="energy-number">{{ productDetail.energy }}</text>
          <image
            class="energy-icon"
            referrerpolicy="no-referrer"
            src="/static/discovery/d9_energy_white_icon.png"
          />
          <text class="original-price">价值￥{{ productDetail.originalPrice }}</text>
          <text class="benefit-text">
            别让积分流走
            <br />
            它能变成生活的礼物
          </text>
        </view>
      </view>

      <!-- 产品详情区域 -->
      <view class="detail-section flex-col justify-end">
        <text class="detail-title">产品详情</text>
        <view class="detail-content flex-col">
          <image v-if="productDetail.detailImage" class="detail-image" :src="productDetail.detailImage" mode="widthFix" />
          <view v-else class="detail-placeholder-1"></view>
        </view>
      </view>

      <!-- 商品信息区域 -->
      <view class="product-info-section flex-col">
        <view class="spec-address-card flex-col">
          <view class="spec-row flex-row justify-between">
            <text class="spec-label">选择</text>
            <text class="spec-value">{{ selectedSpec }}</text>
          </view>
          <view class="divider flex-col"></view>
          <view class="address-row flex-row justify-between">
            <text class="address-label">地址</text>
            <text class="address-value">{{ productDetail.address }}</text>
          </view>
        </view>
        <view class="product-description-card flex-row">
          <view class="description-content flex-col justify-between">
            <text class="product-title">{{ productDetail.name }}</text>
            <text class="product-description">
              {{ productDetail.description }}
            </text>
          </view>
                 </view>
       </view>
     </view>

     <!-- 固定底部兑换区域 -->
     <view class="bottom-exchange-bar flex-row">
       <view class="current-energy-info flex-col">
         <text class="energy-label">当前D9能量</text>
         <text class="energy-amount">{{ currentEnergy }}</text>
       </view>
       <view class="exchange-button flex-col align-center">
         <text class="exchange-text" @click="handleExchange">立即兑换</text>
       </view>
     </view>

     <!-- 兑换确认弹窗 -->
     <view v-if="showExchangeModal" class="modal-overlay" @click="hideExchangeModal">
       <view class="modal-content" @click.stop>
         <!-- 拖拽指示器 -->
         <view class="modal-handle"></view>
         
         <!-- 关闭按钮 -->
         <view class="modal-close" @click="hideExchangeModal">
           <text class="close-icon">×</text>
         </view>

         <!-- 商品信息 -->
         <view class="order-product-row flex-row">
           <image class="modal-product-image" src="/static/merchant/product_placeholder.png" mode="aspectFill" />
           <view class="modal-product-info flex-col">
             <text class="modal-product-title">{{ productDetail.name }}</text>
             <text class="modal-product-subtitle">{{ selectedSpec }}</text>
             <view class="modal-points-and-quantity flex-row">
               <view class="modal-points-section flex-row">
                 <text class="modal-points-number">{{ productDetail.energy }}</text>
                 <image class="modal-points-icon" src="/static/discovery/d9_energy_icon.png" />
               </view>
               <view class="quantity-controls flex-row">
                 <view class="quantity-btn" @click="decreaseQuantity">
                   <text class="quantity-btn-text">-</text>
                 </view>
                 <text class="quantity-number">{{ exchangeQuantity }}</text>
                 <view class="quantity-btn" @click="increaseQuantity">
                   <text class="quantity-btn-text">+</text>
                 </view>
               </view>
             </view>
           </view>
         </view>

         <!-- 兑换信息 -->
         <view class="exchange-info-section">
           <view class="exchange-info-row flex-row">
             <text class="exchange-info-text">库存：{{ productDetail.stock }}件</text>
           </view>
           <view class="exchange-info-row flex-row">
             <text class="exchange-info-text">免预约 · 过期自动退</text>
           </view>
           <view class="exchange-date-row flex-col">
             <text class="exchange-date-text">兑换截止日期：2025-08-10 20:00:00</text>
           </view>
         </view>
         
         <!-- 分割线 -->
         <view class="divider-line"></view>

         <!-- 合计支付 -->
         <view class="total-payment-section flex-row">
           <view class="payment-left-section flex-col">
             <text class="modal-payment-label">合计支付</text>
             <view class="payment-amount-wrapper flex-row">
               <text class="modal-payment-amount">{{ totalEnergy }}</text>
               <image class="modal-payment-icon" src="/static/discovery/d9_energy_icon.png" />
             </view>
           </view>
           
           <!-- 立即支付按钮 -->
           <view class="pay-button" @click="confirmExchange">
             <text class="pay-button-text">立即支付</text>
           </view>
         </view>
       </view>
     </view>
   </view>
 </template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getProductDetail, redeemProduct } from '@/service/shop.js';
import { getAllPoint } from '@/service/point.js';
import validatePasswordPop from '@/components/validatePasswordPop/validatePasswordPop.vue';

// 页面数据
const productImages = ref([
  'https://static.maxcang.com/appstatic/rice_detail_1.png',
  'https://static.maxcang.com/appstatic/rice_detail_2.png',
  'https://static.maxcang.com/appstatic/rice_detail_3.png'
]);

const productDetail = ref({
  id: null,
  name: '',
  energy: 0,
  originalPrice: 0,
  benefit: '别让积分流走\n它能变成生活的礼物',
  description: '',
  specs: '',
  address: '',
  detailImage: '',
  images: [],
  stock: 0,
  price: 0
});

const selectedSpec = ref('');
const currentEnergy = ref('0');
const showExchangeModal = ref(false);
const exchangeQuantity = ref(1);
const loading = ref(false);
const rateCny = ref(1);
const productId = ref(null);
const passwordPopRef = ref(null);

// 计算属性
const totalEnergy = computed(() => {
  return productDetail.value.energy * exchangeQuantity.value;
});

// 方法定义
const goBack = () => {
  uni.navigateBack();
};

const handleExchange = () => {
  showExchangeModal.value = true;
};

const hideExchangeModal = () => {
  showExchangeModal.value = false;
};

const increaseQuantity = () => {
  if (exchangeQuantity.value < productDetail.value.stock) {
    exchangeQuantity.value++;
  } else {
    uni.showToast({
      title: '超出库存限制',
      icon: 'none'
    });
  }
};

const decreaseQuantity = () => {
  if (exchangeQuantity.value > 1) {
    exchangeQuantity.value--;
  }
};

const confirmExchange = async () => {
  try {
    // 检查库存
    if (productDetail.value.stock < exchangeQuantity.value) {
      uni.showToast({
        title: '商品库存不足',
        icon: 'none'
      });
      return;
    }
    
    // 检查D9能量是否足够
    const currentEnergyNumber = Number(currentEnergy.value.replace(/,/g, ''));
    if (currentEnergyNumber < totalEnergy.value) {
      uni.showToast({
        title: 'D9能量不足',
        icon: 'none'
      });
      return;
    }
    
    // 显示确认弹窗
    uni.showModal({
      title: '确认兑换',
      content: `确定要用${totalEnergy.value}D9能量兑换${exchangeQuantity.value}个${productDetail.value.name}吗？`,
      success: async (res) => {
        if (res.confirm) {
          // 打开密码验证弹窗
          passwordPopRef.value.open();
        }
      }
    });
  } catch (error) {
    console.error('兑换确认失败:', error);
    uni.showToast({
      title: '操作失败',
      icon: 'none'
    });
  }
};

// 密码验证成功回调
const onPasswordConfirm = async (password) => {
  // 关闭兑换确认模态框
  hideExchangeModal();
  // 清空密码输入框
  passwordPopRef.value.clearCode();
  await handleExchangeRequest();
};

// 处理兑换请求
const handleExchangeRequest = async () => {
  try {
    uni.showLoading({
      title: '兑换中...',
      mask: true
    });
    
    const requestData = {
      product_id: Number(productDetail.value.id),
      product_count: exchangeQuantity.value
    };
    
    const response = await redeemProduct(requestData);
    
    uni.hideLoading();
    
    // 兑换成功
    uni.showToast({
      title: response.message || '兑换成功',
      icon: 'success',
      duration: 2000
    });
    
    // 刷新D9能量余额
    await getWalletInfo();
    
    // 延迟跳转到订单页面
    setTimeout(() => {
      uni.navigateTo({
        url: '/pages/discovery/exchange_order'
      });
    }, 2000);
    
  } catch (error) {
    uni.hideLoading();
    console.error('兑换失败:', error);
    
    // 处理不同的错误类型
    let errorMessage = '兑换失败';
    if (error.data && error.data.error) {
      errorMessage = error.data.error;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    uni.showToast({
      title: errorMessage,
      icon: 'none',
      duration: 3000
    });
  }
};

// 获取钱包信息（汇率和D9能量）
const getWalletInfo = async () => {
  try {
    const walletData = await getAllPoint();
    if (walletData) {
      // 设置汇率
      if (walletData.rateCny) {
        rateCny.value = walletData.rateCny;
      }
      // 设置当前D9能量
      if (walletData.red_points !== undefined) {
        // 格式化数字显示（添加千分位分隔符）
        const formattedEnergy = Number(walletData.red_points).toLocaleString();
        currentEnergy.value = formattedEnergy;
      }
    }
  } catch (error) {
    console.error('获取钱包信息失败:', error);
    rateCny.value = 1;
    currentEnergy.value = '0';
  }
};

// 获取商品详情
const fetchProductDetail = async (id) => {
  try {
    loading.value = true;
    
    // 获取钱包信息（汇率和D9能量）
    await getWalletInfo();
    
    // 获取商品详情
    const response = await getProductDetail(id);
    
    // 处理图片数据
    const bannerImages = response.images ? response.images.filter(img => img.image_type === 'banner') : [];
    const detailImages = response.images ? response.images.filter(img => img.image_type === 'detail') : [];
    
    // 更新商品详情数据
    productDetail.value = {
      id: response.id,
      name: response.name,
      energy: Math.round(response.price), // 使用price字段作为能量值
      originalPrice: (Math.round(response.price) * rateCny.value).toFixed(2), // 计算人民币价格
      benefit: '别让积分流走\n它能变成生活的礼物',
      description: response.description || '',
      specs: response.specs || '',
      address: response.shop_address || '地址信息暂无', // 使用接口返回的shop_address字段
      detailImage: detailImages.length > 0 ? detailImages[0].image_url : '',
      images: bannerImages,
      stock: response.stock,
      price: response.price
    };
    
    // 设置默认规格
    selectedSpec.value = response.specs || '';
    
    // 更新轮播图片
    if (bannerImages.length > 0) {
      productImages.value = bannerImages.map(img => img.image_url);
    }
    
  } catch (error) {
    console.error('获取商品详情失败:', error);
    uni.showToast({
      title: '获取商品详情失败',
      icon: 'none'
    });
  } finally {
    loading.value = false;
  }
};

// 页面加载时获取商品ID并加载详情
onLoad(async (options) => {
  if (options.id) {
    productId.value = options.id;
    await fetchProductDetail(options.id);
  } else {
    uni.showToast({
      title: '商品ID不存在',
      icon: 'none'
    });
    setTimeout(() => {
      uni.navigateBack();
    }, 1500);
  }
});
</script>

<style lang="scss" scoped>
/* 通用样式 */
.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.align-start {
  display: flex;
  align-items: flex-start;
}

.align-center {
  display: flex;
  align-items: center;
}

.align-end {
  display: flex;
  align-items: flex-end;
}

/* 页面样式 */
 .page {
   position: relative;
   width: 750rpx;
   min-height: 100vh;
   overflow: auto;
   padding-bottom: calc(120rpx + env(safe-area-inset-bottom));
 }

 .main-container {
   position: relative;
   width: 750rpx;
   min-height: 100vh;
   background: url(https://lanhu-oss-2537-2.lanhuapp.com/psprt2g8syh3xl35uu2stw8u5oxw57octa1ada75f-2d06-423a-ae5e-c58192dfed52) 100% no-repeat;
   background-size: 100% auto;
 }

/* 自定义导航栏 */
.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(88rpx + env(safe-area-inset-top));
  padding: 0 32rpx;
  padding-top: calc(env(safe-area-inset-top) + 140rpx);
  background: transparent;
}

.navbar-left {
  width: 88rpx;
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon {
  width: 18rpx;
  height: 31rpx;
}

.navbar-title {
  flex: 1;
  text-align: center;
}

.title-text {
  font-size: 34rpx;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 44rpx;
}

.navbar-right {
  width: 88rpx;
  height: 88rpx;
}

/* 顶部图片轮播区域 */
.gallery-section {
  background-color: rgba(88, 53, 25, 1);
  position: relative;
  width: 750rpx;
  height: calc(663rpx + 88rpx + env(safe-area-inset-top));
  overflow: hidden;
  margin-top: calc(-88rpx - env(safe-area-inset-top));
}

.product-swiper {
  width: 750rpx;
  height: 663rpx;
  margin-top: calc(88rpx + env(safe-area-inset-top));
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-image {
  width: 100%;
  height: auto;
  border-radius: 20rpx;
}

.product-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.placeholder-1 {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
}

.placeholder-2 {
  background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
}

.placeholder-3 {
  background: linear-gradient(135deg, #45B7D1 0%, #96C93D 100%);
}

.placeholder-4 {
  background: linear-gradient(135deg, #F093FB 0%, #F5576C 100%);
}

.product-placeholder::after {
  content: '';
  width: 120rpx;
  height: 120rpx;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-indicators {
  width: 87rpx;
  height: 10rpx;
  position: absolute;
  bottom: 140rpx;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.indicator-dot {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 10rpx;
  height: 10rpx;
  
  &:not(:first-child) {
    margin-left: 15rpx;
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 1);
  }
  
  &:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.55);
    margin-left: 16rpx;
  }
  
  &:last-child {
    margin-left: 16rpx;
  }
}

.price-card {
  position: absolute;
  left: 29rpx;
  top: 630rpx;
  width: 692rpx;
  height: 192rpx;
  background: linear-gradient(89deg, #FD8F36, #FC5908);
  border-radius: 30rpx;
}

.energy-number {
  width: 66rpx;
  height: 46rpx;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 60rpx;
  font-family: HarmonyOS_Sans_SC_Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 64rpx;
  margin: 23rpx 0 0 48rpx;
}

.energy-icon {
  width: 117rpx;
  height: 41rpx;
  margin: 27rpx 0 0 14rpx;
}

.original-price {
  width: 121rpx;
  height: 25rpx;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 25rpx;
  font-family: HarmonyOS_Sans_SC_Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 33rpx;
  margin: 39rpx 0 0 15rpx;
}

.benefit-text {
  width: 160rpx;
  height: 39rpx;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18rpx;
  font-family: HarmonyOS_Sans_SC_Light;
  font-weight: 300;
  text-align: right;
  line-height: 20rpx;
  margin: 23rpx 28rpx 0 123rpx;
}

/* 产品详情区域 */
.detail-section {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  width: 692rpx;
  height: 533rpx;
  margin: 428rpx 0 0 29rpx;
}

.detail-title {
  width: 119rpx;
  height: 29rpx;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 30rpx;
  font-family: HarmonyOS_Sans_SC_Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 64rpx;
  margin: 36rpx 0 0 48rpx;
}

 .detail-content {
   width: 649rpx;
   height: 434rpx;
   margin: 34rpx 0 0 22rpx;
   overflow: hidden;
 }

 .detail-placeholder-1 {
   width: 100%;
   height: 200rpx;
   background: linear-gradient(135deg, #FF9A8B 0%, #FE6B8B 100%);
   border-radius: 20rpx;
   margin-bottom: 20rpx;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
 }

 .detail-placeholder-1::after {
   content: '产品展示图1';
   color: #FFFFFF;
   font-size: 24rpx;
   font-weight: 500;
 }

 .detail-placeholder-2 {
   width: 100%;
   height: 200rpx;
   background: linear-gradient(135deg, #A8E6CF 0%, #88D8C0 100%);
   border-radius: 20rpx;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
 }

 .detail-placeholder-2::after {
   content: '产品展示图2';
   color: #FFFFFF;
   font-size: 24rpx;
   font-weight: 500;
 }

 /* 固定底部兑换区域 */
 .bottom-exchange-bar {
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   width: 100%;
   height: calc(120rpx + env(safe-area-inset-bottom));
   background-color: #FFFFFF;
   padding: 20rpx 40rpx;
   padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
   box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.08);
   z-index: 999;
   align-items: center;
 }

 .current-energy-info {
   flex: 1;
   margin-right: 32rpx;
 }

 .energy-label {
   font-size: 25rpx;
   font-family: HarmonyOS_Sans_SC;
   font-weight: 400;
   color: #919191;
   line-height: 32rpx;
   margin-bottom: 8rpx;
 }

 .energy-amount {
   font-size: 43rpx;
   font-family: HarmonyOS_Sans_SC_Bold;
   font-weight: bold;
   color: #FC5908;
   line-height: 40rpx;
 }

 .exchange-button {
   width: 211rpx;
   height: 62rpx;
   background: linear-gradient(90deg, #FD8F36, #FC5908);
   border-radius: 31rpx;
   justify-content: center;
 }

 .exchange-text {
   font-size: 30rpx;
   font-family: HarmonyOS_Sans_SC_Medium;
   font-weight: 500;
   color: #FFFFFF;
   line-height: 36rpx;
 }

/* 商品信息区域 */
.product-info-section {
  position: absolute;
  left: 0;
  top: 663rpx;
  width: 750rpx;
  height: 429rpx;
}

.spec-address-card {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  width: 692rpx;
  height: 210rpx;
  justify-content: flex-center;
  margin: 199rpx 0 0 29rpx;
}

.spec-row {
  width: 271rpx;
  height: 27rpx;
  margin: 42rpx 0 0 49rpx;
}

.spec-label {
  width: 52rpx;
  height: 25rpx;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 27rpx;
  font-family: HarmonyOS_Sans_SC_Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 27rpx;
  margin-top: 1rpx;
}

.spec-value {
  width: 185rpx;
  height: 27rpx;
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 24rpx;
  font-family: HarmonyOS_Sans_SC;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 27rpx;
}

.divider {
  background-color: rgba(186, 186, 186, 0.3);
  width: 598rpx;
  height: 1rpx;
  margin: 35rpx 0 0 47rpx;
}

.address-row {
  width: 295rpx;
  height: 26rpx;
  margin: 37rpx 0 42rpx 49rpx;
}

.address-label {
  width: 52rpx;
  height: 25rpx;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 27rpx;
  font-family: HarmonyOS_Sans_SC_Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 27rpx;
  margin-top: 1rpx;
}

.address-value {
  width: 206rpx;
  height: 23rpx;
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 24rpx;
  font-family: HarmonyOS_Sans_SC;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 27rpx;
}

.product-description-card {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  position: absolute;
  left: 29rpx;
  top: -28rpx;
  width: 692rpx;
  height: 210rpx;
}

.description-content {
  width: 602rpx;
  height: 130rpx;
  margin: 45rpx 0 0 46rpx;
}

.product-title {
  width: 333rpx;
  height: 46rpx;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 48rpx;
  font-family: HarmonyOS_Sans_SC_Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 64rpx;
}

.product-description {
  width: 600rpx;
  height: 58rpx;
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 21rpx;
  font-family: HarmonyOS_Sans_SC;
  font-weight: normal;
  text-align: left;
     line-height: 35rpx;
   margin: 26rpx 0 0 2rpx;
 }

 /* 兑换弹窗样式 - 底部弹出 */
 .modal-overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: center;
   align-items: flex-end;
   z-index: 1000;
   overflow: hidden;
   touch-action: none;
   animation: fadeIn 0.3s ease-in-out;
 }

 @keyframes fadeIn {
   from {
     opacity: 0;
   }
   to {
     opacity: 1;
   }
 }

 @keyframes slideUp {
   from {
     transform: translateY(100%);
   }
   to {
     transform: translateY(0);
   }
 }

 @keyframes slideDown {
   from {
     transform: translateY(0);
   }
   to {
     transform: translateY(100%);
   }
 }

 .modal-content {
   width: 100%;
   background: #FFFFFF;
   border-radius: 20rpx 20rpx 0 0;
   padding: 40rpx;
   padding-top: 60rpx;
   padding-bottom: calc(40rpx + env(safe-area-inset-bottom));
   max-height: 80vh;
   overflow-y: auto;
   overflow-x: hidden;
   touch-action: pan-y;
   position: relative;
   animation: slideUp 0.3s ease-out;
 }

 .modal-handle {
   position: absolute;
   top: 16rpx;
   left: 50%;
   transform: translateX(-50%);
   width: 80rpx;
   height: 8rpx;
   background: #E5E5E5;
   border-radius: 4rpx;
 }

 .modal-close {
   position: absolute;
   top: 20rpx;
   right: 30rpx;
   width: 60rpx;
   height: 60rpx;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 10;
 }

 .close-icon {
   width: 27rpx;
   height: 27rpx;
   font-size: 36rpx;
   color: #666666;
   line-height: 36rpx;
   font-weight: 300;
 }

 .order-product-row {
   align-items: flex-start;
   gap: 16rpx;
   margin-bottom: 30rpx;
 }

 .modal-product-image {
   width: 127rpx;
   height: 127rpx;
   border-radius: 12rpx;
   background: #F5F5F5;
   flex-shrink: 0;
 }

 .modal-product-info {
   flex: 1;
   height: 127rpx;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 4rpx 0;
 }

 .modal-product-title {
   font-weight: 500;
   font-size: 27rpx;
   color: #333333;
   line-height: 40rpx;
 }

 .modal-product-subtitle {
   font-weight: 300;
   font-size: 21rpx;
   color: #919191;
   line-height: 32rpx;
 }

 .modal-points-and-quantity {
   justify-content: space-between;
   align-items: center;
 }

 .modal-points-section {
   align-items: center;
   gap: 8rpx;
 }

 .modal-points-number {
   font-weight: bold;
   font-size: 35rpx;
   color: #FC5908;
 }

 .modal-points-icon {
   width: 85rpx;
   height: 29rpx;
 }

 .exchange-info-section {
   margin-bottom: 30rpx;
 }

 .divider-line {
   width: 750rpx;
   height: 1rpx;
   background: #BABABA;
   opacity: 0.3;
   margin-bottom: 30rpx;
 }

 .exchange-info-row {
   align-items: center;
   margin-bottom: 15rpx;
 }

 .exchange-info-text {
   font-weight: 400;
   font-size: 21rpx;
   color: #919191;
 }

 .exchange-date-row {
   align-items: flex-start;
 }

 .exchange-date-text {
   font-weight: 400;
   font-size: 21rpx;
   color: #919191;
   line-height: 32rpx;
 }

 .quantity-controls {
   align-items: center;
   gap: 20rpx;
 }

 .quantity-btn {
   width: 28rpx;
   height: 28rpx;
   border-radius: 6rpx;
   display: flex;
   align-items: center;
   justify-content: center;
   background: #F0F0F0;
 }

 .quantity-btn:active {
   background: #E0E0E0;
 }

 .quantity-btn-text {
   font-weight: 400;
   font-size: 20rpx;
   color: #333333;
   line-height: 20rpx;
 }

 .quantity-number {
   font-weight: 400;
   font-size: 18rpx;
   color: #333333;
   min-width: 32rpx;
   text-align: center;
 }

 .total-payment-section {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
 }

 .payment-left-section {
   display: flex;
   flex-direction: column;
   gap: 8rpx;
 }

 .modal-payment-label {
   font-weight: 400;
   font-size: 24rpx;
   color: #919191;
 }

 .payment-amount-wrapper {
   align-items: center;
   gap: 8rpx;
 }

 .modal-payment-amount {
   font-weight: bold;
   font-size: 48rpx;
   color: #FC5908;
 }

 .modal-payment-icon {
   width: 85rpx;
   height: 29rpx;
 }

 .pay-button {
   width: 211rpx;
   height: 62rpx;
   background: linear-gradient(90deg, #FD8F36, #FC5908);
   border-radius: 31rpx;
   display: flex;
   align-items: center;
   justify-content: center;
 }

 .pay-button:active {
   opacity: 0.8;
 }

 .pay-button-text {
   font-weight: 500;
   font-size: 30rpx;
   color: #FFFFFF;
   line-height: 30rpx;
 }

 /* 确保密码验证弹窗在最顶层 */
 :deep(.uni-popup) {
   z-index: 99999 !important;
 }
 
 :deep(.uni-popup__wrapper) {
   z-index: 99999 !important;
 }
 </style> 