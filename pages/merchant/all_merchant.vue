<template>
	<view>
		<navBar title="全部商家"></navBar>
		<view class="filter_list flex_between">
			<view class="flex_center" @click="getType">
				<image src="@/static/category.png" mode="widthFix" class="type_pic"></image>
				<view>
					类目
				</view>
			</view>
			<view>
				热门
			</view>
			<view>
				好评
			</view>
			<view class="flex_center">
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
			</view>
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
			<shopList :sort='distance' :shopType="index==0?-1:range[index-1].value"></shopList>
		</view>
	</view>
</template>

<script setup>
import { computed, ref } from 'vue';
import {usePublicStore} from "@/store/public.js"
const publicStore=  usePublicStore()

const range = computed(() => {
		return publicStore.cateGoryList.map((item) => {
			console.log({
				value: item.id, // value 为 id
				text: item.name, // text 为 name
			});
			return {
				value: item.id, // value 为 id
				text: item.name, // text 为 name
			};
		});
	});
	
	const categoryTextList = computed(() => {
			return publicStore.cateGoryList.map((item) => {
				return item.name
			});
		});
	

const index=ref(0)
const getType = ()=>{
	uni.showActionSheet({
		itemList: ['全部',...categoryTextList.value],
		success(res) {
			index.value=res.tapIndex
			
		}
	})
}
const toSettle = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_intro'
	})
}

const distance = ref('asc')





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
