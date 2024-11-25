<template>
	<view>
		<navBar title="积分赠送"></navBar>
		<view class="content">
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						赠送账号
					</view>
					<input v-model="address" class="uni-input" maxlength="11" text="number" placeholder="请输入手机号或扫描积分码" placeholder-class="placeholder_class" />
					<image  @click="toScanCode" src="https://static.maxcang.com/appstatic/scan.png" mode="widthFix" class="scan_pic" ></image>
				</view>
			</view>
			<view class="shop_info">
				<view class="info_item flex_between">
					<view class="s_title">
						赠送金额<text style="color: #999;font-size: 24rpx;margin-left: 5rpx;">(CNY)</text>
					</view>
					<input v-model="number" type="number" class="uni-input" placeholder="请输入赠送的价值金额" placeholder-class="placeholder_class" />
				</view>
				<view class="info_item flex">
					<view class="s_title">
						到账积分
					</view>
					<view class="s_num" style="color: #999999;">
						{{((number/rateCny)*100).toFixed(4)}}
					</view>
				</view>
			
				<view class="info_item flex_between">
					<view class="s_text">
						最多可赠送积分
					</view>
					<view class="s_num">
						{{totalPoints.toFixed(4)}}
					</view>
				</view>
				<!-- <view class="info_item flex_between">
					<view class="s_text">
						最多可赠送金额
					</view>
					<view class="s_num">
						{{totalPoints}}
					</view>
				</view> -->
				<view class="info_item flex_between">
					<view class="s_text">
						消耗
					</view>
					<view class="s_num">
						{{((Number(number)/Number(rateCny))*0.16).toFixed(4)}}
					</view>
				</view>
				<view class="info_item flex_between">
					<view class="s_text">
						最大可消耗
					</view>
					<view class="s_num">
						{{Number(red_points)+Number(balance)}}
					</view>
				</view>
				<view class="info_item flex_between">
					<view class="s_text">
						保证金余额
					</view>
					<view class="s_num">
						{{balance}}
					</view>
				</view>
			</view>
			<view class="radio" @click="changeCheck">
				<radio value="r1" :checked="isChecked" color="#FC5908" @click="changeCheck" />
				<text class="read">我已阅读并同意</text>
				<text class="c_title" @click.stop="toGiftAgreement">《积分赠送须知》</text>
			</view>
			<view class="btn_full" @click="validPassword">
				确认赠送
			</view>
		</view>
		<validatePasswordPop @confirm="confirm" ref="passwordPop"></validatePasswordPop>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { giftPoint } from '@/service/point.js'
import { getAllPoint } from '@/service/point';
import { getDeposit } from '@/service/deposit';
import { onLoad } from '@dcloudio/uni-app'

const totalPoints = ref(0)
const balance = ref(0)
const rateCny = ref(0)
const red_points=ref(0)
const address = ref('')
const number = ref('')

const phone = ref('');
onLoad((options) => {
  phone.value = options.phone; // 通过 .value 设置 ref 的值
  console.log('接收到的参数: ', phone.value);
  address.value=phone.value
});

onMounted(async()=>{
	const isGiftAgreementCheck = uni.getStorageSync('isGiftAgreementCheck')
	if (isGiftAgreementCheck) {
		isChecked.value = true
	}
	getAllData()
	
})

const getAllData = async()=>{
	const data = await getAllPoint()
	const res = await getDeposit()
	balance.value = res.amount
	totalPoints.value = (Number(data.red_points)+Number(balance.value))*625
	red_points.value=data.red_points
	rateCny.value = data.rateCny
}

const isChecked = ref(false)
const changeCheck = ()=>{
	isChecked.value = !isChecked.value
}
const passwordPop = ref()
const validPassword = ()=>{
	if (!isChecked.value) return uni.showToast({
		icon:'none',
		title: '请阅读完须知后勾选同意'
	})
	if (!address.value || address.value.length < 11) return uni.showToast({
		icon:'none',
		title: '请输入正确手机号'
	})
	if (!number.value) return uni.showToast({
		icon:'none',
		title: '请输入赠送数量'
	})
	if (number.value > totalPoints.value) return uni.showToast({
		icon: 'none',
		title: '赠送数量不可超过最多可赠送金额',
		duration: 3000
	})
	
	passwordPop.value.open()
}
const confirm = async(e)=>{
	
	try{
		uni.showLoading({
			title: '赠送中',
			mask: true
			
		})
		// console.log(777)
		await giftPoint({phone_number:address.value, transaction_amount: ((number.value/rateCny.value)*100).toFixed(4)})
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: '赠送成功'
		})
		const isGiftAgreementCheck = uni.getStorageSync('isGiftAgreementCheck')
		if (!isGiftAgreementCheck) {
			uni.setStorageSync('isGiftAgreementCheck', true)
		}
		getAllData()
	}catch(e){
		uni.showToast({
			icon: 'none',
			title: '赠送失败'
		})
	}
}
const toGiftAgreement = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/point_gift_agreement'
	})
}
const toScanCode = () => {
  uni.scanCode({
    onlyFromCamera: true, // 只允许从摄像头扫码
    success: async (res) => {
      const scanResult = res.result.trim();
      if (scanResult) { // 判断是否有有效的扫描结果
        console.log('扫码结果: ', scanResult);
        address.value = scanResult;
      } else {
        // 不执行其他操作，保持扫码状态
        console.warn('未扫描到有效的二维码');
		uni.showToast({
			icon:'none',
			title:'无效二维码，请重新扫码'
		})
      }
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

</script>

<style lang="scss" scoped>
.shop_info {
	padding: 0 26rpx;
	background-color: #fff;
	margin-bottom: 23rpx;
	.info_item {
		padding: 40rpx 8rpx 40rpx 0;
		border-bottom: 1px solid #E3E3E3;
		&:last-child {
			border-bottom: none;
		}
		.s_title {
			font-size: 27rpx;
			margin-right: 40rpx;
		}
		.uni-input {
			flex: 1;
			margin-right: 10rpx;
			font-size: 24rpx;
			color:#333;
		}
		:deep(.placeholder_class) {
			font-size: 24rpx;
			color:#aaaaaa;
		}
		.scan_pic {
			width: 38rpx;
		}
		.s_text {
			font-size: 27rpx;
			font-weight: bold;
			color: #999999;
		}
		.s_num {
			font-size: 24rpx;
			color: #FC5908;
		}
	}
	
}
.radio {
	// text-align: center;
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
