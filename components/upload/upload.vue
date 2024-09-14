<template>
  <view class="flex">
	<image  v-if="imageTempPaths.length!=0"  v-for="(image,index) in imageTempPaths"  :src="image" mode="widthFix" class="upload_btn"></image>
    <image v-if="imageTempPaths.length<props.amount" src="@/static/upload.png" mode="widthFix" class="upload_btn" @click="chooseImg"></image>
  </view>
</template>

<script setup>
import { ref } from 'vue';


const emit = defineEmits(['tempImgPaths']); 
const imageTempPaths=ref([])
const props = defineProps({
  amount: {
    type: Number,
    default: 1
  }
});
const chooseImg = async () => {
  // 选择图片
  uni.chooseImage({
    count: props.amount, 
    success: (res) => {
      const tempFilePaths = res.tempFilePaths;
      // 将选择的图片路径赋值给 imagePath 用于页面显示
     imageTempPaths.value=tempFilePaths
	 console.log(tempFilePaths);
	 emit('tempImgPaths',tempFilePaths)
    },
    fail: (err) => {
      console.log('选择图片失败：', err);
    }
  });
};     


const  upLoadImg=async ()=>{
	
}



// const uploadPic = () => {
//   uni.chooseImage({
//     count: 6,
//     success: (chooseImageRes) => {
//       const tempFilePaths = chooseImageRes.tempFilePaths;
//       uni.uploadFile({
//         url: 'https://max.q6z4kzhr.uk/api/image/upload/', // replace with your actual API endpoint
//         filePath: tempFilePaths[0],
//         name: 'image',
//         formData: {
//           'user': 'test'
//         },
//         success: (uploadFileRes) => {
//           console.log(uploadFileRes.data);
//         }
//       });
//     }
//   });
// };

</script>

<style scoped>
.upload_btn {
  /* Your styles here */
}
</style>


<style lang="scss" scoped>
.upload_btn {
	width: 152rpx;
}
</style>