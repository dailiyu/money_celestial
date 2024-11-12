<template>
  <view :style="{'padding-top': 'calc('+statusBarHeight+' + '+'60rpx)', 'backgroundColor': bgc}" class="nav_bar">
    <view class="nav_item">
      <uni-icons type="left" size="20" color="#fff" @click="back" v-if="iconShow"></uni-icons>
      <view class="">
        {{ title }}
      </view>
      <view class="skip" v-if="isSkip" @click="clickRight">
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted} from 'vue';

// 定义 props
const props = defineProps({
  title: {
    type: String
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
  },
  isToHome: {
    type: Boolean,
    default: false
  }
});

// 定义 emits
const emit = defineEmits(['clickRight']);

// 使用 ref 管理状态
const statusBarHeight = ref('');

// 组件挂载后获取状态栏高度
onMounted(() => {
  statusBarHeight.value = uni.getWindowInfo().statusBarHeight + 'px';
});

// 方法
const back = () => {

	if(!props.isToHome){
		 uni.navigateBack();
	}else{
		uni.navigateTo({
			url:'/pages/index/index'
		})
	}

 
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
	.nav_item {
		position: relative;
		// #ifndef MP-WEIXIN
		.uni-icons {
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
		// #endif
		// #ifdef MP-WEIXIN
		uni-icons {
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
		// #endif
		.skip {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 24rpx;
		}
	}
}
</style>