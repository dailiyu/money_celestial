<template>
	<view>
		<view class="shop_list">
			<uni-swipe-action>
				<uni-swipe-action-item v-for="(item,index) in list" :key="item.shop_detail.merchant">
					<template #right>
						<view class="swipe_right" @click="del(item)">
							<image :src="iconSrc" mode="widthFix" class="del_pic"></image>
							<view class="">
								{{rightText}}
							</view>
						</view>
					</template>
					<view  class="shop_item flex" @click="toDetail(item)">
						<image :src="item.shop_detail.avatar" mode="aspectFill" class="shop_pic"></image>
						<view class="shop_info">
							<view class="shop_name">
								{{item.shop_detail.name}}
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
									{{item.shop_detail.address}}
								</view>
							</view>
						</view>
						<view :class="['percentage', {'red':!item.shop_detail.consume2coin_bit||item.shop_detail.consume2coin_bit>100||item.shop_detail.consume2coin_bit==100, 'orange':item.shop_detail.consume2coin_bit&&item.shop_detail.consume2coin_bit<100}]">
							<image src="https://static.maxcang.com/appstatic/merchant/hot.png" mode="widthFix" class="hot_pic" v-if="!item.shop_detail.consume2coin_bit||item.shop_detail.consume2coin_bit>100||item.shop_detail.consume2coin_bit==100"></image>
							<view class="">
								<text style="font-weight: bold;font-size: 30rpx;">{{item.shop_detail.consume2coin_bit||'100'}}</text>%赠送
							</view>
						</view>
						<!-- <view class="distance">
							{{item.distance/1000}}km
						</view> -->
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</view>
	</view>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
defineOptions({
	options: {
		styleIsolation: 'shared'
	}
})
 const props=defineProps({
	list: {
		type: Array,
		default: []
	},
	rightText: {
		type: String,
		default: '删除'
	},
	iconSrc: {
		type: String
	}
})
onMounted(async()=>{
	
})



const toDetail = async(item) => {
	
  await uni.setStorageSync('selectedShopInfo',item.shop_detail)
  uni.$mc.shopInfo  = item.shop_detail;
  uni.navigateTo({
    url: '/pages/merchant/merchant_detail'
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
const emit = defineEmits(['delete'])
const del = (item)=>{
	emit('delete', item)
}
</script>



<style lang="scss" scoped>
.shop_list {
	:deep(.uni-swipe_text--center) {
		margin-bottom: 18rpx;
	}
	.swipe_right {
		background-color: #FD2E42;
		font-size: 22rpx;
		color: #fff;
		width: 268rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		.del_pic {
			width: 48rpx;
			height: 1px;
			margin-bottom: 10rpx;
		}
	}
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
			width: fit-content;
			text-align: center;
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