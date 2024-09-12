<template>
	<view>
		<navBar title="门店详情"></navBar>
		<image src="" mode="widthFix" class="shop_pic"></image>
		<view class="shop_info">
			<view class="info_item flex">
				<image src="" mode="aspectFill" class="shop_head"></image>
				<view class="" style="flex: 1;">
					<view class="flex">
						<view class="shop_name">
							佛山英朗达百货超市西城店
						</view>
						<view class="level">
							Lv.5
						</view>
					</view>
					<view class="rate_box flex">
						<view class="flex">
							<image src="@/static/star.png" mode="widthFix" class="star_pic"></image>
						</view>
						<view class="point">
							4.9
						</view>
					</view>
					<view class="note">
						本店主要经营各类百货商品、生鲜蛋肉类产品
					</view>
				</view>
				<image src="@/static/star-plain.png" mode="widthFix" class="star_plain"></image>
			</view>
			<view class="info_item">
				<view class="flex">
					<image src="@/static/locate_orange.png" mode="widthFix" class="lo_pic"></image>
					<view class="address">
						浙江省金华市永康西城服装产业园区工厂区68号
					</view>
				</view>
				<view class="time_box flex">
					<image src="@/static/time.png" mode="widthFix" class="time_pic"></image>
					<view class="time_text">
						营业时间：09:00-19:00
					</view>
				</view>
				<view class="flex">
					<image src="@/static/phone.png" mode="widthFix" class="phone_pic"></image>
					<view class="time_text">
						联系方式：18642222222
					</view>
				</view>
			</view>
		</view>
		<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#FC5908" @clickItem="onClickItem" />
		<goodsList></goodsList>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const current = ref(0)
const items = ref(['本店商品', '商家介绍', '评价'])
const onClickItem = (e)=>{
	if (current.value !== e.currentIndex) {
		current.value = e.currentIndex
	}
}
</script>

<style lang="scss" scoped>
.shop_pic {
	width: 100%;
	height: 311rpx;
	background-color: #ccc;
	display: block;
}
.shop_info {
	padding: 24rpx 50rpx 30rpx 66rpx;
	background-color: #fff;
	margin-bottom: 40rpx;
	.info_item {
		&:last-child {
			margin-top: 20rpx;
		}
		.shop_head {
			width: 112rpx;
			height: 112rpx;
			background-color: #ccc;
			margin-right: 30rpx;
			border-radius: 50%;
		}
		.shop_name {
			font-size: 26rpx;
			font-weight: bold;
		}
		.level {
			padding: 6rpx 14rpx;
			background-color: #fc5908;
			margin-left: 12rpx;
			color: #fff;
			border-radius: 100px;
			font-weight: bold;
			font-size: 20rpx;
		}
		.rate_box {
			margin: 14rpx 0;
			.star_pic {
				width: 22rpx;
				display: block;
			}
			.point {
				font-size: 16rpx;
				color: #fc5908;
				margin-left: 20rpx;
				font-weight: 500;
			}
		}
		.note {
			font-size: 22rpx;
			color: #999999;
		}
		.star_plain {
			width: 24rpx;
		}
		.lo_pic {
			width: 20rpx;
			margin-right: 10rpx;
		}
		.address {
			font-size: 20rpx;
			color: #1B46CC;
		}
		.time_box {
			margin: 25rpx 0;
			.time_pic {
				width: 20rpx;
				margin-right: 10rpx;
			}
		}
		.time_text {
			font-size: 20rpx;
			color: #999999;
		}
		.phone_pic {
			width: 20rpx;
			margin-right: 10rpx;
		}
	}
}
:deep(.segmented-control) {
	background-color: #fff;
	font-size: 27rpx;
}
:deep(.segmented-control__text) {
	font-size: 27rpx;
}
</style>
