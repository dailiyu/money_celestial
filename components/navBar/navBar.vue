<template>
	<view :style="{'padding-top': 'calc('+statusBarHeight+' + '+'60rpx)'}" class="nav_bar">
		<view class="nav_item">
			<uni-icons type="left" size="20" color="#fff" @click="back" v-if="iconShow"></uni-icons>
			<view class="">
				{{ title }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"navBar",
		data() {
			return {
				statusBarHeight: ''
			};
		},
		props: {
			title: {
				type: String
			},
			iconShow: {
				type: Boolean,
				default: true
			}
		},
		mounted() {
			this.statusBarHeight = uni.getWindowInfo().statusBarHeight+'px'
		},
		methods: {
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
.nav_bar {
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	z-index: 990;
	background-color: #FC5908;
	color: #fff;
	padding-left: 58rpx;
	padding-right: 58rpx;
	padding-bottom: 60rpx;
	font-size: 36rpx;
	text-align: center;
	.nav_item {
		position: relative;
		uni-icons {
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
}
</style>