<template>
  
  <view class="page">
    <view class="img-box">
      <image
        
        src="https://file.shabiimage.com/appstatic/my/bg_my.png"
        class="img"
      ></image>
    </view>
    <view class="content">
      <view class="profile" v-if="token">
        <view class="avtar">
          <image class="img" :src="ionc_url" mode="" v-if="ionc_url"></image>
          <image
            class="img"
            src="https://static.maxcang.com/appstatic/avatar_default.png"
            mode=""
          ></image>
        </view>

        <view class="userInfo_box">
          <view class="name">
            {{ user_name || "default" }}
          </view>
          <div class="phone_box">
            <image
              class="img"
              src="https://static.maxcang.com/appstatic/my/phone.jpg"
            ></image>
            <view
              class="number"
              v-if="!isShowNumber"
              @click="isShowNumber = true"
              >{{ obscurePhoneNumber(phoneNumber) }}</view
            >
            <view
              class="number"
              v-if="isShowNumber"
              @click="isShowNumber = false"
              >{{ phoneNumber }}</view
            >
          </div>
        </view>
        <view class="logout" @click="logout"> 退出登录 </view>
      </view>
      <view class="profile" v-if="!token" @click="toLogin">
        <view class="avtar">
          <image
            class="img"
            src="https://static.maxcang.com/appstatic/avatar_default.png"
            mode=""
          ></image>
        </view>

        <view class="userInfo_box">
          <view class="name" style="margin-top: 20rpx;"> 未登录 </view>
          
        </view>

        <view class="logout" > 点击登录 </view>
      </view>

      <view class="points-box">
        <view class="item" @click="toMyPoint">
          <image
            class="img"
            src="https://static.maxcang.com/appstatic/my/my_credits.png"
          ></image>
          <text class="text">我的积分</text>
          <div class="text number">{{ green_points }}</div>
        </view>
        <view class="item" @click="toPointAvailable">
          <image
            class="img"
            src="https://static.maxcang.com/appstatic/my/available_credits.png"
          ></image>
          <text class="text">能量积分</text>
          <div class="text number">{{ red_points }}</div>
        </view>
        // #ifndef MP-WEIXIN
        <view class="item" @click="toPointAccount">
          <image
            class="img"
            src="https://static.maxcang.com/appstatic/my/credits_account.png"
          ></image>
          <text class="text">积分账号</text>
          <div class="text number">{{ user ? obscureString(user) : "" }}</div>
        </view>
        // #endif
      </view>
      <view class="collect_box flex_between">
        <view class="collect_item flex_between" @click="toCollect">
          <view class="flex">
            <image
              src="https://static.maxcang.com/appstatic/my/collect-orange.png"
              mode="widthFix"
              class="collect_pic"
            ></image>
            <view class=""> 我的收藏 </view>
          </view>
          <image
            src="https://static.maxcang.com/appstatic/arrow-right.png"
            mode="widthFix"
            class="arrow_pic"
          ></image>
        </view>
        <view class="collect_item flex_between" @click="toBrowseRecord">
          <view class="flex">
            <image
              src="https://static.maxcang.com/appstatic/my/view-record.png"
              mode="widthFix"
              class="collect_pic"
            ></image>
            <view class=""> 浏览记录 </view>
          </view>
          <image
            src="https://static.maxcang.com/appstatic/arrow-right.png"
            mode="widthFix"
            class="arrow_pic"
          ></image>
        </view>
      </view>
      <view class="services">
        <view class="service_title flex">
          <image
            src="https://static.maxcang.com/appstatic/star.png"
            mode="widthFix"
            class="star_pic"
          ></image>
          <view class=""> 我的服务 </view>
        </view>
        <view class="service_bottom flex">
          <view class="service_item" @click="toEdteInfo">
            <image
              src="https://static.maxcang.com/appstatic/my/info.png"
              mode="widthFix"
              class="service_pic"
            ></image>
            <view class=""> 个人信息 </view>
          </view>
          <view class="service_item" @click="toRecord">
            <image
              src="https://static.maxcang.com/appstatic/my/record.png"
              mode="widthFix"
              class="service_pic"
            ></image>
            <view class=""> 我的记录 </view>
          </view>
          <view class="service_item" @click="toSafety">
            <image
              src="https://static.maxcang.com/appstatic/my/safety_password.jpg"
              mode="widthFix"
              class="service_pic"
            ></image>
            <view class=""> 密码安全 </view>
          </view>
          <view class="service_item" @click="toPointCode">
            <image
              src="https://static.maxcang.com/appstatic/my/qrcode.png"
              mode="widthFix"
              class="service_pic"
            ></image>
            <view class=""> 积分码 </view>
          </view>
          <!-- 	<view class="service_item" @click="toPointsRedemptionVoucher">
							<image src="https://static.maxcang.com/appstatic/my/exchange_voucher.jpg" mode="widthFix" class="service_pic"></image>
							<view class="">
								积分兑换券
							</view>
					</view> -->
          <!-- 	<view class="service_item">
						<image src="https://static.maxcang.com/appstatic/my/collect.png" mode="widthFix" class="service_pic"></image>
						<view class="">
							我的收藏
						</view>
					</view> -->
        </view>
      </view>
      <view class="services" v-if="token||showShopPage">
        <view class="service_title flex">
          <image
            src="https://static.maxcang.com/appstatic/star.png"
            mode="widthFix"
            class="star_pic"
          ></image>
          <view class="" > 满仓生态 </view>
        </view>
        <view class="service_bottom flex">
          <view class="service_item" @click="toMerchant" v-if="showShopPage">
            <image
              src="@/static/merchant.png"
              mode="widthFix"
              class="service_pic"
            ></image>
            <view class=""> {{userInfo?.is_seller?'商家':'加入商家'}} </view>
          </view>
		  <view class="service_item" @click="toRecommend">
		    <image
		      src="@/static/recomand.png"
		      mode="widthFix"
		      class="service_pic"
		    ></image>
		    <view class=""> 推荐官 </view>
		  </view>
          <view class="service_item" @click="toAgent">
            <image
              src="@/static/agency.png"
              mode="widthFix"
              class="service_pic"
            ></image>
            <view class=""> 代理 </view>
          </view>
       
        </view>
      </view>
      <view class="services">
        <view class="service_title flex">
          <image
            src="https://static.maxcang.com/appstatic/star.png"
            mode="widthFix"
            class="star_pic"
          ></image>
          <view class=""> 平台服务 </view>
        </view>
        <view class="service_bottom flex">
          <view class="service_item" @click="toHelpCenter">
            <image
              src="https://static.maxcang.com/appstatic/my/help.png"
              mode="widthFix"
              class="service_pic"
            ></image>
            <view class=""> 帮助中心 </view>
          </view>
          <view class="service_item" @click="toAboutUs">
            <image
              src="https://static.maxcang.com/appstatic/my/us.png"
              mode="widthFix"
              class="service_pic"
            ></image>
            <view class=""> 关于我们 </view>
          </view>
          <view class="service_item" @click="toService">
            <image
              src="https://static.maxcang.com/appstatic/my/service.png"
              mode="widthFix"
              class="service_pic"
            ></image>
            <view class=""> 联系客服 </view>
          </view>
		  <view class="service_item" @click="toApi"  v-if="api_auth">
		    <image
		      src="https://static.maxcang.com/appstatic/my/update_log.png"
		      mode="widthFix"
		      class="service_pic"
		    ></image>
		    <view class=""> Api调用 </view>
		  </view>
          <!-- <view class="service_item" @click="toUpdateLog">
						<image src="https://static.maxcang.com/appstatic/my/update_log.png" mode="widthFix" class="service_pic"></image>
						<view class="">
							更新日志
						</view>
					</view> -->
        </view>
        
      </view>
    </view>
    // #ifndef MP-WEIXIN
    <view class="vesion"> 满仓 V{{ version }} </view>
    // #endif

    <uni-popup ref="contactPop" borderRadius="30rpx" background-color="#fff">
      <view class="step_pop">
        <view class="title"> 联系客服 </view>
        <view class="top_content flex_center">
          <view class=""> 3833194083 </view>
          <image
            src="https://static.maxcang.com/appstatic/copy.png"
            mode="widthFix"
            class="copy_pic"
            @click="copy"
          ></image>
        </view>
        <view class="desc"> 更多问题请联系满仓客服QQ </view>
        <view class="btn_plain" @click="closeContactPop"> 确定 </view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAllPoint, getPointBindedAccount } from "@/service/point.js";
import { getRecommendOfficerInfo } from "@/service/recommend";
import { useUserStore } from "../../store/user";
import { obscureString, obscurePhoneNumber } from "@/utils";
import { onShow,onLoad } from "@dcloudio/uni-app";
const userStore = useUserStore();
const phoneNumber = ref("");
const accessToken = uni.getStorageSync("accessToken");
const ionc_url = ref();
const user_name = ref();
const version = ref("");
const api_auth = ref(0);
const shopInfo = ref({});
let token = ref('');
const userInfo = uni.getStorageSync("userInfo");
const showShopPage = ref(false);

onLoad((e)=>{
  if(e.recommand){
    showShopPage.value = true;
  }
});

onShow(() => {
	console.log('--------====',userInfo?.is_seller)
  token.value = uni.getStorageSync("accessToken");
  phoneNumber.value = uni.getStorageSync("phoneNumber");
  ionc_url.value = uni.getStorageSync("userInfo").icon;
  user_name.value = uni.getStorageSync("userInfo").name;
  api_auth.value = uni.getStorageSync("userInfo").is_api;
  if (accessToken) {
    getPointInfo();
  }
  
  shopInfo.value =  uni.getStorageSync("shopInfo");
  if(showShopPage.value&&shopInfo.value.merchant){
    showShopPage.value = true;
  }

  

  // #ifdef APP-PLUS
  version.value = plus.runtime.version;
  // #endif
});

const toMerchant = async () => {
  // #ifdef MP-WEIXIN
  if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  // #endif

  userInfo.value = await uni.getStorageSync("userInfo");
  if (
    !userInfo?.value.name ||
    !userInfo?.value.gender ||
    !userInfo?.value.icon ||
    !userInfo?.value.birthdate ||
    !userInfo?.value.residence
  ) {
    
    let modelRes = await uni.showModal({
      title:"提示",
      content:'请先完善头像、昵称与地址才可申请相关服务'
    })

    if(modelRes.confirm){
      uni.navigateTo({
        url: "/pages/login/more_info_edit",
      });
      
    }
    return;
    
  }

  shopInfo.value = await uni.getStorageSync("shopInfo");
  const phoneNumber = uni.getStorageSync("phoneNumber");
  console.log(
    "点击商家前获得的数据",
    userInfo.value?.is_seller,
    shopInfo.value.state
  );
  /*  */
  console.log("进入商家前的用户信息", userInfo.value);
  console.log("进入商家前的店铺信息", shopInfo.value);
  //0 正在审核 1审核通过  -1审核不通过
  if (userInfo.value?.is_seller && shopInfo.value.state > 0) {
    // 店铺已过审核
    await uni.setStorageSync("prePageIsHome", true);
    uni.navigateTo({
      url: "/pages/merchant/merchant_management",
    });
  } else if (!userInfo.value?.is_seller) {
    //还没成为商家
    uni.navigateTo({
      url: "/pages/merchant/merchant_intro",
    });
  } else if (userInfo.value?.is_seller && !userInfo.value?.is_shop) {
    //是商家 首次开通店铺
    uni.navigateTo({
      url: "/pages/merchant/before_create_shop",
    });
  } else if (userInfo.value?.is_seller && shopInfo.value.state == -1) {
    //是商家 审核不通过
    uni.navigateTo({
      url: "/pages/merchant/fail_create_shop",
    });
  } else if (userInfo.value?.is_seller && shopInfo.value?.state == 0) {
    //正在审核
    uni.navigateTo({
      url: "/pages/merchant/before_create_merchant",
    });
  }
};

const toAgent = async   () => {
  // #ifdef MP-WEIXIN
  if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  // #endif

  if (
    !userInfo?.name ||
    !userInfo?.gender ||
    !userInfo?.icon ||
    !userInfo?.birthdate ||
    !userInfo?.residence
  ) {
    let modelRes = await uni.showModal({
      title:"提示",
      content:'请先完善头像、昵称与地址才可申请相关服务'
    })

    if(modelRes.confirm){
      uni.navigateTo({
        url: "/pages/login/more_info_edit",
      });
    }
    return;
   
  }

  if (userInfo && (userInfo.is_province_agent || userInfo.is_city_agent)) {
    uni.navigateTo({
      url: "/pages/agent/agent_management",
    });
  } else {
    uni.navigateTo({
      url: "/pages/agent/agent_intro",
    });
  }
};

const toRecommend = async () => {
  if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }

  const userInfo = uni.getStorageSync("userInfo");
  if (
    !userInfo?.name ||
    !userInfo?.gender ||
    !userInfo?.icon ||
    !userInfo?.birthdate ||
    !userInfo?.residence
  ) {

    let modelRes = await uni.showModal({
      title:"提示",
      content:'请先完善头像、昵称与地址才可申请相关服务'
    })

    if(modelRes.confirm){
      uni.navigateTo({
        url: "/pages/login/more_info_edit",
      });
    }

    return;
    
  }
  try {
    const phoneNumber = uni.getStorageSync("phoneNumber");

    const data = await getRecommendOfficerInfo(phoneNumber);

    if (data?.is_approved && data?.is_visible) {
      uni.navigateTo({
        url: "/pages/recommend/recommend_management",
      });
    } else if (!data?.is_approved) {
      console.log("进入推荐官页面222", userInfo);
      uni.navigateTo({
        url: "/pages/recommend/before_create_recommend",
      });
    }
  } catch (e) {
    if (e.data?.detail) {
      uni.navigateTo({
        url: "/pages/recommend/recommend_intro",
      });
    }
  }
};

onMounted(()=>{

})
const green_points = ref(0);
const red_points = ref(0);
const user = ref("");
const getPointInfo = async () => {
  const res = await getAllPoint();
  // 我的积分
  green_points.value = res.green_points;
  // 可用积分
  red_points.value = res.red_points;
  // user.value = res.user
  const { points_account } = await getPointBindedAccount();
  user.value = points_account;
};
const toLogin = () => {
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



const toSafety = () => {
	if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  uni.navigateTo({
    url: "/pages/myAccount/safety",
  });
};

const toPointCode = () => {
	if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  uni.navigateTo({
    url: "/pages/myAccount/point_code",
  });
};

const toPointsRedemptionVoucher = () => {
  uni.navigateTo({
    url: "/pages/myAccount/exchange_point_coupon",
  });
};

const toHelpCenter = () => {
  uni.navigateTo({
    url: "/pages/myAccount/helpCenter",
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
  if (!token.value ) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  uni.navigateTo({
    url: "/pages/myAccount/point_available",
  });
};

const toEdteInfo = () => {
  if (!token.value) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  uni.navigateTo({
    url: "/pages/login/more_info_edit",
  });
};

const contactPop = ref();
const toService = () => {
  contactPop.value.open();
  // uni.showModal({
  // 	content:'官方QQ客服：3833194083',
  // 	confirmText:'复制',
  // 	confirmColor:'#FC5908',
  // 	success:(success)=>{
  // 		if(success.confirm){
  // 			uni.setClipboardData({data:'3833194083'
  // 			})

  // 		}
  // 	},
  // }
  // )
};
const closeContactPop = () => {
  contactPop.value.close();
};
const copy = () => {
  uni.setClipboardData({ data: "3833194083" });
};
const toUpdateLog = () => {
  uni.navigateTo({
    url: "/pages/myAccount/update_log",
  });
};
const toPointAccount = () => {
  if (!token.value ) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  uni.navigateTo({
    url: "/pages/myAccount/point_account",
  });
};
const toRecord = () => {
  if (!token.value ) {
    return uni.showToast({
      icon: "none",
      title: "请登录!",
    });
  }
  uni.navigateTo({
    url: "/pages/myAccount/all_records",
  });
};
const toAboutUs = () => {
  uni.navigateTo({
    url: "/pages/myAccount/about_us",
  });
};

const toApi = () => {
  uni.navigateTo({
    url: "/pages/myAccount/api",
  });
};

const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length === 11) {
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
      3,
      7
    )} ${phoneNumber.slice(7)}`;
  }
  return "Invalid phone number";
};

const isShowNumber = ref(false);

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
</script>

<style lang="scss">
.page {
  height: 100vh;
  width: 750rpx;

  .img-box {
    width: 750rpx;
    height: 300rpx;
   
    
    .img {
      width: 100%;
      height: 100%;
      // transform: translateY(-180rpx);
    }
  }

  .content {
    transform: translateY(-250rpx);
    padding: 0;
    margin: 0 32rpx;

    .profile {
      // width: 750rpx;
      display: flex;
      align-items: center;

      .avtar {
        width: 110rpx;
        height: 110rpx;
        border-radius: 50%;
        // background-color: blue;
        margin-right: 40rpx;
        margin-left: 20rpx;
        overflow: hidden;
        .img {
          width: 100%;
          height: 100%;
        }
      }

      .userInfo_box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 340rpx;
        height: 90rpx;
        .name {
          font-family: HarmonyOS_Sans_SC_Bold;
          font-size: 36rpx;
          color: #ffffff;
        }
        .phone_box {
          display: flex;
          justify-content: start;
          align-items: center;
          margin-left: -2rpx;
          .img {
            width: 30rpx;
            height: 30rpx;
            margin-right: 7rpx;
          }
          .number {
            font-size: 22rpx;
            color: #ffffff;
          }
        }
      }

      .logout {
        margin-right: 20rpx;
        // color: #54b1fd;
        padding: 12rpx 20rpx;
        color: #fc5908;
        font-size: 21rpx;
        background-color: #fff;
        border-radius: 100px;
      }
    }

    .points-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 684rpx;
      height: 270rpx;
      margin-top: 35rpx;
      background-image: url("https://file.shabiimage.com/appstatic/my/bg_credit.png");
      background-size: cover;
      padding: 0 10rpx;

      .item {
        flex: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .img {
          height: 75rpx;
          width: 75rpx;
        }

        .text {
          width: 100%;
          font-family: HarmonyOS_Sans_SC;
          margin-top: 15rpx;
          font-size: 24rpx;
          color: #333333;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .number {
          font-family: HarmonyOS_Sans_SC;
          font-size: 18rpx;
          color: #888888;
          text-align: center;
        }
      }
    }
    .collect_box {
      font-size: 24rpx;
      .collect_item {
        padding: 30rpx;
        margin-top: 30rpx;
        margin-right: 30rpx;
        background-color: #fff;
        border-radius: 20rpx;
        flex: 1;
        &:last-child {
          margin-right: 0;
        }
        .collect_pic {
          width: 34rpx;
          margin-right: 14rpx;
        }
        .arrow_pic {
          width: 10rpx;
        }
      }
    }
    .services {
      background-color: #ffffff;
      box-shadow: 1rpx 0rpx 15rpx 0rpx #f8f8f8;
      border-radius: 20rpx;
      padding: 20rpx;
      margin-top: 30rpx;
      .service_title {
        font-size: 27rpx;
        padding-left: 7rpx;
        border-bottom: 1px solid #dddddd;
        margin-bottom: 30rpx;
        padding-bottom: 20rpx;
        .star_pic {
          width: 40rpx;
          margin-right: 20rpx;
        }
      }
      .service_bottom {
        display: flex;
        // justify-content: space-around;
        align-items: center;
        .service_item {
          font-size: 21rpx;
          text-align: center;
          padding: 0 40rpx;
          &:last-child {
            padding-right: 0;
          }
          .service_pic {
            width: 84rpx;
            height: 84rpx;
            border-radius: 50%;
            margin-bottom: 16rpx;
          }
        }
      }
    }
  }
  .vesion {
    font-size: 24rpx;
    color: #ccc;
    text-align: center;
  }

  .step_pop {
    width: 566rpx;
    padding: 64rpx;
    text-align: center;
    .title {
      font-size: 36rpx;
      color: #fc5908;
      line-height: 28rpx;
      font-weight: bold;
      margin-bottom: 50rpx;
    }
    .top_content {
      font-size: 42rpx;
      // line-height: 28rpx;
      margin-bottom: 58rpx;
      .copy_pic {
        width: 27rpx;
        margin-left: 10rpx;
      }
    }
    .desc {
      font-size: 28rpx;
      margin-bottom: 64rpx;
    }
    .btn_plain {
      width: 340rpx;
    }
  }
}
</style>
