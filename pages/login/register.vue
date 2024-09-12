<template>
	<view>
		<navBar title="注册" bgc="#1B46CC"></navBar>
		<view class="content">
			<view class="title">
				手机号：
			</view>
			<uni-easyinput v-model="moblie" placeholder="请输入手机号" :inputBorder="false" primaryColor="#1B46CC"/>
			<uni-easyinput v-model="code" placeholder="请输入验证码" :inputBorder="false" type="password" primaryColor="#1B46CC">
				<template #right>
					<view class="send_btn flex_center">
						发送验证码
					</view>
				</template>
			</uni-easyinput>
			<view class="title">
				密码：
			</view>
			<uni-easyinput v-model="password" placeholder="密码长度最低6位" :inputBorder="false" primaryColor="#1B46CC" type="password"/>
			<view class="title">
				确认密码：
			</view>
			<uni-easyinput v-model="password2" placeholder="再次输入密码" :inputBorder="false" primaryColor="#1B46CC" type="password"/>
			
			<view class="btn flex_center">
				立即注册
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const moblie = ref('')
const code = ref('')
const password = ref('')
const password2 = ref('')
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
	color: #BABABA;
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
