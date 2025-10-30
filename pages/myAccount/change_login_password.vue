<template>
	<view>
		<view class="content">
			
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
			<uni-easyinput v-model="ensure_password" placeholder="再次输入密码" :inputBorder="false" primaryColor="#1B46CC"
				type="password" :trim="false" />
				<view class="title">
					手机号：{{ maskPhoneNumber(phoneNumber) }}
				</view>
				
				<uni-easyinput v-model="verifyCode" placeholder="请输入验证码" :inputBorder="false" type="number" primaryColor="#1B46CC">
					<template #right>
						<view class="send_btn flex_center" @click="toSendVerifyCode"  v-if="!isCounting">
							发送验证码
						</view>
						<view class="countdown_time flex_center"  v-if="isCounting">
							{{countdown}}s
						</view>
					</template><!--  -->
				</uni-easyinput>
			<view class="btn flex_center" @click="enSure">
				确定
			</view>
		</view>
	</view>
</template>m

<script setup>
	import { ref, reactive, onUnmounted } from 'vue';
import { useUserStore } from '../../store/user';
import { changeUserInfo, sendVerifyCode,changePassword } from '../../service/uer_profile';
	
	import { onShow } from '@dcloudio/uni-app'
	 const userStore= useUserStore()
	const phoneNumber=ref()
	const password=ref()
	const ensure_password=ref()
	const verifyCode=ref('')
	let countdown = ref(120); // 初始倒计时秒数
	let countdownInterval = null; // 定时器
	let isCounting = ref(false); // 控制倒计时开关
	
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
	const enSure=async()=>{
		if(!password.value||!ensure_password.value||!verifyCode.value){
			return uni.showToast({
			icon:'none',
			title:'请输入完整内容'
		  })
		}
		if (!isPasswordValid()) {
			return uni.showToast({
				icon: 'none',
				title: '密码必须包含数字、大小写字母且长度至少8位'
			})
		}
		if(password.value!==ensure_password.value){
			return uni.showToast({
			icon:'none',
			title:'两次输入密码不一致'
		  })
		}
		uni.showLoading({
			title:'正在修改中'
		})
	  	changePassword(
	phoneNumber.value,
		  password.value,
		 verifyCode.value
		  
	  ).then((res)=>{
		  console.log('res',res);
		  uni.hideLoading()
		  uni.showToast({
		  	icon:'success',
			title:'修改成功'
		  })
		  uni.clearStorage()
		  uni.navigateTo({
		  	url:'/pages/login/login'
		  })
	  }).catch((err)=>{
		  console.log('err',err);
		  uni.hideLoading()
		  uni.showToast({
			icon:'none',
		  	title:`修改失败,${err.data.error}`
		  })
	  })
	  
	}
	
   onShow(async()=>{
     phoneNumber.value=uni.getStorageSync('phoneNumber')
   })
	
	// 清理定时器
	onUnmounted(() => {
		if (countdownInterval) {
			clearInterval(countdownInterval);
		}
	})
	
	const toSendVerifyCode=async()=>{
		if(phoneNumber.value.length!==11){
			return uni.showToast({
				icon:'none',
				title:'请输入正确的手机号码'
			})
		}
		startCountdown()
		const result=await sendVerifyCode(phoneNumber.value)
		console.log(result);
	}
const  maskPhoneNumber=(phoneNumber)=>{
    if (phoneNumber.length === 11) {
        return phoneNumber.slice(0, 3) + '****' + phoneNumber.slice(-4);
    }
    return 'Invalid phone number';
}

const  startCountdown=()=> {
    if (!isCounting.value) {
        isCounting.value = true;
        countdown.value = 120;
        console.log(`倒计时开始: ${countdown.value}秒`);
        countdownInterval = setInterval(() => {
            countdown.value=countdown.value-1;
    
            if (countdown.value <= 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
                isCounting.value = false;
                console.log("倒计时结束");
            }
        }, 1000);
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
		color:  #FC5908;
		border: 1px solid  #FC5908;
		border-radius: 100px;
		font-size: 21rpx;
	}
	.countdown_time{
		padding: 18rpx 38rpx;
		color:  #eee;
		border: 2px solid  #eee;
		border-radius: 100px;
		font-size: 21rpx;
		font-weight: 700;
	}
	.btn {
		width: 100%;
		height: 95rpx;
		background-color: #FC5908;
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