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
				<upload :amount="1" @tempImgPaths="acceptTempProfileImgPath"></upload>
			</view>
			<view class="head_box">
				<view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						商家轮播图（750*340）
					</view>
					<view class="h_text">
						已选择{{temBannerImgPaths.length}}张
					</view>
				</view>
				<upload amount="6" @tempImgPaths="acceptTempBannerImgPath"></upload>
			</view>
			<view class="head_box">
				<view class="shop_intro">
					<view class="h_title" style="margin-bottom: 34rpx;">
						企业介绍
					</view>
					<textarea v-model="shopIntro" placeholder="请输入商家介绍" style="width: 100%;height: 146rpx;"
						placeholder-style="font-size: 24rpx;color:#aaaaaa;" />
				</view>
				<view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						商家详情图（750*340）
					</view>
					<view class="h_text">
						已选择{{temDetailImgPaths.length}}张
					</view>
				</view>
				<upload :amount="6" @tempImgPaths="acceptTempDetailImgPath"></upload>
			</view>
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						商家名称
					</view>
					<input v-model="shopName" class="uni-input" placeholder="请输入商家名称"
						placeholder-class="placeholder_class" />
				</view>
				<view class="info_item flex_between">
					<view class="s_title">
						经营范围
					</view>
					<!-- <input v-model="businessRange" class="uni-input" placeholder="请输入商家经营的产品或业务" placeholder-class="placeholder_class" /> -->
					<uni-data-select v-model="businessRange" :localdata="range" placeholder="请选择" :clear="false"
						@change="changeRange"></uni-data-select>
				</view>
				<view class="info_item flex_between">
					<view class="s_title">
						手机验证
					</view>
					<input v-model="code" class="uni-input" placeholder="请输入验证码"
						placeholder-class="placeholder_class" />
					<view class="validate_code">
						获取验证码
					</view>
				</view>
				<view class="info_item flex_between">
					<view class="s_title">
						具体位置
					</view>
					<input v-model="address" class="uni-input" placeholder="输入地址或点击地图选择"
						placeholder-class="placeholder_class" />
					<image src="@/static/locate_orange.png" mode="widthFix" class="lo_pic" @click="getLocation"></image>
				</view>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title">《商家入驻须知》</text>
			</view>
			<view class="btn_full" @click="merchantSettleIn">
				申请入驻
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
		useUserStore
	} from '../../store/user';
	import {
		postMerchantSettleIn,
		uploadShopImg
	} from '../../service/shop';
	import {
		getCitiesDetail
	} from '../../service/divisions';

	import {
		uploadImage
	} from '../../utils';
	import {
		usePublicStore
	} from "@/store/public.js"
	const publicStore = usePublicStore()
	const userStore = useUserStore()
	const shopIntro = ref('')
	const shopName = ref('')
	const businessRange = ref('')
	const code = ref('')
	const temBannerImgPaths = ref([])
	const temProfileImgPaths = ref([])
	const temDetailImgPaths = ref([])
	// const range = ref([
	//     { value: "篮球", text: "篮球" },
	//     { value: "足球", text: "足球" },
	//     { value: "游泳", text: "游泳" },
	// ])

	const range = computed(() => {
		return publicStore.cateGoryList.map((item) => {
			console.log({
				value: item.id, // value 为 id
				text: item.name, // text 为 name
			});
			return {
				value: item.id, // value 为 id
				text: item.name, // text 为 name
			};
		});
	});



	const isChecked = ref(false)
	const changeCheck = () => {
		isChecked.value = !isChecked.value
	}

	const changeRange = (e) => {
		businessRange.value = e
		console.log(e)
	}


	const toSetInfo = () => {
		if (!isChecked.value) return uni.showToast({
			icon: 'none',
			title: '请阅读完须知后勾选同意'
		})
		uni.navigateTo({
			url: '/pages/merchant/merchant_set_info'
		})
	}
	const toManagement = () => {
		uni.navigateTo({
			url: '/pages/merchant/merchant_management'
		})
	}

	const acceptTempBannerImgPath = async (ImgPaths) => {
		temBannerImgPaths.value = ImgPaths
		console.log(temBannerImgPaths.value);
	}

	const acceptTempProfileImgPath = async (ImgPaths) => {
		temProfileImgPaths.value = ImgPaths
		console.log('tem', temProfileImgPaths.value);
	}

	const acceptTempDetailImgPath = async (ImgPaths) => {
		temDetailImgPaths.value = ImgPaths
		console.log(temDetailImgPaths.value);
	}


	//上传商家轮播图
	const bannerListUrl = ref([])
	const upLoadBannerImg = async (shop) => {
		for (let i = 0; i < temBannerImgPaths.value.length; i++) {
			//逐个向服务器传图片
			const url = await uploadImage(temBannerImgPaths.value[i])
            await uploadShopImg(url, 'banner',shop)
			bannerListUrl.value.push(url)
		}
	}

	//上传详情图
	const detailListUrl = ref([])
	const upLoadDetailImg = async (shop) => {
		for (let i = 0; i < temDetailImgPaths.value.length; i++) {
			//逐个向服务器传图片
			const url = await uploadImage(temDetailImgPaths.value[i])
			await uploadShopImg(url, 'avatar',shop)
			detailListUrl.value.push(url)
		}
	}

	//上传店铺头像
	const profileUrl = ref('')
	const uploadProfileImg = async () => {
		console.log(temProfileImgPaths.value[0]);
		const url = await uploadImage(temProfileImgPaths.value[0])
		console.log(url);
		profileUrl.value = url
	}





	const lat = ref('')
	const lon = ref('')
	const address = ref('')
	const getLocation = () => {
		uni.chooseLocation({
			success(res) {
				lat.value = res.latitude
				lon.value = res.longitude
				address.value = res.address + res.name

			}
		})
	}


	const merchantSettleIn = async () => {
		if (!isChecked.value) return uni.showToast({
			icon: 'none',
			title: '请阅读完须知后勾选同意'
		})
		console.log(
			!shopName.value,
			!address.value,
			!shopIntro.value,
			temDetailImgPaths.value.length === 0,
			temProfileImgPaths.value.length === 0,
			temBannerImgPaths.value.length === 0)
		console.log(
			shopIntro.value,
			shopName.value,
			address.value,
			temDetailImgPaths.value.length,
			temProfileImgPaths.value.length,
			temBannerImgPaths.value.length)
		//检查是否有任意一个值为空
		if (
			!shopName.value ||
			!address.value ||
			!shopIntro.value ||
			temDetailImgPaths.value.length.length === 0 ||
			temBannerImgPaths.value.length === 0 ||
			temProfileImgPaths.value.length === 0
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
			 const cityDetail=await getCitiesDetail()
			const {location}=await uni.getStorageSync('address_info')
			await uploadProfileImg()
			console.log('-----');
			console.log(shopName.value,shopIntro.value,[businessRange.value],profileUrl.value,address.value,location.lat,location.lng,cityDetail[0].id);
			 const res= await postMerchantSettleIn(shopName.value,shopIntro.value,[businessRange.value],profileUrl.value,address.value,location.lat,location.lng,cityDetail[0].id )
		console.log('-----!!!',res);
		
			await upLoadDetailImg(res?.id)
			await upLoadBannerImg(res?.id)
			// console.log('----11',businessRange.value,userStore.merchantInfo.id);
			//console.log(res);
			await userStore.fetchAllDataAction()
			uni.hideLoading()
			uni.showToast({
				title: "入驻成功",
				duration: 600,
				icon: 'success'
			})
			// await userStore.fetchAllDataAction()
			setTimeout(() => {
				uni.navigateTo({
					url: '/pages/merchant/merchant_management'
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
	.radio {
		text-align: center;
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