<template>
	<view>
		<navBar title="注册" bgc="#1B46CC"></navBar>
		<view class="content">
			<view class="title">
				手机号：
			</view>
			<uni-easyinput v-model="mobile" maxlength="11" placeholder="请输入手机号" :inputBorder="false" primaryColor="#1B46CC" type="number" />
			<!-- <uni-easyinput v-model="code" placeholder="请输入验证码" :inputBorder="false" type="number" primaryColor="#1B46CC">
				<template #right>
					<view class="send_btn flex_center">
						发送验证码
					</view>
				</template>
			</uni-easyinput> -->
			<view class="title">
				密码：
			</view>
			<uni-easyinput v-model="password" placeholder="密码长度最低8位" :inputBorder="false" primaryColor="#1B46CC"
				type="password" />
			<view class="title">
				确认密码：
			</view>
			<uni-easyinput v-model="password2" placeholder="再次输入密码" :inputBorder="false" primaryColor="#1B46CC"
				type="password" />

			<view class="btn flex_center" @click="toRegister">
				立即注册
			</view>
		</view>
	</view>
</template>

<script setup>
	import { useUserStore } from '../../store/user';
	 const userStore=   useUserStore()
	import {
		ref
	} from 'vue';
import { postRegister } from '../../service/uer_profile';
	
	const mobile = ref('')
	const code = ref('')
	const password = ref('')
	const password2 = ref('')
	
	

	
const toRegister = async() => {
	// if (mobile.value.length !== 11) return uni.showToast({
	// 	icon: 'none',
	// 	title: '请输入正确手机号'
	// })

	if (password.value.length < 8 || password2.value.length < 8) return uni.showToast({
		icon:'none',
		title: '密码长度最低8位'
	})
  if(password.value == password2.value){
	  uni.showLoading({
	  	
	  })
	  uni.showLoading({
	  	title: "正在注册中...",
	  })
    postRegister(mobile.value, password.value).then((res) => {
		console.log('刚注册的用户信息',res);
	uni.hideLoading()
      uni.showToast({
        duration: 2000,
        icon: 'success',
        title: "注册成功"
      });
      userStore.loginAction(mobile.value, password.value);
	  uni.setStorageSync('phoneNumber',mobile.value)
      setTimeout(() => {
        uni.navigateTo({
          url: '/pages/login/more_info'
        });
      }, 2000); // 延迟 2 秒跳转
    }).catch((err) => {
		console.log(err.data);
      uni.showToast({
        duration: 2000,
        icon: 'error',
        title: err.data.phone_number[0]
      });
    });
  } else {
    uni.showToast({
      duration: 2000,
      icon: 'fail',
      title: "密码不一致"
    });
  }
}

	
	
	
</script>

<style lang="scss" scoped>
	.content {
		padding: 40rpx 76rpx;
	}

	:deep(.uni-easyinput__content) {
		padding-right: 20rpx;
		border-radius: 100px;
		margin-top: 28rpx;
	}

	:deep(.uni-easyinput__content-input) {
		font-size: 24rpx;
		color: #333;
	}

	.title {
		font-size: 24rpx;
		margin-top: 58rpx;
		font-weight: bold;
	}

	.send_btn {
		padding: 18rpx 38rpx;
		color: #1B46CC;
		border: 1px solid #1B46CC;
		border-radius: 100px;
		font-size: 21rpx;
	}

	.btn {
		width: 100%;
		height: 95rpx;
		background-color: #1B46CC;
		border-radius: 17rpx;
		color: #fff;
		margin-top: 172rpx;
		font-size: 30rpx;
	}
</style>