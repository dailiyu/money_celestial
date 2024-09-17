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
				<view class="" @click="filterTime('-')" v-if="time==''">
					<image src="@/static/arrow-active.png" mode="widthFix" class="arrow_fill"></image>
					<image src="@/static/arrow-inactive.png" mode="widthFix" class="arrow_fill"></image>
				</view>
				<view class="" @click="filterTime('')" v-if="time=='-'">
					<image src="@/static/arrow-inactive.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
					<image src="@/static/arrow-active.png" mode="widthFix" class="arrow_fill" style="transform: rotate(180deg);"></image>
				</view>
			</view>
		</view>
		<view class="content">
			<shopList></shopList>
		</view>
		<uni-load-more :status="status" @clickLoadMor="getMoreList"></uni-load-more>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAgentShopList } from '@/service/agent.js'
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



onMounted(async()=>{
	getShopList()
	
})

const page = ref(1)
const time = ref('')
const categoryId = ref('')
const shopList = ref([])
const status = ref('loading')
const getShopList = async()=>{
	const params = ref({
		page: page.value,
		time: time.value,
		categoryId: categoryId.value
	})
	status.value = 'loading'
	await getAgentShopList(params.value)
	// if () {
	// 	status.value = 'more'
	// } else {
	// 	status.value = 'no-more'
	// }
	// shopList.value.push()
}
const filterTime = (i)=>{
	page.value = 1
	time.value = i
	shopList.value = []
	getShopList()
}
const getMoreList = ()=>{
	// if () {
	// 	page.value++
	// 	getShopList()
	// }
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
