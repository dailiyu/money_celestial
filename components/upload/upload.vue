<template>
  <view class="flex">
	  	<view class="img_box" 
		 v-if="uploadSuccessfulPaths?.length !== 0" 
		  v-for="(image, index) in uploadSuccessfulPaths" 
		  :key="index"  
		>
	  		<image 
	  			  :src="String(image)" 
	  			  mode="aspectFill" 
	  			  class="upload_pic">
	  			</image>
	  		<view class="delete" @click="deleteImg(index)">
	  			x
	  		</view>
	  	</view>

		<image src="@/static/upload.png"  v-if="uploadSuccessfulPaths?.length<props.amount"  mode="widthFix" class="upload_btn" @click="chooseImg"></image>
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
  },
  imgWidth:{
	  type:Number,
	  default:500
  },
  imgHeight:{
  	  type:Number,
  	  default:500
  }
});
onMounted(()=>{
	 imageTempPaths.value=props.imgUrls||[]
})


const uploadSuccessfulPaths=ref([])
const chooseImg = async () => {
  // 选择图片
  uni.chooseImage({
    count: Number(props.amount), 
	crop:{
		width:props.imgWidth,
		height:props.imgHeight
	},
    success:async (res) => {
      const tempFilePaths = res.tempFilePaths;
      // 将选择的图片路径赋值给 imagePath 用于页面显示
     imageTempPaths.value=tempFilePaths
	 
	 for(let i=0;i<tempFilePaths.length;i++){
		let path=  await uploadImage(imageTempPaths.value[i])
		uploadSuccessfulPaths.value.push(path)
	 }
	 // console.log(tempFilePaths);
		emit('uploadSuccessfulPaths',uploadSuccessfulPaths.value)
    },
    fail: (err) => {
      console.log('选择图片失败：', err);
    }
  });
};     


const  deleteImg=async (index)=>{
	uploadSuccessfulPaths.value.splice(index,1)
	emit('uploadSuccessfulPaths',uploadSuccessfulPaths.value)
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



<style lang="scss" scoped>
		.upload_btn {
			width: 152rpx;
		}

.img_box{
	position: relative;
	.upload_pic {
		width: 152rpx;
		height: 152rpx;
		margin: 10rpx;
	}
	.delete{
		position: absolute;
		top: 15rpx;
		right: 15rpx;
	}
}


</style>