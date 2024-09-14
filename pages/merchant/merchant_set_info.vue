<template>
	<view>
		<navBar title="商家入驻"></navBar>
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
				<upload  :amount="1"  @tempImgPaths="acceptTempProfileImgPath"></upload>
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
				<upload amount="6" @tempImgPaths="acceptTempBannerImgPath"></upload>
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
						商家详情图（750*340）
					</view>
					<view class="h_text">
						已选择1张
					</view>
				</view>
				<upload :amount="6" @tempImgPaths="acceptTempDetailImgPath"></upload>
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
					<input v-model="businessRange" class="uni-input" placeholder="请输入商家经营的产品或业务" placeholder-class="placeholder_class" />
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
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title">《商家入驻须知》</text>
			</view>
			<view class="btn_full" @click="toManagement">
				申请入驻
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const shopIntro = ref('')
const shopName = ref('')
const businessRange = ref('')
const code = ref('')
const address = ref('')
const tempProfileFilePaths=ref('')
const temBannerImgPaths=ref([])
const temProfileImgPaths=ref([])
const temDetailImgPaths=ref([])
const getLocation = ()=>{
	uni.getLocation({
		success(res) {
			console.log(res)
		}
	})
}

const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}
const toSetInfo = ()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
	uni.navigateTo({
		url:'/pages/merchant/merchant_set_info'
	})
}
const toManagement = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/merchant_management'
	})
}

const  acceptTempBannerImgPath=async (ImgPaths)=>{
	temBannerImgPaths.value=ImgPaths
	console.log(temBannerImgPaths.value);
}

const acceptTempProfileImgPath= async (ImgPaths)=>{
	temProfileImgPaths.value=ImgPaths
	console.log(ImgPaths);
}

const acceptTempDetailImgPath= async (ImgPaths)=>{
	temDetailImgPaths.value=ImgPaths
	console.log(ImgPaths);
}




const upLoadBannerImg=async ()=>{
	for(let i=0;i<temBannerImgPaths.value.length;i++){
		//逐个向服务器传图片
	}
}




const chooseImg = async () => {
	console.log(111);
  // 选择图片
  uni.chooseImage({
    count: 1, // 限制用户只能选择一张图片
    success: (res) => {
      const tempFilePaths = res.tempFilePaths;
      // 将选择的图片路径赋值给 imagePath 用于页面显示
      tempProfileFilePaths.value = tempFilePaths[0]; 
      console.log('-----选择的图片路径：', tempFilePaths[0]);
    },
    fail: (err) => {
      console.log('选择图片失败：', err);
    }
  });
};







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
.btn_full {
	margin-top: 66rpx;
}
</style>