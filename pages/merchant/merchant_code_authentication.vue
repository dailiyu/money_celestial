<template>
	<view>
		<navBar title="商家码认证"></navBar>
		<view class="content">
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						账号
					</view>
					<input v-model="address" class="uni-input" placeholder="请输入商家码账号" placeholder-class="placeholder_class" />
				</view>
			</view>
			<view class="btn_full" @click="confirm">
				认证
			</view>
		</view>
		
		<uni-popup ref="contactPop" borderRadius="30rpx" background-color="#fff">
			<view class="step_pop">
				<view class="title">
					提示
				</view>
				<!-- <view class="top_content flex_center">
					<view class="">
						3833194083
					</view>
					<image src="https://static.maxcang.com/appstatic/copy.png" mode="widthFix" class="copy_pic" @click="copy"></image>
				</view> -->
				<view class="desc">
					商家码绑定后无法自行手动解除，如需解绑请联系客服，确认需求后一般 7 个工作日内处理。请谨慎操作。
				</view>
				<view class="btn_plain" @click="closeContactPop">
					确定
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { vertifyMerchant } from '@/service/merchant';
import { useUserStore } from '../../store/user';
import { substrateAddressValidator } from '../../utils';

onMounted(()=>{
	contactPop.value.open()
})
 const userStore=useUserStore()
const address = ref('')

const confirm = async()=>{
	if (!address.value){
		return uni.showToast({
			icon:'none',
			title: '请输入商家码地址'
		})
	}
	
	if(!substrateAddressValidator(address.value)){
		return uni.showToast({
			icon:'none',
			title: '请输入正确商家码地址'
		})
	}
	uni.showLoading({
		title: '认证中'
	})
	const phoneNumber=uni.getStorageSync('phoneNumber')
    vertifyMerchant(phoneNumber,{verification_account: address.value}).then((res)=>{
		userStore.fetchAllDataAction()
		uni.hideLoading()
		uni.showToast({
			icon: 'success',
			title: '认证成功'
		})
		uni.navigateBack()
	}).catch((err)=>{
		uni.hideLoading()
		uni.showToast({
			icon: 'error',
			title: '认证失败'
		})
	})
	
}

const contactPop = ref()
const closeContactPop = ()=>{
	contactPop.value.close()
}
</script>

<style lang="scss" scoped>
.shop_info {
	padding: 0 26rpx;
	background-color: #fff;
	margin-bottom: 23rpx;
	.info_item {
		padding: 40rpx 8rpx 40rpx 0;
		border-bottom: 1px solid #E3E3E3;
		&:last-child {
			border-bottom: none;
		}
		.s_title {
			font-size: 27rpx;
			margin-right: 40rpx;
		}
		.uni-input {
			flex: 1;
			margin-right: 10rpx;
			font-size: 24rpx;
			color:#333;
		}
		:deep(.placeholder_class) {
			font-size: 24rpx;
			color:#aaaaaa;
		}
	}
	
}
.btn_full {
	margin-top: 56rpx;
}
.step_pop {
	width: 566rpx;
	padding: 64rpx;
	text-align: center;
	.title {
		font-size: 36rpx;
		color: #FC5908;
		line-height: 28rpx;
		font-weight: bold;
		margin-bottom: 50rpx;
	}
	.top_content {
		font-size: 42rpx;
		// line-height: 28rpx;
		margin-bottom: 58rpx;
		.copy_pic {
			width: 27rpx;
			margin-left: 10rpx;
		}
	}
	.desc {
		font-size: 28rpx;
		margin-bottom: 64rpx;
		text-align: left;
	}
	.btn_plain {
		width: 340rpx;
	}
}
</style>
