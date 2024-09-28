<template>
	<view>
		<navBar title="保证金记录"></navBar>
		<uni-row class="title_row">
			<uni-col :span="3">
				<view class="title">序号</view>
			</uni-col>
			<uni-col :span="7">
				<view class="title">地址</view>
			</uni-col>
			<uni-col :span="6">
				<view class="title">保证金</view>
			</uni-col>
			<uni-col :span="8">
				<view class="title">提取时间</view>
			</uni-col>
		</uni-row>
		
		<uni-row v-for="(item, index) in recordList" :key="index">
			<uni-col :span="3">
				<view>{{index+1}}</view>
			</uni-col>
			<uni-col :span="7">
				<view>{{item.user}}</view>
			</uni-col>
			<uni-col :span="6">
				<view style="color: #4cbe61;" v-if="item.action_type == 'increase'">+{{item.amount_changed}}</view>
				<view style="color: #fd8c31;" v-if="item.action_type == 'decrease'">-{{item.amount_changed}}</view>
			</uni-col>
			<uni-col :span="8">
				<view>{{convertTime(item.created_at, 'yyyy-MM-dd hh:mm:ss')}}</view>
			</uni-col>
		</uni-row>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getDepositRecord } from '@/service/agent';
import { convertTime } from '@/utils/index.js'

const recordList = ref([])
onMounted(async()=>{
	const {results} = await getDepositRecord()
	recordList.value = results
})

</script>

<style lang="scss" scoped>
:deep(.uni-row) {
	text-align: center;
	padding: 32rpx 0;
	font-weight: bold;
	background-color: transparent;
	color: #999;
	font-size: 18rpx;
	&:nth-child(2) {
		background-color: #fff;
		color: #333;
		font-size: 27rpx;
	}
}
.title_row {
	.title_text {
		font-size: 27rpx;
		
	}
}

</style>
