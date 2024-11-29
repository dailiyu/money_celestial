<template>
	<view :style="navBarStyle" class="nav_bar">
		<view class="nav_item">
			<view class="picker-box">
				<!-- <picker @columnchange="bindProvinceChange" @change="bindCityChange"  mode="multiSelector" :range="cityData" range-key="name">
					<view class="uni-input">{{selectedCity||'请选择'}}</view>
				</picker> -->
				<cityPicker @changeCity="bindCityChange"></cityPicker>
			</view>
			<view class="name"><image
				class="title_logo"
				src="../../static/title_logo.png"
				mode="widthFix"
			/></view>
			<view class="select-box" v-if="token">
				<uni-data-select v-if="userStore.shopInfo.state==1" v-model="selectItem" :localdata="candidates"
					@change="change" placeholder="+" :clear='false' class="select" :isCustom="true"></uni-data-select>
				<uni-data-select v-else v-model="selectItem" :localdata="candidate_noScan" @change="change"
					placeholder="+" :clear='false' class="select" :isCustom="true"></uni-data-select>
			</view>


		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed,
		onMounted
	} from 'vue';
	import {
		onShow
	} from '@dcloudio/uni-app'
	import {
		useUserStore
	} from '../../store/user';
	import 
		cityDataMp
	from '@/static/cityDataMp.js';
	const cityData = ref([cityDataMp?.data, cityDataMp?.data[0].cityData])
	
	const token = uni.getStorageSync('accessToken')
	defineOptions({
		options: {
			styleIsolation: 'shared'
		}
	})
	const userStore = useUserStore()
	// 定义发射自定义事件
	const emit = defineEmits(['clickRight', 'changeCity', 'mask']);
	const candidates = ref([{
			value: 0,
			text: "扫一扫"
		},
		{
			value: 1,
			text: "积分码"
		},
	])
	const candidate_noScan = ref([{
		value: 1,
		text: "积分码"
	}, ])

	const selectItem = ref()

	// 定义组件的 props
	const props = defineProps({
		title: {
			type: String,
			default: ''
		},
		iconShow: {
			type: Boolean,
			default: true
		},
		bgc: {
			type: String,
			default: '#FC5908'
		},
		isShow: {
			type: Boolean,
			default: false
		},
		isSkip: {
			type: Boolean,
			default: false
		}
	});



	const scanCode = async () => {

		uni.scanCode({
			onlyFromCamera: true, // 只允许从摄像头扫码
			success: async (res) => {
				const scanResult = res.result.trim();
				// 验证是否为有效的11位手机号码
				if (/^\d{11}$/.test(scanResult)) {
					console.log('扫码结果: ', scanResult);
					uni.navigateTo({
						url: '/pages/merchant/point_gift?phone=' + scanResult
					});
				} else {
					// 如果扫码结果无效，继续等待用户重新扫码，不做任何其他操作
					console.warn('未扫描到有效的11位手机号码');
					uni.showToast({
						icon: 'none',
						title: '无效二维码，请重新扫码'
					})
				}
			},
			fail: (err) => {
				console.error('扫码失败: ', err);
				uni.showToast({
					title: '扫码失败',
					icon: 'none'
				});
			}
		});
	};




	const change = (e) => {
		if (e == 1) {
			// emit('mask',true)
			uni.navigateTo({
				url: '/pages/myAccount/point_code'
			})
		} else {
			// emit('mask',false)
			scanCode()
		}
	}



	// 定义响应式变量
	const statusBarHeight = ref('');

	// 在组件挂载时获取状态栏高度
	onMounted(() => {
		statusBarHeight.value = `${uni.getWindowInfo().statusBarHeight}px`;
	});

	// 计算导航栏样式
	const navBarStyle = computed(() => ({
		paddingTop: `calc(${statusBarHeight.value} + 80rpx)`,
		backgroundColor: props.bgc
	}));

	// 定义返回按钮点击事件
	const back = () => {
		uni.navigateBack();
	};


	const clickRight = () => {
		emit('clickRight');
	};
	
	const bindCityChange = (e)=>{
		emit('changeCity', e)
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
	}

	.nav_item {
		position: relative;
		.title_logo{
			// height: 42rpx;
			width: 186rpx;
		}
		.select-box {
			position: absolute;
			right: 0;
			top: 4rpx;

			.select {}

			:deep(.uni-popper__arrow_bottom) {
				border-bottom-color: transparent;
				left: unset;
				right: 0;
			}

			:deep(.uni-select__selector) {
				left: unset;
				right: 0;
			}
			
			// #ifdef MP-WEIXIN
			:deep(.uni-icons) {
				display: none;
			}
			:deep(.uni-select) {
				border: none;
				padding: 0;
				height: fit-content;
			}
			:deep(.uni-select__input-text) {
				color: #fff;
				height: 50rpx;
				width: 50rpx;
				border-radius: 50%;
				border: 1px solid #fff;
			}
			:deep(.uni-select__selector-item) {
				color: #333;
			}
			:deep(.uni-select__selector) {
				width: 150rpx;
				left: unset;
				right: 0;
			}
			:deep(.uni-popper__arrow_bottom) {
				left: unset;
				right: 10%;
			}
			:deep(.uni-select__input-box) {
				height: fit-content;
			}
			// #endif
		}


		.picker-box {
			position: absolute;
			left: 0;
			width: 200rpx;
			height: 50rpx;
			// float: left;
			line-height: 1.5625rem;
			text-align: left;

			::v-deep .uni-input {
				color: #fff;
				font-size: 28rpx;
				border: none;
			}
		}
		
		uni-text {
			color: #000;
		}
		
		.skip {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 24rpx;
		}
		
		// #ifndef MP-WEIXIN
		:deep(.input-value-border) {
			border: none;
		}
		
		:deep(.placeholder) {
			color: #fff;
		}
		
		:deep(.input-arrow) {
			border-color: #fff;
		}
		
		:deep(.selected-list) {
			color: #000;
		}
		
		:deep(.input-split-line) {
			color: #FC5908;
		}
		
		.uni-icons {
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
		
		
		
		:deep(.uni-select__selector) {
			color: #000;
			width: 140rpx;
		}
		
		:deep(.uni-stat__select) {
			// width: 30rpx;
			// height: 100rpx;
		
		}
		
		:deep(.uni-icons) {
			display: none;
		
		}
		
		:deep(.uni-select) {
			width: 40rpx;
			height: 40rpx;
			border-radius: 50%;
			padding: 0;
			align-items: center;
			justify-content: center;
		}
		
		:deep(.uni-select__input-box) {
			// margin-right: 10rpx;
			// margin-bottom: 5rpx;
		
		}
		
		:deep(.uni-select__input-text) {
			color: #fff;
		}
		
		:deep(.uni-select__input-placeholder) {
			font-size: 40rpx;
		}
		// #endif

	}
</style>