<template>
	<view>
		<uni-popup ref="popup" border-radius="30rpx" background-color="#fff">
			<view class="pop_box">
				<view class="title">
					验证支付密码
				</view>
				<yi-code :maxlength="6" hide="*" @onComplete="complete"></yi-code>
				<!-- <view class="btn_plain" @click="confirm">
					确定
				</view> -->
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const popup = ref('')
onMounted(()=>{
	popup.value.open()
})
const emit = defineEmits(['confirm'])
const complete = (e)=>{
	const trade_psk = uni.getStorageSync('userInfo').trade_psk
	if (e !== trade_psk) return uni.showToast({
		icon: 'none',
		title: '密码不正确'
	})
	emit('confirm', e)
}

// const confirm = ()=>{
// 	if (password.value.length !==6) return uni.showToast({
// 		icon: 'none',
// 		title: '请输入完整密码'
// 	})
// 	emit('confirm')
// }
</script>

<style lang="scss" scoped>
.pop_box {
	padding: 68rpx 38rpx 78rpx;
	.title {
		font-size: 36rpx;
		color: #FC5908;
		margin-bottom: 80rpx;
		font-weight: bold;
		text-align: center;
	}
	:deep(.yi-code .yi-code-show .yi-code-show-item) {
		width: 72rpx;
		height: 72rpx;
		border-color: #918E8F;
		border-radius: 10rpx;
	}
}
.btn_plain {
	width: 340rpx;
	margin-top: 80rpx;
}
</style>