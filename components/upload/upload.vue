<template>
  <view class="flex">
	  	<view class="img_box" 
		 v-if="successfulPaths?.length !== 0" 
		  v-for="(image, index) in successfulPaths" 
		  :key="index"  
		>
	  		<image 
				 @click="isForbiddenDelete"
	  			  :src="String(image)" 
	  			  mode="aspectFill" 
	  			  class="upload_pic">
	  			</image>
	  		<view class="delete"   @click="deleteImg(index)">
	  			x
	  		</view>
	  	</view>

		<image src="https://static.maxcang.com/appstatic/upload.png"  v-if="successfulPaths?.length<props.amount&&showUpload"  mode="widthFix" class="upload_btn" @click="chooseImg"></image>
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
	  default:()=>{return []}
  },
  imgWidth:{
	  type:Number,
	  default:0
  },
  imgHeight:{
  	  type:Number,
  	  default:0
  },
  showUpload:{
	  type:Boolean,
	  default:true
  }
});
onMounted(()=>{
	console.log(props.imgUrls);
	successfulPaths.value=props.imgUrls||[]
	console.log(successfulPaths);
})




const successfulPaths=ref([])
const chooseImg = async () => {
	console.log(props.imgWidth,props.imgHeight);
	
 let cropConfig= {
		width:props.imgWidth,
		height:props.imgHeight,
		quality:100
	};
	
	if(!props.imgWidth&&!props.imgHeight){
		cropConfig = undefined;
	} 
  
  // 选择图片
  uni.chooseImage({
    count: Number(props.amount), 
	sizeType:'origin',
	crop:cropConfig,
    success:async (res) => {
      const tempFilePaths = res.tempFilePaths;
      // 将选择的图片路径赋值给 imagePath 用于页面显示
     imageTempPaths.value=tempFilePaths
	 
	 for(let i=0;i<tempFilePaths.length;i++){
		let path=  await uploadImage(imageTempPaths.value[i])
		successfulPaths.value.push(path)
	 }
	 console.log('---',successfulPaths.value);
		emit('uploadSuccessfulPaths',successfulPaths.value)
    },
    fail: (err) => {
      console.log('选择图片失败：', err);
    }
  });
};     


const  deleteImg=async (index)=>{
	if(!props.showUpload){
		return uni.showToast({
			icon:'none',
			title:"营业执照不允许编辑！"
		})
	}
	successfulPaths.value.splice(index,1)
	emit('uploadSuccessfulPaths',successfulPaths.value)
}

const isForbiddenDelete=()=>{
	if(!props.showUpload){
		return uni.showToast({
			icon:'none',
			title:"营业执照不允许编辑！"
		})
	}
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