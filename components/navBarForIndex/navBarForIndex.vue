<template>
  <view :style="navBarStyle" class="nav_bar">
    <view class="nav_item">
      <uni-icons type="left" size="20" color="#fff" @click="back" v-if="iconShow"></uni-icons>
	 <view class="picker-box">
	 	<uni-data-picker
							v-model="curPosition"
	 				      :localdata="cityData"
	 				      :value="selectedValues"
	 					  :clear-icon='false'
	 				      mode="region"
	 				      @change="onChange"
	 				      popup-title="请选择所在地区"
	 				    ></uni-data-picker>
	 </view>
      <view class="name">{{ title }}</view>
      <view class="skip" v-if="isSkip">
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import cityDataJson from "@/static/cityData.json"
// 定义组件的 props
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  iconShow: {
    type: Boolean,
    default: true
  },
  bgc: {
    type: String,
    default: '#FC5908'
  },
  isShow: {
    type: Boolean,
    default: false
  },
  isSkip: {
    type: Boolean,
    default: false
  }
});


onMounted(()=>{
	const city=uni.getStorageSync('city')
	curPosition.value=findValueByText(city)
})

const curPosition=ref('')
// 绑定选择的值
const selectedValues = ref([])

// 绑定省市名显示
const selectedProvince = ref('')
const selectedCity = ref('')

// 省市数据
const cityData = ref(cityDataJson)

// 当选择器值变化时，处理选中的省和市
const onChange = (e) => {
  const selected = e.detail.value
  const province = cityData.value.find(item => item.value === selected[0])
  const city = province?.children?.find(item => item.value === selected[1])

  // 保存选择的省市名
   selectedProvince.value = e.detail.value[0].text ||''
   selectedCity.value =  e.detail.value[1].text ||''
  // 保存选中的省市值
  // console.log( selectedProvince.value,selectedCity.value);
  emit('changeCity', {province:selectedProvince.value, city: selectedCity.value})
}


const findValueByText=(text)=> {
  for (const province of cityDataJson) {
	 
    for (const city of province.children) {
		
      if (city.text === text) {
        return city.value;
      }
    }
  }
  return null;
}


// 定义响应式变量
const statusBarHeight = ref('');

// 在组件挂载时获取状态栏高度
onMounted(() => {
  statusBarHeight.value = `${uni.getWindowInfo().statusBarHeight}px`;
});

// 计算导航栏样式
const navBarStyle = computed(() => ({
  paddingTop: `calc(${statusBarHeight.value} + 60rpx)`,
  backgroundColor: props.bgc
}));

// 定义返回按钮点击事件
const back = () => {
  uni.navigateBack();
};

// 定义发射自定义事件
const emit = defineEmits(['clickRight','changeCity']);
const clickRight = () => {
  emit('clickRight');
};
</script>

<style lang="scss" scoped>
.nav_bar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 990;
  background-color: #FC5908;
  color: #fff;
  padding-left: 58rpx;
  padding-right: 58rpx;
  padding-bottom: 60rpx;
  font-size: 36rpx;
  text-align: center;
}

.nav_item {
  position: relative;
 
}

.name{
	transform: translateX(-90rpx);
}
.picker-box{
	width: 200rpx;
	height: 50rpx;
	float: left;
::v-deep .input-value .text-color {
  color: #fff;
  font-size: 20rpx;
   border: none;
}

}
:deep(.input-value-border) {
	border: none;
}
:deep(.placeholder) {
	color: #fff;
}
:deep(.input-arrow) {
	border-color: #fff;
}
:deep(.selected-list){
	color: #000;
}
:deep(.input-split-line){
	color: #FC5908;
}
.uni-icons {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

uni-text{
	color: #000;
}

.skip {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24rpx;
}
</style>
