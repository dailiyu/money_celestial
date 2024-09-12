<template>
	<view class="page">
		<navBar :iconShow="false" title="满仓"></navBar>
		<view class="search_bar flex_between">
			<image src="@/static/locate.png" mode="widthFix" class="locate_img"></image>
			<view class="location">
				湖州
			</view>
			<uni-search-bar v-model="keyword" placeholder="请输入你搜索的内容" :radius="100" cancel-text="cancel" cancelButton="none" clearButton="always">
				<template v-slot:clearIcon>
					<view class="search_btn flex_center" @click.stop="search" >搜索</view>
				</template>
			</uni-search-bar>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#a4b8ab" indicator-active-color="#fc5908" :circular="true" class="swiper">
			<swiper-item>
				<image src="" mode="widthFix" class="swipe_img"></image>
			</swiper-item>
		</swiper>
		<view class="function_list flex_between">
			<view class="function_item" @click="toMerchant">
				<view class="img_box flex_center">
					<image src="@/static/home/cart.png" mode="widthFix" class="img_item"></image>
				</view>
				<view class="" >
					商家
				</view>
			</view>
			<view class="function_item" @click="toAgent">
				<view class="img_box flex_center">
					<image src="@/static/home/bag.png" mode="widthFix" class="img_item" style="width: 70rpx;"></image>
				</view>
				<view class="">
					代理
				</view>
			</view>
			<view class="function_item" @click="toRecommend">
				<view class="img_box flex_center">
					<image src="@/static/home/star.png" mode="widthFix" class="img_item" style="width: 56rpx;"></image>
				</view>
				<view class="">
					推荐官
				</view>
			</view>
			<view class="function_item" @click="toMyAccount">
				<view class="img_box flex_center">
					<image src="@/static/home/profile.png" mode="widthFix" class="img_item" style="width: 58rpx;"></image>
				</view>
				<view class="">
					我的账户
				</view>
			</view>
		</view>
		<view class="content">
			<view class="cate_list flex_between">
				<view class="cate_item">
					<image src="@/static/home/cloth.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						服装
					</view>
				</view>
				<view class="cate_item">
					<image src="@/static/home/makeup.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						美妆
					</view>
				</view>
				<view class="cate_item">
					<image src="@/static/home/goods.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						百货
					</view>
				</view>
				<view class="cate_item">
					<image src="@/static/home/drink.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						酒水
					</view>
				</view>
				<view class="cate_item">
					<image src="@/static/home/food.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						食品
					</view>
				</view>
				<view class="cate_item">
					<image src="@/static/home/appliances.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						电器
					</view>
				</view>
				<view class="cate_item">
					<image src="@/static/home/suitcase.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						箱包
					</view>
				</view>
				<view class="cate_item">
					<image src="@/static/home/jewelry.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						珠宝
					</view>
				</view>
				<view class="cate_item">
					<image src="@/static/home/home.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						家居
					</view>
				</view>
				<view class="cate_item">
					<image src="@/static/home/baby.png" mode="widthFix" class="cate_img"></image>
					<view class="">
						母婴
					</view>
				</view>
			</view>
			<view class="merchant_box">
				<view class="merchant_top flex_between">
					<view class="flex_between">
						<text class="nearby">附近商家</text>
						<view class="hit">
							热门榜
						</view>
					</view>
					<view class="settle" @click="toSettle">
						我要入驻
					</view>
				</view>
				<view class="shop_list">
					<view class="shop_item flex_between" @click="toDetail">
						<image src="" mode="aspectFill" class="shop_img"></image>
						<view class="shop_info">
							<view class="shop_name">
								商铺名称
							</view>
							<view class="shop_address flex">
								<image src="@/static/locate_orange.png" mode="widthFix" class="address_img"></image>
								<view class="">
									浙江省湖州市安吉县南昌路108号
								</view>
							</view>
						</view>
						<view class="distance">
							271.51km
						</view>
					</view>
					<view class="more" @click="toAllMerchant">
						点击查看更多
					</view>
				</view>
			</view>
		</view>
		<view class="headline flex_between">
			<view class="head_title">
				头条
			</view>
			<view class="head_hit">
				热门
			</view>
			<view class="news">
				新闻内容
			</view>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#a4b8ab" indicator-active-color="#fc5908" :circular="true" class="swiper" style="margin-bottom: 30rpx;">
			<swiper-item>
				<image src="" mode="widthFix" class="swipe_img"></image>
			</swiper-item>
		</swiper>
		<view class="content">
			<image src="@/static/home/shop.jpg" mode="widthFix" class="shop_pic"></image>
			<image src="@/static/home/benefit.jpg" mode="widthFix" class="shop_pic"></image>
			<image src="@/static/home/earn.jpg" mode="widthFix" class="shop_pic"></image>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const keyword = ref('')
const search = ()=>{
	console.log(keyword.value)
}
const toSettle = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_intro'
	})
}
const toMerchant = ()=>{
	// 未入驻
	uni.navigateTo({
		url: '/pages/merchant/merchant_intro'
	})
}
const toAgent = ()=>{
	uni.navigateTo({
		url: '/pages/agent/agent_intro'
	})
}
const toRecommend = ()=>{
	uni.navigateTo({
		url: '/pages/recommend/recommend_intro'
	})
}
const toAllMerchant = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/all_merchant'
	})
}

const toMyAccount = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/myAccount'
	})
}
const toDetail = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_detail'
	})
}
</script>

<style lang="scss" scoped>
.page {
	min-height: 100%;
	background-color: #FC5908;
}
.search_bar {
	padding: 0 26rpx 48rpx;
	.locate_img {
		width: 43rpx;
		margin-right: 18rpx;
	}
	.location {
		color: #fff;
		font-size: 24rpx;
		margin-right: 30rpx;
	}
	uni-search-bar {
		flex: 1;
	}
	:deep(.uni-searchbar) {
		padding: 0;
	}
	:deep(.uni-searchbar__box) {
		height: 60rpx;
	}
	:deep(.uni-searchbar__box-search-input){
		font-size: 21rpx;
		margin-left: 0;
	}
	:deep(.uni-searchbar__text-placeholder) {
		color: #888888;
		font-size: 21rpx;
		margin-left: 0;
	}
	.search_btn {
		width: 85rpx;
		height: 45rpx;
		background-color: #f96e00;
		color: #fff;
		border-radius: 100px;
		font-size: 21rpx;
	}
}

.swiper {
	height: 300rpx;
	.swipe_img {
		width: 750rpx;
		height: 300rpx;
		background-color: #ccc;
	}
}
.function_list {
	padding: 36rpx 46rpx;
	.function_item {
		text-align: center;
		font-size: 24rpx;
		color: #fff;
		margin-right: 60rpx;
		&:last-child {
			margin-right: 0;
		}
		.img_box {
			width: 117rpx;
			height: 117rpx;
			border-radius: 38rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			.img_item {
				width: 72rpx;
			}
		}
	}
}
.content {
	padding: 0 22rpx;
	.cate_list {
		background-color: #fff;
		border-radius: 38rpx;
		padding: 42rpx 46rpx 12rpx;
		margin-bottom: 34rpx;
		.cate_item {
			text-align: center;
			font-size: 21rpx;
			margin-right: 46rpx;
			margin-bottom: 30rpx;
			&:nth-child(5n) {
				margin-right: 0;
			}
			.cate_img {
				width: 86rpx;
			}
		}
	}
	.merchant_box {
		background-color: #fff;
		border-radius: 38rpx;
		padding: 50rpx 46rpx 0;
		// margin-bottom: 34rpx;
		.merchant_top {
			padding-bottom: 20rpx;
			border-bottom: 1px solid #e1e1e1;
			.nearby {
				font-weight: bold;
				font-size: 27rpx;
				margin-right: 24rpx;
			}
			.hit {
				padding: 8rpx 10rpx;
				border-radius: 100px;
				font-size: 21rpx;
				background-image: linear-gradient(to right, #ff9342, #fe676c);
				color: #fff;
			}
			.settle {
				padding: 10rpx 18rpx;
				background-color: #fc5908;
				color: #fff;
				font-size: 21rpx;
				border-radius: 100px;
			}
		}
		.shop_list {
			.shop_item {
				padding: 20rpx 0;
				border-bottom: 1px solid #e1e1e1;
				.shop_img {
					width: 114rpx;
					height: 114rpx;
					margin-right: 22rpx;
					background-color: #ccc;
					border-radius: 5px;
				}
				.shop_info {
					flex: 1;
					
					.shop_name {
						font-size: 24rpx;
						margin-bottom: 36rpx;
					}
					.shop_address {
						font-size: 18rpx;
						color: #385ed2;
						.address_img {
							width: 20rpx;
							margin-right: 10rpx;
						}
					}
				}
				.distance {
					font-size: 21rpx;
					color: #fc6216;
				}
			}
			.more {
				font-size: 24rpx;
				color: #ff6a07;
				text-align: center;
				padding: 30rpx 0;
			}
		}
	}
	.shop_pic {
		width: 100%;
		margin-bottom: 30rpx;
	}
}
.headline {
	padding: 30rpx 50rpx;
	.head_title {
		font-size: 30rpx;
		color: #fff;
		margin-right: 20rpx;
	}
	.head_hit {
		font-size: 24rpx;
		color: #fff;
		border: 1px solid #fff;
		border-radius: 3px;
		margin-right: 20rpx;
		padding: 6rpx 12rpx;
	}
	.news {
		font-size: 24rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		flex: 1;
	}
}
</style>
