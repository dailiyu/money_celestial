<template>
	<view>
		<navBar title="资料编辑"></navBar>
		<view class="content">
			<view class="head_box flex_between" style="align-items: flex-start;">
				<view class="">
					<view class="h_title">
						商家头像（200*200）
					</view>
					<view class="h_text" style="margin-top: 42rpx;">
						可上传店铺照片或LOGO
					</view>
				</view>
				<upload :amount="1" @tempImgPaths="acceptProfileImg"></upload>
			</view>
			<view class="head_box">
				<view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						商家轮播图（750*340）
					</view>
					<view class="h_text">
						已选择1张
					</view>
				</view>
				<upload :amount="6"></upload>
			</view>
			<view class="head_box">
				<view class="shop_intro">
					<view class="h_title" style="margin-bottom: 34rpx;">
						企业介绍
					</view>
					<textarea :value="shopIntro" placeholder="请输入商家介绍" style="width: 100%;height: 146rpx;" placeholder-style="font-size: 24rpx;color:#aaaaaa;" />
				</view>
				<view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						商家轮播图（750*340）
					</view>
					<view class="h_text">
						已选择1张
					</view>
				</view>
				<upload :amount="6"></upload>
			</view>
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						商家名称
					</view>
					<input v-model="shopName" class="uni-input" placeholder="请输入商家名称" placeholder-class="placeholder_class" />
				</view>
				<view class="info_item flex_between">
					<view class="s_title">
						经营范围
					</view>
					<!-- <input v-model="businessRange" class="uni-input" placeholder="请输入商家经营的产品或业务" placeholder-class="placeholder_class" /> -->
					<uni-data-select
						v-model="businessRange"
						:localdata="range"
						placeholder="请选择"
						:clear="false"
						@change="changeRange"
					></uni-data-select>
				</view>
				<view class="info_item flex_between">
					<view class="s_title">
						手机验证
					</view>
					<input v-model="code" class="uni-input" placeholder="请输入验证码" placeholder-class="placeholder_class" />
					<view class="validate_code">
						获取验证码
					</view>
				</view>
				<view class="info_item flex_between">
					<view class="s_title">
						具体位置
					</view>
					<input v-model="address" class="uni-input" placeholder="输入地址或点击地图选择" placeholder-class="placeholder_class" />
					<image src="@/static/locate_orange.png" mode="widthFix" class="lo_pic" @click="getLocation"></image>
				</view>
			</view>
			<view class="btn_full" @click="toManagement">
				保存
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const shopIntro = ref('')
const shopName = ref('')
const code = ref('')
const address = ref('')
const profileImgTemPath=ref([])
const getLocation = ()=>{
	uni.getLocation({
		success(res) {
			console.log(res)
		}
	})
}
const toManagement = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_management'
	})
}

const  acceptProfileImg=(paths)=>{
	console.log(paths);
}

const businessRange = ref('')
const range = ref([
    { value: "篮球", text: "篮球" },
    { value: "足球", text: "足球" },
    { value: "游泳", text: "游泳" },
])
const changeRange = (e)=>{
	console.log(e)
}








</script>

<style lang="scss" scoped>
.head_box {
	background-color: #fff;
	padding: 34rpx 48rpx 34rpx;
	margin-bottom: 20rpx;
	.h_title {
		font-size: 27rpx;
	}
	.h_text {
		font-size: 24rpx;
		color: #999999;
	}
	.shop_intro {
		border-bottom: 1px solid #DDDDDD;
		margin-bottom: 50rpx;
	}
}
.shop_info {
	padding: 0 26rpx;
	background-color: #fff;
	.info_item {
		padding: 40rpx 8rpx 40rpx 0;
		border-bottom: 1px solid #E3E3E3;
		&:last-child {
			border-bottom: none;
		}
		.s_title {
			font-size: 27rpx;
			margin-right: 40rpx;
		}
		.uni-input {
			flex: 1;
			margin-right: 10rpx;
		}
		:deep(.placeholder_class) {
			font-size: 24rpx;
			color:#aaaaaa;
		}
		.validate_code {
			padding: 22rpx 26rpx;
			background-color: #FC5908;
			color: #fff;
			border-radius: 7rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24rpx;
		}
		.lo_pic {
			width: 26rpx;
		}
		uni-data-select {
			flex: 1;
		}
		:deep(.uni-select) {
			padding: 0;
			border: none;
		}
		:deep(.uni-select__input-box) {
			height: fit-content;
			justify-content: flex-start;
		}
		:deep(.uni-select__input-placeholder) {
			font-size: 24rpx;
			color: #999999;
		}
		:deep(.uni-select__input-text) {
			width: fit-content;
			font-size: 24rpx;
			color: #999999;
		}
	}
	
}
.btn_full {
	margin-top: 66rpx;
}
</style>