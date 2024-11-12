<template>
	<view>
		<picker @columnchange="bindProvinceChange" @change="bindCityChange"  mode="multiSelector" :range="cityData" range-key="name">
			<view class="uni-input">{{selectedCity||'请选择'}}</view>
		</picker>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import cityDataMp from '@/static/cityDataMp.js';
const cityData = ref([cityDataMp.data, cityDataMp.data[0].cityData])

const selectedCity = ref('')
const userAddress = uni.getStorageSync('userInfo').residence
selectedCity.value = userAddress.split(' ')[1]

const emit = defineEmits(['changeCity']);
const bindCityChange = (e)=>{
	// console.log(e)
	let provinceIndex = e.detail.value[0];
	let cityIndex = e.detail.value[1];
	let cityName = cityDataMp.data[provinceIndex].cityData[cityIndex].name
	selectedCity.value = cityName
	emit('changeCity', {city: cityName})
}
	
const bindProvinceChange = (e)=>{
	// console.log(e)
	if(e.detail.column==0){
		let provinceIndex = e.detail.value;
		let cityIndex = e.detail.value[1];
		cityData.value[1] = cityDataMp.data[provinceIndex].cityData;
	}
	//selectedCity.value = e.detail.value[1]
	//emit('changeCity', {province: e.detail.value[0],city: e.detail.value[1]})
}
</script>

<style lang="scss" scoped>
::v-deep .uni-input {
	color: #fff;
	font-size: 28rpx;
	border: none;
}
</style>