<template>
	<view>
		<uni-popup ref="signPopup" :is-mask-click="false">
			<view class="sign_pop">
				<image src="https://static.maxcang.com/appstatic/sign-pop.png" mode="widthFix" class="sign_pic" @click="toSign"></image>
				<image src="https://static.maxcang.com/appstatic/close-circle.png" mode="widthFix" class="close_btn" @click="close"></image>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
onMounted(()=>{
	// open()
})
const signPopup = ref()
const open = ()=>{
	signPopup.value.open()
}
const close = ()=>{
	signPopup.value.close()
}
const toSign = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/everyday_sign'
	})
}
defineExpose({open, close})
</script>

<style lang="scss" scoped>
.sign_pop {
	position: relative;
	.sign_pic {
		width: 600rpx;
		height: 1rpx;
	}
	.close_btn {
		position: absolute;
		top: 0;
		right: 0;
		width: 44rpx;
	}
}
</style>