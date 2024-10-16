<template>
  <view class="flex">
	<image 
	  v-if="imageTempPaths.length != 0" 
	  v-for="(image, index) in imageTempPaths" 
	  :key="index"  
	  :src="String(image)" 
	  mode="aspectFill" 
	  class="upload_pic">
	</image>

    <image src="@/static/upload.png"   mode="widthFix" class="upload_btn" @click="chooseImg"></image>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { uploadImage } from '../../utils';

// import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['uploadSuccessfulPaths']); 
const imageTempPaths=ref([])
const props = defineProps({
  amount: {
    type: String,
    default: '1'
  },
  imgUrls:{
	  type:Array,
	  default:[]
  }
});
onMounted(()=>{
	 imageTempPaths.value=props.imgUrls||[]
})

const chooseImg = async () => {
  // 选择图片
  uni.chooseImage({
    count: Number(props.amount), 
    success:async (res) => {
      const tempFilePaths = res.tempFilePaths;
      // 将选择的图片路径赋值给 imagePath 用于页面显示
     imageTempPaths.value=tempFilePaths
	 let uploadSuccessfulPaths=[]
	 for(let i=0;i<imageTempPaths.value.length;i++){
		let path=  await uploadImage(imageTempPaths.value[i])
		uploadSuccessfulPaths.push(path)
	 }
	 // console.log(tempFilePaths);
		emit('uploadSuccessfulPaths',uploadSuccessfulPaths)
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
.upload_pic {
	width: 152rpx;
	height: 152rpx;
	margin: 10rpx;
}
</style>