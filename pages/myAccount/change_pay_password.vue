<template>
	<view class="page">
		<view class="card">
			<!--            <view>
                <button @click="onClear" style="background: #ff5500; color: #fff;">清除内容</button>
            </view> -->
			<view class="password">输入新密码：</view>
			<view class="body">
				<yi-code ref="code" :width="600" @onComplete="complete" @onChange="change"></yi-code>
			</view>
		</view>
		
	</view>
	<view class="verify-box">
		<view class="title">
			手机号：<text
				style="color: #BABABA;font-size: 20rpx;font-weight: normal;">{{ maskPhoneNumber(phoneNumber) }}</text>
		</view>
		<uni-easyinput v-model="verifyCode" placeholder="请输入验证码" :inputBorder="false" type="number"
			primaryColor="#FC5908">
			<template #right>
				<view class="send_btn flex_center" @click="toSendVerifyCode" v-if="!isCounting">
					发送验证码
				</view>
				<view class="countdown_time flex_center" v-if="isCounting">
					{{countdown}}s
				</view>
			</template><!--  -->
		</uni-easyinput>
	</view>
	<view class="btn_full" @click="enSure">
		确认
	</view>
</template>

<script setup>
	import {
		ref
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
	const verifyCode = ref('')
	let countdown = ref(120); // 初始倒计时秒数
	let countdownInterval; // 定时器
	let isCounting = ref(false); // 控制倒计时开关

	const onClear = () => {
		if (code.value) {
			code.value.clear();
		}
	};

	const complete = (code) => {
		password.value = code
		console.log(`complete: ${code}`);
	};

	const change = (code) => {
		password.value = ''
		console.log(`change: ${code}`);
	};


	const enSure = async () => {
		if (!verifyCode.value) {
			return uni.showToast({
				icon: 'none',
				title: '请输入验证码'
			})
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

	const toSendVerifyCode = async () => {
		if (phoneNumber.value.length !== 11) {
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
		if (phoneNumber.length === 11) {
			return phoneNumber.slice(0, 3) + '****' + phoneNumber.slice(-4);
		}
		return 'Invalid phone number';
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
					isCounting.value = false;
					console.log("倒计时结束");
				}
			}, 1000);
		}
	}
</script>

<style lang="scss" scoped>
	.verify-box {
		margin: 0 65rpx;

		.title {
			font-size: 24rpx;
			// margin-top: 58rpx;
			margin-bottom: 20rpx;
			font-weight: bold;
		}

		.send_btn {
			padding: 18rpx 38rpx;
			color: #FC5908;
			border: 1px solid #FC5908;
			border-radius: 100px;
			font-size: 21rpx;
		}

		.countdown_time {
			padding: 18rpx 38rpx;
			color: #eee;
			border: 2px solid #eee;
			border-radius: 100px;
			font-size: 21rpx;
			font-weight: 700;
		}

		:deep(.uni-easyinput__content) {
			border-radius: 100px;
			padding: 10rpx 14rpx;
		}
		
		:deep(.uni-easyinput__content-input) {
			font-size: 20rpx;
		}
	}


	.page {
		display: flex;
		flex-wrap: wrap;

		.card {
			width: 720rpx;
			margin: 50rpx auto;

			border-radius: 12rpx;

			.password {
				font-size: 24rpx;
				margin-left: 55rpx;
				font-weight: 600;
				margin-bottom: -10rpx;
			}

			.title {
				font-size: 14px;
				text-align: center;
				line-height: 30px;
				border-bottom: 1px solid #f0f0f0;
			}

			.body {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 150rpx;
			}

			:deep(.yi-code .yi-code-show .yi-code-show-item) {
				border: none;
				background-color: #fff;
			}
		}

		
	}
	.btn_full {
		margin-top: 400rpx;
		background-color: #FC5908;
		color: #fff;
	}
</style>