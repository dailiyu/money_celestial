<template>
	<view>
		<navBar title="完善信息" bgc="#1B46CC" :isShow="true" @clickRight="skip">
			<template class="skip" #right>
				跳过
			</template>
		</navBar>
		<view class="content">
			<view class="info_item flex_between">
				<view class="title">
					头像
				</view>
				<view class="flex_center" @click="chooseImg">
					<image :src="imagePath" mode="aspectFill" class="head" ></image>
					<image src="@/static/arrow-right.png" mode="widthFix" class="arrow_pix"></image>
				</view>
			</view>
			<view class="info_item flex_between">
				<view class="title">
					昵称
				</view>
				<uni-easyinput class="uni-mt-5" v-model="name" ></uni-easyinput>
			</view>
			<view class="info_item flex_between">
				<view class="title">
					邮箱
				</view>
				<uni-easyinput class="uni-mt-5" v-model="email" ></uni-easyinput>
			</view>
			<view class="info_item flex_between">
				<view class="title">
					性别
				</view>
				<view class="flex_center" @click="getGender">
					<view class="email">
						{{gender?(gender=='male'?'男':'女'):'选择'}}
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
			<view class="info_item flex_between" style="flex: 1;" >
				<view class="title">
					常居地
				</view>
					<uni-data-picker 
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
import { ref } from 'vue';
import { changeUserInfo } from '../../service/uer_profile';
import { uploadUrl } from '../../service/config';
import cityDataJson from "@/static/cityData.json"
import { uploadImage } from '../../utils';


// 绑定选择的值
const selectedValues = ref([])

// 绑定省市名显示
const selectedProvince = ref('')
const selectedCity = ref('')

// 省市数据
const cityData = ref(cityDataJson)

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
	uni.reLaunch({
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

const chooseImg = async () => {
  // 选择图片
  uni.chooseImage({
    count: 1, // 限制用户只能选择一张图片
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

const token = uni.getStorageSync('accessToken'); // UniApp 中使用 uni.getStorageSync 代替 localStorage.getItem


	  
const validateEmail=(email)=> {
	    // 邮箱正则表达式
	    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	    // 测试邮箱是否匹配正则表达式
	    return emailPattern.test(email);
	  }
	  
	  
	  
const saveMessage=async()=>{
	console.log(validateEmail(email.value));
	if(!validateEmail(email.value)){
		return uni.showToast({
			title:"请输入正确的邮箱",
			icon:"fail",
			duration:700
		})
	}
	if(!name.value||!uploadSuccessUrl.value||!gender.value||!birthday.value||!email.value||!selectedCity.value) {
		return uni.showToast({
			title:"请填入完整信息",
			icon:"fail",
			duration:700
		})
	}
	uni.showLoading({
		title:"正在保存中"              
	})
	             
	const phoneNumber=uni.getStorageSync('phoneNumber')
	 changeUserInfo({phone_number:phoneNumber,name:name.value||'',icon:uploadSuccessUrl.value||'',gender:gender.value||'',birthdate:birthday.value||'',residence: selectedProvince.value+' '+selectedCity.value||'',email:email.value||''}).then((res)=>{
		
		uni.setStorageSync('保存的最新用户信息',res)
		uni.hideLoading()
		  uni.showToast({
		  	duration:1000,
			icon:'success',
			title:'保存成功'
		  })
		  setTimeout(()=>{
			  uni.navigateTo({
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
