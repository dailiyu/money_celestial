<template>
  <view class="page flex-col">
    <view class="main-container flex-col justify-between">
        <!-- 商品图片轮播 -->
        <view class="product-swiper-container">
      <!-- 自定义导航栏 -->
      <view class="custom-navbar">
        <view class="navbar-content">
          <view class="navbar-left" @click="goBack">
            <uni-icons type="left" size="20" color="#fff" />
          </view>
          <view class="navbar-title">
            <text class="title-text"></text>
          </view>
          <view class="navbar-right"></view>
        </view>
      </view>

          <!-- 毛玻璃背景层 -->
          <view v-if="bannerImages.length > 0" class="swiper-background" :style="{ backgroundImage: 'url(' + bannerImages[currentImageIndex].image_url + ')' }"></view>
          
          <swiper v-if="bannerImages.length > 0" class="product-swiper" :indicator-dots="false" :autoplay="bannerImages.length > 1" :circular="bannerImages.length > 1" :interval="3000" @change="onSwiperChange">
            <swiper-item v-for="(image, index) in bannerImages" :key="index">
              <image 
                class="product-image" 
                :src="image.image_url" 
                mode="aspectFit"
                @error="onImageError"
              />
          </swiper-item>
          </swiper>
          
          <!-- 默认占位图 -->
          <view v-else class="product-swiper">
            <view class="product-placeholder placeholder-1"></view>
          </view>
        
        <!-- 轮播指示器 -->
          <view class="swiper-indicators flex-row">
          <view 
              v-for="(image, index) in (bannerImages.length > 0 ? bannerImages : [1,2,3,4])" 
            :key="index"
              class="indicator-dot"
              :class="{ active: index === currentImageIndex }"
          ></view>
        </view>
        </view>
        
        <!-- 价格信息卡片 -->
        <view class="price-card flex-row">
          <text class="benefit-text">
            别让积分流走它能变成生活的礼物
          </text>
        </view>
      <!-- 商品信息区域 -->
      <view class="product-info-section flex-col">
        <view class="product-description-card flex-row">
          <view class="description-content flex-col justify-between">
              <text class="product-title">{{ productDetail.name || '商品名称' }}</text>
            <text class="product-description">
                {{ productDetail.description || '商品描述' }}
            </text>
          </view>
                 </view>
       </view>
        <view class="product_detail_container">
          <!-- 详情标题 -->
          <view class="detail-header">
            <text class="detail-title">商品详情</text>
     </view>

          <!-- 产品详情图片 -->
          <view class="detail-images-container flex-col" v-if="detailImages.length > 0">
            <image 
              v-for="(image, index) in detailImages" 
              :key="index"
              class="detail-image" 
              :src="image.image_url" 
              mode="widthFix"
              @error="onImageError"
            />
       </view>
       </view>
     </view>

   </view>
 </template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getProductDetail } from '@/service/shop.js';

// 页面数据
const productDetail = ref({});
const loading = ref(false);
const currentImageIndex = ref(0);

// 获取产品图片列表
const bannerImages = computed(() => {
  if (productDetail.value.images) {
    return productDetail.value.images.filter(img => img.image_type === 'banner');
  }
  return [];
});

// 获取产品详情图片列表
const detailImages = computed(() => {
  if (productDetail.value.images) {
    return productDetail.value.images.filter(img => img.image_type === 'detail');
        }
  return [];
});


  
// 图片加载错误处理
const onImageError = () => {
  console.log('图片加载失败');
};

// 轮播图切换事件
const onSwiperChange = (e) => {
  currentImageIndex.value = e.detail.current;
};

// 返回上一页
const goBack = () => {
  uni.navigateBack();
};

  // 获取产品详情数据
const loadProductDetail = async (productId) => {
  try {
    loading.value = true;
    console.log('获取产品详情，ID:', productId);
    
    const response = await getProductDetail(productId);
    console.log('获取到的产品详情:', response);
    
    productDetail.value = response;
    
  } catch (error) {
    console.error('获取产品详情失败:', error);
    uni.showToast({
      title: '获取产品详情失败',
      icon: 'none'
    });
  } finally {
    loading.value = false;
  }
};

// 页面配置
onMounted(() => {
  // 获取商品详情数据
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  const options = currentPage.options;
  
  if (options.id) {
    // 根据ID获取商品详情
    loadProductDetail(options.id);
  } else {
    uni.showToast({
      title: '商品ID缺失',
      icon: 'none'
    });
  }
});
</script>

<style lang="scss" scoped>
  /* 防止页面左右滑动 */
  :deep(body) {
    overflow-x: hidden;
  }
  
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
     overflow-x: hidden;
     overflow-y: auto;
 }

 .main-container {
   position: relative;
   width: 750rpx;
   min-height: 100vh;
     padding-bottom: 100rpx;
   background: url(https://lanhu-oss-2537-2.lanhuapp.com/psprt2g8syh3xl35uu2stw8u5oxw57octa1ada75f-2d06-423a-ae5e-c58192dfed52) 100% no-repeat;
   background-size: 100% auto;
     overflow-x: hidden;
   }
  

  
     /* 商品图片轮播容器 */
   .product-swiper-container {
     position: relative;
     width: 750rpx;
     height: 663rpx;
     z-index: 1;
     overflow: hidden;
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
  height: 44px;
  padding: 0 32rpx;
  margin-top: 44px;
  background: transparent;
  position: relative;
}

.navbar-left {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 确保uni-icons在小程序中正确显示 */
  position: relative;
  z-index: 1001;
  /* 与原生导航栏返回按钮对齐 */
  flex-shrink: 0;
  transform: translateY(10rpx);
}



.navbar-title {
  flex: 1;
  text-align: center;
  /* 确保标题在中间完美居中 */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 60%;
}

.title-text {
  font-size: 34rpx;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 44rpx;
}

.navbar-right {
  width: 44px;
  height: 44px;
  /* 与原生导航栏胶囊按钮对齐 */
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 小程序导航栏对齐优化 */
/* #ifdef MP */
.custom-navbar {
  top: 0;
}

.navbar-content {
  margin-top: 44px;
  height: 44px;
  align-items: center;
  position: relative;
}

.navbar-left {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.navbar-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 60%;
  text-align: center;
}

.navbar-right {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* #endif */

  /* 毛玻璃背景层 */
  .swiper-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(20px);
    transform: scale(1.1);
    z-index: 1;
}

.product-swiper {
    position: relative;
  width: 750rpx;
  height: 663rpx;
    z-index: 2;
}

.product-image {
  width: 100%;
  height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
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
    bottom: 200rpx;
  left: 50%;
  transform: translateX(-50%);
    z-index: 20;
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
    top: 523rpx;
  width: 692rpx;
  height: 192rpx;
  background: linear-gradient(89deg, #FD8F36, #FC5908);
  border-radius: 30rpx;
    z-index: 2;
}

.benefit-text {
  color: rgba(255, 255, 255, 1);
  font-size: 18rpx;
  font-weight: 300;
  text-align: right;
  line-height: 28rpx;
  position: absolute;
  top: 30rpx;
  right: 30rpx;
  width: 280rpx;
  white-space: nowrap;
}
  


  


/* 商品信息区域 */
.product-info-section {
  position: absolute;
  left: 0;
    top: 600rpx;
  width: 750rpx;
    min-height: 210rpx;
    z-index: 3;
}



.product-description-card {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
    position: relative;
    margin: 0 29rpx;
  width: 692rpx;
    min-height: 210rpx;
    padding-bottom: 20rpx;
}

.description-content {
  width: 602rpx;
    min-height: 130rpx;
  margin: 45rpx 0 0 46rpx;
}

.product-title {
    width: 600rpx;
    min-height: 46rpx;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 48rpx;
  font-family: HarmonyOS_Sans_SC_Bold;
  font-weight: 700;
  text-align: left;
    white-space: normal;
  line-height: 64rpx;
    word-wrap: break-word;
}

.product-description {
  width: 600rpx;
     min-height: 58rpx;
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 21rpx;
  font-family: HarmonyOS_Sans_SC;
  font-weight: normal;
  text-align: left;
     line-height: 35rpx;
   margin: 26rpx 0 0 2rpx;
     word-wrap: break-word;
     white-space: normal;
   }
   
   /* 产品详情容器样式 */
   .product_detail_container {
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
     top: 851rpx;
     width: 692rpx;
     padding: 30rpx;
     background: #FFFFFF;
     border-radius: 30rpx 30rpx 30rpx 30rpx;
     box-sizing: border-box;
     z-index: 4;
      margin-top: 12rpx;
   }
   
   /* 详情标题样式 */
   .detail-header {
   margin-bottom: 30rpx;
     padding-bottom: 20rpx;
 
 }

   .detail-title {
     font-size: 30rpx;
     font-weight: 600;
   color: #333333;

   }
   
   /* 详情图片样式 */
   .detail-images-container {
     margin-bottom: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
 }

   .detail-image {
     width: 649rpx;
     margin-bottom: 20rpx;
     border-radius: 12rpx;
     background-color: #F5F5F5;
   }
   
   .detail-image:last-child {
     margin-bottom: 0;
   }
   



  
 </style> 