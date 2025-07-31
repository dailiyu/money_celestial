<template>
  <view class="pay-container">
    <!-- 商家信息 -->
    <view class="merchant-info">
      <view class="merchant-details">
        <view class="merchant-name">{{ shopInfo?.name }}</view>
        <view class="merchant-id">ID: {{ phoneNumber}}</view>
        <view class="point-ratio">
          <text class="ratio-label">积分赠送比例</text>
          <text class="ratio-value">{{shopInfo?.consume2coin_bit}}%</text>
        </view>
      </view>
      <image
        class="merchant-logo"
        :src="shopInfo?.avatar"
        mode="aspectFill"
      ></image>
    </view>

    <!-- 支付金额 -->
    <view class="payment-section">
      <view class="payment-label">金额</view>
      <view class="payment-amount">
        <view class="amount-input-wrapper">
          <input
            class="amount-input"
            type="digit"
            v-model="amount"
            @input="updatePoints"
            placeholder="请输入金额"
            :placeholder-style="placeholderStyle"
          />
        </view>
        <text class="amount-unit">元</text>
      </view>
    </view>

    <!-- 备注 -->
    <view class="remark-section">
      <view class="remark-label">备注</view>
      <input class="remark-input" v-model="remark" placeholder="选填" />
    </view>
    <!-- 积分信息 -->
    <view class="points-section">
      <view class="points-label">满仓数字积分</view>
      <view class="points-info">
        <view class="points-value">{{((amount/rateCny) * shopInfo?.consume2coin_bit).toFixed(2) }}</view>
        <view class="points-equivalent">≈ ¥{{ amount*shopInfo?.consume2coin_bit/100 }}</view>
      </view>
    </view>

    <!-- 确认支付按钮 -->
    <view 
      v-if="shopInfo?.pay_cert_material_state === 1" 
      class="confirm-button" 
      :class="{ 'processing': isProcessing }"
      @click="wechatpayDo"
    >
      {{ isProcessing ? '支付处理中...' : '确认支付' }}
    </view>
    
    <!-- 未开通线上支付提示 -->
    <view v-else-if="shopInfo?.pay_cert_material_state !== 1" class="disabled-button">
      当前店铺未开通线上支付
    </view>
    
    <!-- 出示积分码按钮 -->
    <view v-if="shopInfo?.pay_cert_material_state !== 1" class="points-code-button" @click="showPointsCode">
      出示积分码
    </view>
  </view>
</template>

<script setup>
import { ref, watch } from "vue";
import { wechatpay } from "@/service/point.js";
import { getSessionKey } from "@/service/uer_profile.js";
import { getMerchantDetail } from '@/service/merchant.js'
import { onShow, onLoad } from '@dcloudio/uni-app'
import { getAllPoint } from '@/service/point';

// 防抖节流相关变量
const isProcessing = ref(false);
const lastClickTime = ref(0);
const DEBOUNCE_DELAY = 2000; // 2秒防抖
const amount = ref('');
const remark = ref('');
const points = ref('1,000');
const shopInfo = ref()
const phoneNumber = ref('')
const rateCny = ref()

// 输入框placeholder样式
const placeholderStyle = "font-size: 34rpx; color: #cccccc;"


onLoad(async(options)=>{
  phoneNumber.value = options.scene

   getMerchantDetail(phoneNumber.value).then(res=>{
    shopInfo.value = res
   }).catch(err=>{
    console.log(err);
    uni.showToast({
      title: '获取商家数据失败,该商家可能不存在',
      icon: 'none',
      duration: 1500
    })
    setTimeout(()=>{
      // uni.navigateBack()
    },1500)
   })

  const rateData = await getAllPoint()
  rateCny.value = rateData.rateCny
    console.log(rateData);
  console.log(  shopInfo.value);
  console.log(options);
}) 

// 更新积分值
const updatePoints = () => {
  const num = parseFloat(amount.value);
  if (!isNaN(num)) {
    // 计算积分，这里简单示例为金额*100
    const pointsValue = Math.round(num * 100);
    // 添加千位分隔符
    points.value = pointsValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    points.value = '0';
  }
};

// 监听金额变化
watch(amount, updatePoints);

const showPointsCode = () => {
  // 跳转到积分码页面
  uni.navigateTo({
    url: '/pages/myAccount/point_code'
  });
};

const wechatpayDo = async () => {
  // 防抖节流检查
  const now = Date.now();
  if (isProcessing.value) {
    uni.showToast({
      title: '支付处理中，请勿重复点击',
      icon: 'none',
      duration: 1500
    });
    return;
  }
  
  if (now - lastClickTime.value < DEBOUNCE_DELAY) {
    uni.showToast({
      title: '请勿频繁点击',
      icon: 'none',
      duration: 1500
    });
    return;
  }
  
  // 验证金额
  const num = parseFloat(amount.value);
  if (isNaN(num) || num <= 0) {
    uni.showToast({
      title: '请输入有效金额',
      icon: 'none',
      duration: 2000
    });
    return;
  }
  
  // 设置防抖状态
  isProcessing.value = true;
  lastClickTime.value = now;

  uni.login({
    provider: "weixin",
    success: async (loginRes) => {
      const code = loginRes.code;
      const { session_key, openid } = await getSessionKey({ code });
      console.log(openid);
   try {
    let result = await wechatpay({
        openid: openid,
        amount: parseFloat(amount.value),
        shop_id:phoneNumber.value,
        remark: remark.value || "默认备注",
      });
      if (result?.code == 200) {
        let data = result.data;
        data.success = (res) => {
          if (res.errMsg === "requestPayment:ok") {
            // 客户端调用成功，建议此时提示"支付处理中"
            // 后续可以轮询服务端订单状态或等服务端主动通知
            console.log(res);
            uni.showToast({ title: "支付成功", icon: "none" });
           setTimeout(()=>{
            uni.navigateTo({url: '/pages/myAccount/my_point'})
           },2000)
          }
          // 重置防抖状态
          isProcessing.value = false;
        };
        data.fail = (err) => {
          console.log(err);
          if (err.errMsg.includes("cancel")) {
            uni.showToast({ title: "已取消支付", icon: "none" });
          } else {
            uni.showToast({ title: "支付失败", icon: "none" });
          }
          // 重置防抖状态
          isProcessing.value = false;
        };
        uni.requestPayment(data);
      }
   } catch (error) {
    uni.showToast({
      title: error.data.error,
      icon: 'none',
      duration: 2000
    })
    // 重置防抖状态
    isProcessing.value = false;
   }
    },
  });
};
</script>

<style lang="scss">
.pay-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 0 30rpx;
}

.merchant-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx;
  margin: 20rpx 0 0 0;
  border-radius: 12rpx;


  .merchant-details {
    flex: 1;
    margin-right: 20rpx;
    
    .merchant-name {
      font-size: 34rpx;
      font-weight: 500;
      margin-bottom: 10rpx;
    }

    .merchant-id {
      font-size: 28rpx;
      color: #999999;
      margin-bottom: 10rpx;
    }

    .point-ratio {
      
      display: inline-flex;
      height: 30rpx;
      align-items: center;
      border-radius: 30rpx;
     border: 1rpx solid #ff6b35;
     
      overflow: hidden;
      
      .ratio-label {
        font-size: 18rpx;
        color: #ffffff;
        padding: 6rpx 16rpx;
        
        background-color: #ff6b35;
      }
      
      .ratio-value {
        font-size: 21rpx;
        font-weight: 700;
        color: #FC5908 ;
        padding: 6rpx 13rpx;
        padding-left: 1rpx;
        margin-left: 8rpx;
      }
    }
  }

  .merchant-logo {
    width: 114rpx;
    height: 114rpx;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
}

.payment-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 25rpx 20rpx;
  margin-top: 20rpx;
  border-bottom: 1rpx solid #f0f0f0;

  .payment-label {
    font-size: 30rpx;
    color: #333333;
  }

  .payment-amount {
    display: flex;
    align-items: center;
    
    .amount-input-wrapper {
      position: relative;
      flex: 1;
      max-width: 300rpx;
    }

    .amount-input {
      width: 100%;
      height: 56rpx;
      font-size: 56rpx;
      font-weight: bold;
      text-align: right;
      border: none;
      outline: none;
      background: transparent;
      color: #333333;
      
      &:focus {
        color: #333333;
      }
    }

    .amount-unit {
      font-size: 32rpx;
      color: #333333;
      margin-left: 10rpx;
      flex-shrink: 0;
    }
  }
}

.remark-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding:  25rpx 20rpx;
  border-bottom: 1rpx solid #f0f0f0;

  .remark-label {
    font-size: 24rpx;
    color: #333333;
  }

  .remark-input {
    flex: 1;
    text-align: right;
    font-size: 28rpx;
    color: #999999;
  }
}

.points-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 30rpx;
margin-top: 18rpx;
  .points-label {
    font-size: 27rpx;
    color: #333333;
  }

  .points-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    .points-value {
      font-size: 48rpx;
      color: #00c853;
      font-weight: bold;
    }
    
    .points-equivalent {
      font-size: 28rpx;
      color: #999999;
      margin-top: 4rpx;
    }
  }
}

.confirm-button {
  color: #ffffff;
  font-size: 34rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60rpx auto;
  width: 598rpx;
  height: 95rpx;
  background: #F40B28;
  border-radius: 17rpx;
  transition: all 0.3s ease;
  
  &.processing {
    background: #AAAAAA;
    opacity: 0.8;
    pointer-events: none;
  }
  
  &:active:not(.processing) {
    opacity: 0.8;
    transform: scale(0.98);
  }
}

.disabled-button {
  width: 598rpx;
  height: 95rpx;
  background: #AAAAAA;
  border-radius: 17rpx;
  font-weight: 500;
  font-size: 30rpx;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60rpx auto 32rpx;
}

.points-code-button {
  width: 598rpx;
  height: 95rpx;
  background: #F40B28;
  border-radius: 17rpx;
  font-weight: 500;
  font-size: 30rpx;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 60rpx;
}
</style>
