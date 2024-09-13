<template>
	<view>
		<navBar title="推荐官后台" ></navBar>
		<view class="total_data">
			<image src="@/static/recommend/recommend_bg.png" mode="widthFix" class="agent_pic"></image>
			<view class="data_item">
				<image src="@/static/recommend/lv1.png" mode="widthFix" class="lv_pic"></image>
				<view class="lv_name">
					荣耀推荐官
				</view>
				<view class="flex_center">
					<view class="name">
						满小仓2323
					</view>
					<!-- <image src="" mode="widthFix" class="code_pic"></image> -->
				</view>
				<view class="total_item flex_between">
					<view class="">
						<view class="total_text">
							已推荐商家数
						</view>
						<view class="total_num">
							53
						</view>
					</view>
					<view class="">
						<view class="total_text">
							已获得积分
						</view>
						<view class="total_num">
							15,328,872,819
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content">
			
			<view class="list_box">
				<view class="list_item flex_between" @click="toMerchantList">
					<view class="">
						推荐商家列表
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toMerchantCode">
					<view class="">
						商家码认证
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toSecurityDeposit">
					<view class="">
						保证金
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
const toMerchantList = ()=>{
	uni.navigateTo({
		url: '/pages/recommend/merchant_list'
	})
}
const toMerchantCode = ()=>{
	uni.navigateTo({
		url: '/pages/recommend/merchant_code_authentication'
	})
}
const toSecurityDeposit = ()=>{
	uni.navigateTo({
		url: '/pages/recommend/security_deposit'
	})
}
</script>

<style lang="scss" scoped>
.total_data {
	position: relative;
	margin-top: 88rpx;
	.agent_pic {
		width: 100%;
		display: block;
		// margin-bottom: 20rpx;
	}
	.data_item {
		position: absolute;
		top: -46rpx;
		left: 0;
		right: 0;
		padding: 0 72rpx;
		.lv_pic {
			width: 212rpx;
			display: block;
			margin: 0 auto;
		}
		.lv_name {
			font-size: 27rpx;
			font-weight: bold;
			// text-shadow: 3px 100px 1px #D00404;
			background-image: linear-gradient(to bottom, #FFFACD, #F0BF6A);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			text-align: center;
			margin-bottom: 20rpx;
		}
		.name {
			font-size: 42rpx;
			color: #FFFFFF;
			text-align: center;
		}
		.code_pic {
			width: 34rpx;
		}
		.total_item {
			padding-top: 40rpx;
			margin-top: 40rpx;
			border-top: 1px solid #970606;
			.total_text {
				font-size: 24rpx;
				color: #FFFFFF;
				margin-bottom: 20rpx;
			}
			.total_num {
				font-size: 30rpx;
				color: #FFFFFF;
				font-weight: bold;
			}
		}
		
	}
}
.list_box {
	padding: 0 28rpx;
	background-color: #fff;
	.list_item {
		padding: 46rpx 14rpx;
		font-weight: 500;
		font-size: 27rpx;
		border-bottom: 1px solid #ececec;
		&:last-child {
			border-bottom: none;
		}
		.arrow_pic {
			width: 12rpx;
		}
	}
}
</style>
