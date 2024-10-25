<template>
	<view>
		<navBar title="商家入驻须知"></navBar>
		<view class="content">
			<view class="notices">
				<view class="n_title">
					欢迎成为满仓商家
				</view>
				<view class="n_content">
					您在使用满仓服务前，应当仔细认真阅读本《满仓用户服务条款》(下称“本条《满仓用户服务协议》及发布的其他服务条款、专项产品款”)中的全部规则、或服务规则或规范(包括但不限于《电商用户服务规则》、《平台售后及争议处理规则》以及《满仓评价规则》等，以下合称“服务规则”)的内容(特别是其中以加粗及/或加下划线标示出的关于满仓服务及用户重大权益的规则，该等规则可能涉及相关方的责任免除或限制、法律适用与争议解决条款，请您重点阅读)，确认对本条款《满仓用户服务协议》及各项服务规则均已知晓、理解并接受，并已同意将其作为确定双方权利义务的依据。如您使用***号账号访问满仓或以其他方式使用或接受满仓的任何服务，即视为您已阅读并与满仓达成协议，自愿接受本条款及服务规则的所有内容的约束。所有服务规则视为本条款不可分割的一部分，与本条款具有同等法律效力。 
				</view>
				<view class="n_content">
					本条款的签约双方为满仓服务的实际运营商***号信息咨询有限公司(下称“满仓”)与使用满仓相关服务的使用人(下称“用户”或“您”)，本条款是您与满仓之间关于您使用满仓提供的各项服务所订立的服务条款，具有正式书面合同的效力。本条款为《满仓用户服务协议》》(包括但不限于所附的《满仓隐私政策》)的必要组成部分。《满仓用户服务协议》将同时适用于满仓的各项服务。如本条款与《满仓用户服务协议》文本内容存在冲突之处，则以时间上最新发布的内容为准，发布时间相同的，以本条款为准。本条款有待明确、存在歧义或未规定之处均以《满仓用户服务协议》中的规定为准。您理解并同意，满仓将根据《满仓用户服务协议》的约定，对本条款或各项服务规则不时地进行修改更新。修改更新内容的发布和实施均适用《满仓用户服务协议》的相关约定。
				</view>
			</view>
			<view class="radio" >
				<radio value="r1" :checked="isChecked"   @click="changeCheck"  color="#FC5908" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title">《商家入驻须知》</text>
			</view>
			<view class="btn_full" @click="scanCode">
				扫码成为商家
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app'
import { createMerchant } from '../../service/merchant';
import { getCitiesDetail } from '../../service/divisions';
import { useUserStore } from '../../store/user';
 const userStore =useUserStore()
const referral_officer = ref('')
onLoad((options)=>{
	referral_officer.value = options.referral_officer
})
const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
	console.log(isChecked.value);
	
}
function extractIdFromUrl(url) {
    // 使用正则表达式匹配最后一个斜杠后面的数字
    const match = url.match(/\/(\d+)\/?$/);
    // 如果匹配成功，返回匹配的数字，否则返回null
    return match ? match[1] : null;
}

const extractCityName=(location)=> {
  // 使用空格分割字符串，获取最后一个部分（市名）
  const parts = location.split(' ');
  
  // 返回最后一个元素，假设市名总是最后一部分
  return parts[parts.length - 1];
}
	

const scanCode =async () => {
	if(!isChecked.value){
		return uni.showToast({
			icon:'none',
			title:'请勾选商家入驻须知'
		})
	}
  uni.scanCode({
    onlyFromCamera: true, // 只允许从摄像头扫码
    success: async(res) => {
      console.log('扫码结果: ', extractIdFromUrl(res.result));
	  const recommendPhone=extractIdFromUrl(res.result)
	  const phoneNumber=uni.getStorageSync('phoneNumber')
	  const address=uni.getStorageSync('userInfo').residence
	  const userName=uni.getStorageSync('userInfo').name
	  const avatar=uni.getStorageSync('userInfo').icon
	  const cityName=extractCityName(address)
	  const cityInfo=await getCitiesDetail(cityName)
	console.log(recommendPhone,phoneNumber,address,cityName,userName,cityInfo);
		uni.showLoading({
			title:"正在创建商家"
		})
	  createMerchant({user:phoneNumber,referral_officer:recommendPhone,city:cityName,name:userName||'default',icon:avatar||''}).then(async(res)=>{
			uni.hideLoading()
			await  userStore.fetchAllDataAction()
		  // uni.showToast({
		  //   title: `恭喜你，满仓商家注册成功！快去创建店铺吧！`, // 显示扫码的结果
		  //   icon: 'none'
		  // });
		
		  uni.redirectTo({
		  	url:'/pages/merchant/before_create_shop'
		  })
	  }).catch((err)=>{
		  console.log(err);
		  	uni.hideLoading()
		  uni.showToast({
		    title: `创建商家失败`, // 显示扫码的结果
		    icon: 'fail'
		  })
	  })
     
    },
    fail: (err) => {
      console.error('扫码失败: ', err);
      uni.showToast({
        title: '扫码失败',
        icon: 'none'
      });
    }
  });
};

const toSetInfo = ()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
	uni.navigateTo({
		url:'/pages/merchant/merchant_set_info?referral_officer='+referral_officer
	})
}
</script>

<style lang="scss" scoped>
.notices {
	background-color: #fff;
	padding: 44rpx 38rpx 54rpx;
	.n_title {
		color: #FC5908;
		font-size: 36rpx;
		margin-bottom: 48rpx;
		text-align: center;
	}
	.n_content {
		font-size: 21rpx;
		line-height: 35rpx;
		text-indent: 2em;
		margin-top: 20rpx;
	}
}
.radio {
	text-align: center;
	padding: 26rpx 0 38rpx;
	radio {
		transform:scale(0.6)
	}
	.read {
		font-size: 27rpx;
		color: #999999;
	}
	.c_title {
		font-size: 27rpx;
		color: #FC5908;
		font-family: HarmonyOS_Sans_SC_Medium;
	}
}
</style>
