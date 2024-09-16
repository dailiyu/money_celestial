<template>
	<view>
		<navBar title="商家列表"></navBar>
		<view class="filter_list">
			<view class="flex_center" @click="getType">
				<image src="@/static/category.png" mode="widthFix" class="type_pic"></image>
				<view>
					类目
				</view>
			</view>
			<view class="flex_center">
				<view class="">
					入驻时间
				</view>
				<view class="" @click="distance='down'" v-if="distance=='up'">
					<image src="@/static/arrow-active.png" mode="widthFix" class="arrow_fill"></image>
					<image src="@/static/arrow-inactive.png" mode="widthFix" class="arrow_fill"></image>
				</view>
				<view class="" @click="distance='up'" v-if="distance=='down'">
					<image src="@/static/arrow-inactive.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
					<image src="@/static/arrow-active.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
				</view>
			</view>
		</view>
		<view class="content">
			<shopList></shopList>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getCityAgent, getProvinceAgent } from '@/service/region.js'
import { getMerchantList } from '@/service/merchant.js'
const getType = ()=>{
	uni.showActionSheet({
		itemList: ['美食', '服饰'],
		success(res) {
			console.log(res.tapIndex)
		}
	})
}
const toSettle = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_intro'
	})
}

const distance = ref('up')

onMounted(async()=>{
	try{
		const cityAgent = await getCityAgent()
		const provinceAgent = await getProvinceAgent()
		if (cityAgent.data&&cityAgent.data.id) {
			getShopList({city_agent:cityAgent.data.id})
		}
	}catch(e){
		//TODO handle the exception
	}
	
})

const getShopList = async(data)=>{
	await getMerchantList(data)
}
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
}

</style>
