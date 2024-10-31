<template>
	<view>
		<navBar title="发布商品"></navBar>
		<view class="content">
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						商品名称
					</view>
					<input v-model="goodsName" class="uni-input" placeholder="请输入商品名称" placeholder-class="placeholder_class" />
				</view>
				<view class="info_item flex_between">
					<view class="s_title">
						商品分类
					</view>
					<uni-data-select
						v-model="businessRange"
						:localdata="range"
						placeholder="请选择"
						:clear="false"
						@change="changeRange"
					></uni-data-select>
					<!-- <input v-model="address" class="uni-input" placeholder="选择商品分类" placeholder-class="placeholder_class" />
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="lo_pic"></image> -->
				</view>
			</view>
			<view class="head_box">
				<view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						商品主图 
					</view>
					<view class="h_text">
						已选择{{temProductImgPaths.length}}张
					</view>
				</view>
				<upload :amount="6" @tempImgPaths="acceptTempProductImgPath"></upload>
			</view>
			<view class="head_box">
				<view class="shop_intro">
					<view class="flex_between" style="margin-bottom: 54rpx;">
						<view class="h_title">
							详情描述 
						</view>
						<view class="h_text">
							已选择{{temDetailImgPath.length}}张
						</view>
					</view>
					<textarea v-model="shopIntro" placeholder="请输入商品描述" style="width: 100%;height: 146rpx;" placeholder-style="font-size: 24rpx;color:#aaaaaa;" />
				</view>
				<upload :amount="6" @tempImgPaths="acceptTemDetailImgPath"  ></upload>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" @click="changeCheck" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title">《发布须知》</text>
			</view>
			<view class="btn_full" @click="confirm">
				发布商品
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { uploadImage } from '../../utils';
const shopIntro = ref('')
const goodsName = ref('')
const businessRange = ref('')
const code = ref('')
const address = ref('')

const range = ref([
    { value: "篮球", text: "篮球" },
    { value: "足球", text: "足球" },
    { value: "游泳", text: "游泳" },
])
const changeRange = (e)=>{
	businessRange.value=e
	console.log(e)
}
const toManagement = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_management'
	})
}
const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}
const confirm = ()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
}

const temProductImgPaths=ref([])
const acceptTempProductImgPath=async (ImgPaths)=>{
	temProductImgPaths.value=ImgPaths
}

const temDetailImgPath=ref([])
const acceptTemDetailImgPath=async (ImgPaths)=>{
	temDetailImgPath.value=ImgPaths
}


const productListUrl=ref([])
const upLoadProductImg=async ()=>{
	for(let i=0;i<temProductImgPaths.value.length;i++){
		//逐个向服务器传图片
		const url=await uploadImage(temProductImgPaths.value[i])
		//await uploadMerchantBanner(url)
		productListUrl.value.push(url)
	}
}

const detailListUrl=ref([])
const upLoadDetailtImg=async ()=>{
	for(let i=0;i<temDetailImgPath.value.length;i++){
		//逐个向服务器传图片
		const url=await uploadImage(temDetailImgPath.value[i])
		//await uploadMerchantBanner(url)
		detailListUrl.value.push(url)
	}
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
		// border-bottom: 1px solid #DDDDDD;
		margin-bottom: 50rpx;
	}
}
.shop_info {
	padding: 0 26rpx;
	background-color: #fff;
	margin-bottom: 20rpx;
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
			width: 16rpx;
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
.radio {
	// text-align: center;
	padding: 26rpx 0 38rpx;
	radio {
		transform:scale(0.6)
	}
	.read {
		font-size: 27rpx;
		color: #999999;
	}
	.c_title {
		font-size: 27rpx;
		color: #FC5908;
		font-family: HarmonyOS_Sans_SC_Medium;
	}
}
</style>