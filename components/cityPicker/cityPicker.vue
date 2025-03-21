<template>
	<view v-if="cityDataMp">
		
		<picker @columnchange="bindProvinceChange" @change="bindCityChange"  mode="multiSelector" :range="cityData" range-key="name">
			<view class="uni-input">{{selectedCity||'请选择'}}</view>
		</picker>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import cityDataMp from '/static/cityDataMp.js';
import { tencentMapKey } from '@/service/config';
console.log(cityDataMp,0)
const cityData = ref([cityDataMp?.data, cityDataMp?.data[0].cityData])
const emit = defineEmits(['changeCity']);
const selectedCity = ref('')
const userAddress = uni.getStorageSync('userInfo').residence
const loaclCity=uni.getStorageSync('city')
onMounted(()=>{
	// #ifndef MP-WEIXIN
	if (userAddress||loaclCity) {
		selectedCity.value = loaclCity||userAddress.split(' ')[1]
		emit('changeCity', {city: selectedCity.value })
	}
	// #endif
	
	// #ifdef MP-WEIXIN
	const curLatitude = ref()
	const curLongitude = ref()
	const key = tencentMapKey
	
	wx.getFuzzyLocation({
		success(res){
			console.log('-------',res.latitude, res.longitude)
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
	// #endif
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