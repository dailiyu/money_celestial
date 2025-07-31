<template>
  <view class="order-management-page flex-col">
    
    <!-- Tab切换 -->
    <view class="tab-container flex-row">
      <view 
        class="tab-item flex-col"
        :class="{active: activeTab === 'all'}"
        @click="switchTab('all')"
      >
        <text class="tab-text">全部</text>
      </view>
      <view 
        class="tab-item flex-col"
        :class="{active: activeTab === 'exchanged'}"
        @click="switchTab('exchanged')"
      >
        <text class="tab-text">已兑换</text>
      </view>
      <view 
        class="tab-item flex-col"
        :class="{active: activeTab === 'unexchanged'}"
        @click="switchTab('unexchanged')"
      >
        <text class="tab-text">未兑换</text>
      </view>
      <view 
        class="tab-item flex-col"
        :class="{active: activeTab === 'refunded'}"
        @click="switchTab('refunded')"
      >
        <text class="tab-text">退款</text>
      </view>
    </view>
    
    <!-- 订单列表 -->
    <view class="order-list flex-col">
      <!-- 加载状态 -->
      <view v-if="loading && allOrders.length === 0" class="loading-state flex-col">
        <text class="loading-text">加载中...</text>
      </view>
      
      <view 
        v-for="(order, index) in currentOrderList" 
        :key="order.id"
        class="order-item flex-col"
        @click="viewOrderDetail(order)"
      >
        <!-- 订单头部信息 -->
        <view class="order-header-info flex-row">
          <text class="order-time">{{ order.time }}</text>
          <view class="status-badge" :class="order.statusClass">
            <text class="status-text">{{ order.statusText }}</text>
          </view>
        </view>
        
        <!-- 订单内容 -->
        <view class="order-content flex-row">
          <image class="product-image" :src="order.image" mode="aspectFill" />
          
          <view class="order-right flex-col">
            <!-- 上半部分：标题和积分 -->
            <view class="order-header flex-row">
              <view class="product-info flex-col">
                <text class="product-title">{{ order.title }}</text>
                <text class="product-subtitle">{{ order.subtitle }}</text>
              </view>
              
              <view class="points-section flex-row">
                <text class="points-number">{{ order.points }}</text>
                <image class="points-icon" src="https://static.maxcang.com/appstatic/discovery/d9_energy_icon.png" />
              </view>
            </view>
            
            <!-- 数量信息 -->
            <view class="quantity-info flex-row">
              <text class="quantity-text">x{{ order.quantity }}</text>
            </view>
          </view>
        </view>
        
        <!-- 底部按钮 -->
        <view class="order-footer flex-row">
          <view class="footer-buttons flex-row">
            <view v-if="order.statusType === 'unexchanged'" class="action-btn main-btn" @click.stop="useOrder(order)">
              <text class="btn-text">立即使用</text>
            </view>
            
            <view v-if="order.statusType === 'exchanged'" class="action-btn completed-btn" @click.stop="viewOrderDetail(order)">
              <text class="btn-text">订单完成</text>
            </view>
            
            <view v-if="order.statusType === 'refunded'" class="action-btn refunded-btn" @click.stop="viewOrderDetail(order)">
              <text class="btn-text">订单完成</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 暂无数据 -->
    <view v-if="currentOrderList.length === 0 && !loading" class="empty-state flex-col">
      <text class="empty-text">暂无订单</text>
    </view>
    
    <!-- 加载更多 -->
    <view v-if="hasMore && allOrders.length > 0" class="load-more flex-col" @click="fetchOrderList(false)">
      <text class="load-more-text">{{ loading ? '加载中...' : '加载更多' }}</text>
    </view>
    
  </view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { getOrderList, applyRefund as applyRefundAPI } from '@/service/shop.js';

// 响应式数据
const activeTab = ref('all');
const allOrders = ref([]);
const loading = ref(false);
const hasMore = ref(true);
const currentPage = ref(1);
const pageSize = ref(10);

// 计算属性
const currentOrderList = computed(() => {
  return allOrders.value;
});

// 获取订单列表
const fetchOrderList = async (isRefresh = false) => {
  if (loading.value) return;
  
  try {
    loading.value = true;
    
    if (isRefresh) {
      currentPage.value = 1;
      hasMore.value = true;
      allOrders.value = []; // 清空现有数据
    }
    
    const params = {
      page: currentPage.value,
      page_size: pageSize.value,
      order_type: 'product' // 只获取商品订单
    };
    
    // 根据当前tab添加过滤参数
    if (activeTab.value === 'exchanged') {
      params.is_finished = true;
      params.is_return = false;
    } else if (activeTab.value === 'unexchanged') {
      params.is_finished = false;
      params.is_return = false;
    } else if (activeTab.value === 'refunded') {
      params.is_return = true;
    }
    // 'all' tab不添加额外过滤参数
    
    const response = await getOrderList(params);
    
    // 转换数据格式
    const transformedOrders = response.results.map(order => {
      // 确定订单状态
      let statusType, statusText, statusClass;
      
      // 检查是否有is_return字段，如果没有则默认为false
      const isReturn = order.is_return || false;
      
      if (isReturn) {
        statusType = 'refunded';
        statusText = '已退款';
        statusClass = 'refunded';
      } else if (order.is_finished) {
        statusType = 'exchanged';
        statusText = '已兑换';
        statusClass = 'exchanged';
      } else {
        statusType = 'unexchanged';
        statusText = '未兑换';
        statusClass = 'unexchanged';
      }
      
      // 获取商品图片，优先获取Banner类型
      let productImage = 'https://static.maxcang.com/appstatic/merchant/product_placeholder.png';
      if (order.product && order.product.images && order.product.images.length > 0) {
        // 查找Banner类型图片
        const bannerImage = order.product.images.find(img => img.image_type === 'banner');
        if (bannerImage) {
          productImage = bannerImage.image_url;
        } else {
          // 如果没有Banner类型，使用第一张图片
          productImage = order.product.images[0].image_url;
        }
      }
      
      return {
        id: order.order_id,
        statusText,
        statusClass,
        statusType,
        title: order.product ? order.product.name : '商品已删除',
        subtitle: order.product ? order.product.specs || '规格信息' : '',
        points: order.product ? Math.round(order.product.price).toString() : '0',
        quantity: order.product_count,
        time: formatDateTime(order.created_at),
        image: productImage,
        shopName: order.shop_name,
        realAmount: order.real_amount,
        productId: order.product_id,
        isReturn: isReturn, // 保存退款状态
        rawOrder: order // 保存原始订单数据
      };
    });
    
    if (isRefresh) {
      allOrders.value = transformedOrders;
    } else {
      allOrders.value.push(...transformedOrders);
    }
    
    // 更新分页信息
    hasMore.value = !!response.next;
    if (hasMore.value) {
      currentPage.value++;
    }
    
  } catch (error) {
    console.error('获取订单列表失败:', error);
    uni.showToast({
      title: '获取订单失败',
      icon: 'none'
    });
  } finally {
    loading.value = false;
  }
};

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
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  } catch (error) {
    console.error('日期格式化失败:', error);
    return '时间格式错误';
  }
};

// 方法定义
const switchTab = (tab) => {
  activeTab.value = tab;
  // 切换tab时重新获取数据
  fetchOrderList(true);
};



const useOrder = (order) => {
  // 直接跳转到订单详情页面
  viewOrderDetail(order);
};

const viewOrderDetail = (order) => {
  let targetUrl = '';
  
  // 根据订单状态跳转到不同的详情页面
  switch (order.statusType) {
    case 'unexchanged':
      targetUrl = `/pages/discovery/pending_verification_order_detail?id=${order.id}`;
      break;
    case 'exchanged':
      targetUrl = `/pages/discovery/exchanged_order_detail?id=${order.id}`;
      break;
    case 'refunded':
      targetUrl = `/pages/discovery/refund_success_order_detail?id=${order.id}`;
      break;
    default:
      targetUrl = `/pages/discovery/pending_verification_order_detail?id=${order.id}`;
      break;
  }
  
  uni.navigateTo({
    url: targetUrl
  });
};

const applyRefund = (order) => {
  uni.showModal({
    title: '申请退款',
    content: '确认申请退款？退款后D9能量将返还到账户。',
    success: async (res) => {
      if (res.confirm) {
        try {
          uni.showLoading({
            title: '申请中...',
            mask: true
          });
          
          await applyRefundAPI(order.id);
          
          uni.hideLoading();
          uni.showToast({
            title: '退款申请已提交',
            icon: 'success',
            duration: 2000
          });
          
          // 刷新订单列表
          setTimeout(() => {
            fetchOrderList(true);
          }, 1500);
          
        } catch (error) {
          uni.hideLoading();
          console.error('申请退款失败:', error);
          
          let errorMessage = '申请退款失败';
          
          // 处理不同的错误响应格式
          if (error.data) {
            if (typeof error.data === 'string') {
              errorMessage = error.data;
            } else if (error.data.error) {
              errorMessage = error.data.error;
            } else if (error.data.detail) {
              errorMessage = error.data.detail;
            } else if (error.data.message) {
              errorMessage = error.data.message;
            }
          } else if (error.message) {
            errorMessage = error.message;
          }
          
          uni.showToast({
            title: errorMessage,
            icon: 'none',
            duration: 3000
          });
        }
      }
    }
  });
};

const contactService = (order) => {
  uni.showModal({
    title: '联系客服',
    content: '如有问题，请联系客服：400-123-4567',
    showCancel: false,
    confirmText: '知道了'
  });
};

// 页面显示时刷新数据
onShow(() => {
  fetchOrderList(true);
});

// 页面加载时获取数据
onMounted(() => {
  fetchOrderList(true);
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
.order-management-page {
  position: relative;
  width: 750rpx;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F5F5F5;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Tab切换 */
.tab-container {
  width: 750rpx;
  height: 106rpx;
  background: #FFFFFF;
  align-items: center;
  
  .tab-item {
    flex: 1;
    height: 88rpx;
    justify-content: center;
    align-items: center;
    position: relative;
    
    .tab-text {
      font-weight: 400;
      font-size: 24rpx;
      color: #333333;
    }
    
    &.active {
      .tab-text {
        color: #FC5908;
        font-weight: 500;
      }
    }
  }
}

/* 订单列表 */
.order-list {
  padding: 20rpx 30rpx;
  gap: 20rpx;
}

.order-item {
  background: #FFFFFF;
  border-radius: 20rpx;
  padding: 24rpx;
  box-sizing: border-box;
  cursor: pointer;
  
  &:active {
    background: #F8F8F8;
  }
  
  .order-header-info {
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16rpx;
    
    .order-time {
      font-weight: 300;
      font-size: 21rpx;
      color: #919191;
      line-height: 30rpx;
    }
    
    .status-badge {
      padding: 4rpx 12rpx;
      border-radius: 8rpx;
      
      &.unexchanged {
        .status-text {
          font-weight: 500;
          font-size: 21rpx;
          color: #FC5908;
        }
      }
      
      &.exchanged {
        .status-text {
          font-weight: 500;
          font-size: 21rpx;
          color: #333333;
        }
      }
      
      &.refunded {
        .status-text {
          font-weight: 500;
          font-size: 21rpx;
          color: #A0A0A0;
        }
      }
    }
  }
  
  .order-content {
    align-items: flex-start;
    gap: 16rpx;
    
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
      justify-content: space-between;
      
      .order-header {
        align-items: flex-start;
        justify-content: space-between;
        
        .product-info {
          flex: 1;
          gap: 4rpx;
          margin-right: 16rpx;
          
          .product-title {
            font-weight: 500;
            font-size: 27rpx;
            color: #333333;
            line-height: 36rpx;
          }
          
          .product-subtitle {
            font-weight: 300;
            font-size: 21rpx;
            color: #919191;
            line-height: 30rpx;
            margin-top: 4rpx;
          }
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
      
      .quantity-info {
        align-items: flex-end;
        justify-content: flex-end;
        margin-top: 8rpx;
        
        .quantity-text {
          font-weight: 300;
          font-size: 21rpx;
          color: #919191;
        }
      }
    }
  }
  
  .order-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 24rpx;
    
    .footer-buttons {
      align-items: center;
      gap: 12rpx;
      flex-shrink: 0;
      
      .action-btn {
        width: 152rpx;
        height: 45rpx;
        border-radius: 22rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        
        &.main-btn {
          background: linear-gradient(90deg, #FD8F36, #FC5908);
          
          .btn-text {
            font-weight: 500;
            font-size: 24rpx;
            color: #FFFFFF;
          }
        }
        
        &.completed-btn {
          background: #A0A0A0;
          
          .btn-text {
            font-weight: 500;
            font-size: 24rpx;
            color: #FFFFFF;
          }
        }
        
        &.refunded-btn {
          background: #A0A0A0 !important;
          width: 152rpx !important;
          height: 45rpx !important;
          border-radius: 22rpx !important;
          
          .btn-text {
            font-weight: 500 !important;
            font-size: 24rpx !important;
            color: #FFFFFF !important;
          }
        }
        
        &:active {
          opacity: 0.8;
        }
      }
    }
  }
}

/* 加载状态 */
.loading-state {
  padding: 100rpx 0;
  align-items: center;
  justify-content: center;
  
  .loading-text {
    font-weight: 400;
    font-size: 30rpx;
    color: #999999;
  }
}

/* 空状态 */
.empty-state {
  padding: 100rpx 0;
  align-items: center;
  justify-content: center;
  
  .empty-text {
    font-weight: 400;
    font-size: 30rpx;
    color: #999999;
  }
}

/* 加载更多 */
.load-more {
  padding: 40rpx 0;
  align-items: center;
  justify-content: center;
  
  .load-more-text {
    font-weight: 400;
    font-size: 28rpx;
    color: #FC5908;
  }
}

/* 退款按钮特殊样式 - 全局样式确保优先级 */
.action-btn.refunded-btn {
  background: #A0A0A0 !important;
  width: 152rpx !important;
  height: 45rpx !important;
  border-radius: 22rpx !important;
}

.action-btn.refunded-btn .btn-text {
  font-weight: 500 !important;
  font-size: 24rpx !important;
  color: #FFFFFF !important;
}
</style> 