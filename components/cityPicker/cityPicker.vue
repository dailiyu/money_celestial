<template>
	
	<view v-if="cityData.length">
		<picker @columnchange="bindProvinceChange" @change="bindCityChange"  mode="multiSelector" :range="cityData" range-key="name">
			<view class="uni-input">{{selectedCity||'请选择'}}</view>
		</picker>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { tencentMapKey } from '@/service/config';
import cityDataMp from '/utils/cityDataMp.js';

const cityData = ref([])
const emit = defineEmits(['changeCity']);
const selectedCity = ref('')
const userAddress = uni.getStorageSync('userInfo').residence
const loaclCity=uni.getStorageSync('city')

onMounted(()=>{
	cityData.value = [cityDataMp?.data, cityDataMp?.data[0].cityData]
	if (userAddress||loaclCity) {
		selectedCity.value = loaclCity||userAddress.split(' ')[1]
		emit('changeCity', {city: selectedCity.value })
	}
	const key = tencentMapKey
	wx.getFuzzyLocation({
		success(res){
			uni.setStorageSync('currentLocation', {latitude:res.latitude, longitude:res.longitude})
			const url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${res.latitude},${res.longitude}&key=${key}`
			uni.request({
				url,
				success(location) {
					console.log('11122222',location)
					selectedCity.value = location.data.result.address_component.city
					uni.setStorageSync('city', selectedCity.value)
					emit('changeCity', {city: selectedCity.value })
				}
			})
		},
		fail(err){
			console.log(err)
		}
	})
})



const bindCityChange = (e)=>{
	// console.log(e)
	let provinceIndex = e.detail.value[0];
	let cityIndex = e.detail.value[1];
	let cityName = cityDataMp?.data[provinceIndex].cityData[cityIndex].name
	selectedCity.value = cityName
	emit('changeCity', {city: cityName})
}
	
const bindProvinceChange = (e)=>{
	// console.log(e)
	if(e.detail.column==0){
		let provinceIndex = e.detail.value;
		let cityIndex = e.detail.value[1];
		cityData.value[1] = cityDataMp?.data[provinceIndex].cityData;
	}
}
</script>

<style lang="scss" scoped>
::v-deep .uni-input {
	color: #fff;
	font-size: 28rpx;
	border: none;
}
</style>