<template>
  <view :style="navBarStyle" class="nav_bar">
    <view class="nav_item">
	 <view class="picker-box">
	 	<uni-data-picker
							v-model="curPosition"
	 				      :localdata="cityData"
	 				      :value="selectedValues"
	 					  :clear-icon='false'
	 				      mode="region"
	 				      @change="onChange"
	 				      popup-title="请选择所在地区"
	 				    >
		</uni-data-picker>
	 </view>
      <view class="name">{{ title }}</view>
	  <view class="select-box">
		  <uni-data-select
		         v-model="selectItem"
		         :localdata="candidates"
		         @change="change"
		  			 placeholder="+"
		  			 :clear='false'
		  			 class="select"
					 :isCustom="true"
		       ></uni-data-select>
			 
	  </view>
	  

    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import cityDataJson from "@/static/cityData.json"

// 定义发射自定义事件
const emit = defineEmits(['clickRight','changeCity','mask']);
const candidates=ref([
          { value: 0, text: "扫一扫" },
          { value: 1, text: "接收码" },
        ])

const selectItem=ref()
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


const scanCode = async () => {
  uni.scanCode({
    onlyFromCamera: true, // 只允许从摄像头扫码
    success: async (res) => {
      if (res.result) { // 判断是否有有效的扫描结果
        console.log('扫码结果: ', res.result);
        uni.navigateTo({
          url: '/pages/merchant/point_gift?phone=' + res.result
        });
      } else {
        console.warn('未扫描到有效的二维码');
        uni.showToast({
          title: '未扫描到有效的二维码',
          icon: 'none'
        });
      }
    },
    fail: (err) => {
      console.error('扫码失败: ', err);
      uni.showToast({
        title: '扫码失败',
        icon: 'none'
      });
    }
  });
};


const change=(e)=> {
       if(e==1){
		   emit('mask',true)
	   }else{
		    emit('mask',false)
			scanCode()
	   }
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

.nav_item{
	position: relative;
	
	.select-box{
		position: absolute;
		right: 0;
		top: 4rpx;
		.select{
			
		}
		
	}
	
	.name{
		// transform: translateX(-90rpx);
	}
	.picker-box{
		position: absolute;
		left: 0;
		width: 200rpx;
		height: 50rpx;
		// float: left;
		line-height: 1.5625rem;
		::v-deep .input-value .text-color {
		  color: #fff;
		  font-size: 20rpx;
		   border: none;
		}
		:deep(.arrow-area){
			display: none;
		}
		:deep(.input-value) {
			padding: 0;
			line-height: unset;
			height: auto;
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
	
	:deep(.uni-select__selector){
		color: #000;
		width: 140rpx;
	}
	:deep(.uni-stat__select){
		// width: 30rpx;
		// height: 100rpx;
		
	}
	:deep(.uni-icons ){
		display: none;
		
	}
	:deep(.uni-select){
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		padding: 0;
		align-items: center;
		justify-content: center;
	}
	:deep(.uni-stat__actived ){
		
		width: 120rpx;
	}
	:deep(.uni-select__input-box){
		// margin-right: 10rpx;
		// margin-bottom: 5rpx;
		
	}
	:deep(.uni-select__input-text){
		color: #fff;
	}
	:deep(.uni-select__input-placeholder){
		font-size: 40rpx;
	}
}


</style>
