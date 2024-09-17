<template>
	<view>
		<view class="shop_list">
			<view  class="shop_item flex" @click="toDetail" v-for="item in list" :key="item.id">
				<image :src="item.avatar" mode="aspectFill" class="shop_pic"></image>
				<view class="" style="flex: 1;">
					<view class="shop_name">
						{{item.name}}
					</view>
					<view class="pic_box flex">
						<image src="@/static/star.png" mode="widthFix" class="star_pic" v-for="(star, i) in 5" :key="i"></image>
						<view class="point">
							5
						</view>
					</view>
					<view class="flex">
						<image src="@/static/locate_orange.png" mode="widthFix" class="location_pic"></image>
						<view class="district">
							{{item.address}}
						</view>
					</view>
				</view>
				<view class="distance">
					{{item.distance/1000}}km
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from "vue";

defineProps({
	list: {
		type: Array
	}
})
onMounted(async()=>{
	
})


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
		align-items: flex-start;
		margin-bottom: 16rpx;
		&:last-child {
			margin-bottom: 0;
		}
		.shop_pic {
			width: 114rpx;
			height: 114rpx;
			margin-right: 20rpx;
			// background-color: #ccc;
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
			flex: 1;
		}
		.distance {
			font-size: 20rpx;
			color: #FC5908;
		}
	}
}
</style>