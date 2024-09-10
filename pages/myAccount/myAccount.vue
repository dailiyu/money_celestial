<template>
	<navBar title="我的账户" ></navBar>
	<view class="page">
		<view class="img-box">
			<image src="../../static/myAccount/bg_my.png"   class="img"></image>
		</view>
		<view class="content">
			<view class="profile">
				<view class="avtar">
					
				</view>
				<view class="name">
					满小仓
				</view>
			</view>
			<view class="points-box">
				<view class="item">
					<image class="img" src="../../static/myAccount/my_credits.png"></image>
					<text class="text">我的积分</text>
					<div class="text number">39182</div>
				</view>
				<view class="item">
					<image class="img" src="../../static/myAccount/available_credits.png"></image>
					<text class="text">可用积分</text>
					<div class=" number">100</div>
				</view>
				<view class="item">
					<image class="img" src="../../static/myAccount/credits_account.png"></image>
					<text class="text">积分账号</text>
					<div class="text number">DAUS*****3842</div>
				</view>
		</view>
	
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">
		.page{
			height: 100vh;
			width: 750rpx;
			.img-box{
				width: 750rpx;
				height: 250rpx;
				.img{
					width: 100%;
					transform: translateY(-180rpx);
				   
				}
			}
			.content{
				transform: translateY(-250rpx);
				padding: 0;
				margin: 0 32rpx;
				.profile{
					width: 750rpx;
					display: flex;
					align-items: center;
					
					.avtar{
						width: 110rpx;
						height: 110rpx;
						border-radius: 50%;
						background-color: blue;
						margin-right:40rpx ;
						margin-left: 20rpx;
					}
					.name{
						font-family: HarmonyOS_Sans_SC_Bold;
						font-size: 30rpx;
						color: #FFFFFF;
					}
				}
				.points-box{
					display: flex;
					justify-content: space-around;
					align-items: center;
					width: 684rpx;
					height: 270rpx;
					margin-top: 15rpx;
					background-image: url(@/static/myAccount/bg_credit.png) ;
					background-size: cover;
					.item{
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						.img{
							height: 75rpx;
							width: 75rpx;
						}
						.text{
							ont-family: HarmonyOS_Sans_SC;
							margin-top: 15rpx;
							font-size: 24rpx;
							color: #333333;
							text-align: center;
							
						}
						.number{
							font-family: HarmonyOS_Sans_SC;
							font-size: 18rpx;
							color: #888888;
							text-align: center;
							
						}
					}
					
				}
			}
			
		}
		
			
</style>
