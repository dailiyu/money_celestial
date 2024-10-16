<template>
	<view>
		<navBar title="店铺资料"></navBar>
		<view class="content">
			<view class="head_box flex_between" style="align-items: flex-start;">
				<view class="">
					<view class="h_title">
						店铺头像
					</view>
					<view class="h_text" style="margin-top: 42rpx;">
						可上传店铺照片或LOGO
					</view>
				</view>
				<upload amount="1" @uploadSuccessfulPaths="acceptSuccessProfileImgPath"></upload>
			</view>
			<view class="head_box">
				<view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						店铺轮播图
					</view>
					<view class="h_text">
						已选择{{ successBannerImgPaths.length}}张
					</view>
				</view>
				<upload amount="6" @uploadSuccessfulPaths="acceptSuccessBannerImgPath"></upload>
			</view>
			<view class="head_box">
				<view class="shop_intro">
					<view class="h_title" style="margin-bottom: 34rpx;">
						店铺介绍
					</view>
					<textarea v-model="shopIntro" placeholder="请输入店铺介绍" style="width: 100%;height: 146rpx;"
						placeholder-style="font-size: 24rpx;color:#aaaaaa;" />
				</view>
				<view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						店铺详情图）
					</view>
					<view class="h_text">
						已选择{{ successDetailImgPaths.length}}张
					</view>
				</view>
				<upload amount="6" @uploadSuccessfulPaths="acceptSuccessDetailImgPath"></upload>
			</view>
			<view class="shop_info">
			
				
				
			</view>
			
			<view class="btn_full" @click="saveStoreInfo">
				保存信息
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		computed,
		ref
	} from 'vue';
	import {
		postBindingStoreCategory,
		uploadMerchantBanner,
		uploadMerchantDetail
	} from '../../service/merchant';

	import {
		postMerchantSettleIn,
		uploadShopImg,
		changeShopInfo,
		updateShopImg
	} from '../../service/shop';
	
	import {
		uploadImage
	} from '../../utils';
	
	import {
		useUserStore
	} from '../../store/user';
	import { onLoad } from '@dcloudio/uni-app'
	const shopIntro = ref('')
	const userStore = useUserStore()
	const  successBannerImgPaths = ref([])
	const  successProfileImgPaths = ref([])
	const  successDetailImgPaths = ref([])
	// const range = ref([
	//     { value: "篮球", text: "篮球" },
	//     { value: "足球", text: "足球" },
	//     { value: "游泳", text: "游泳" },
	// ])



	const acceptSuccessBannerImgPath = async (ImgPaths) => {
		 successBannerImgPaths.value = ImgPaths
		console.log( successBannerImgPaths.value);
	}

	const acceptSuccessProfileImgPath = async (ImgPaths) => {
		 successProfileImgPaths.value = ImgPaths
		console.log(' success',  successProfileImgPaths.value);
	}

	const acceptSuccessDetailImgPath = async (ImgPaths) => {
		 successDetailImgPaths.value = ImgPaths
		console.log( successDetailImgPaths.value);
	}


	//关联商家轮播图
	const bannerListUrl = ref([])
	const associatedBannerImg = async () => {
			const phoneNumber=uni.getStorageSync('phoneNumber')
		for (let i = 0; i < successBannerImgPaths.value.length; i++) {
			bannerListUrl.value.push({image_url:successBannerImgPaths.value[i],image_type:'banner'})
		}
		console.log('组成的参数bannerListUrl',bannerListUrl.value);
	}
	
	//关联详情图
	const detailListUrl = ref([])
	const associatedDetailImg = async () => {
			const phoneNumber=uni.getStorageSync('phoneNumber')
		for (let i = 0; i < successDetailImgPaths.value.length; i++) {
			detailListUrl.value.push({image_url:successDetailImgPaths.value[i],image_type:'other'})
		}
		console.log('组成的参数detailListUrl',detailListUrl.value);
	}
	



	//关联店铺头像
	const profileUrl = ref('')
	const  userProfileUrls=ref([])
	const associatedProfileImg = async () => {
		profileUrl.value = successProfileImgPaths.value[0]
		userProfileUrls.value.push({image_url:successProfileImgPaths.value[0],image_type:'avatar'})
	}


const saveStoreInfo = async () => {
	
		//检查是否有任意一个值为空
		if (
			!shopIntro.value ||
			successProfileImgPaths.value.length === 0||
			successDetailImgPaths.value.length === 0||
			successBannerImgPaths.value.length === 0
		) {
			return uni.showToast({
				icon: 'none',
				title: '请填入完整信息',
			});
		}
		try {
			uni.showLoading({
				title: "正在保存中...",
			})
			const phoneNumber=uni.getStorageSync('phoneNumber')
			await associatedProfileImg()
			 await associatedDetailImg()
			  await associatedBannerImg()
			console.log({merchant:phoneNumber,description:shopIntro.value,avatar:profileUrl.value||'https://example.com/image.png'});
			 const res= await changeShopInfo(phoneNumber,{merchant:phoneNumber,description:shopIntro.value,avatar:profileUrl.value})
			console.log('-----!!!',res);
			
			const params=[...bannerListUrl.value,...detailListUrl.value,...userProfileUrls.value]
			console.log('图片列表参数',params);
		   await updateShopImg(phoneNumber,{images:params})

		
			uni.hideLoading()
			uni.showToast({
				title: "保存成功",
				duration: 600,
				icon: 'success'
			})
			 await userStore.fetchAllDataAction()
			setTimeout(() => {
				uni.redirectTo({
					url:'/pages/merchant/merchant_management'
				})
			}, 700)


		} catch (e) {
			console.log(e);
			uni.showToast({
				title: "出现错误",
				duration: 1000,
				icon: 'fail'
			})
			//TODO handle the exception
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
				color: #aaaaaa;
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