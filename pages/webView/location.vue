<template>
  <view class="container">
    <button class="btn" @click="goBack">返回</button>
    <web-view @message="onMessage" :src="src" style="width: 100%; height: 90%;"></web-view>
  </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue';
const latitude=ref()
const longitude=ref()
const src = ref('')
onLoad((options)=>{
	console.log('---',options);
	latitude.value=options.latitude
	longitude.value=options.longitude
	src.value = `/static/html/location.html?latitude=${latitude.value}&longitude=${longitude.value}`
}
) 
	
const onMessage=(e)=>{
	console.log(e)
}
	
function goBack() {
  uni.navigateBack();
}


</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}
button {
  width: 100px;
  height: 40px;
  margin: 10px;
}
.btn {
  background-color: #007bff;
  color: #fff;
  position: fixed;
  top: 20rpx;
  z-index: 1000;
}
</style>
