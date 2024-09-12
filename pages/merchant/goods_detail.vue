<template>
	<view>
		<navBar title="商品详情"></navBar>
		<view class="content">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper">
				<swiper-item>
					<image src="" mode="widthFix" class="swipe_pic"></image>
				</swiper-item>
			</swiper>
			<view class="goods_info">
				<view class="goods_title">
					黑茶羊楼洞赤壁青砖茶120g单罐湖北特产青砖茶
				</view>
				<view class="desc">
					红茶性温，擅温中驱寒，温胃驱寒，能化痰、消食、开胃。单笔订单满20盒西安市内免运费，详情请咨询400-0029-777；
				</view>
				<view class="flex">
					<view class="point_text">
						送积分
					</view>
					<view class="point_num">
						¥230
					</view>
				</view>
			</view>
			<view class="detail flex_between">
				<view class="line"></view>
				<view class="">
					商品信息
				</view>
				<view class="line"></view>
			</view>
			<view class="goods_pic">
				<image src="" mode="widthFix" class="pic_item"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.swiper {
	height: 688rpx;
	.swipe_pic {
		width: 100%;
		height: 688rpx;
		background-color: #ccc;
	}
}
.goods_info {
	background-color: #fff;
	padding: 30rpx;
	.goods_title {
		font-size: 26rpx;
		margin-bottom: 20rpx;
	}
	.desc {
		font-size: 20rpx;
		color: #999999;
		margin-bottom: 34rpx;
		line-height: 30rpx;
	}
	.point_text {
		font-size: 22rpx;
		margin-right: 20rpx;
	}
	.point_num {
		font-size: 24rpx;
		color: #FC5908;
	}
}
.detail {
	padding: 40rpx 30rpx;
	font-size: 22rpx;
	color: #999999;
	.line {
		width: 241rpx;
		height: 1rpx;
		background-color: #999999;
	}
}
.goods_pic {
	.pic_item {
		width: 100%;
	}
}
</style>
