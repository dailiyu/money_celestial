<template>
	<view>
		<view class="shop_list">
			<view  v-if="publicStore.storeList.length!==0" class="shop_item flex" @click="toDetail"  v-for="(item,index) in seletedShop">
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
					{{item.distance/1000}}km
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { sortShopsByDistance } from "../../utils/distanceSorting";
import {usePublicStore} from "@/store/public.js"
const props = defineProps({
  sort: {
    type: String,
    default: 'asc'
  },
  shopType:{
	  type:Number,
	  default:-1
  }
});
const publicStore=  usePublicStore()


onMounted(async()=>{
	
})



const curShopList=computed(()=>{
	if(props.sort=='desc'){
		return publicStore.descShopList
	}else{
		return publicStore.ascShopList
	}
})


const filterShopsByCategoryId=(shops, categoryId)=>{
	 if (categoryId == -1) {
	    return shops;
	  }
  return shops.filter(shop => {
    // 检查每个商店的 categories 数组中是否有指定的 categoryId
    return shop.categories.some(category => category.id ==  categoryId);
  });
}


const seletedShop=computed(()=>{
	return filterShopsByCategoryId(curShopList.value,props.shopType)
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