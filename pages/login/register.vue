<template>
	<view>
		<navBar title="注册" bgc="#1B46CC"></navBar>
		<view class="content">
			<view class="title">
				手机号：
			</view>
			<uni-easyinput v-model="mobile" maxlength="11" placeholder="请输入手机号" :inputBorder="false" primaryColor="#1B46CC" type="number" />
			
			<uni-easyinput v-model="code" maxlength="6" placeholder="请输入验证码" :inputBorder="false" primaryColor="#1B46CC" type="number">
				<template #right>
					<view class="send_btn" @click="toSendVerifyCode" v-if="!isCounting">发送验证码</view>
					<view class="send_btn" v-if="isCounting">
						{{countdown}}s
					</view>
				</template>
			</uni-easyinput>
			
			<view class="title">
				密码：
			</view>
			<uni-easyinput v-model="password" placeholder="请输入密码（支持数字和字母）" :inputBorder="false" primaryColor="#1B46CC"
				type="password" @input="validatePassword" :trim="false" />
			<view class="password-tips">
				<view class="tip-item" :class="{ 'valid': passwordValidation.hasLength }">
					<text class="icon">{{ passwordValidation.hasLength ? '✓' : '✕' }}</text>
					<text>长度至少8位</text>
				</view>
				<view class="tip-item" :class="{ 'valid': passwordValidation.hasNumber }">
					<text class="icon">{{ passwordValidation.hasNumber ? '✓' : '✕' }}</text>
					<text>包含数字</text>
				</view>
				<view class="tip-item" :class="{ 'valid': passwordValidation.hasLowerCase }">
					<text class="icon">{{ passwordValidation.hasLowerCase ? '✓' : '✕' }}</text>
					<text>包含小写字母</text>
				</view>
				<view class="tip-item" :class="{ 'valid': passwordValidation.hasUpperCase }">
					<text class="icon">{{ passwordValidation.hasUpperCase ? '✓' : '✕' }}</text>
					<text>包含大写字母</text>
				</view>
			</view>
			<view class="title">
				确认密码：
			</view>
			<uni-easyinput v-model="password2" placeholder="再次输入密码" :inputBorder="false" primaryColor="#1B46CC"
				type="password" :trim="false" />
			<view class="btn flex_center" @click="toRegister">
				立即注册
			</view>
		</view>
	</view>
</template>

<script setup>
	import { useUserStore } from '@/store/user';
	 const userStore=   useUserStore()
	import {
		ref, reactive, onUnmounted
	} from 'vue';
import { postRegister, sendVerifyCode,postProfileLogin } from '@/service/uer_profile';
import { onShow } from '@dcloudio/uni-app'; 
	
	const mobile = ref('')
	const code = ref('')
	const password = ref('')
	const password2 = ref('')
	const version = ref('');
	
	// 密码验证状态
	const passwordValidation = reactive({
		hasLength: false,      // 长度至少8位
		hasNumber: false,      // 包含数字
		hasLowerCase: false,   // 包含小写字母
		hasUpperCase: false    // 包含大写字母
	})
	
	// 验证密码
	const validatePassword = () => {
		const pwd = password.value || ''
		passwordValidation.hasLength = pwd.length >= 8
		passwordValidation.hasNumber = /\d/.test(pwd)
		passwordValidation.hasLowerCase = /[a-z]/.test(pwd)
		passwordValidation.hasUpperCase = /[A-Z]/.test(pwd)
	}
	
	// 检查密码是否符合所有要求
	const isPasswordValid = () => {
		return passwordValidation.hasLength && 
		       passwordValidation.hasNumber && 
		       passwordValidation.hasLowerCase && 
		       passwordValidation.hasUpperCase
	}
	
onShow(()=>{
	version.value = uni.getSystemInfoSync().appVersionCode
	console.log(version.value);
	
})
	
const toRegister = async() => {
	if (mobile.value.length !== 11) return uni.showToast({
		icon: 'none',
		title: '请输入11位正确手机号'
	})

	if (!isPasswordValid()) return uni.showToast({
		icon:'none',
		title: '密码必须包含数字、大小写字母且长度至少8位'
	})
  if(password.value == password2.value){
	  uni.showLoading({
	  	
	  })
	  uni.showLoading({
	  	title: "正在注册中...",
	})
	if (code.value.length !== 6) return uni.showToast({
		icon: 'none',
		title: '请输入正确验证码'
	})

    postRegister({phone_number:mobile.value,password:password.value,verify_code:code.value}).then(async(res) => {
		// console.log('刚注册的用户信息',res);
	uni.hideLoading()
      uni.showToast({
        duration: 2000,
        icon: 'success',
        title: "注册成功"
      });
   //    userStore.loginAction(mobile.value, password.value);
	  // uni.setStorageSync('phoneNumber',mobile.value)
	 const result=await postProfileLogin({phone_number:mobile.value,password:password.value,version:version.value})
	 const { access, refresh } = result;
	 // 保存 Token
	 await uni.setStorageSync('accessToken', access);
	  await uni.setStorageSync('refreshToken', refresh);
	   console.log('accessToken', access);
	 await uni.setStorageSync('phoneNumber',mobile.value)
	 console.log('登录传入的手机号',mobile.value);
	 await userStore.getUserInfoAction()
      setTimeout(() => {
        uni.navigateTo({
          url: '/pages/login/more_info'
        });
      }, 2000); // 延迟 2 秒跳转
    }).catch((err) => {
		 console.log(err);
		uni.hideLoading()
      uni.showToast({
        duration: 2000,
        icon: 'none',
        title: err.data.error
      });
    });
  } else {
    uni.showToast({
      duration: 2000,
      icon: 'none',
      title: "密码不一致"
    });
  }
}

	
let isCounting = ref(false);
let countdown = ref(120);
let countdownInterval = null

// 清理定时器
onUnmounted(() => {
	if (countdownInterval) {
		clearInterval(countdownInterval);
	}
})
const  startCountdown=()=> {
    if (!isCounting.value) {
        isCounting.value = true;
        countdown.value = 120;
        // console.log(`倒计时开始: ${countdown.value}秒`);
        countdownInterval = setInterval(() => {
            countdown.value=countdown.value-1;
    
            if (countdown.value <= 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
                isCounting.value = false;
                // console.log("倒计时结束");
            }
        }, 1000);
    }
}
const toSendVerifyCode=async()=>{
	if(mobile.value.length!==11){
		return uni.showToast({
			icon:'none',
			title:'请输入正确的手机号码'
		})
	}
	startCountdown()
	const result=await sendVerifyCode(mobile.value)
	// console.log(result);
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
		width: 176rpx;
		height: 56rpx;
		line-height: 56rpx;
		text-align: center;
		// padding: 18rpx 38rpx;
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
	
	/* 密码验证提示样式 */
	.password-tips {
		margin-top: 20rpx;
		padding: 20rpx;
		background-color: #f8f8f8;
		border-radius: 12rpx;
	}

	.tip-item {
		display: flex;
		align-items: center;
		font-size: 22rpx;
		color: #999;
		margin-bottom: 10rpx;
		
		&:last-child {
			margin-bottom: 0;
		}
		
		.icon {
			margin-right: 10rpx;
			font-weight: bold;
			font-size: 24rpx;
		}
		
		&.valid {
			color: #52C41A;
			
			.icon {
				color: #52C41A;
			}
		}
	}
</style>