<template>
	<view>
		<navBar title="积分记录"></navBar>
		<uni-row class="title_row">
			<uni-col :span="3">
				<view class="title">序号</view>
			</uni-col>
			<uni-col :span="9">
				<view class="title">数量</view>
			</uni-col>
			<uni-col :span="6">
				<view class="title">类型</view>
			</uni-col>
			<uni-col :span="6">
				<view class="title">时间</view>
			</uni-col>
		</uni-row>
		
		<uni-row v-for="(item, index) in recordList" :key="item.order_id">
			<uni-col :span="3">
				<view>{{index+1}}</view>
			</uni-col>
			<uni-col :span="9">
				<view style="color: #4cbe61;" v-if="item.transaction_type == 'increase'">+{{item.transaction_amount}}</view>
				<view style="color: #fd8c31;" v-if="item.transaction_type == 'decrease'">-{{item.transaction_amount}}</view>
			</uni-col>
			<uni-col :span="6">
				<view>{{transformTypeFilter(item)}} {{ item.is_allowed==-1?"(驳回)":""}}</view>
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
import { convertTime, obscureString,transformTypeFilter } from '@/utils/index.js'


onMounted(()=>{
	getRecordList()
})

const recordList = ref([])
const status = ref('loading')
const page = ref(1)
const getRecordList = async ()=>{
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
	recordList.value = results
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
