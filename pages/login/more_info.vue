<template>
	<view>
		<navBar title="完善信息" bgc="#1B46CC" :isSkip="true" @skip="skip"></navBar>
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
import loginVue from './login.vue';
import { changeUserInfo } from '../../service/uer_profile';
import { uploadUrl } from '../../service/config';

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
    success: (res) => {
      const tempFilePaths = res.tempFilePaths;
      // 将选择的图片路径赋值给 imagePath 用于页面显示
      imagePath.value = tempFilePaths[0]; 
      console.log('-----选择的图片路径：', tempFilePaths[0]);
      // 调用上传图片方法
      uploadImage(tempFilePaths[0]);
    },
    fail: (err) => {
      console.log('选择图片失败：', err);
    }
  });
};

const token = uni.getStorageSync('accessToken'); // UniApp 中使用 uni.getStorageSync 代替 localStorage.getItem

// 上传图片
function uploadImage(filePath) {
  console.log(filePath);
  
  // 生成随机数作为文件名，可以结合当前时间戳确保唯一性
  const randomFileName = `file_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

  uni.uploadFile({
    url: uploadUrl, // 上传接口 URL
    filePath: filePath, // 需要上传的文件路径
    name: 'image_url', // 后台接收文件的字段名 (根据实际需求)
    header: {
      'Authorization': `Bearer ${token}`, // 将 JWT Token 添加到 Authorization 请求头中
      'Content-Type': 'multipart/form-data'
    },
    formData: {
      'file_name': randomFileName // 生成的随机文件名
    },
    success: (uploadFileRes) => {
      if (uploadFileRes.statusCode === 201) {
        const data = JSON.parse(uploadFileRes.data); // 解析返回的数据
        console.log('上传成功！');
        console.log('上传的图片 URL:', data);
        uploadSuccessUrl.value = data.image_url;
      } else {
        console.log('上传失败，状态码：', uploadFileRes.statusCode);
      }
    },
    fail: (err) => {
      console.log(err);
      console.error('上传文件出错:', err);
    }
  });
}




	  
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
	  changeUserInfo({name:name.value||'',icon:uploadSuccessUrl.value||'',gender:gender.value||'',birthdate:birthday.value||'',residence:address.value||'',email:email.value||''}).then((res)=>{
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
