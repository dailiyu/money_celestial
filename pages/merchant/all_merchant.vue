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
			<view class="settle_box flex_between">
				<view class="c_text">
					<text>
						恭喜【<text class="company">佛山英朗电器有限公司</text>】成功入驻
					</text>
				</view>
				<view class="s_text" @click="toSettle">
					我要入驻
				</view>
			</view>
			<view class="shop_list">
				<view class="shop_item flex" @click="toDetail">
					<image src="" mode="aspectFill" class="shop_pic"></image>
					<view class="" style="flex: 1;">
						<view class="shop_name">
							味多美家庭烘焙
						</view>
						<view class="pic_box flex">
							<image src="@/static/star.png" mode="widthFix" class="star_pic"></image>
							<view class="point">
								4.9
							</view>
						</view>
						<view class="flex">
							<image src="@/static/locate_orange.png" mode="widthFix" class="location_pic"></image>
							<view class="district">
								南海区
							</view>
						</view>
					</view>
					<view class="distance">
						1.51km
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
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
const toDetail = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_detail'
	})
}
const distance = ref('up')
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
.shop_list {
	.shop_item {
		padding: 20rpx 44rpx 20rpx 20rpx;
		background-color: #fff;
		align-items: flex-end;
		.shop_pic {
			width: 114rpx;
			height: 114rpx;
			margin-right: 20rpx;
			background-color: #ccc;
		}
		.shop_name {
			font-size: 26rpx;
		}
		.pic_box {
			margin: 10rpx 0 20rpx;
			.star_pic {
				width: 22rpx;
			}
			.point {
				font-size: 20rpx;
				color: #FC5908;
				margin-left: 20rpx;
			}
		}
		.location_pic {
			width: 22rpx;
			margin-right: 20rpx;
		}
		.district {
			font-size: 20rpx;
			color: #1B46CC;
		}
		.distance {
			font-size: 20rpx;
			color: #FC5908;
		}
	}
}
</style>
