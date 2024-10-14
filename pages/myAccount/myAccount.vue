<template>
	<navBar title="我的账户"></navBar>
	<view class="page">
		<view class="img-box">
			<image src="@/static/my/bg_my.png" class="img"></image>
		</view>
		<view class="content">
			<view class="profile" >
				<view class="avtar">
				<image class="img" :src="ionc_url" mode="" v-if="ionc_url"></image>
				<image class="img" src="@/static/my/avatar.jpg" mode=""></image>
				</view>
				<!-- <view class="name" v-if="user">
					点击登录
				</view> -->
				<view class="name">
					{{user_name||'default'}}
				</view>
				<view class="logout"  @click="logout">
					退出登录
				</view>
			</view>
			<view class="points-box">
				<view class="item" @click="toMyPoint">
					<image class="img" src="@/static/my/my_credits.png"></image>
					<text class="text">我的积分</text>
					<div class="text number">{{green_points}}</div>
				</view>
				<view class="item" @click="toPointAvailable">
					<image class="img" src="@/static/my/available_credits.png"></image>
					<text class="text">可用积分</text>
					<div class="text number">{{red_points}}</div>
				</view>
				<view class="item" @click="toPointAccount">
					<image class="img" src="@/static/my/credits_account.png"></image>
					<text class="text">积分账号</text>
					<div class="text number">{{user?obscureString(user):''}}</div>
				</view>
			</view>
			<view class="services">
				<view class="service_title flex">
					<image src="@/static/star.png" mode="widthFix" class="star_pic"></image>
					<view class="">
						我的服务
					</view>
				</view>
				<view class="service_bottom flex">
					<view class="service_item" @click="toEdteInfo">
						<image src="@/static/my/info.png" mode="widthFix" class="service_pic"></image>
						<view class="">
							个人信息
						</view>
					</view>
					<view class="service_item" @click="toRecord">
						<image src="@/static/my/record.png" mode="widthFix" class="service_pic"></image>
						<view class="">
							我的记录
						</view>
					</view>
				<!-- 	<view class="service_item">
						<image src="@/static/my/collect.png" mode="widthFix" class="service_pic"></image>
						<view class="">
							我的收藏
						</view>
					</view> -->
				</view>
			</view>
			<view class="services">
				<view class="service_title flex">
					<image src="@/static/star.png" mode="widthFix" class="star_pic"></image>
					<view class="">
						平台服务
					</view>
				</view>
				<view class="service_bottom flex">
					<view class="service_item">
						<image src="@/static/my/help.png" mode="widthFix" class="service_pic"></image>
						<view class="">
							帮助中心
						</view>
					</view>
					<view class="service_item">
						<image src="@/static/my/us.png" mode="widthFix" class="service_pic"></image>
						<view class="">
							关于我们
						</view>
					</view>
					<view class="service_item">
						<image src="@/static/my/service.png" mode="widthFix" class="service_pic"></image>
						<view class="">
							联系客服
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="services">
				<view class="service_title flex">
					<image src="@/static/star.png" mode="widthFix" class="star_pic"></image>
					<view class="">
						商家服务
					</view>
				</view>
				<view class="service_bottom flex">
					<view class="service_item">
						<image src="@/static/my/settle.png" mode="widthFix" class="service_pic"></image>
						<view class="">
							我要入驻
						</view>
					</view>
					<view class="service_item">
						<image src="@/static/my/entrance.png" mode="widthFix" class="service_pic"></image>
						<view class="">
							商家入口
						</view>
					</view>
				</view>
			</view> -->

		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAllPoint, getPointBindedAccount } from '@/service/point.js'
import { useUserStore } from '../../store/user'
import { obscureString } from '@/utils';
import { onShow } from '@dcloudio/uni-app'; 
const  userStore = useUserStore()

const accessToken = uni.getStorageSync('accessToken')

const ionc_url=ref()
const user_name=ref()

onShow(() => {
	ionc_url.value= uni.getStorageSync('userInfo').icon
	user_name.value=uni.getStorageSync('userInfo').name
	if (accessToken) {
		getPointInfo()
	}
});

// onMounted(()=>{
	
// 	ionc_url.value= uni.getStorageSync('userInfo').icon
// 	user_name.value=uni.getStorageSync('userInfo').name
// 	if (accessToken) {
// 		getPointInfo()
// 	}
// })
const green_points = ref(0)
const red_points = ref(0)
const user = ref('')
const getPointInfo = async()=>{
	const res = await getAllPoint()
	// 我的积分
	green_points.value = res.green_points
	// 可用积分
	red_points.value = res.red_points
	// user.value = res.user
	const {points_account} = await getPointBindedAccount()
	user.value = points_account
}
const toLogin = ()=>{
	uni.navigateTo({
		url: '/pages/login/login'
	})
}

const logout=()=>{
	uni.clearStorageSync()
	uni.redirectTo({
		url: '/pages/login/login'
	})
}


const toMyPoint = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/my_point'
	})
}
const toPointAvailable = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/point_available'
	})
}

const toEdteInfo=()=>{
	uni.navigateTo({
		url: '/pages/login/more_info_edit'
	})
}

const toPointAccount = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/point_account'
	})
}
const toRecord = ()=>{
	uni.navigateTo({
		url: '/pages/myAccount/all_records'
	})
}
</script>

<style lang="scss">
	.page {
		height: 100vh;
		width: 750rpx;

		.img-box {
			width: 750rpx;
			height: 250rpx;

			.img {
				width: 100%;
				height: 100%;
				// transform: translateY(-180rpx);

			}
		}

		.content {
			transform: translateY(-250rpx);
			padding: 0;
			margin: 0 32rpx;

			.profile {
				width: 750rpx;
				display: flex;
				align-items: center;

				.avtar {
					width: 110rpx;
					height: 110rpx;
					border-radius: 50%;
					// background-color: blue;
					margin-right: 40rpx;
					margin-left: 20rpx;
					overflow: hidden;
					.img{
						width: 100%;
						height: 100%;
					}
				}

				.name {
					font-family: HarmonyOS_Sans_SC_Bold;
					font-size: 30rpx;
					color: #FFFFFF;
					width: 340rpx;
				}       
				.logout{
					margin-right: 20rpx;
					// color: #54b1fd;
					padding: 12rpx 20rpx;
					color: #FC5908;
					font-size: 21rpx;
					background-color: #fff;
					border-radius: 100px;
				}
			}

			.points-box {
				display: flex;
				justify-content: space-around;
				align-items: center;
				width: 684rpx;
				height: 270rpx;
				margin-top: 15rpx;
				background-image: url('@/static/my/bg_credit.png');
				background-size: cover;
				padding: 0 10rpx;

				.item {
					flex: 1;
					
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.img {
						height: 75rpx;
						width: 75rpx;
					}

					.text {
						width: 100%;
						font-family: HarmonyOS_Sans_SC;
						margin-top: 15rpx;
						font-size: 24rpx;
						color: #333333;
						text-align: center;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}

					.number {
						font-family: HarmonyOS_Sans_SC;
						font-size: 18rpx;
						color: #888888;
						text-align: center;

					}
				}

			}
			.services {
				background-color: #FFFFFF;
				box-shadow: 1rpx 0rpx 15rpx 0rpx #f8f8f8;
				border-radius: 20rpx;
				padding: 20rpx;
				margin-top: 30rpx;
				.service_title {
					font-size: 27rpx;
					padding-left: 7rpx;
					border-bottom: 1px solid #DDDDDD;
					margin-bottom: 30rpx;
					padding-bottom: 20rpx;
					.star_pic {
						width: 40rpx;
						margin-right: 20rpx;
					}
				}
				.service_bottom {
					padding-left: 26rpx;
					.service_item {
						font-size: 21rpx;
						text-align: center;
						margin-right: 60rpx;
						.service_pic {
							width: 84rpx;
							height: 84rpx;
							border-radius: 50%;
							margin-bottom: 16rpx;
						}
					}
				}
			}
		}

	}
</style>