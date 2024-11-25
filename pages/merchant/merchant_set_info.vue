<template>
  <view>
    <navBar title="店铺开通"></navBar>
    <view class="content">
      <view class="shop_info">
        <view class="info_item flex_between">
          <view class="s_title"> 店铺名称 </view>
          <input
            v-model="shopName"
            class="uni-input"
            placeholder="请输入商家名称"
            placeholder-class="placeholder_class"
          />
        </view>
        <view class="info_item flex_between">
          <view class="s_title"> 经营范围 </view>
          <!-- <input v-model="businessRange" class="uni-input" placeholder="请输入商家经营的产品或业务" placeholder-class="placeholder_class" /> -->
          <uni-data-select
            v-model="businessRange"
            :localdata="range"
            placeholder="请选择"
            :clear="false"
            @change="changeRange"
          ></uni-data-select>
        </view>
        <view class="info_item flex_between">
          <view class="s_title"> 联系方式 </view>
          <input
            v-model="phone_number"
            class="uni-input"
            placeholder="请输入联系手机号"
            placeholder-class="placeholder_class"
          />
        </view>
        <view class="info_item flex_between" style="justify-content: start">
          <view class="s_title"> 营业时间 </view>
          <view class="picker-box">
            <picker
              class="time-picker"
              @change="changeStartTime"
              mode="time"
              :style="{ color: start_time == '00:00' ? '#999' : '#333' }"
              >{{ start_time || "开店时间" }}</picker
            >一
            <picker
              class="time-picker"
              @change="changeEndTime"
              mode="time"
              :style="{ color: end_time == '00:00' ? '#999' : '#333' }"
              >{{ end_time || "关店时间" }}</picker
            >
          </view>
        </view>
        <view class="info_item flex_between" style="flex: 1">
          <view class="s_title" style="margin-right: 45rpx"> 所在地 </view>
          <uni-data-picker
            :localdata="cityData"
            :clear-icon="false"
            v-model="curData"
            mode="region"
            @change="onChange"
            title="请选择省市"
          ></uni-data-picker>
        </view>
        <view class="info_item flex_between">
          <view class="s_title"> 具体位置 </view>
          <input
            v-model="address"
            class="uni-input"
            placeholder="请输入店铺具体地址"
            placeholder-class="placeholder_class"
          />
          // #ifdef MP-WEIXIN
          <image
            src="https://static.maxcang.com/appstatic/locate_orange.png"
            mode="widthFix"
            class="lo_pic"
            @click="getLocation"
          ></image>
          // #endif
        </view>
      </view>
      <view class="radio" @click="changeCheck">
        <radio
          value="r1"
          :checked="isChecked"
          color="#FC5908"
          @click="changeCheck"
        />
        <text class="read">我已阅读并同意</text>
        <text class="c_title" @click.stop="toAgreement">《商家入驻须知》</text>
      </view>
      <view class="btn_full" @click="merchantSettleIn"> 下一步 </view>
    </view>
  </view>
  <!-- <web-view id="mapPage" width="100%" height="100%" frameborder=0
	    src="/static/html/location.html">
	</web-view> -->
</template>

<script setup>
import { computed, ref } from "vue";
import {
  postBindingStoreCategory,
  uploadMerchantBanner,
  uploadMerchantDetail,
} from "../../service/merchant";
import { useUserStore } from "../../store/user";
import { postMerchantSettleIn, uploadShopImg } from "../../service/shop";
import { getCitiesDetail } from "../../service/divisions";

import { usePublicStore } from "@/store/public.js";

import cityDataJson from "../../static/cityData.json";
import { onLoad } from "@dcloudio/uni-app";

function clear(e) {
  console.log(e);
}
const referral_officer = ref("");
onLoad((options) => {
  referral_officer.value = options.referral_officer;
  // // 在 onLoad 或 setup 中添加监听器
});
const publicStore = usePublicStore();
const userStore = useUserStore();
const shopIntro = ref("");
const phone_number = ref("");
const shopName = ref("");
const businessRange = ref("");
const code = ref("");
const end_time = ref("22:00");
const start_time = ref("10:00");
const curData = ref();
const temBannerImgPaths = ref([]);
const temProfileImgPaths = ref([]);
const temDetailImgPaths = ref([]);
// const range = ref([
//     { value: "篮球", text: "篮球" },
//     { value: "足球", text: "足球" },
//     { value: "游泳", text: "游泳" },
// ])

const range = computed(() => {
  return publicStore.cateGoryList.map((item) => {
    return {
      value: item.id, // value 为 id
      text: item.name, // text 为 name
    };
  });
});

// 绑定选择的值
const selectedValues = ref([]);

// 绑定省市名显示
const selectedProvince = ref("");
const selectedCity = ref("");

// 省市数据
const cityData = ref(cityDataJson);

// 当选择器值变化时，处理选中的省和市

const onChange = (e) => {
  const selected = e.detail.value;
  const province = cityData.value.find((item) => item.value === selected[0]);
  const city = province?.children?.find((item) => item.value === selected[1]);

  // 保存选择的省市名
  selectedProvince.value = e.detail.value[0].text || "";
  selectedCity.value = e.detail.value[1].text || "";
  // 保存选中的省市值
  console.log(selectedProvince.value, selectedCity.value);
};

const extractProvinceAndCity = (address) => {
  // 匹配全国的省、自治区、特别行政区、市、地区、自治州、盟、县、自治县、旗、自治旗
  const regex =
    /(.*?(省|自治区|特别行政区))?(.*?(市|地区|自治州|盟|县|自治县|旗|自治旗))/;
  const match = address.match(regex);

  if (match) {
    let province = match[1] || ""; // 提取省、自治区、特别行政区
    let city = match[3] || ""; // 提取市、地区、自治州、盟、县、自治县等

    // 特殊处理直辖市
    const directCities = ["北京市", "上海市", "天津市", "重庆市"];
    if (directCities.includes(city)) {
      province = city; // 直辖市的省和市相同
    }

    return { province: province.trim(), city: city.trim() };
  }

  return { province: "", city: "" }; // 如果无法匹配，返回空值
};

const isChecked = ref(false);
const changeCheck = () => {
  isChecked.value = !isChecked.value;
  // console.log(isChecked.value);
};

const changeRange = (e) => {
  businessRange.value = e;
  console.log(e);
};

const changeStartTime = (event) => {
  start_time.value = event.detail.value;
};

const changeEndTime = (event) => {
  end_time.value = event.detail.value;
};

const findValueByText = (text) => {
  for (const province of cityDataJson) {
    for (const city of province.children) {
      if (city.text === text) {
        return city.value;
      }
    }
  }
  return null;
};

const lat = ref("");
const lon = ref("");
const address = ref("");
const getLocation = () => {
  uni.chooseLocation({
    success(res) {
      lat.value = res.latitude;
      lon.value = res.longitude;
      address.value = res.address + res.name;
      const addressObj = extractProvinceAndCity(res.address);
      selectedProvince.value = addressObj.province || "";
      selectedCity.value = addressObj.city || "";
      curData.value = findValueByText( selectedCity.value);
    },
  });
};

const merchantSettleIn = async () => {
  if (!isChecked.value)
    return uni.showToast({
      icon: "none",
      title: "请阅读完须知后勾选同意",
    });

  //检查是否有任意一个值为空
  if (
    !shopName.value ||
    !address.value ||
    !selectedCity.value ||
    !businessRange.value ||
    !end_time.value ||
    !start_time.value ||
    !phone_number.value
  ) {
    return uni.showToast({
      icon: "none",
      title: "请填入完整信息",
    });
  }
  try {
    // uni.showLoading({
    // 	title: "正在入驻中...",
    // })
    const phoneNumber = uni.getStorageSync("phoneNumber");
    console.log(phoneNumber, 1111);
    await uni.setStorageSync("shopParams", {
      merchant: phoneNumber,
      categories: [businessRange.value],
      city: selectedCity.value,
      name: shopName.value,
      address: address.value,
      business_time1: start_time.value,
      business_time2: end_time.value,
      tel: phone_number.value,
    });
    uni.navigateTo({
      url: "/pages/merchant/shop_profile",
    });
    //  const res= await postMerchantSettleIn({merchant:phoneNumber,categories:[businessRange.value],city:selectedCity.value,name:shopName.value,address:address.value})
    // console.log('入驻接口返回的信息',res);

    // await userStore.fetchAllDataAction()
    // uni.hideLoading()
    // uni.showToast({
    // 	title: "入驻成功",
    // 	duration: 600,
    // 	icon: 'success'
    // })

    // setTimeout(() => {
    // 	uni.redirectTo({
    // 		url: '/pages/merchant/shop_profile'
    // 	})
    // }, 700)
  } catch (e) {
    console.log(e);
    uni.showToast({
      title: "出现错误",
      duration: 1000,
      icon: "error",
    });
    //TODO handle the exception
  }
};
const toAgreement = () => {
  uni.navigateTo({
    url: "/pages/merchant/merchant_settle_agreement",
  });
};
</script>

<style lang="scss" scoped>
.shop_info {
  padding: 0 26rpx;
  background-color: #fff;

  .info_item {
    padding: 40rpx 8rpx 40rpx 0;
    border-bottom: 1px solid #e3e3e3;
    .picker-box {
      display: flex;
      align-items: center;
      width: 400rpx;
      .time-picker {
        padding: 0 40rpx;
        display: flex;
        font-size: 24rpx;
        color: #000;
        &:first-child {
          padding-left: 0;
        }
      }
    }
    :deep(.uni-data-tree) {
      flex: 1;
      width: 520rpx;
    }

    &:last-child {
      border-bottom: none;
    }

    .s_title {
      font-size: 27rpx;
      margin-right: 40rpx;
    }

    .uni-input {
      flex: 1;
      margin-right: 10rpx;
    }

    :deep(.placeholder_class) {
      font-size: 24rpx;
      color: #aaaaaa;
    }

    .validate_code {
      padding: 22rpx 26rpx;
      background-color: #fc5908;
      color: #fff;
      border-radius: 7rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24rpx;
    }

    .lo_pic {
      width: 26rpx;
    }

    uni-data-select {
      flex: 1;
    }

    :deep(.uni-select) {
      padding: 0;
      border: none;
    }

    :deep(.uni-select__input-box) {
      height: fit-content;
      justify-content: flex-start;
    }

    :deep(.uni-select__input-placeholder) {
      font-size: 24rpx;
      color: #999999;
    }

    :deep(.uni-select__input-text) {
      width: fit-content;
      font-size: 24rpx;
      color: #333;
    }
    :deep(.uni-select__input-placeholder) {
      color: #999999;
    }
  }
}

.btn_full {
  margin-top: 66rpx;
}

.radio {
  text-align: center;
  padding: 26rpx 0 38rpx;

  radio {
    transform: scale(0.6);
  }

  .read {
    font-size: 27rpx;
    color: #999999;
  }

  .c_title {
    font-size: 27rpx;
    color: #fc5908;
    font-family: HarmonyOS_Sans_SC_Medium;
  }
}
</style>
