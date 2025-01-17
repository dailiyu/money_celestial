<template>
	<view>
		<uni-icons type="left" size="20" color="#fff" @click="back"></uni-icons>
		<image src="https://static.maxcang.com/appstatic/merchant/new-rank.png" mode="widthFix" class="total_bg"></image>
		<view class="content">
			<!-- <view class="btns">
				<image src="https://static.maxcang.com/appstatic/merchant/btn_1.png" mode="widthFix" class="btn_item"></image>
				<image src="https://static.maxcang.com/appstatic/merchant/btn_2.png" mode="widthFix" class="btn_item"></image>
			</view> -->
			<image src="https://static.maxcang.com/appstatic/merchant/month-top3.png" mode="widthFix" class="top_3"></image>
			<view class="rule_box flex_between">
				<!-- <uni-data-select
				  v-model="value"
				  :localdata="range"
				  @change="change"
				  :clear="false"
				></uni-data-select> -->
				<view class="" @click="toRule">
					规则奖励
				</view>
			</view>
			<view class="flex" v-if="top3Data.length">
				<view class="top_1" v-if="top3Data[1]">
					<image src="https://static.maxcang.com/appstatic/merchant/second2.png" mode="widthFix" class="top_pic"></image>
					<image :src="top3Data[1].shop_avatar" mode="aspectFill" class="top_head"></image>
					<view class="top_info">
						<view class="top_name">
							{{top3Data[1].shop_name}}
						</view>
						<view class="top_point">
							{{top3Data[1].total_score}}分
						</view>
					</view>
				</view>
				<view class="top_1" :style="{'margin': top3Data.length>1?'-84px 80rpx 0':'0'}" v-if="top3Data[0]">
					<image src="https://static.maxcang.com/appstatic/merchant/first1.png" mode="widthFix" class="top_pic"></image>
					<image :src="top3Data[0].shop_avatar" mode="aspectFill" class="top_head"></image>
					<view class="top_info">
						<view class="top_name">
							{{top3Data[0].shop_name}}
						</view>
						<view class="top_point">
							{{top3Data[0].total_score}}分
						</view>
					</view>
				</view>
				<view class="top_1" v-if="top3Data[2]">
					<image src="https://static.maxcang.com/appstatic/merchant/third3.png" mode="widthFix" class="top_pic"></image>
					<image :src="top3Data[2].shop_avatar" mode="aspectFill" class="top_head"></image>
					<view class="top_info">
						<view class="top_name">
							{{top3Data[2].shop_name}}
						</view>
						<view class="top_point">
							{{top3Data[2].total_score}}分
						</view>
					</view>
				</view>
			</view>
			<view class="rank_box">
				<view class="flex">
					<!-- <view class="week" style="padding-right: 32rpx;">
						周榜
					</view> -->
					<view class="week">
						月榜
					</view>
				</view>
				<!-- <view class="circle_box flex_between">
					<view class="">
						<image src="https://static.maxcang.com/appstatic/merchant/circle1.png" mode="widthFix" class="circle_1"></image>
						<view>
							Top1:桂冠微章
						</view>
					</view>
					<view class="">
						<image src="https://static.maxcang.com/appstatic/merchant/circle2.png" mode="widthFix" class="circle_1"></image>
						<view>
							Top2:卓越微章
						</view>
					</view>
					<view class="">
						<image src="https://static.maxcang.com/appstatic/merchant/circle3.png" mode="widthFix" class="circle_1"></image>
						<view>
							Top3:精英微章
						</view>
					</view>
				</view> -->
				<view class="rank_title flex_between">
					<view class="">
						排名
					</view>
					<view class="">
						商家
					</view>
					<view class="">
						所属城市
					</view>
					<view class="">
						数量
					</view>
				</view>
				<view class="rank_list">
					<view class="list_item flex_between" v-for="(item, index) in list" :key="item.shop_id">
						<view class="list_pic" v-if="index < 3">
							<image src="https://static.maxcang.com/appstatic/merchant/gold.png" mode="widthFix" class="g_pic"></image>
							<view class="list_1">
								{{index+1}}
							</view>
						</view>
						<view class="list_no" v-else>
							{{index+1}}
						</view>
						<view class="">
							{{item.shop_name}}
						</view>
						<view class="">
							{{item.city_name}}
						</view>
						<view class="">
							{{item.score}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getNewRanking } from '../../service/merchant';



onMounted(()=>{
	getList()
})
const list = ref([])
const top3Data = ref([])
const getList = async()=>{
	const res = await getNewRanking({type:2})
	list.value = res.data.rankings
	top3Data.value = res.data.last_month_top3
}
const value = ref('华南')
const range = ref([
	{ value: '华南', text: "华南地区" },
    { value: '华北', text: "华北地区" },
    { value: '华中', text: "华中地区" },
    { value: '华东', text: "华东地区" },
])
const change = (e)=>{
	console.log(e)
}
const back = ()=>{
	uni.navigateBack()
}
const toRule = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/rank_rules'
	})
}
</script>

<style lang="scss" scoped>
/* #ifndef MP-WEIXIN */
.uni-icons {
	position: fixed;
	top: 138rpx;
	left: 58rpx;
	z-index: 100;
}
/* #endif */
/* #ifdef MP-WEIXIN */
uni-icons {
	position: fixed;
	top: 138rpx;
	left: 58rpx;
	z-index: 100;
}
/* #endif */
.total_bg {
	display: block;
	width: 750rpx;
}
.content {
	position: absolute;
	top: 326rpx;
	left: 0;
	right: 0;
	bottom: 0;
	text-align: center;
	.btns {
		.btn_item {
			width: 210rpx;
		}
	}
	.top_3 {
		width: 260rpx;
	}
	.rule_box {
		font-size: 21rpx;
		color: #FFFFFF;
		text-decoration: underline;
		margin-bottom: 10rpx;
		:deep(.uni-select) {
			width: fit-content;
			height: fit-content;
			padding: 10rpx 14rpx;
			background-color: #fff;
			font-size: 21rpx;
			border-radius: 10rpx;
		}
		:deep(.uni-select__selector-item) {
			font-size: 21rpx;
			color: #000;
		}
		:deep(.uni-select__input-box) {
			height: fit-content;
		}
	}
	.top_1 {
		position: relative;
		.top_pic {
			position: relative;
			z-index: 10;
			width: 186rpx;
		}
		.top_head {
			position: absolute;
			top: 30rpx;
			left: 50%;
			transform: translateX(-50%);
			z-index: 9;
			width: 122rpx;
			height: 122rpx;
			border-radius: 50%;
		}
		.top_info {
			position: absolute;
			bottom: 40rpx;
			left: 0;
			right: 0;
			.top_name {
				font-size: 24rpx;
			}
			.top_point {
				font-size: 24rpx;
				color: #FFFFFF;
			}
		}
		
	}
	.rank_box {
		border: 3rpx solid #ffd3a6;
		border-radius: 20px;
		background: linear-gradient(to bottom, #F42326, #B2070D);
		padding: 37rpx 52rpx;
		.week {
			font-size: 25rpx;
			color: #FFFFFF;
			text-decoration: underline;
		}
		.month {
			font-size: 25rpx;
			color: #BC0000;
			text-decoration: underline;
		}
		.circle_box {
			border-radius: 20px;
			background-color: #f2584e;
			padding: 20rpx 52rpx;
			margin-top: 20rpx;
			color: #fff;
			font-size: 18rpx;
			.circle_1 {
				width: 150rpx;
			}
		}
		.rank_title {
			background: linear-gradient(to bottom, #F42326, #B2070D);
			border: 3rpx solid #FFD1A3;
			border-radius: 20rpx;
			color: #FFD1A3;
			padding: 10rpx 20rpx;
			margin-top: 20rpx;
			font-size: 28rpx;
		}
		.rank_list {
			.list_item {
				padding: 10rpx 20rpx;
				font-size: 26rpx;
				color: #fff;
				border-bottom: 1px solid #FFD8A9;
				&:last-child {
					border-bottom: none;
				}
				.list_pic {
					position: relative;
					.g_pic {
						width: 50rpx;
					}
					.list_1 {
						position: absolute;
						top: 12rpx;
						left: 20rpx;
						// transform: translate(-50%, -50%);
						color: #fff;
						font-size: 20rpx;
					}
				}
				.list_no {
					font-size: 26rpx;
					color: #FFD8A9;
				}
			}
		}
	}
}
</style>
