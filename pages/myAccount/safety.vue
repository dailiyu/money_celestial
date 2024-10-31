<template>
<navBar title="密码与安全"></navBar>
	<view class="list_box">
				<view class="list_item flex_between" @click="toEditLoginPassword">
					<view class="">
						修改登录密码
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>
				<view class="list_item flex_between" @click="toEditPayPassword">
					<view class="">
						修改支付密码
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pic"></image>
				</view>

			</view>
</template>

<script setup>
import { ref } from 'vue';
const toEditLoginPassword=()=>{
	uni.navigateTo({
		url:'/pages/myAccount/change_login_password'
	})
}
	
const toEditPayPassword=()=>{
	uni.navigateTo({
		url:'/pages/myAccount/change_pay_password'
	})
}
	
	
</script>

<style lang="scss" scoped>
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