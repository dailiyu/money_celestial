<template>
	<view>
		<navBar title="增加记录"></navBar>
		<uni-row class="title_row">
			<uni-col :span="2">
				<view class="title">序号</view>
			</uni-col>
			<uni-col :span="6">
				<view class="title">提取地址</view>
			</uni-col>
			<uni-col :span="6">
				<view class="title">提取数量</view>
			</uni-col>
			<uni-col :span="3">
				<view class="title">状态</view>
			</uni-col>
			<!-- <uni-col :span="4">
				<view class="title">到账数量</view>
			</uni-col> -->
			<uni-col :span="7">
				<view class="title">提取时间</view>
			</uni-col>
		</uni-row>
		
		<uni-row v-for="(item, index) in recordList" :key="item.id">
			<uni-col :span="2">
				<view>{{index+1}}</view>
			</uni-col>
			<uni-col :span="6">
				<view>{{obscureString(item.from_address||'--')}}</view>
			</uni-col>
			<uni-col :span="6">
				<view>{{item.transaction_amount}}</view>
			</uni-col>
			<uni-col :span="3">
				<view v-if="item.is_allowed==0">未审核</view>
				<view v-if="item.is_allowed==1">审核通过</view>
				<view v-if="item.is_allowed==-1">驳回</view>
			</uni-col>
			<!-- <uni-col :span="4">
				<view>{{item.transaction_amount-(item.transaction_amount*3/100)}}</view>
			</uni-col> -->
			<uni-col :span="7">
				<view>{{convertTime(item.created_at, 'yyyy-MM-dd hh:mm:ss')}}</view>
			</uni-col>
		</uni-row>
		<uni-load-more :status="status" @clickLoadMore="loadMore"></uni-load-more>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAllRecords } from '@/service/point.js'
// import { getPointsRecords } from '@/service/deposit';
import { convertTime, obscureString } from '@/utils/index.js'

onMounted(()=>{
	getRecordList()
})
const recordList = ref([])
const status = ref('loading')
const page = ref(1)
const getRecordList = async()=>{
	// const params = ref({
	// 	page: page.value
	// })
	
	status.value = 'loading'
	const {results} = await getAllRecords({transaction_method:'red_points',transaction_type:'increase',page_size:100})
	// if (total_amount == transactions.length) {
		status.value = 'no-more'
	// } else {
	// 	status.value = 'more'
	// }
	recordList.value.push(...results)
}
const loadMore = ()=>{
	if (status.value == 'more') {
		page.value++
		getRecordList()
	}
}
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
