<template>
	<view>
		<view class="shop_list">
			<view  class="shop_item flex" @click="toDetail(item)" v-for="(item,index) in list" :key="item.merchant">
				<image :src="item.avatar" mode="aspectFill" class="shop_pic"></image>
				<view class="shop_info">
					<view class="shop_name">
						{{item.name}}
					</view>
					<view class="pic_box flex">
						<image src="https://static.maxcang.com/appstatic/star.png" mode="widthFix" class="star_pic" v-for="(star, i) in 5" :key="i"></image>
						<view class="point">
							5
						</view>
					</view>
					<view class="flex" style="align-items: flex-start;">
						<image src="https://static.maxcang.com/appstatic/locate_orange.png" mode="widthFix" class="location_pic"></image>
						<view class="district" @click.stop="openLocation(item)">
							{{item.address}}
						</view>
					</view>
				</view>
				<view class="">
					<view :class="['percentage', {'red':!item.consume2coin_bit||item.consume2coin_bit>100||item.consume2coin_bit==100, 'orange':item.consume2coin_bit&&item.consume2coin_bit<100}]">
						<image src="https://static.maxcang.com/appstatic/merchant/hot.png" mode="widthFix" class="hot_pic" v-if="!item.consume2coin_bit||item.consume2coin_bit>100||item.consume2coin_bit==100"></image>
						<view class="">
							<text style="font-weight: bold;font-size: 30rpx;">{{item.consume2coin_bit||'100'}}</text>%赠送
						</view>
					</view>
					<view class="distance">
						<!-- {{item.distance/1000}}km -->
						{{item.distance}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
const token = uni.getStorageSync('accessToken')
 const props=defineProps({
	list: {
		type: Array,
		default: []
	}
})
onMounted(async()=>{
	
})



const toDetail = async(item) => {

	// await uni.setStorageSync('selectedShopInfo',props.list[index])
	// uni.$mc.shopInfo = props.list[index]
  uni.navigateTo({
    url: '/pages/merchant/merchant_detail?phone='+item.merchant
  });
};
const openLocation = (item)=>{
	// #ifdef MP-WEIXIN
	if (!item.latitude || !item.longitude) return
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
		flex-wrap: nowrap;
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
		.shop_info {
			flex-wrap: nowrap;
			flex: 1;
			min-width: 10px;
			.shop_name {
				font-size: 26rpx;
			}
			.pic_box {
				margin: 10rpx 0 14rpx;
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
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.distance {
				font-size: 20rpx;
				color: #FC5908;
			}
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