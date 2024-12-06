<template>
	<view style="padding: 30rpx;">
		<view class="api-item">
			<view class="title">Api密钥:</view>
			<view><input  :value="token"/> <span @click="paste(token)" class="tag">复制</span></view>
		</view>
		
		
		<view class="api-item">
			<view class="title">[GET]查询钱包余额Api:</view>
			<view><input  :value="wallet_url"/><span @click="paste(wallet_url)" class="tag">复制</span></view>
			
			
			
			<view>请求示例</view>
			<view class="code">
				curl '{{wallet_url}}' 
				  -H 'Authorization: Bearer [此处填密钥]' 
			</view>
			<view style="margin-top: 20rpx;">结果示例</view>
			<view>red_points：能量积分余额</view>
			<view>green_points：我的积分余额</view>
			<view>rateCny：当前人民币/美元 汇率</view>
			<view class="code">
				{
				    "user": "18888888888",
				    "red_points": "19974.000000",
				    "green_points": "22705.8344",
				    "rateCny": "7.12"
				}
			</view>
			
		</view>
		
		<view class="api-item">
			<view class="title">[POST]赠送积分Api:</view>
			<view><input  :value="given_url"/><span @click="paste(given_url)" class="tag">复制</span></view>
			<view>参数</view>
			<view>phone_number：用户手机号</view>
			<view>transaction_amount：到账积分数额</view>
			<view>请求示例</view>
			<view class="code">
				curl '{{given_url}}' 
				  -H 'Authorization: [此处填密钥]' 
				  -H 'Content-Type: application/json' 
				  --data-raw '{"phone_number":"18888888888","transaction_amount":"1404.4944"}' 
			</view>
			<view style="color: #ff0000;font-size: 24rpx;">
				备注：
				（1）到账积分数额=人民币消费价值/汇率*100 例如：用户消费100元，应当赠送100/7.12*100=1404.4944
				（2）同时系统将【到账积分数额】的16% 从 你账户中的【能量积分余额】扣除
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token:"",
				wallet_url:"https://api.maxcang.com/api/wallets/",
				given_url:"https://api.maxcang.com/api/orders/merchant/give/green/points/"
			}
		},
		onLoad() {
			this.token = uni.getStorageSync("accessToken");
		},
		methods: {
			paste(data){
				uni.setClipboardData({
					data:data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.api-item{
		background-color: #fff;
		padding: 20rpx;
		margin-bottom: 20rpx;
		input{
			background-color: #eee;
			padding: 10rpx;
			height: 50rpx;
			border-radius: 10rpx;
			margin: 10rpx 0;
		}
		.title{
			font-weight: bold;
			font-size: 30rpx;
		}
		.tag{
			display: inline-block;
			padding: 6rpx 20rpx; 
			background-color: #ff5555;
			border-radius: 10rpx;
			color: #fff;
		}
		.code{
			background-color: #333;
			color: #fff;
			padding: 10rpx;
			white-space: break-spaces;
			word-wrap: break-word;
		}
	}
</style>
