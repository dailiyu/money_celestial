<template>
	<view class="flex">
		
		<image src="@/static/upload.png" mode="widthFix" class="upload_btn" @click="uploadPic"></image>
	</view>
</template>

<script>
	export default {
		name:"upload",
		data() {
			return {
				
			};
		},
		methods: {
			uploadPic(){
				// uni.chooseImage({
				//  count: 6,
				// 	success: (chooseImageRes) => {
				// 		const tempFilePaths = chooseImageRes.tempFilePaths;
				// 		uni.uploadFile({
				// 			url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
				// 			filePath: tempFilePaths[0],
				// 			name: 'file',
				// 			formData: {
				// 				'user': 'test'
				// 			},
				// 			success: (uploadFileRes) => {
				// 				console.log(uploadFileRes.data);
				// 			}
				// 		});
				// 	}
				// });
			}
		}
	}
</script>

<style lang="scss" scoped>
.upload_btn {
	width: 152rpx;
}
</style>