<template>
	<view>
		<navBar title="商家" ></navBar>
		<view class="content">
			<view class="pic_box">
				<image src="@/static/merchant/border-green.png" mode="widthFix" class="border_pic"></image>
				<image src="@/static/merchant/mc_merchant.png" mode="widthFix" class="merchant_pic"></image>
				<image src="@/static/home/cart.png" mode="widthFix" class="cart_pic"></image>
				<view class="text_box">
					<view class="intro">
						通过满仓的积分返利策略，商家稳固顾客关系，提高重复购买率，轻松提升销售额，优化库存。同时，依托数据分析工具，商家精准优化运营，
					</view>
					<view class="advantages flex_between">
						<view class="advantage_item">
							<view class="title">
								品牌曝光
							</view>
							<view class="line">
								
							</view>
							<view class="point">
								广泛提升品牌
							</view>
							<view class="point">
								增加市场知名度
							</view>
							<view class="point">
								增强顾客认知
							</view>
						</view>
						<view class="advantage_item">
							<view class="title">
								提高销售
							</view>
							<view class="line">
								
							</view>
							<view class="point">
								推动销量增长
							</view>
							<view class="point">
								增加销售机会
							</view>
							<view class="point">
								提升收益水平
							</view>
						</view>
						<view class="advantage_item">
							<view class="title">
								优化库存
							</view>
							<view class="line">
								
							</view>
							<view class="point">
								减少库存积压
							</view>
							<view class="point">
								提高周转效率
							</view>
							<view class="point">
								优化商品管理
							</view>
						</view>
						<view class="advantage_item">
							<view class="title">
								精准营销
							</view>
							<view class="line">
								
							</view>
							<view class="point">
								锁定目标客户
							</view>
							<view class="point">
								定制化营销策略
							</view>
							<view class="point">
								提升转化率高
							</view>
						</view>
						<view class="advantage_item">
							<view class="title">
								市场竞争力
							</view>
							<view class="line">
								
							</view>
							<view class="point">
								增强品牌实力
							</view>
							<view class="point">
								提高市场份额
							</view>
							<view class="point">
								应对行业挑战
							</view>
						</view>
						<view class="advantage_item">
							<view class="title">
								业务增长
							</view>
							<view class="line">
								
							</view>
							<view class="point">
								拓展商业版图
							</view>
							<view class="point">
								扩大业务范围
							</view>
							<view class="point">
								实现业绩飞跃
							</view>
						</view>
					</view>
					<view class="btn_full" @click="toNotice">
						我要入驻
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
const toNotice = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/settle_notice'
	})
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'AlimamaShuHeiTi-Bold';
  src: url('../../public/fonts/AlimamaShuHeiTi-Bold.ttf');
  font-weight: bold;
  font-style: normal;
}
.content {
	padding-top: 60rpx;
	// background: url(@/static/merchant/merchant-bg.png) no-repeat;
	background-size: 100% 100%;
	.pic_box {
		position: relative;
		.border_pic {
			width: 100%;
		}
		.merchant_pic {
			position: absolute;
			top: 30rpx;
			right: 0;
			width: 470rpx;
		}
		.cart_pic {
			position: absolute;
			top: 50rpx;
			left: 62rpx;
			width: 110rpx;
		}
		.text_box {
			position: absolute;
			top: 228rpx;
			padding: 0 52rpx;
			.intro {
				color: #04831C;
				font-size: 21rpx;
				margin-bottom: 52rpx;
			}
			.advantages {
				.advantage_item {
					position: relative;
					// box-shadow: 3rpx 0rpx 18rpx 0rpx #088C28;
					width: 160rpx;
					border-radius: 20rpx;
					padding: 30rpx 20rpx;
					// margin-right: 20rpx;
					background: url(../../static/merchant/text-border.png) no-repeat;
					background-size: 100% 100%;
					margin-bottom: 10rpx;
					// &:nth-child(3n) {
					// 	margin-right: 0;
					// }
					.text_border {
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
					}
					.title {
						font-weight: bold;
						font-size: 30rpx;
						color: #13A737;
						font-family: 'AlimamaShuHeiTi-Bold';
						font-style: italic;
					}
					.line {
						width: 66rpx;
						height: 3rpx;
						margin-top: 20rpx;
						margin-bottom: 28rpx;
						background-color: #13A737;
					}
					.point {
						font-size: 21rpx;
						margin-top: 22rpx;
						font-style: italic;
					}
				}
			}
			.btn_full {
				margin-top: 50rpx;
			}
		}
	}
	
}

</style>
