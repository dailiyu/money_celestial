<template>
	<view>
		<uni-popup ref="popup" border-radius="30rpx" background-color="#fff" :mask-click="false">
			<view class="modal-content flex-col">
				<text class="modal-title">请输入支付密码</text>
				
			<view class="password-input-section flex-col" @click="focusPasswordInput">
				<view class="password-dots flex-row">
					<view 
						v-for="(dot, index) in 6" 
						:key="index" 
						class="password-dot"
						:class="{
							filled: index < password.length,
							active: index === password.length && isFocused
						}"
					>
						<text v-if="index < password.length" class="password-star">*</text>
					</view>
				</view>
				<input 
					ref="passwordInput"
					class="transparent-input"
					cursor-color="#eee"
					v-model="inputPassword"
					type="number"
					maxlength="6"
					@input="onPasswordInput"
					@focus="onPasswordFocus"
					@blur="onPasswordBlur"
					style="caret-color: transparent !important; cursor: default;"
				/>
			</view>
				
				<!-- 验证码输入区域（可配置） -->
				<view v-if="needVerifyCode" class="verify-code-section flex-col">
					<view class="verify-label">手机号：{{ maskPhoneNumber(phoneNumber) }}</view>
					<view class="verify-input-wrapper">
						<input 
							v-model="verifyCode"
							type="number"
							maxlength="6"
							class="verify-input"
							placeholder="请输入验证码"
						/>
						<view 
							class="send-btn" 
							:class="{ disabled: !isPasswordComplete }" 
							@click="sendCode" 
							v-if="!isCounting"
						>
							发送验证码
						</view>
						<view class="countdown-btn" v-if="isCounting">
							{{ countdown }}s
						</view>
					</view>
				</view>
				
				<view class="modal-buttons flex-row">
					<view class="cancel-button flex-row" @click="close">
						<text class="cancel-text">取消</text>
					</view>
					<view class="confirm-button flex-row" @click="confirm">
						<text class="confirm-text">确定</text>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { sendVerifyCode } from '@/service/uer_profile.js'

const props = defineProps({
	needVerifyCode: {
		type: Boolean,
		default: false
	}
})

const emit = defineEmits(['confirm'])
const inputPassword = ref('')
const password = computed(() => inputPassword.value)
const phoneNumber = ref('')
const verifyCode = ref('')
const countdown = ref(120)
const isCounting = ref(false)
const isFocused = ref(false)
let countdownInterval = null

// 判断密码是否输入完成（6位）
const isPasswordComplete = computed(() => {
	return inputPassword.value && inputPassword.value.length === 6
})

const onPasswordFocus = () => {
	// 确保密码输入框获得焦点时设置焦点状态
	isFocused.value = true;
	console.log('密码输入框获得焦点');
}

const onPasswordBlur = () => {
	// 失去焦点时取消焦点状态
	isFocused.value = false;
	console.log('密码输入框失去焦点');
}

const focusPasswordInput = () => {
	// 点击密码点区域时聚焦到输入框
	nextTick(() => {
		if (passwordInput.value) {
			passwordInput.value.focus();
		}
	});
}

const onPasswordInput = () => {
	// 限制只能输入数字且不超过6位
	inputPassword.value = inputPassword.value.replace(/\D/g, '').substr(0, 6);
	
	// 如果输入了6位密码且不需要验证码，自动完成
	if (inputPassword.value.length === 6 && !props.needVerifyCode) {
		setTimeout(() => {
			complete(inputPassword.value);
		}, 200);
	}
}

const complete = (pwd, code) => {
	// 传递密码和验证码给父组件，由后端验证
	if (props.needVerifyCode) {
		emit('confirm', pwd, code)
	} else {
		emit('confirm', pwd)
	}
	close()
}

const confirm = () => {
	if (inputPassword.value.length !== 6) {
		return uni.showToast({
			icon: 'none',
			title: '请输入6位支付密码'
		})
	}
	
	// 如果需要验证码，检查验证码
	if (props.needVerifyCode) {
		if (!verifyCode.value) {
			return uni.showToast({
				icon: 'none',
				title: '请输入验证码'
			})
		}
		if (!/^\d{6}$/.test(verifyCode.value)) {
			return uni.showToast({
				icon: 'none',
				title: '请输入6位数字验证码'
			})
		}
		complete(inputPassword.value, verifyCode.value)
	} else {
		complete(inputPassword.value)
	}
}

const popup = ref('')
const passwordInput = ref('')

const open = async () => {
	// 清空密码和验证码输入
	inputPassword.value = ''
	verifyCode.value = ''
	isFocused.value = false
	
	// 如果需要验证码，获取手机号
	if (props.needVerifyCode) {
		const userInfo = uni.getStorageSync('userInfo')
		phoneNumber.value = userInfo?.phone_number || ''
	}
	
	popup.value.open()
	
	// 延迟聚焦，确保弹窗已打开
	setTimeout(() => {
		focusPasswordInput()
	}, 100)
}

const close = () => {
	// 清理倒计时
	if (countdownInterval) {
		clearInterval(countdownInterval)
		countdownInterval = null
		isCounting.value = false
	}
	isFocused.value = false
	popup.value.close()
}

// 发送验证码
const sendCode = async () => {
	// 检查密码是否输入完成
	if (!isPasswordComplete.value) {
		return uni.showToast({
			icon: 'none',
			title: '请先输入完整的支付密码'
		})
	}
	
	if (!phoneNumber.value || phoneNumber.value.length !== 11) {
		return uni.showToast({
			icon: 'none',
			title: '手机号码错误'
		})
	}
	
	if (isCounting.value) return
	
	try {
		uni.showLoading({
			title: '发送中...',
			mask: true
		})
		
		await sendVerifyCode(phoneNumber.value)
		startCountdown()
		
		uni.hideLoading()
		uni.showToast({
			icon: 'success',
			title: '验证码发送成功'
		})
	} catch (error) {
		uni.hideLoading()
		console.error('发送验证码失败:', error)
		uni.showToast({
			icon: 'none',
			title: error?.data?.error || '发送失败，请重试'
		})
	}
}

// 开始倒计时
const startCountdown = () => {
	if (isCounting.value) return
	
	isCounting.value = true
	countdown.value = 120
	
	countdownInterval = setInterval(() => {
		countdown.value--
		
		if (countdown.value <= 0) {
			clearInterval(countdownInterval)
			countdownInterval = null
			isCounting.value = false
		}
	}, 1000)
}

// 手机号掩码
const maskPhoneNumber = (phone) => {
	if (phone && phone.length === 11) {
		return phone.slice(0, 3) + '****' + phone.slice(-4)
	}
	return phone || ''
}

// 清空输入框的方法
const clearCode = () => {
	inputPassword.value = ''
	verifyCode.value = ''
	isFocused.value = false
}

defineExpose({
  open, close, clearCode
})
</script>

<style lang="scss" scoped>
.flex-col {
	display: flex;
	flex-direction: column;
}

.flex-row {
	display: flex;
	flex-direction: row;
}

.modal-content {
	background-color: #FFFFFF;
	border-radius: 30rpx;
	width: 603rpx;
	min-height: 644rpx;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	
	.modal-title {
		width: 207rpx;
		height: 29rpx;
		overflow-wrap: break-word;
		color: #333333;
		font-size: 30rpx;
		font-weight: 500;
		text-align: center;
		white-space: nowrap;
		line-height: 57rpx;
		margin: 80rpx 0 0 0;
	}
	
	.password-input-section {
		width: 495rpx;
		height: 79rpx;
		margin: 49rpx 0 0 0;
		position: relative;
		cursor: pointer;
		
		.password-dots {
			width: 495rpx;
			height: 79rpx;
			display: flex;
			flex-direction: row;
			
			.password-dot {
				background-color: #F8F8F8;
				border-radius: 10rpx;
				width: 79rpx;
				height: 79rpx;
				border: 0.94rpx solid #BABABA;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 0.2s ease;
				
				&:not(:first-child) {
					margin-left: 4rpx;
				}
				
				&.filled {
					border-color: #FC5908;
				}
				
				&.active {
					border-color: #FC5908;
					background-color: #FFF5F0;
					border-width: 2rpx;
					box-shadow: 0 0 0 2rpx rgba(252, 89, 8, 0.2);
				}
				
				.password-star {
					font-size: 48rpx;
					color: #333333;
					font-weight: bold;
					line-height: 1;
				}
			}
		}
		
		.transparent-input {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 79rpx;
			opacity: 0;
			background: transparent !important;
			color: transparent !important;
			border: none !important;
			outline: none !important;
			font-size: 32rpx;
			text-align: center;
			letter-spacing: 30rpx;
			z-index: 2;
			box-sizing: border-box;
			cursor: default !important;
			
			/* 隐藏光标 - 多浏览器兼容 */
			caret-color: transparent !important;
			-webkit-text-fill-color: transparent !important;
			-webkit-tap-highlight-color: transparent;
			-webkit-user-select: text;
			user-select: text;
			
			&:focus {
				outline: none !important;
				border: none !important;
				box-shadow: none !important;
				background: transparent !important;
				caret-color: transparent !important;
			}
			
			&:active {
				outline: none !important;
				border: none !important;
				box-shadow: none !important;
			}
		}
	}
	
	.verify-code-section {
		width: 494rpx;
		margin-top: 67rpx;
		
		.verify-label {
			width: 232rpx;
			height: 23rpx;
			overflow-wrap: break-word;
			color: #919191;
			font-size: 24rpx;
			font-weight: normal;
			text-align: left;
			white-space: nowrap;
			line-height: 27rpx;
			margin: 0 0 19rpx 38rpx;
		}
		
		.verify-input-wrapper {
			background-color: #F8F8F8;
			border-radius: 37rpx;
			width: 494rpx;
			height: 76rpx;
			position: relative;
			display: flex;
			align-items: center;
			
			.verify-input {
				width: 100%;
				height: 76rpx;
				background: transparent;
				border-radius: 37rpx;
				padding: 0 37rpx;
				padding-right: 160rpx;
				font-size: 24rpx;
				border: none;
				box-sizing: border-box;
				
				&::placeholder {
					color: #B0B0B0;
					font-size: 24rpx;
				}
			}
			
			.send-btn {
				position: absolute;
				right: 23rpx;
				top: 50%;
				transform: translateY(-50%);
				width: 128rpx;
				height: 42rpx;
				background: linear-gradient(90deg, #FC5908 0%, #FF8A3A 100%);
				border-radius: 21rpx;
				color: #FFFFFF;
				font-size: 16rpx;
				font-weight: 500;
				text-align: center;
				line-height: 42rpx;
				white-space: nowrap;
				cursor: pointer;
				transition: all 0.3s;
				
				&:active {
					opacity: 0.8;
				}
				
				&.disabled {
					background: #CCCCCC;
					color: #FFFFFF;
					cursor: not-allowed;
					opacity: 0.6;
					
					&:active {
						opacity: 0.6;
					}
				}
			}
			
			.countdown-btn {
				position: absolute;
				right: 23rpx;
				top: 50%;
				transform: translateY(-50%);
				width: 128rpx;
				height: 42rpx;
				background: #F5F5F5;
				border-radius: 21rpx;
				color: #999999;
				font-size: 16rpx;
				text-align: center;
				line-height: 42rpx;
				white-space: nowrap;
			}
		}
	}
	
	.modal-buttons {
		width: 494rpx;
		height: 78rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 64rpx 0 80rpx 0;
		
		.cancel-button {
			border-radius: 17rpx;
			height: 78rpx;
			border: 0.95rpx solid #BCBCBC;
			width: 238rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #FFFFFF;
			cursor: pointer;
			
			&:active {
				opacity: 0.8;
			}
			
			.cancel-text {
				width: 57rpx;
				height: 29rpx;
				overflow-wrap: break-word;
				color: #B0B0B0;
				font-size: 30rpx;
				font-weight: 500;
				text-align: center;
				white-space: nowrap;
				line-height: 27rpx;
			}
		}
		
		.confirm-button {
			height: 77rpx;
			background: linear-gradient(90deg, #FC5908 0%, #FF8A3A 100%);
			border-radius: 17rpx;
			width: 237rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			
			&:active {
				opacity: 0.8;
			}
			
			.confirm-text {
				width: 59rpx;
				height: 29rpx;
				overflow-wrap: break-word;
				color: #FFFFFF;
				font-size: 30rpx;
				font-weight: 500;
				text-align: center;
				white-space: nowrap;
				line-height: 27rpx;
			}
		}
	}
}

/* 微信浏览器适配 */
/* #ifdef H5 */
@media screen and (max-width: 750px) {
	.modal-content {
		width: 90%;
		max-width: 301.5px;
		padding: 30px 20px 20px;
		margin: 0 auto;
		
		.modal-title {
			font-size: 16px;
			margin-bottom: 25px;
			text-align: center;
		}
		
		.password-input-section {
			height: 30px;
			margin-bottom: 25px;
			width: 100%;
			
			.password-dots {
				height: 30px;
				gap: 0px;
				width: 100%;
				justify-content: center;
				
				.password-dot {
					width: 30px;
					height: 30px;
					border-radius: 5px;
					margin: 0 3px;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: all 0.2s ease;
					
					&.filled {
						border-color: #FC5908;
					}
					
					&.active {
						border-color: #FC5908;
						background-color: #FFF5F0;
						border-width: 1px;
						box-shadow: 0 0 0 1px rgba(252, 89, 8, 0.2);
					}
					
					.password-star {
						font-size: 24px;
						color: #333333;
						font-weight: bold;
						line-height: 1;
					}
				}
			}
			
			.transparent-input {
				height: 30px;
				font-size: 16px;
				letter-spacing: 15px;
				cursor: default !important;
				
				/* 隐藏光标 - 多浏览器兼容 */
				caret-color: transparent !important;
				-webkit-text-fill-color: transparent !important;
				-webkit-tap-highlight-color: transparent;
				-webkit-user-select: text;
				user-select: text;
				
				&:focus {
					outline: none !important;
					border: none !important;
					box-shadow: none !important;
					background: transparent !important;
					caret-color: transparent !important;
				}
				
				&:active {
					outline: none !important;
					border: none !important;
					box-shadow: none !important;
				}
			}
		}
		
		.verify-code-section {
			margin-bottom: 20px;
			
			.verify-label {
				font-size: 12px;
				margin-bottom: 8px;
			}
			
			.verify-input-wrapper {
				position: relative;
				
				.verify-input {
					height: 35px;
					padding: 0 10px;
					padding-right: 70px;
					font-size: 14px;
					border-radius: 6px;
					
					&::placeholder {
						font-size: 12px;
					}
				}
				
				.send-btn {
					right: 4px;
					padding: 0 10px;
					height: 27px;
					line-height: 27px;
					font-size: 11px;
					border-radius: 4px;
					
					&.disabled {
						background: #CCCCCC;
						color: #FFFFFF;
						cursor: not-allowed;
						opacity: 0.6;
					}
				}
				
				.countdown-btn {
					right: 4px;
					padding: 0 10px;
					height: 27px;
					line-height: 27px;
					font-size: 11px;
					border-radius: 4px;
				}
			}
		}
		
		.modal-buttons {
			gap: 15px;
			width: 100%;
			justify-content: space-between;
			
			.cancel-button, .confirm-button {
				height: 40px;
				border-radius: 8.5px;
				margin: 0 7.5px;
				
				.cancel-text, .confirm-text {
					font-size: 14px;
				}
			}
		}
	}
}
/* #endif */
</style>