<template>
	<view>
		<view class="shop_list">
			<view  class="shop_item flex" @click="toDetail(index)" v-for="(item,index) in list" :key="item.merchant">
				<image :src="item.avatar" mode="aspectFill" class="shop_pic"></image>
				<view class="" style="flex: 1;">
					<view class="shop_name">
						{{item.name}}
					</view>
					<view class="pic_box flex">
						<image src="https://static.maxcang.com/appstatic/star.png" mode="widthFix" class="star_pic" v-for="(star, i) in 5" :key="i"></image>
						<view class="point">
							5
						</view>
					</view>
					<view class="flex">
						<image src="https://static.maxcang.com/appstatic/locate_orange.png" mode="widthFix" class="location_pic"></image>
						<view class="district" @click.stop="openLocation(item)">
							{{item.address}}
						</view>
					</view>
				</view>
				<view :class="['percentage', {'red':!item.consume2coin_bit||item.consume2coin_bit>100||item.consume2coin_bit==100, 'orange':item.consume2coin_bit&&item.consume2coin_bit<100}]">
					<image src="https://static.maxcang.com/appstatic/merchant/hot.png" mode="widthFix" class="hot_pic" v-if="!item.consume2coin_bit||item.consume2coin_bit>100||item.consume2coin_bit==100"></image>
					<view class="">
						<text style="font-weight: bold;font-size: 30rpx;">{{item.consume2coin_bit||'100'}}</text>%赠送
					</view>
				</view>
				<!-- <view class="distance">
					{{item.distance/1000}}km
				</view> -->
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";

 const props=defineProps({
	list: {
		type: Array,
		default: []
	}
})
onMounted(async()=>{
	
})



const toDetail = async(index) => {
	
	await uni.setStorageSync('selectedShopInfo',props.list[index])
  uni.navigateTo({
    url: '/pages/merchant/merchant_detail'
  });
};
const openLocation = (item)=>{
	// #ifdef MP-WEIXIN
	if (!item.latitude || !item.longitude) return uni.showToast({
		icon: 'none',
		title: '获取位置失败'
	})
	uni.openLocation({
		latitude: item.latitude,
		longitude: item.longitude
	})
	// #endif
}
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
		.percentage {
			position: relative;
			color: #fff;
			font-size: 26rpx;
			padding: 6rpx 18rpx;
			border-radius: 100px;
			margin-top: 10rpx;
			&.red {
				background: linear-gradient(to bottom, #fd770b, #fb4706);
			}
			&.orange {
				background: linear-gradient(to bottom, #ffbc15, #ff850d);
			}
			.hot_pic {
				position: absolute;
				left: -16rpx;
				top: -24rpx;
				width: 70rpx;
			}
		}
	}
}
</style>