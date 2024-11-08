<template>
	<view>
		<navBar title="代理争夺战 "></navBar>
		<view class="content">
			<view class="detail">
				<view class="desc">
					城市代理，未付保证金保护期即将失效！
				</view>
				<view class="desc">
					先下手者，真正坐享其成！
				</view>
				<view class="desc">
					敢抢才配拥有，立刻行动，才能高枕无忧！
				</view>
				<view class="titles flex_between">
					<view class="title_city">
						城市名称
					</view>
					<view class="title_status">
						状态
					</view>
				</view>
				<view class="list_box">
					<view class="list_item flex_between" v-for="(item,index) in list" :key="index">
						<view class="list_city">
							{{item.city_name}}
						</view>
						<view class="list_statue">
							{{item.application_status}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAllCityAgentRank } from '../../service/agent';

const list = ref([])
onMounted(async()=>{
	list.value = await getAllCityAgentRank()
	
})

</script>

<style lang="scss" scoped>
.content {
	position: relative;
	top: 0;
	width: 100%;
	min-height: 100vh;
	background-color: #95142a;
	background: url('https://static.maxcang.com/appstatic/agent/agent-rank-bg.png') no-repeat;
	background-size: 100% auto;
	text-align: center;
	.detail {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: calc(100vh - 770rpx);
		overflow: hidden;
		overflow-y: scroll;
		.desc {
			font-size: 28rpx;
			color: #FFFFFF;
			margin-bottom: 20rpx;
			font-weight: bold;
		}
		.titles {
			font-size: 36rpx;
			color: #A80205;
			font-weight: bold;
			padding: 0 40rpx;
			margin-top: 56rpx;
			.title_city {
				flex: 3;
				background-color: #F7E3AA;
				border-radius: 20rpx;
				margin-right: 14rpx;
				padding: 18rpx 0;
			}
			.title_status {
				flex: 4;
				background-color: #F7E3AA;
				border-radius: 20rpx;
				padding: 18rpx 0;
			}
		}
		.list_box {
			padding: 20rpx 40rpx;
			.list_item {
				line-height: 64rpx;
				.list_city {
					flex: 3;
					font-size: 32rpx;
					color: #FFFFFF;
				}
				.list_statue {
					flex: 4;
					font-size: 34rpx;
					color: #F7E3AA;
					font-weight: bold;
				}
			}
		}
	}
	
}
</style>
