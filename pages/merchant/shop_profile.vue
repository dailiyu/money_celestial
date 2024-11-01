<template>
	<view>
		<navBar title="店铺资料"></navBar>
		<view class="content">
			<view class="head_box flex_between" style="align-items: flex-start;">
				<view class="">
					<view class="h_title">
						店铺头像(800*800)
					</view>
					<view class="h_text" style="margin-top: 42rpx;">
						可上传店铺照片或LOGO
					</view>
				</view>
				<upload amount="1"  :imgWidth="800" :imgHeight="800" @uploadSuccessfulPaths="acceptSuccessProfileImgPath"></upload>
			</view>
			<view class="head_box">
				<view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						店铺轮播图(900*600)
					</view>
					<view class="tips_text">
						第一张请上传门面照片
					</view>
				</view>
				<upload amount="6"  :imgWidth="900" :imgHeight="600"  @uploadSuccessfulPaths="acceptSuccessBannerImgPath"></upload>
			</view>
				<view class="head_box">
					<view class="flex_between" style="margin-bottom: 54rpx;">
						<view class="h_title">
							店铺营业执照
						</view>
						<view class="tips_text">
							<view class="">
								仅做审核使用
							</view>
							<view class="">
								不显示在店铺页面
							</view>
						</view>
					</view>
					<upload ref="g11f"  amount="1"    @uploadSuccessfulPaths="acceptSuccessAuthfileImgPath"></upload>
				</view>
		<view class="head_box">
			<view class="info_item flex_between">
					<view class="h_title">
						营业执照编号
					</view>
				  <input v-model="business_license" class="uni-input" placeholder="请输入营业执照编号" placeholder-class="placeholder_class" />
			</view>
		</view>
		
			<view class="head_box">
						<view class="info_item flex_between">
							<view class="h_title">
								赠送百分比(%)
							</view>
							<input v-model="proportion_gift"  @blur="validateInput" class="uni-input" placeholder="请输入30到1000的整数" placeholder-class="placeholder_class" />
						
					   </view>
			</view>
			<view class="head_box">
				<view class="shop_intro">
					<view class="h_title" style="margin-bottom: 34rpx;">
						店铺介绍
					</view>
					<textarea v-model="shopIntro" placeholder="请输入店铺介绍" style="width: 100%;height: 146rpx;"
						placeholder-style="font-size: 24rpx;color:#aaaaaa;" />
				    </view>
					
				<!-- <view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						店铺门牌号(750*418)）
					</view>
					<view class="tips_text">
						<view class="">
							仅做审核使用
						</view>
						<view class="">
							不显示在店铺页面
						</view>
					</view>
				</view>
				<upload amount="6"  :imgWidth="750" :imgHeight="418"  @uploadSuccessfulPaths="acceptSuccessDetailImgPath"></upload> -->
			</view>
		
			
			<view class="btn_full" @click="saveStoreInfo">
				申请入驻
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		computed,
		onMounted,
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
	const proportion_gift = ref(100);
	const business_license=ref('')
	const userStore = useUserStore()
	const  successBannerImgPaths = ref([])
	const  successProfileImgPaths = ref([])
	const  successDetailImgPaths = ref([])
	const  successAuthfileImgPaths = ref([])
	
	
	// const range = ref([
	//     { value: "篮球", text: "篮球" },
	//     { value: "足球", text: "足球" },
	//     { value: "游泳", text: "游泳" },
	// ])

	onMounted(async()=>{
		const shopParams=await uni.getStorageSync('shopParams')
		console.log('第一步传来的店铺信息',shopParams);
	})

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
	
	const acceptSuccessAuthfileImgPath = async (ImgPaths) => {
		 successAuthfileImgPaths.value = ImgPaths
		console.log( successAuthfileImgPaths.value);
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
	
	//关联门面图
	const detailListUrl = ref([])
	const associatedDetailImg = async () => {
			const phoneNumber=uni.getStorageSync('phoneNumber')
		for (let i = 0; i < successDetailImgPaths.value.length; i++) {
			detailListUrl.value.push({image_url:successDetailImgPaths.value[i],image_type:'other'})
		}
		console.log('组成的参数detailListUrl',detailListUrl.value);
	}
	
	//关联营业执照
		const authfileListUrl = ref([])
		const associatedAuthfileImg = async () => {
				const phoneNumber=uni.getStorageSync('phoneNumber')
			for (let i = 0; i < successAuthfileImgPaths.value.length; i++) {
				authfileListUrl.value.push({image_url:successAuthfileImgPaths.value[i],image_type:'authfile'})
			}
			console.log('组成的参数authfileListUrl',authfileListUrl.value);
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
			successBannerImgPaths.value.length === 0||
			successAuthfileImgPaths.value===0||
			!business_license.value||
			!proportion_gift.value
		) {
			return uni.showToast({
				icon: 'none',
				title: '请填入完整信息',
			});
		}
		try {
			uni.showLoading({
				title: "正在入驻中...",
			})
			const phoneNumber=uni.getStorageSync('phoneNumber')
			await associatedProfileImg()
			await associatedDetailImg()
			await associatedBannerImg()
			await associatedAuthfileImg()
			console.log({merchant:phoneNumber,description:shopIntro.value,avatar:profileUrl.value||'https://example.com/image.png'});
			const shopParams=await uni.getStorageSync('shopParams')
			console.log('第一步传来的店铺信息',shopParams);
			await postMerchantSettleIn(shopParams)
			 const res= await changeShopInfo(phoneNumber,{merchant:phoneNumber,description:shopIntro.value,avatar:profileUrl.value,license_no:business_license.value,consume2coin_bit:proportion_gift.value/*  */})
			const params=[...bannerListUrl.value,...detailListUrl.value,...userProfileUrls.value,...authfileListUrl.value]
			console.log('图片列表参数',params);
		   await updateShopImg(phoneNumber,{images:params})

		
			uni.hideLoading()
			uni.showToast({
				title: "入驻成功",
				duration: 600,
				icon: 'success'
			})
			 await userStore.fetchAllDataAction()
			setTimeout(() => {
				uni.redirectTo({
					url:'/pages/merchant/before_create_merchant'
				})
			}, 700)


		} catch (e) {
			console.log(e);
			uni.showToast({
				title: e.data.error,
				duration: 1000,
				icon: 'none'
			})
			//TODO handle the exception
		}



	}

	const validateInput = () => {
	  const intValue = parseInt(proportion_gift.value, 10);
	  // 检查是否为有效整数并在范围内
	  if (isNaN(intValue) || intValue < 30 || intValue > 1000) {
	    uni.showToast({
	      title: '赠送百分比必须为30到1000的整数',
	      icon: 'none',
	      duration: 2000
	    });
	    proportion_gift.value = ''; // 清空输入或重置为合适值
	  } else {
	    proportion_gift.value = intValue; // 保证为整数
	  }
	};
	
</script>


<style lang="scss" scoped>
	.head_box {
		background-color: #fff;
		padding: 34rpx 48rpx 34rpx;
		margin-bottom: 20rpx;

		.h_title {
			font-size: 27rpx;
			.text{
				margin-left: 5rpx;
				color: red;
				font-size: 20rpx;
			}
		}

		.h_text {
			font-size: 24rpx;
			color: #999999;
		}
		.tips_text{
			display: flex;
			flex-direction: column;
			align-items: end;
			font-size: 21rpx;
			color: #FC5908;
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