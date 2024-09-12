<template>
	<view>
		<navBar title="完善信息" bgc="#1B46CC" :isSkip="true" @skip="skip"></navBar>
		<view class="content">
			<view class="info_item flex_between">
				<view class="title">
					头像
				</view>
				<view class="flex_center">
					<image src="" mode="aspectFill" class="head"></image>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pix"></image>
				</view>
			</view>
			<view class="info_item flex_between">
				<view class="title">
					昵称
				</view>
				<view class="flex_center">
					<view class="nickname">
						满小仓232203029
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pix"></image>
				</view>
			</view>
			<view class="info_item flex_between">
				<view class="title">
					邮箱
				</view>
				<view class="flex_center">
					<view class="email">
						添加
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pix"></image>
				</view>
			</view>
			<view class="info_item flex_between">
				<view class="title">
					性别
				</view>
				<view class="flex_center" @click="getGender">
					<view class="email">
						{{gender?gender:'选择'}}
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pix"></image>
				</view>
			</view>
			<view class="info_item flex_between" @click="openCalendar">
				<view class="title">
					生日
				</view>
				<view class="flex_center">
					<view class="email">
						{{birthday}}
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pix"></image>
				</view>
			</view>
			<view class="info_item flex_between" style="flex: 1;" @click="getLocation">
				<view class="title">
					常居地
				</view>
				<view class="flex_center" style="flex: 1;justify-content: flex-end;">
					<view class="email" style="flex: 1;">
						{{address}}
					</view>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pix"></image>
				</view>
			</view>
			
			<view class="btn flex_center">
				保存信息
			</view>
		</view>
		
		<uni-calendar 
			ref="calendar"
			:insert="false"
			@confirm="confirm"
		/>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const skip = ()=>{
	console.log(111)
}

const gender = ref('')
const getGender = ()=>{
	uni.showActionSheet({
		itemList: ['男', '女'],
		success(res) {
			if (res.tapIndex == 0) {
				gender.value = '男'
			} else {
				gender.value = '女'
			}
		}
	})
}
const birthday = ref('')
const calendar = ref()
const openCalendar = ()=>{
	calendar._rawValue.open()
}
const confirm = (e)=>{
	birthday.value = e.fulldate
}

const lat = ref('')
const lon = ref('')
const address = ref('')
const getLocation = ()=>{
	uni.chooseLocation({
		success(res) {
			lat.value = res.latitude
			lon.value = res.longitude
			address.value = res.address+res.name
		}
	})
}
</script>

<style lang="scss" scoped>
.content {
	padding: 40rpx 76rpx;
	.info_item {
		padding: 40rpx 0;
		border-bottom: 1px solid #ededed;
		&:last-child {
			border-bottom: none;
		}
		.title {
			font-size: 27rpx;
			margin-right: 20rpx;
		}
		.head {
			width: 68rpx;
			height: 68rpx;
			border-radius: 50%;
			background-color: #ccc;
		}
		.arrow_pix {
			width: 12rpx;
			margin-left: 30rpx;
			display: block;
		}
		.nickname {
			font-size: 24rpx;
			color: #BABABA;
		}
		.email {
			font-size: 24rpx;
			color: #1B46CC;
		}
	}
	.btn {
		width: 100%;
		height: 95rpx;
		background-color: #1B46CC;
		border-radius: 17rpx;
		color: #fff;
		margin-top: 200rpx;
		font-size: 30rpx;
	}
}
</style>
