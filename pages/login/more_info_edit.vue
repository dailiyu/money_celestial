<template>
	<view>
		
		<view class="content">
			<view class="info_item flex_between">
				<view class="title">
					头像
				</view>
				<button open-type="chooseAvatar" class="flex_center chooseAvatar" @chooseavatar="chooseImg">
					<image :src="imagePath" mode="aspectFill" class="head" ></image>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pix"></image>
				</button>
			</view>
			<view class="info_item flex_between">
				<view class="title">
					昵称
				</view>
				<uni-easyinput type="nickname" class="uni-mt-5" v-model="name" ></uni-easyinput>
			</view>
	<!-- 		<view class="info_item flex_between">
				<view class="title">
					邮箱
				</view>
				<uni-easyinput class="uni-mt-5" v-model="email" ></uni-easyinput>
			</view> -->
			<view class="info_item flex_between">
				<view class="title">
					性别
				</view>
				<view class="flex_center" @click="getGender">
					<view class="email">
						{{gender?(gender=='male'?'男':'女'):'选择'}}
					</view>
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pix"></image>
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
					<image src="https://static.maxcang.com/appstatic/arrow-right.png" mode="widthFix" class="arrow_pix"></image>
				</view>
			</view>
			<view class="info_item flex_between" style="flex: 1;" >
				<view class="title">
					常居地<text style="color: red;">*</text>
				</view>
					<uni-data-picker 
										v-model="curData"
								      :localdata="cityData"
								      :value="selectedValues"
									  :clear-icon='false'
								      mode="region"
								      @change="onChange"
								      title="请选择省市"
								    ></uni-data-picker>
			</view>
			
			<view class="btn flex_center" @click="saveMessage">
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
import { onMounted, ref } from 'vue';
import { changeUserInfo } from '../../service/uer_profile';
import { uploadUrl } from '../../service/config';
import cityDataJson from "@/static/cityData.json"
import { uploadImage } from '../../utils';
import { useUserStore } from '../../store/user';

const userStore=useUserStore()

const curData=ref()

const userInfo=ref()

// 绑定选择的值
const selectedValues = ref([])

// 绑定省市名显示
const selectedProvince = ref('')
const selectedCity = ref('')

// 省市数据
const cityData = ref(cityDataJson)


onMounted(()=>{
	userInfo.value=uni.getStorageSync('userInfo')
	name.value=userInfo.value.name
	imagePath.value=userInfo.value.icon
	uploadSuccessUrl.value=userInfo.value.icon
	gender.value=userInfo.value.gender
	birthday.value=formatDate(userInfo.value.birthdate)  
	const  cityName=getCity(userInfo.value.residence)
	const provinceName=getProvinceName(userInfo.value.residence)
	curData.value=findValueByText(cityName)
	selectedProvince.value=provinceName
	selectedCity.value=cityName
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

const getCity=(fullAddress)=>{
  // 使用空格分割字符串，获取最后一个部分
  const parts = fullAddress.split(' ');
  return parts[parts.length - 1];
}

const getProvinceName=(fullAddress)=>{
  // 使用空格分割字符串，获取最后一个部分
  const parts = fullAddress.split(' ');
  return parts[0];
}



// 当选择器值变化时，处理选中的省和市
const onChange = (e) => {
  const selected = e.detail.value
  const province = cityData.value.find(item => item.value === selected[0])
  const city = province?.children?.find(item => item.value === selected[1])
	
  // 保存选择的省市名
   selectedProvince.value = e.detail.value[0].text ||''
   selectedCity.value =  e.detail.value[1].text ||''
  // 保存选中的省市值
  console.log( selectedProvince.value,selectedCity.value);
}


const skip = ()=>{
	uni.switchTab({
		url: '/pages/index/index'
	})
}

const name=ref('')
const imagePath=ref('')
const gender = ref('')
const email=ref('')
const uploadSuccessUrl=ref('')
const getGender = ()=>{
	uni.showActionSheet({
		itemList: ['男', '女'],
		success(res) {
			if (res.tapIndex == 0) {
				gender.value = 'male'
			} else {
				gender.value = 'female'
			}
		}
	})
}

const chooseImgInapp = async () => {
  // 选择图片
  uni.chooseImage({
    count: 1, // 限制用户只能选择一张图片
	crop:{
		width:500,
		height:500
	},
    success:async (res) => {
      const tempFilePaths = res.tempFilePaths;
      // 将选择的图片路径赋值给 imagePath 用于页面显示
      imagePath.value = tempFilePaths[0]; 
      console.log('-----选择的图片路径：', tempFilePaths[0]);
      // 调用上传图片方法
      const url=await uploadImage(tempFilePaths[0]);
	  uploadSuccessUrl.value=url
    },
    fail: (err) => {
      console.log('选择图片失败：', err);
    }
  });
};

const chooseImg = async (res) => {
	console.log('-----选择图片：', res);
  // 选择图片
  	const tempFilePaths = res.detail.avatarUrl;
	// 将选择的图片路径赋值给 imagePath 用于页面显示
	imagePath.value = tempFilePaths; 
	console.log('-----选择的图片路径：', tempFilePaths);
	// 调用上传图片方法
	const url=await uploadImage(tempFilePaths);
	uploadSuccessUrl.value=url
};

const token = uni.getStorageSync('accessToken'); // UniApp 中使用 uni.getStorageSync 代替 localStorage.getItem


	  
const validateEmail=(email)=> {
	    // 邮箱正则表达式
	    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	    // 测试邮箱是否匹配正则表达式
	    return emailPattern.test(email);
	  }
	  
	  
	  
const saveMessage=async()=>{
	// console.log(validateEmail(email.value));
	// if(!validateEmail(email.value)){
	// 	return uni.showToast({
	// 		title:"请输入正确的邮箱",
	// 		icon:"fail",
	// 		duration:700
	// 	})
	// }
	
	if(!name.value) {
		return uni.showToast({
			title:"昵称为必填项",
			icon:"error",
			duration:700
		})
	}

	if(!imagePath.value) {
		return uni.showToast({
			title:"头像为必填项",
			icon:"error",
			duration:700
		})
	}

	if(!selectedCity.value) {
		return uni.showToast({
			title:"常居地为必填项",
			icon:"error",
			duration:700
		})
	}
	uni.showLoading({
		title:"正在保存中"              
	})
	             
	const phoneNumber=uni.getStorageSync('phoneNumber')
	 changeUserInfo({phone_number:phoneNumber,name:name.value||'',icon:uploadSuccessUrl.value||'',gender:gender.value||'male',birthdate:birthday.value||'2024-10-09',residence: selectedProvince.value+' '+selectedCity.value||''}).then((res)=>{
		console.log('----',res);
		uni.setStorageSync('userInfo',res)
		uni.hideLoading()
		  uni.showToast({
		  	duration:1000,
			icon:'success',
			title:'保存成功'
		  })
		  setTimeout(()=>{
			  uni.switchTab({
			  	url:'/pages/index/index'
			  })
		  },1000)
	  }).catch((err)=>{
		  uni.showToast({
		  	duration:1000,
			icon:'fail',
			title:'保存失败'
		  })
	  })
	  
	  
}



const birthday = ref('')
const calendar = ref()
const openCalendar = ()=>{
	calendar._rawValue.open()
}
const confirm = (e)=>{
	birthday.value = e.fulldate
	console.log(birthday.value);
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

const formatDate=(dateString)=> {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
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
		:deep(.input-value){
				width: 469rpx;
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
	.chooseAvatar{
		display: inline-flex;
		border:0;
		text-align: right;
		justify-content: flex-end;
		margin: 0;
		padding: 0;
		&::after{
			border: none;
		}
	}
	
}


</style>
