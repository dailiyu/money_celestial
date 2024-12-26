<template>
	<view class="page">
		<view class="page_top">
			<image src="https://static.maxcang.com/appstatic/my/daily-sign-bg.png" mode="widthFix" class="sign_bg"></image>
			<view class="duration_box flex_between">
				<view class="duration_day">
					你已连续签到<text style="font-size: 44rpx;font-weight: bold;">100</text>天
				</view>
				<view class="point_box">
					<view class="">
						已到账积分
					</view>
					<view style="font-size: 118rpx;font-weight: bold;line-height: 118rpx;">
						10000
					</view>
				</view>
			</view>
		</view>
		
		<view class="content">
			<view class="red_pocket">
				<image src="https://static.maxcang.com/appstatic/my/sign-content-bg.png" mode="" class="content_bg"></image>
				<view class="title_box">
					<image src="https://static.maxcang.com/appstatic/my/title-bg.png" mode="" class="title_bg"></image>
					<view class="title_text">
						· 签到日历 ·
					</view>
				</view>
				<view class="pocket_list flex_between">
					<view class="pocket_item">
						<view class="poket_top">
							<image src="https://static.maxcang.com/appstatic/my/pocket-calendar.png" mode="widthFix" class="cal_pic"></image>
							<view class="cal_day">
								<view class="day_en">
									Day
								</view>
								<view class="day_num">
									1
								</view>
							</view>
						</view>
						<view class="poket_point">
							积分+10
						</view>
					</view>
				</view>
			</view>
			<calendar></calendar>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
image {
	display: block;
}
.page {
	// background-color: #eb2022;
	background: linear-gradient(to right, #ef2d2e, #eb2022);
}
.page_top {
	position: relative;
	.sign_bg {
		width: 100%;
		display: block;
	}
	.duration_box {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 18%;
		color: #fff;
		flex-direction: column;
		.duration_day {
			font-size: 28rpx;
			margin-bottom: 19%;
		}
		.point_box {
			font-size: 32rpx;
			text-align: center;
		}
	}
}
.red_pocket {
	position: relative;
	margin-top: 60rpx;
	.content_bg {
		width: 100%;
		height: 250rpx;
		
	}
	.title_box {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		.title_bg {
			width: 480rpx;
			height: 64rpx;
		}
		.title_text {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 6rpx;
			font-size: 34rpx;
			color: #FFFFFF;
			text-align: center;
		}
	}
	.pocket_list {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		padding: 74rpx 44rpx 44rpx;
		.pocket_item {
			color: #FF5200;
			.poket_top {
				position: relative;
				.cal_pic {
					width: 72rpx;
				}
				.cal_day {
					position: absolute;
					bottom: 2rpx;
					left: 0;
					right: 0;
					
					text-align: center;
					.day_en {
						font-size: 16rpx;
					}
					.day_num {
						font-size: 22rpx;
						font-weight: bold;
					}
				}
			}
			.poket_point {
				margin-top: 10rpx;
				font-size: 18rpx;
			}
		}
	}
}
</style>
