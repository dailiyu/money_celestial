<template>
	<view>
		<view class="shop_list">
			<view  v-if="publicStore.storeList.length!==0" class="shop_item flex" @click="toDetail"  v-for="(item,index) in publicStore.storeList">
				<image src="" mode="aspectFill" class="shop_pic"></image>
				<view class="" style="flex: 1;">
					<view class="shop_name">
						{{item.name}}
					</view>
					<view class="pic_box flex">
						<image src="@/static/star.png" mode="widthFix" class="star_pic"></image>
						<view class="point">
							4.9
						</view>
					</view>
					<view class="flex">
						<image :src="item.icon" mode="widthFix" class="location_pic"></image>
						<view class="district">
							{{item.address}}
						</view>
					</view>
				</view>
				<view class="distance">
					1.51km
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {usePublicStore} from "@/store/public.js"
const publicStore=  usePublicStore()
const toDetail = () => {
  uni.navigateTo({
    url: '/pages/merchant/merchant_detail'
  });
};
</script>



<style lang="scss" scoped>
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
			border-radius: 6px;
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