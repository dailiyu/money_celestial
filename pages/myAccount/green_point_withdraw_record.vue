<template>
	<view>
		<navBar title="我的积分记录"></navBar>
		<uni-row class="title_row">
			<uni-col :span="2">
				<view class="title">序号</view>
			</uni-col>
			<uni-col :span="5">
				<view class="title">积分类型</view>
			</uni-col>
			<uni-col :span="4">
				<view class="title">数量</view>
			</uni-col>
			<uni-col :span="3">
				<view class="title">状态</view>
			</uni-col>
			<uni-col :span="4">
				<view class="title">到账数量</view>
			</uni-col>
			<uni-col :span="6">
				<view class="title">时间</view>
			</uni-col>
		</uni-row>
		
		<uni-row v-for="(item, index) in recordList" :key="item.id">
			
			<uni-col :span="2">
				<view>{{index+1}}</view>
			</uni-col>
			<uni-col :span="5">
				<view>{{ transformTypeFilter(item)}}</view>
			</uni-col>
			<uni-col :span="4">
				<view>{{(item.transaction_amount*1).toFixed(4)}}</view>
			</uni-col>
			<uni-col :span="3" v-if="item.transaction_method=='gift_green_points'">
				<view>--</view>
			</uni-col>
			<uni-col :span="3" v-else>
				<view v-if="item.is_allowed==0">未审核</view>
				<view v-if="item.is_allowed==1">审核通过</view>
				<view v-if="item.is_allowed==-1">驳回</view>
			</uni-col>
			<uni-col :span="4">
				<view>{{((item.real_amount||item.transaction_amount)*1).toFixed(4)}}</view>
			</uni-col>
			<uni-col :span="6">
				<view>{{convertTime(item.created_at, 'yyyy-MM-dd hh:mm:ss')}}</view>
			</uni-col>
		</uni-row>
		
		<uni-load-more :status="status" @clickLoadMore="loadMore"></uni-load-more>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAllRecords } from '@/service/point.js'
import { getPointsRecords } from '@/service/point';
import { convertTime, obscureString, transformTypeFilter } from '@/utils/index.js'

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
	const {results} = await getAllRecords()
	// if (total_amount == transactions.length) {
		status.value = 'no-more'
	// } else {
	// 	status.value = 'more'
	// }
	// recordList.value = [...results]
	recordList.value = results.filter((item)=>{
		return item.transaction_method=='green_points'||item.transaction_method=='gift_green_points_bonus'||(item.transaction_method=='gift_green_points'&&item.transaction_type=='increase')||item.transaction_method=='every_green_bonus'||item.transaction_method=='everyday_sign'
	})
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
		font-size: 22rpx;
	}
}
.title_row {
	.title_text {
		font-size: 27rpx;
		
	}
}

</style>
