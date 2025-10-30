<template>
	<view>
		<view class="content">
			<!-- 密码输入 -->
			<view class="title">
				支付密码：
			</view>
			<uni-easyinput 
				v-model="password" 
				placeholder="请输入6位数字密码" 
				:inputBorder="false" 
				primaryColor="#FC5908"
				:type="showPassword ? 'text' : 'password'" 
				maxlength="6"
				@input="onPasswordInput"
			>
				<template #right>
					<view class="eye-icon" @click="togglePasswordVisibility">
						<uni-icons 
							:type="showPassword ? 'eye-slash' : 'eye'" 
							size="20" 
							color="#999"
						></uni-icons>
					</view>
				</template>
			</uni-easyinput>
			
			<view class="title">
				确认密码：
			</view>
			<uni-easyinput 
				v-model="ensure_password" 
				placeholder="请再次输入6位数字密码" 
				:inputBorder="false" 
				primaryColor="#FC5908"
				:type="showConfirmPassword ? 'text' : 'password'" 
				maxlength="6"
				@input="onConfirmPasswordInput"
			>
				<template #right>
					<view class="eye-icon" @click="toggleConfirmPasswordVisibility">
						<uni-icons 
							:type="showConfirmPassword ? 'eye-slash' : 'eye'" 
							size="20" 
							color="#999"
						></uni-icons>
					</view>
				</template>
			</uni-easyinput>

			<!-- 手机号和验证码 -->
			<view class="title">
				手机号：{{ maskPhoneNumber(phoneNumber) }}
			</view>
			
			<uni-easyinput 
				v-model="verifyCode" 
				placeholder="请输入验证码" 
				:inputBorder="false" 
				type="number" 
				primaryColor="#FC5908"
			>
				<template #right>
					<view
						class="send_btn flex_center"
						@click="toSendVerifyCode"
						v-if="!isCounting"
					>
						发送验证码
					</view>
					<view class="countdown_time flex_center" v-if="isCounting">
						{{ countdown }}s
					</view>
				</template>
			</uni-easyinput>

			<!-- 确认按钮 -->
			<view class="btn flex_center" @click="enSure">
				确定
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref, onUnmounted
	} from 'vue';
	import {
		useUserStore
	} from '../../store/user';
	import {
		changeUserInfo,
		sendVerifyCode
	} from '../../service/uer_profile';

	import {
		onShow
	} from '@dcloudio/uni-app'
	const userStore = useUserStore()
	const phoneNumber = ref()
	const password = ref()
	const ensure_password = ref()
	const verifyCode = ref('')
	let countdown = ref(120); // 初始倒计时秒数
	let countdownInterval = null; // 定时器
	let isCounting = ref(false); // 控制倒计时开关

	// 密码显示/隐藏控制
	const showPassword = ref(false);
	const showConfirmPassword = ref(false);

	// 检查密码是否为简单密码
	const isSimplePassword = (pwd) => {
		// 检查是否为连续数字（如123456, 654321）
		const isSequential = (str) => {
			for (let i = 0; i < str.length - 1; i++) {
				const diff = parseInt(str[i + 1]) - parseInt(str[i]);
				if (diff !== 1 && diff !== -1) {
					return false;
				}
			}
			return true;
		};
		
		// 检查是否为重复数字（如111111, 222222）
		const isRepeated = (str) => {
			return str.split('').every(char => char === str[0]);
		};
		
		// 检查常见简单密码
		const commonSimplePasswords = [
			'123456', '654321', '111111', '222222', '333333', 
			'444444', '555555', '666666', '777777', '888888', '999999', '000000',
			'123123', '456456', '789789'
		];
		
		if (commonSimplePasswords.includes(pwd)) {
			return true;
		}
		
		if (isSequential(pwd)) {
			return true;
		}
		
		if (isRepeated(pwd)) {
			return true;
		}
		
		return false;
	};


	const enSure = async () => {
		if (!password.value || !ensure_password.value || !verifyCode.value) {
			return uni.showToast({
				icon: "none",
				title: "请输入完整内容",
			});
		}
		
		if (!/^\d{6}$/.test(password.value)) {
			return uni.showToast({
				icon: "none",
				title: "支付密码必须为6位数字",
			});
		}
		
		if (isSimplePassword(password.value)) {
			return uni.showToast({
				icon: "none",
				title: "密码过于简单，请设置更安全的密码",
				duration: 2500
			});
		}
		
		if (!/^\d{6}$/.test(ensure_password.value)) {
			return uni.showToast({
				icon: "none",
				title: "确认密码必须为6位数字",
			});
		}
		
		if (password.value !== ensure_password.value) {
			return uni.showToast({
				icon: "none",
				title: "两次输入密码不一致",
			});
		}

		uni.showLoading({
			title: '正在修改中'
		})
		changeUserInfo({
			phone_number: phoneNumber.value,
			trade_psk: password.value,
			verify_code: verifyCode.value

		}).then(async (res) => {
			console.log('res', res);
			uni.hideLoading()
			uni.showToast({
				icon: 'success',
				title: '修改成功'
			})
			await userStore.fetchAllDataAction()
			uni.navigateBack()
		}).catch((err) => {
			console.log('err', err);
			uni.hideLoading()
			uni.showToast({
				icon: 'none',
				title: `修改失败,${err.data.error}`
			})
		})

	}



	onShow(async () => {
		phoneNumber.value = uni.getStorageSync('phoneNumber')
	})
	
	// 清理定时器
	onUnmounted(() => {
		if (countdownInterval) {
			clearInterval(countdownInterval);
		}
	})

	const toSendVerifyCode = async () => {
		if (!phoneNumber.value || phoneNumber.value.length !== 11) {
			return uni.showToast({
				icon: 'none',
				title: '请输入正确的手机号码'
			})
		}
		startCountdown()
		const result = await sendVerifyCode(phoneNumber.value)
		console.log(result);
	}
	
	const maskPhoneNumber = (phoneNumber) => {
		if (phoneNumber && phoneNumber.length === 11) {
			return phoneNumber.slice(0, 3) + '****' + phoneNumber.slice(-4);
		}
		return '';
	}

	const startCountdown = () => {
		if (!isCounting.value) {
			isCounting.value = true;
			countdown.value = 120;
			console.log(`倒计时开始: ${countdown.value}秒`);
			countdownInterval = setInterval(() => {
				countdown.value = countdown.value - 1;

				if (countdown.value <= 0) {
					clearInterval(countdownInterval);
					countdownInterval = null;
					isCounting.value = false;
					console.log("倒计时结束");
				}
			}, 1000);
		}
	}
	
	// 切换密码显示/隐藏
	const togglePasswordVisibility = () => {
		showPassword.value = !showPassword.value;
	};

	const toggleConfirmPasswordVisibility = () => {
		showConfirmPassword.value = !showConfirmPassword.value;
	};

	// 过滤输入，只允许数字
	const onPasswordInput = (e) => {
		const value = e.detail.value;
		const filteredValue = value.replace(/[^\d]/g, '').slice(0, 6);
		if (filteredValue !== value) {
			password.value = filteredValue;
		}
	};

	const onConfirmPasswordInput = (e) => {
		const value = e.detail.value;
		const filteredValue = value.replace(/[^\d]/g, '').slice(0, 6);
		if (filteredValue !== value) {
			ensure_password.value = filteredValue;
		}
	};
</script>

<style lang="scss" scoped>
page {
	background-color: #f8f8f8;
}

.content {
	padding: 40rpx 76rpx;
	background-color: #fff;
	min-height: 100vh;
}

.title {
	font-size: 24rpx;
	margin-top: 58rpx;
	font-weight: bold;
	color: #333;
}

:deep(.uni-easyinput__content) {
	border-radius: 100px;
	margin-top: 28rpx;
	background-color: #f5f5f5;
	border: 1px solid #FC5908;
}

:deep(.uni-easyinput__content-input) {
	font-size: 24rpx;
	color: #333;
}

.send_btn {
	padding: 18rpx 38rpx;
	color: #FC5908;
	border: 1px solid #FC5908;
	border-radius: 100px;
	font-size: 21rpx;
	background-color: #fff;
	white-space: nowrap;
}

.countdown_time {
	padding: 18rpx 38rpx;
	color: #999;
	border: 1px solid #ddd;
	border-radius: 100px;
	font-size: 21rpx;
	font-weight: 400;
	background-color: #f5f5f5;
	white-space: nowrap;
}

.btn {
	width: 100%;
	height: 95rpx;
	background-color: #FC5908;
	border-radius: 17rpx;
	color: #fff;
	margin-top: 172rpx;
	font-size: 30rpx;
	border: none;
	cursor: pointer;
}

.btn:active {
	opacity: 0.8;
	transform: scale(0.98);
}

/* 眼睛图标样式 */
.eye-icon {
	padding: 10rpx;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}

.eye-icon:active {
	opacity: 0.6;
}

/* Flex布局样式 */
.flex_center {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>