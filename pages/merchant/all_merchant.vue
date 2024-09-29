<template>
	<view>
		<navBar title="全部商铺"></navBar>
		<view class="filter_list flex_between">
			<view class="flex_center" style="flex: 1;">
				<!-- <image src="@/static/category.png" mode="widthFix" class="type_pic"></image>
				<view>
					类目
				</view> -->
				<view class="" style="flex: 1;text-align: right;">
					<image src="@/static/category.png" mode="widthFix" class="type_pic"></image>
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
					<image src="@/static/arrow-active.png" mode="widthFix" class="arrow_fill"></image>
					<image src="@/static/arrow-inactive.png" mode="widthFix" class="arrow_fill"></image>
				</view>
				<view class="" @click="distance='desc'" v-if="distance=='asc'">
					<image src="@/static/arrow-inactive.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
					<image src="@/static/arrow-active.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
				</view>
			</view> -->
		</view>
		<view class="content">
		<!-- 	<view class="settle_box flex_between">
				<view class="c_text">
					<text>
						恭喜【<text class="company">佛山英朗电器有限公司</text>】成功入驻
					</text>
				</view>
				<view class="s_text" @click="toSettle">
					我要入驻
				</view>
			</view> -->
			<shopList :list="shopLists"></shopList>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getShopList } from '@/service/shop';
import { getShopCategories } from '@/service/shop.js'

const categoryId = ref('')
const range = ref([])
onMounted(async()=>{
	let routes = getCurrentPages()
	let curParam = routes[routes.length - 1].options;
	categoryId.value = curParam.id==0?'':curParam.id
	getList()
	// 类目
	const {results} = await getShopCategories()
	range.value = results.map(i=>{
		return {
			text: i.name,
			value: i.id,
			disable: false
		}
	})
})

const shopLists = ref([])
const getList = async()=>{
	const params = ref({
		ordering: 'created_at',
		category: categoryId.value,
	})
	uni.showLoading({
		title: '加载中'
	})
	const {results} = await getShopList(params.value)
	shopLists.value.push(...results)
	uni.hideLoading()
}

const toSettle = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_intro'
	})
}

const category = ref('')
const changeRange = (e) => {
	categoryId.value = e
	shopLists.value = []
	getList()
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

</style>
