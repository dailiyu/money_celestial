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
import { convertTime, obscureString, transformTypeFilter } from '@/utils/index.js'
import { onReachBottom } from '@dcloudio/uni-app'

onMounted(()=>{
	// 首次进入页面时，加载第一页数据，然后自动加载第二页
	getRecordList().then(() => {
		// 如果第一页加载后状态为"more"，则自动加载第二页
		if (status.value === 'more') {
			page.value++
			getRecordList(true)
		}
	})
})

const recordList = ref([])
const status = ref('loading')
const page = ref(1)
const pageSize = ref(10) // 每页加载的记录数量

const getRecordList = async (isLoadMore = false) => {
	status.value = 'loading'
	const params = {
		page: page.value,
		page_size: pageSize.value
	}
	
	try {
		const { results, total_count } = await getAllRecords(params)
		
		if (isLoadMore) {
			// 加载更多时，将新数据添加到现有列表
			recordList.value = [...recordList.value, ...results]
		} else {
			// 首次加载或刷新时，替换整个列表
			recordList.value = results
		}
		
		// 判断是否还有更多数据
		if (recordList.value.length >= total_count) {
			status.value = 'no-more'
		} else {
			status.value = 'more'
		}
	} catch (error) {
		console.error('获取记录失败:', error)
		status.value = 'fail'
	}
}

const loadMore = () => {
	if (status.value === 'more') {
		page.value++
		getRecordList(true)
	}
}

// 监听页面滚动到底部
onReachBottom(() => {
	if (status.value === 'more') {
		loadMore()
	}
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

