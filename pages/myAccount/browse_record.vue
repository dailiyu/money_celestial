<template>
	<view>
		<navBar title="浏览记录"></navBar>
		<view class="filter_list">
			<view class="flex_center" style="flex: 1;">
				<view class="" style="flex: 1;text-align: right;">
					<image src="https://static.maxcang.com/appstatic/category.png" mode="widthFix" class="type_pic"></image>
				</view>
				<uni-data-select v-model="category" :localdata="range" placeholder="类目" :clear="false"
					@change="changeRange"></uni-data-select>
			</view>
			<view class="flex_center" style="flex: 1;">
				<view class="" :style="{'color': time?'#FC5908':'#000'}">
					赠送比例
				</view>
				<view class="" @click="filterTime('shop__consume2coin_bit')" v-if="!time">
					<image src="https://static.maxcang.com/appstatic/arrow-inactive.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
					<image src="https://static.maxcang.com/appstatic/arrow-inactive.png" mode="widthFix" class="arrow_fill"></image>
				</view>
				<view class="" @click="filterTime('-shop__consume2coin_bit')" v-if="time=='shop__consume2coin_bit'">
					<image src="https://static.maxcang.com/appstatic/arrow-active.png" mode="widthFix" class="arrow_fill"></image>
					<image src="https://static.maxcang.com/appstatic/arrow-inactive.png" mode="widthFix" class="arrow_fill"></image>
				</view>
				<view class="" @click="filterTime('')" v-if="time=='-shop__consume2coin_bit'">
					<image src="https://static.maxcang.com/appstatic/arrow-inactive.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
					<image src="https://static.maxcang.com/appstatic/arrow-active.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
				</view>
			</view>
		</view>
		<view class="content">
			<swipeShopList :list="shopList" @delete="del" iconSrc="https://static.maxcang.com/appstatic/my/delete.png"></swipeShopList>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { browserShopsList, browserShopDelete } from '@/service/uer_profile.js'
import { getShopCategories } from '@/service/shop.js'
import { calculateDistances } from "@/utils/distanceSorting.js"
import { favoriteShopsDelete } from '@/service/uer_profile.js'
import { onReachBottom } from '@dcloudio/uni-app'

const toSettle = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_intro'
	})
}


const range = ref([])
onMounted(async()=>{
	getShopList()
	// 类目
	const {results} = await getShopCategories()
	const dealData = results.map(i=>{
		return {
			text: i.name,
			value: i.id,
			disable: false
		}
	})
	range.value = [{ text: "全部", value: '', disable: false }, ...dealData];
	
})

const time = ref('')
const categoryId = ref('')
const shopList = ref([])
const count = ref(0)
const {location} = uni.getStorageSync('address_info')
const getShopList = async()=>{
	const params = ref({
		// ordering: time.value,	
		categories: categoryId.value
	})
	uni.showLoading({
		title: '加载中',
		mask: true
	})
	try {
		const res = await browserShopsList(categoryId.value,time.value)
		// console.log(res)
		shopList.value = [...shopList.value, ...res.results]
		count.value = res.count
		// const locaList = results.map(shop => ({ latitude: shop.latitude, longitude: shop.longitude }))
		// shopList.value = await calculateDistances({latitude: location.lat, longitude: location.lng}, locaList)
		uni.hideLoading()
	} catch (error) {
		console.log(error)
	}
	
}
const filterTime = (i)=>{
	time.value = i
	shopList.value = []
	getShopList()
}
const category = ref('')
const changeRange = (e) => {
	categoryId.value = e
	shopList.value = []
	getShopList()
}
const del = async(item)=>{
	try {
		uni.showLoading({
			mask: true
		})
		await browserShopDelete(item.id)
		uni.hideLoading()
		getShopList()
		shopList.value = []
		uni.showToast({
			title: '取消收藏',
			icon: 'none'
		})
	} catch (e) {
		uni.showToast({
			title: e.data.detail,
			icon: 'none'
		})
	}
}
onReachBottom(() => {
  if (count.value > shopList.value.length) {
	  page++
	  shopList.value = []
	  getShopList()
  }
})
</script>

<style lang="scss" scoped>
.filter_list {
	font-size: 30rpx;
	padding: 35rpx;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-around;
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
}

</style>
