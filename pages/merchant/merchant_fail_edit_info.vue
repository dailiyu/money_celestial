<template>
	<view>
		<navBar title="更新店铺信息"></navBar>
		<view class="content">
			<view class="shop_info">
					<view class="info_item flex_between">
						<view class="s_title">
							店铺名称
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
					<!-- <view class="info_item flex_between">
						<view class="s_title">
							手机验证
						</view>
						<input v-model="code" class="uni-input" placeholder="请输入验证码" placeholder-class="placeholder_class" />
						<view class="validate_code">
							获取验证码
						</view>
					</view> -->
					<view class="info_item flex_between">
					<view class="s_title">
						联系方式
					</view>
					<input v-model="phone_number" @blur="valiPhoneNumberInput" class="uni-input" placeholder="请输入联系手机号"
						placeholder-class="placeholder_class" />
						
				</view>
				<view class="info_item flex_between" style="justify-content:start">
					<view class="s_title">
						营业时间
					</view>
					<view class="picker-box">
						<picker
						  class="time-picker"
						  @change="changeStartTime"
						  mode="multiSelector"
						  :style="{ color: start_time == '00:00' ? '#999' : '#333' }"
						  :range="timeRange"
						  >{{ start_time || "开店时间" }}</picker
						>一
						<picker
						  class="time-picker"
						  @change="changeEndTime"
						  mode="multiSelector"
						  :style="{ color: end_time == '00:00' ? '#999' : '#333' }"
						  :range="timeRange"
						  >{{ end_time || "关店时间" }}</picker
						>
					</view>
				</view>
					<view class="info_item flex_between" style="flex: 1;" >
						<view class="s_title" style="margin-right: 45rpx;">
							所在地
						</view>
							<uni-data-picker
							                   v-model="curData"
										      :localdata="cityData"
											  :clear-icon='false'
										      mode="region"
										      @change="onChange"
										      title="请选择省市"
										    ></uni-data-picker>
					</view>
					<view class="info_item flex_between">
						<view class="s_title">
							具体位置
						</view>
						<input v-model="address" class="uni-input"  placeholder-class="placeholder_class" />
						// #ifdef MP-WEIXIN
						<image src="https://static.maxcang.com/appstatic/locate_orange.png" mode="widthFix" class="lo_pic" @click="getLocation"></image>
						// #endif
					</view>
				</view >
			<!-- 	<view class="radio" @click="changeCheck">
					<radio value="r1" :checked="isChecked" color="#FC5908" />
					<text class="read">我已阅读并同意</text>
					<text class="c_title">《商家入驻须知》</text>
				</view> -->
			<view class="head_box flex_between" style="align-items: flex-start;">
				
				<view class="">
					<view class="h_title">
						店铺头像
					</view>
					<view class="h_text" style="margin-top: 42rpx;">
						可上传店铺照片或LOGO
					</view>
				</view>
				<upload  amount="1"   :imgWidth="800" :imgHeight="800" :imgUrls="avatarImages"  @uploadSuccessfulPaths="acceptSuccessProfileImgPath"></upload>
			</view>
			<view class="head_box">
				<view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						店铺轮播图  <text style="font-size: 20rpx;">(至少上传3张)</text>
					</view>
					<view class="tips_text">
					 第一张请上传门面照片
					</view>

				</view>
				<upload amount="6"  :imgWidth="900" :imgHeight="600" :imgUrls="bannerImages"  @uploadSuccessfulPaths="acceptSuccessBannerImgPath"></upload>
			</view>
			<view class="head_box">
				<view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						店铺营业执照照片
					</view>
					<view class="tips_text">
												<view class="">
													仅用于后台审核
												</view>
												<view class="">
													不显示在店铺页面
												</view>
											</view>
				</view>
				<upload amount="1"  :imgWidth="0" :imgHeight="0"  @uploadSuccessfulPaths="acceptSuccessAuthfileImgPath"   :imgUrls="authfileImages"  ></upload>
			</view>
		<view class="shop_info">
				<view class="info_item flex_between" >
					<view class="s_title">
						统一社会信用代码
					</view>
					<input  v-model="business_license" class="uni-input"  @blur="valiCreditCodedateInput" placeholder="请输入统一社会信用代码" placeholder-class="placeholder_class" />
				</view>
			</view >
				<view class="shop_info">
						<view class="info_item flex_between">
							<view class="s_title">
								赠送百分比
							</view>
							<input v-model="proportion_gift"  @blur="validateInput"   class="uni-input" placeholder="请输入1到1000之间的整数" placeholder-class="placeholder_class" />
					<view class="s_title">
						%
					</view>
						</view>
					</view >
			<view class="head_box">
				<view class="shop_intro">
					<view class="h_title" style="margin-bottom: 34rpx;">
						店铺介绍
					</view>
					<textarea   v-model="shopIntro" placeholder="请输入商家介绍" style="width: 100%;height: 146rpx;" placeholder-style="font-size: 24rpx;color:#aaaaaa;" />
				</view>
				<!-- <view class="flex_between" style="margin-bottom: 54rpx;">
					<view class="h_title">
						店铺详情图
					</view>
					<view class="h_text">
						已选择{{successDetailImgPaths.length}}张
					</view>
				</view>
				<upload amount="6"  :imgUrls="detailImages"    @uploadSuccessfulPaths="acceptSuccessDetailImgPath"></upload> -->
			</view>
			
			<view class="btn_full" @click="saveStoreInfo">
				保存
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
		useUserStore
	} from '../../store/user';
	import {
		changeShopInfo,
		postMerchantSettleIn,
		updateShopImg,
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

	import cityDataJson from "@/static/cityData.json"
	const shopInfo=uni.getStorageSync('shopInfo')
	const bannerImages =  shopInfo.images.filter(image => image.image_type === "banner").map(image => image.image_url);
	const detailImages =  shopInfo.images.filter(image => image.image_type === "other").map(image => image.image_url);
	const avatarImages =  shopInfo.images.filter(image => image.image_type === "avatar").map(image => image.image_url);
	const authfileImages =  shopInfo.images.filter(image => image.image_type === "authfile").map(image => image.image_url);
	const publicStore = usePublicStore()
	const userStore = useUserStore()
	const shopIntro = ref()
	const shopName = ref()
	const business_license=ref('')
	const proportion_gift=ref(100)
	const businessRange = ref()
	const code = ref('')
	const curData=ref()
	const end_time=ref('10:00')
	const start_time=ref('22:00')
	const phone_number=ref('')
	const successBannerImgPaths = ref([])
	const successProfileImgPaths = ref([])
	const successDetailImgPaths = ref([])
	const successAuthfileImgPaths = ref([])
onMounted(async()=>{
	await userStore.fetchAllDataAction()
	shopName.value=shopInfo.name
	shopIntro.value=shopInfo.description
	businessRange.value=shopInfo.categories[0]
	business_license.value=shopInfo.license_no
	proportion_gift.value=shopInfo.consume2coin_bit
	address.value=shopInfo.address
	start_time.value=shopInfo.business_time1||'00:00'
	end_time.value=shopInfo.business_time2||'00:00'
	phone_number.value=shopInfo.tel
	lon.value=shopInfo.longitude
	lat.value=shopInfo.latitude
	curData.value=findValueByText(shopInfo.city)
	selectedCity.value=shopInfo.city
	 successDetailImgPaths.value=detailImages
	 successProfileImgPaths.value=avatarImages
	 successBannerImgPaths.value=bannerImages
	 successAuthfileImgPaths.value=authfileImages
	console.log('---------',successDetailImgPaths.value,successProfileImgPaths.value,successBannerImgPaths.value);
	console.log(findValueByText(shopInfo.city.name));		
	console.log(cityDataJson);
	console.log("本地获取到的商铺信息",shopInfo);
})

const findValueByText=(text)=> {
  for (const province of cityDataJson) {
	 
    for (const city of province.children) {
		
      if (city.text === text) {
        return city.value;
      }
    }
  }
  return null;
}

// 绑定选择的值
const selectedValues = ref([])

// 绑定省市名显示
const selectedProvince = ref('')
const selectedCity = ref()

// 省市数据
const cityData = ref(cityDataJson)

// 当选择器值变化时，处理选中的省和市
const onChange = (e) => {
  const selected = e.detail.value
  const province = cityData.value.find(item => item.value === selected[0].value)
  const city = province?.children?.find(item => item.value === selected[1].value)
	console.log('选择的城市',curData.value);
  // 保存选择的省市名
   selectedProvince.value =province.text 
   selectedCity.value = city.text
  // 保存选中的省市值
  console.log(selected[0].text,province, city,selectedProvince.value,selectedCity.value);
}





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
		
	}


	const timeRange = ref([
	    ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
	    ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']
	])
	const changeStartTime=(event)=>{
		start_time.value=timeRange.value[0][event.detail.value[0]] + ':' + timeRange.value[1][event.detail.value[1]];
	}
	
	const changeEndTime=(event)=>{
			
			end_time.value=timeRange.value[0][event.detail.value[0]] + ':' + timeRange.value[1][event.detail.value[1]];
		}


	const acceptSuccessBannerImgPath = async (ImgPaths) => {
		successBannerImgPaths.value = ImgPaths
		console.log('接受到的上传成功Banner地址数组',successBannerImgPaths.value);
	}

	const acceptSuccessProfileImgPath = async (ImgPaths) => {
		successProfileImgPaths.value = ImgPaths
		console.log('接受到的上传成功Profile地址数组', successProfileImgPaths.value);
	}

	const acceptSuccessDetailImgPath = async (ImgPaths) => {
		successDetailImgPaths.value = ImgPaths
		console.log('接受到的上传Detail成功地址数组',successDetailImgPaths.value);
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
	
	
	
	//关联营业执照
		const authfileListUrl = ref([])
		const associatedAuthfileImg = async () => {
				const phoneNumber=uni.getStorageSync('phoneNumber')
			for (let i = 0; i < successAuthfileImgPaths.value.length; i++) {
				authfileListUrl.value.push({image_url:successAuthfileImgPaths.value[i],image_type:'authfile'})
			}
			console.log('组成的参数authfileListUrl',authfileListUrl.value);
		}
	
	//关联详情图
	const detailListUrl = ref([])
	const associatedDetailImg = async () => {
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
		console.log('组成的参数userProfileUrls',userProfileUrls.value);
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
				const addressObj = extractProvinceAndCity(res.address);
				selectedProvince.value = addressObj.province || "";
				selectedCity.value = addressObj.city || "";
				curData.value = findValueByText( selectedCity.value);
			}
		})
	}


	const saveStoreInfo = async () => {
	
	
		console.log(
			shopIntro.value,
			shopName.value,
			address.value,
			selectedCity.value,
			businessRange.value,
			successDetailImgPaths.value.length,
			successProfileImgPaths.value.length,
			successBannerImgPaths.value.length)
		//检查是否有任意一个值为空
		if (
			!shopName.value ||
			!address.value ||
			!shopIntro.value ||
			!businessRange.value||
			successProfileImgPaths.value.length === 0||
			successBannerImgPaths.value.length===0||
			successAuthfileImgPaths.value.length==0||
			!proportion_gift.value||
			!business_license.value||
			!selectedCity.value||
			!end_time.value||
			!start_time.value||
			!phone_number.value
		) {
			return uni.showToast({
				icon: 'none',
				title: '请填入完整信息',
			});
		}
		
		if(successBannerImgPaths.value.length<3){
					return uni.showToast({
						icon: 'none',
						title: '店铺轮播图至少上传3张',
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
		    await associatedAuthfileImg()
			 const res= await changeShopInfo(phoneNumber,{merchant:phoneNumber,city: selectedCity.value,categories:[businessRange.value],name:shopName.value,description:shopIntro.value,avatar:profileUrl.value,address:address.value,license_no:business_license.value,consume2coin_bit:proportion_gift.value,business_time1:start_time.value,
				business_time2:end_time.value,tel:phone_number.value, latitude:Number(lat.value),
				longitude:Number(lon.value),})

			const params=[...bannerListUrl.value,...detailListUrl.value,...userProfileUrls.value,...authfileListUrl.value]
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
					url:'/pages/merchant/before_create_merchant'
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
	
	const forbiddenTips=()=>{
		uni.showToast({
			icon:'none',
			title:'店铺常居地不允许修改'
		})
	}
	const showTips=()=>{
		uni.showToast({
			icon:'none',
			title:"不允许编辑！"
		})
	}
	
	const validateInput = () => {
		  const intValue = parseInt(proportion_gift.value, 10);
		  // 检查是否为有效整数并在范围内
		  if (isNaN(intValue) || intValue < 1 || intValue > 1000) {
		    uni.showToast({
		      title: '赠送百分比必须为1到1000的整数',
		      icon: 'none',
		      duration: 2000
		    });
		    proportion_gift.value = ''; // 清空输入或重置为合适值
		  } else {
		    proportion_gift.value = intValue; // 保证为整数
		  }
		};
	
	const extractProvinceAndCity = (address) => {
  // 匹配全国的省、自治区、特别行政区、市、地区、自治州、盟、县、自治县、旗、自治旗
  const regex =
    /(.*?(省|自治区|特别行政区))?(.*?(市|地区|自治州|盟|县|自治县|旗|自治旗))/;
  const match = address.match(regex);

  if (match) {
    let province = match[1] || ""; // 提取省、自治区、特别行政区
    let city = match[3] || ""; // 提取市、地区、自治州、盟、县、自治县等

    // 特殊处理直辖市
    const directCities = ["北京市", "上海市", "天津市", "重庆市"];
    if (directCities.includes(city)) {
      province = city; // 直辖市的省和市相同
    }

    return { province: province.trim(), city: city.trim() };
  }

  return { province: "", city: "" }; // 如果无法匹配，返回空值
};

const valiCreditCodedateInput = () => {
  const licenseValue = business_license.value.trim(); // 获取输入值并去除多余空格
  // 检查是否为18位
  if (licenseValue.length !== 18) {
    uni.showToast({
      title: '统一社会信用代码长度必须为18位',
      icon: 'none',
      duration: 2000
    });
    business_license.value = ''; // 清空输入或重置为合适值
  } else {
    business_license.value = licenseValue; // 确保输入被更新为修正后的值
  }
};

	
const valiPhoneNumberInput = () => {

	
  const telValue = phone_number.value.trim(); // 获取输入值并去除多余空格
  // 检查是否为11位
  if (telValue.length !== 11) {
    uni.showToast({
      title: '请输入正确手机号',
      icon: 'none',
      duration: 2000
    });
    phone_number.value = ''; // 清空输入或重置为合适值
  } else {
    phone_number.value = telValue; // 确保输入被更新为修正后的值
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
	}
	.tips_text{
			display: flex;
			flex-direction: column;
			align-items: end;
			font-size: 21rpx;
			color: #FC5908;
		}
	.h_text {
		font-size: 24rpx;
		color: #999999;
	}
	.shop_intro {
		border-bottom: 1px solid #DDDDDD;
		margin-bottom: 50rpx;
	}
	:deep(.uni-textarea-textarea){
		color: #333;
	}
}
.shop_info {
	padding: 0 26rpx;
	background-color: #fff;
	margin-bottom: 20rpx;
	.info_item {
		padding: 40rpx 8rpx 40rpx 0;
		border-bottom: 1px solid #E3E3E3;

		.picker-box{
				display: flex;
				align-items: center;
				width: 400rpx;
				.time-picker{
				
					padding: 0 40rpx;
					display: flex;
					font-size: 24rpx;
					color: #000;
					&:first-child{
						padding-left: 0;
					}
				}
				
			}
			:deep(.uni-data-tree){
				flex: 1;
				 width: 520rpx;
			}

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
			color: #333;
		}
		:deep(.uni-select__input-placeholder){
			color: #999999;
		}
	}
	
}
.btn_full {
	margin-top: 66rpx;
}
</style>