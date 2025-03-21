<template>
	<view class="page">
		<uni-icons type="left" size="20" color="#fff" @click="back"></uni-icons>
		<view class="page_top">
			<image src="https://static.maxcang.com/appstatic/my/daily-sign-bg.png" mode="widthFix" class="sign_bg"></image>
			<view class="duration_box flex_between">
				<view class="duration_day">
					你已连续签到<text style="font-size: 44rpx;font-weight: bold;">{{consecutive_days}}</text>天
				</view>
				<view class="point_box">
					<view class="">
						已到账积分
					</view>
					<view style="font-size: 118rpx;font-weight: bold;line-height: 118rpx;">
						{{total_points}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="content">
			<view class="red_pocket">
				<image src="https://static.maxcang.com/appstatic/my/sign-content-bg.png" mode="" class="content_bg" style="height: 250rpx;"></image>
				<view class="title_box">
					<image src="https://static.maxcang.com/appstatic/my/title-bg.png" mode="" class="title_bg" style="width: 480rpx;height: 64rpx;"></image>
					<view class="title_text">
						· 每日签到领积分红包 ·
					</view>
				</view>
				<view class="pocket_list flex_between">
					<view class="pocket_item" v-for="(item,index) in signDays" :key="index">
						<image src="https://static.maxcang.com/appstatic/my/red-pocket.png" mode="widthFix" style="width: 72rpx;" v-if="item.day>signData.length" @click="toSign(item, index)"></image>
						<view class="poket_top" v-else>
							<image src="https://static.maxcang.com/appstatic/my/pocket-calendar.png" mode="widthFix" class="cal_pic"></image>
							<view class="cal_day flex_center">
								<view class="day_en">
									Day
								</view>
								<view class="day_num">
									{{item.day}}
								</view>
							</view>
						</view>
						
						<view class="poket_point">
							积分+{{item.point}} 
						</view>
					</view>
				</view>
			</view>
			<view class="red_pocket">
				<image src="https://static.maxcang.com/appstatic/my/sign-content-bg.png" mode="" class="content_bg" style="height: 444rpx;"></image>
				<view class="title_box">
					<image src="https://static.maxcang.com/appstatic/my/title-bg.png" mode="" class="title_bg" style="width: 240rpx;"></image>
					<view class="title_text">
						· 活动须知 ·
					</view>
				</view>
				<view class="desc">
					<view class="desc_ttl">
						签到周期
					</view>
					<view class="desc_con">
						用户签到以首次签到日为起始，周期设定为 7 天。
					</view>
					<view class="desc_con">
						7 天周期结束后，系统会自动开启新的签到周期。
					</view>
					<view class="desc_ttl">
						连续周期
					</view>
					<view class="desc_con">
						此签到无补签功能，签到一旦中断（某天未签到），则需从第 1 天重新开始计算签到进度。
					</view>
					<view class="desc_con">
						连续签到 3 天可获得额外积分奖励。
					</view>
					<view class="desc_con">
						连续签到 7 天可获得更高积分奖励。
					</view>
					<view class="desc_con">
						完成 7 天签到后，即视为一个周期完成，后续再次签到将重新开始新周期计算。
					</view>
					<view class="desc_ttl">
						注意事项
					</view>
					<view class="desc_con">
						签到顺延的天数不能累计至下个签到周期，只要有一次未签到，当期签到进度就会作废。
					</view>
				</view>
			</view>
			<view class="red_pocket">
				<image src="https://static.maxcang.com/appstatic/my/sign-content-bg.png" mode="" class="content_bg" style="height: 754rpx;"></image>
				<view class="title_box">
					<image src="https://static.maxcang.com/appstatic/my/title-bg.png" mode="" class="title_bg" style="width: 340rpx;"></image>
					<view class="title_text">
						· 更多宝藏商家 ·
					</view>
				</view>
				<view class="desc">
					<shopList :list="shopLists"></shopList>
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { sign, sign_data } from '@/service/uer_profile';
import { isToday } from '@/utils/index.js'
import { getCityShopList } from '@/service/shop';

const signDays = ref([
	{
		day: 1,
		point: 10
	},
	{
		day: 2,
		point: 10
	},
	{
		day: 3,
		point: 30
	},
	{
		day: 4,
		point: 10
	},
	{
		day: 5,
		point: 10
	},
	{
		day: 6,
		point: 10
	},
	{
		day: 7,
		point: 50
	}
])

onMounted(()=>{
	getSignData()
	getList()
})

const consecutive_days = ref(0)
const signData = ref([])
const total_points = ref(0)
const getSignData = async()=>{
	const res = await sign_data()
	consecutive_days.value = res.consecutive_days
	signData.value = [...res.list]
	total_points.value = res.total_sign_in_points
	if (res.list.length) {
		const reverseArr = res.list.reverse()
		const combineData = signDays.value.map((item,index)=>{
			return {...item,...reverseArr[index]}
		})
		signDays.value = combineData
	}
	
}

const toSign = async(item, index)=>{
	if (signData.value?.length&&isToday(signData.value[0].sign_date)) return uni.showToast({
		icon: 'none',
		title: '今日已签到，不可重复签到'
	})
	// if (index && signDays.value[index-1].sign_date) {
	// 	if (isToday(signDays.value[index-1].sign_date)) return uni.showToast({
	// 		icon: 'none',
	// 		title: '今日已签到，不可重复签到'
	// 	})
	// } else if (index && !signDays.value[index].sign_date) return uni.showToast({
	// 	icon: 'none',
	// 	title: '不可提前签到'
	// })
	try {
		uni.showLoading({
			title: '签到中',
			mask: true
		})
		const res = await sign()
		uni.showToast({
			icon: 'none',
			title: res.message
		})
		getSignData()
		uni.hideLoading()
	} catch (err) {
		uni.showToast({
			icon: 'none',
			title: err.data.error
		})
	}
}
const shopLists = ref([])
const getList = async()=>{
	const city=uni.getStorageSync('city')
	const params = ref({
		category: '',
		name:city,
		page:1
	})
	// uni.showLoading({
	// 	title: '加载中'
	// })
	const {results,next} = await getCityShopList(params.value)
	shopLists.value.push(...results)
	// console.log('111',results)
	// if(!!next){
	// 	hasNext.value=true
	// 	curPage.value=curPage.value+1
	// }else{
	// 	hasNext.value=false
	// }
	
	// uni.hideLoading()
}
const back = ()=>{
	uni.navigateBack()
}
</script>

<style lang="scss" scoped>
image {
	display: block;
}
/* #ifndef MP-WEIXIN */
.uni-icons {
	position: fixed;
	top: 138rpx;
	left: 58rpx;
	z-index: 100;
}
/* #endif */
/* #ifdef MP-WEIXIN */
uni-icons {
	position: fixed;
	top: 138rpx;
	left: 58rpx;
	z-index: 100;
}
/* #endif */
.page {
	// background-color: #eb2022;
	background: linear-gradient(to right, #ef2d2e, #eb2022);
}
.page_top {
	position: relative;
	.sign_bg {
		width: 100%;
		display: block;
	}
	.duration_box {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 18%;
		color: #fff;
		flex-direction: column;
		.duration_day {
			font-size: 28rpx;
			margin-bottom: 19%;
		}
		.point_box {
			font-size: 32rpx;
			text-align: center;
		}
	}
}
.red_pocket {
	position: relative;
	margin-top: 60rpx;
	.content_bg {
		width: 100%;
		// height: 250rpx;
		
	}
	.title_box {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		.title_bg {
			// width: 480rpx;
			height: 64rpx;
		}
		.title_text {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			font-size: 34rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 64rpx;
		}
	}
	.pocket_list {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		padding: 74rpx 44rpx 44rpx;
		.pocket_item {
			color: #FF5200;
			text-align: center;
			.poket_top {
				position: relative;
				.cal_pic {
					width: 72rpx;
				}
				.cal_day {
					position: absolute;
					top: 30rpx;
					bottom: 2rpx;
					left: 0;
					right: 0;
					font-weight: bold;
					text-align: center;
					flex-direction: column;
					.day_en {
						font-size: 16rpx;
					}
					.day_num {
						font-size: 22rpx;
						
					}
				}
			}
			.poket_point {
				margin-top: 10rpx;
				font-size: 18rpx;
			}
		}
	}
	.desc {
		overflow: hidden;
		overflow-y: scroll;
		position: absolute;
		top: 74rpx;
		left: 44rpx;
		right: 44rpx;
		bottom: 44rpx;
		// padding: 74rpx 44rpx 44rpx;
		.desc_ttl {
			font-size: 26rpx;
			color: #FC5908;
			margin-bottom: 10rpx;
		}
		.desc_con {
			font-size: 24rpx;
			text-indent: 2em;
			margin-bottom: 10rpx;
		}
		:deep(.shop_item) {
			background-color: transparent;
			padding: 20rpx 0 0 ;
		}
	}
}
</style>
