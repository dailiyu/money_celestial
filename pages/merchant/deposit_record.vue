<template>
	<view>
		<navBar title="保证金记录"></navBar>
		<uni-row class="title_row">
			<uni-col :span="3">
				<view class="title">序号</view>
			</uni-col>
			<uni-col :span="9">
				<view class="title">地址</view>
			</uni-col>
			<uni-col :span="6">
				<view class="title">保证金</view>
			</uni-col>
			<uni-col :span="6">
				<view class="title">提取时间</view>
			</uni-col>
		</uni-row>
		
		<uni-row>
			<uni-col :span="3">
				<view>1</view>
			</uni-col>
			<uni-col :span="9">
				<view>DAUS******SDF7A23G22</view>
			</uni-col>
			<uni-col :span="6">
				<!-- <view style="color: #4cbe61;">+100,289,312</view> -->
				<view style="color: #fd8c31;">-189,312</view>
			</uni-col>
			<uni-col :span="6">
				<view>2024/08/24/18:00</view>
			</uni-col>
		</uni-row>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getDepositList } from '@/service/merchant.js'

const recordList = ref([])
onMounted(async()=>{
	const {results} = await getDepositList()
	recordList.value =results
	console.log(results)
})
</script>

<style lang="scss" scoped>
:deep(.uni-row) {
	background-color: #fff;
	text-align: center;
	padding: 32rpx 0;
	font-size: 27rpx;
	font-weight: bold;
	&:last-child {
		background-color: transparent;
		color: #999;
		font-size: 18rpx;
	}
}
.title_row {
	.title_text {
		font-size: 27rpx;
		
	}
}

</style>
