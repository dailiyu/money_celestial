<template>
	<view>
		<uni-popup ref="popup" border-radius="30rpx" background-color="#fff">
			<view class="success_pop" v-if="status=='success'">
				<image src="@/static/success.png" mode="widthFix" class="su_icon"></image>
				<view class="su_text">
					兑换提交成功
				</view>
				<view class="su_content">
					<view class="">
						我们2h内对您的兑换请求进行验证
					</view>
					<view class="">
						您可以在兑换记录里进行查看
					</view>
				</view>
				<view class="btn_plain" @click="close">
					我知道了
				</view>
			</view>
			<view class="success_pop" v-if="status=='fail'">
				<image src="@/static/fail.png" mode="widthFix" class="su_icon"></image>
				<view class="su_content">
					<view class="">
						兑换账号不存在，请输入正确的
					</view>
					<view class="">
						兑换账户地址
					</view>
				</view>
				<view class="btn_plain" @click="close">
					我知道了
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name:"popup",
		data() {
			return {
			};
		},
		props: {
			status: {
				type: String
			}
		},
		mounted() {
			// this.$refs.popup.open()
		},
		methods: {
			close(){
				this.$refs.popup.close()
			},
			open(){
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss" scoped>
.success_pop {
	width: 566rpx;
	padding: 93rpx 80rpx 80rpx;
	text-align: center;
	.su_icon {
		width: 106rpx;
		margin-bottom: 30rpx;
	}
	.su_text {
		font-size: 30rpx;
		color: #63D25B;
		margin-bottom: 50rpx;
	}
	.su_content {
		font-size: 26rpx;
		color: #333333;
		margin-bottom: 58rpx;
	}
	.btn_plain {
		width: 343rpx;
	}
}
</style>