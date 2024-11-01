
<template>

</template>
<script>
	export default {
		onLaunch: function() {
			// if (uni.getSystemInfoSync().platform === 'android' || uni.getSystemInfoSync().platform === 'devtools') {
			//     // 在这里调用Android平台的关闭启动屏幕的API
			//     
			// }
			// #ifdef APP-PLUS
			plus.navigator.closeSplashscreen();
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("@/public/css/index.scss");
</style>
