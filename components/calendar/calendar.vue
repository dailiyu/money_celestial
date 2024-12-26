<template>
	<view class="calendar">
		
		<view class="calendar-head">
			<view class="calendar-head-left">
 
				<uni-icons type="left" color="#ffffff" size="20" @click="prevMonth"></uni-icons>
				<view class="head-month">{{ currentMonth + 1 }}
				  <text>月</text>
				</view>
				<uni-icons type="right" color="#ffffff" size="20" @click="nextMonth"></uni-icons>
			</view>
			<view class="calenar-tip">
				本月签到<text>{{signDayList.length}}</text>天，金币+<text>{{signDayList.length}}</text>
			</view>
		</view>
		<view class="calendar-box">
			<view class="header">
				<text>{{ currentYear }}年{{ currentMonth + 1 }}月</text>
			</view>
			<view class="days-box">
				<view class="days">
					<view class="day" v-for="(day, index) in days" :key="index">
						{{ day }}
					</view>
				</view>
				<view class="dates">
					<view class="date" v-for="(date, index) in monthDates" :key="index" @click="selectDate(date)"
						>
						<view class="date-item" :class="selectedDate && selectedDate.day === date&&selectedDate.year===currentYear&&selectedDate.month===currentMonth?'selected':selectedDate && selectedDate.day === date?'selected1':'' ">
							{{ date&& date!==null ? date : '' }}
						</view>
						<!-- 已签到样式 -->
						<view class="" v-if="getSignData(date)">
							<uni-icons  type="checkbox-filled" color="#45ca29" size="14" ></uni-icons>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		
	</view>
</template>
 
<script>
	// import {
	// 	signInRecord
	// } from '@/api/signIn.js'
	export default {
		data() {
			return {
				currentDate: new Date(),
				signDayList:[],//签到记录
			};
		},
		computed: {
			selectedDate(){
				let date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth()
				let day = date.getDate()
				let obj={
					year,
					month,
					day
				}
				console.log(obj)
				return obj
			},
			currentYear() {
				return this.currentDate.getFullYear();
			},
			currentMonth() {
				return this.currentDate.getMonth();
			},
			days() {
				return ['日', '一', '二', '三', '四', '五', '六'];
			},
			monthDates() {
				const dates = [];
				const firstDay = new Date(this.currentYear, this.currentMonth, 1);
				const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
 
				// 填充前面的空白
				for (let i = 0; i < firstDay.getDay(); i++) {
					dates.push('');
				}
 
				// 填充当前月的日期
				for (let i = 1; i <= lastDay.getDate(); i++) {
					let date = (new Date(this.currentYear, this.currentMonth, i)).getDate()
					dates.push(date);
				}
 
				return dates;
			},
		},
		methods: {
            //判断哪天进行了签到
			getSignData(data){
				let falg = false
				this.signDayList.length>0&&this.signDayList.forEach(item=>{
					if(item==data){
						falg = true
					}
				})
				return falg
			},
			// 获取签到记录
			getDayData(){
				// signInRecord({year:this.currentYear,month:this.currentMonth+1}).then(res=>{
				// 	this.signDayList = res.data
				// })
			},
            //上个月
			prevMonth() {
				this.currentDate.setMonth(this.currentMonth - 1);
				this.currentDate = new Date(this.currentDate); // 触发视图更新
				this.getDayData()
			},
               //下个月
			nextMonth() {
				this.currentDate.setMonth(this.currentMonth + 1);
				this.currentDate = new Date(this.currentDate); // 触发视图更新
				this.getDayData()
			},
			selectDate(date) {
				if (date) {
					this.$emit('dateSelected', date);
				}
			},
		},
	};
</script>
 
<style scoped lang="scss">
	.calendar {
		width: 100%;
		.calendar-head{
			width: 100%;
			display: flex;
			align-items: center;
			.calendar-head-left{
				display: flex;
				align-items: center;
				.head-month{
					color: #ffffff;
					margin: 0 10rpx;
					font-size: 50rpx;
					text{
						font-size: 30rpx;
					}
				}
			}
			.calenar-tip{
				margin-left: 50rpx;
				font-size: 26rpx;
				color: #fff;
				text{
					font-size: 30rpx;
					margin: 0 5rpx;
				}
			}
			
		}
	}
	.calendar-box{
		width: 100%;
		margin-top: 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
		// 
		.header {
			padding: 20rpx;
			border-bottom: 1rpx solid #d6d7d8;
		}
	}
	.days-box{
		width: 100%;
		padding: 20rpx 0 20rpx 20rpx;
	}
 
	
 
	.days,
	.dates {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}
 
	.day,
	.date {
		display: flex;
		flex-direction: column;
		align-items: center;
		// justify-content: center;
		width: 50rpx;
		height: 90rpx;
	}
	.date-item{
		width: 50rpx;
		height: 50rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
 
	.selected {
		background: linear-gradient(to bottom, #fc9f44, #fb3750);
		color: white;
	}
	.selected1{
		border: 1px solid #fb3750;
	}
</style>