<template>
	<view>
		<navBar title="全部商铺"></navBar>
		<view class="filter_list flex_between">
			<view class="flex_center" style="flex: 1;">
				<!-- <image src="https://static.maxcang.com/appstatic/category.png" mode="widthFix" class="type_pic"></image>
				<view>
					类目
				</view> -->
				<view class="" style="flex: 1;text-align: right;">
					<image src="https://static.maxcang.com/appstatic/category.png" mode="widthFix" class="type_pic"></image>
				</view>
				<uni-data-select v-model="category" :localdata="range" placeholder="类目" :clear="false"
					@change="changeRange"></uni-data-select>
			</view>
			<view style="flex: 1; text-align: center;">
				热门
			</view>
			<view style="flex: 1; text-align: center;">
				好评
			</view>
			<!-- <view class="flex_center">
				<view class="">
					距离
				</view>
				<view class="" @click="distance='asc'" v-if="distance=='desc'">
					<image src="https://static.maxcang.com/appstatic/arrow-active.png" mode="widthFix" class="arrow_fill"></image>
					<image src="https://static.maxcang.com/appstatic/arrow-inactive.png" mode="widthFix" class="arrow_fill"></image>
				</view>
				<view class="" @click="distance='desc'" v-if="distance=='asc'">
					<image src="https://static.maxcang.com/appstatic/arrow-inactive.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
					<image src="https://static.maxcang.com/appstatic/arrow-active.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
				</view>
			</view> -->
		</view>
		<view class="content">
			<view class="settle_box flex_between" v-if="rollingMerchantsList">
				<view class="c_text"  >
					<text>
						恭喜【<text class="company">{{ rollingMerchantsList.name }}</text>】成功入驻
					</text>
				</view>
				<!-- <view class="s_text" @click="toSettle">
					我要入驻
				</view> -->
			</view>
			<shopList :list="shopLists"></shopList>
		</view>
		<view class="load-more" @click="loadMore"  v-if="hasNext">
			加载更多...
		</view>
	</view>
</template>

<script setup>
import { onMounted,onUnmounted, ref } from 'vue';
import { getShopList } from '@/service/shop';
import { getShopCategories, getCityShopList } from '@/service/shop.js';
import { onLoad } from '@dcloudio/uni-app'
import { updatedShopData } from '@/utils/distanceSorting';
const categoryId = ref('');
const range = ref([]);
const curPage = ref(1);
const hasNext = ref(false);
const shopLists = ref([])
const rollingMerchantsList = ref(null);
let interval = null;

onLoad((options) => {
   categoryId.value = options.id == 0 ? '' : options.id;
    category.value =Number(categoryId.value);
  console.log('接收到的参数:',options.id );
  
});


onMounted(async () => {
  // 类目
  const { results } = await getShopCategories();
  const dealData = results.map(i => ({
    text: i.name,
    value: i.id,
    disable: false,
  }));

  range.value = [{ text: "全部", value: '', disable: false }, ...dealData];
  await getList();
  startRolling()
});

onUnmounted(() => {
	stopRolling
});




// 独立的启动定时器函数
const startRolling = () => {
  if (interval) clearInterval(interval); // 确保没有重复定时器
  interval = setInterval(() => {
    if (shopLists.value.length > 0) {
      // 如果不足10个，取全部；否则取前10个
      const availableList = shopLists.value.length <= 10
        ? shopLists.value
        : shopLists.value.slice(0, 10);
      // 随机选取一个
      rollingMerchantsList.value = availableList[Math.floor(Math.random() * availableList.length)];
    }
  }, 3000); // 每隔3秒
};

// 独立的停止定时器函数
const stopRolling = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};


const getList = async()=>{
	const city=uni.getStorageSync('city')
	const params = ref({
		category: categoryId.value,
		name:city,
		page:curPage.value
	})
	uni.showLoading({
		title: '加载中'
	})
	const {results,next} = await getCityShopList(params.value)
	// #ifdef MP-WEIXIN
	const currentLocation = uni.getStorageSync('currentLocation')
	const sortRes = await updatedShopData(results)
	shopLists.value.push(...sortRes)
	// #endif
	
	// #ifndef MP-WEIXIN
	shopLists.value.push(...results)
	// #endif
	
	if(!!next){
		hasNext.value=true
		curPage.value=curPage.value+1
	}else{
		hasNext.value=false
	}
	
	uni.hideLoading()
}

const toSettle = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_intro'
	})
}

const category = ref('')
const changeRange = (e) => {
	curPage.value = 1;
	categoryId.value = e
	shopLists.value = []
	getList()
	
}


const loadMore=async()=>{
	await getList()
}

</script>

<style lang="scss" scoped>
.filter_list {
	font-size: 30rpx;
	padding: 35rpx;
	background-color: #fff;
	.type_pic {
		width: 26rpx;
		margin-right: 20rpx;
	}
	.arrow_fill {
		width: 20rpx;
		height: 10rpx;
		display: block;
		margin-left: 10rpx;
		&:last-child {
			margin-top: 6rpx;
		}
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
		font-size: 30rpx;
		color: #333;
	}
	
	:deep(.uni-select__input-text) {
		width: fit-content;
		font-size: 30rpx;
		color: #333;
	}
	:deep(.uni-select__selector){
		width: 200%;
	}
}
.settle_box {
	padding: 24rpx 32rpx 24rpx 46rpx;
	background-color: #fff;
	margin-bottom: 20rpx;
	.c_text {
		font-size: 24rpx;
		font-weight: bold;
		.company {
			color: #fc5908;
		}
	}
	.s_text {
		padding: 10rpx 20rpx;
		background-color: #fc5908;
		font-size: 21rpx;
		color: #FFFFFF;
		border-radius: 100px;
	}
}
.load-more{
	width: 750rpx;
	text-align: center;
}
</style>
