<template>
	<view class="page">
	

		<!-- 内容区域 -->
		<view class="content">
			<!-- 头像和表单容器 -->
			<view class="info-container">
				<!-- 头像区域 -->
				<view class="avatar-section">
					<button open-type="chooseAvatar" class="avatar-button" @chooseavatar="chooseImg">
						<image :src="imagePath" mode="aspectFill" class="avatar-img"></image>
					</button>
				</view>

				<!-- 表单区域 -->
				<view class="form-section">
					<!-- 昵称 -->
					<view class="form-item" @click="editNickname">
						<view class="form-label">昵称</view>
						<view class="form-content">
							<text class="form-value">{{ name || '满小仓232203029' }}</text>
							<image src="@/static/myAccount/right_arrow_gray.png" class="form-arrow"></image>
						</view>
					</view>

					<!-- 生日 -->
					<view class="form-item" @click="openCalendar">
						<view class="form-label">生日</view>
						<view class="form-content">
							<text class="form-value">{{ birthday || '2005-1-2' }}</text>
							<image src="@/static/myAccount/right_arrow_gray.png" class="form-arrow"></image>
						</view>
					</view>

					<!-- 性别 -->
					<view class="form-item" @click="openGenderPicker">
						<view class="form-label">性别</view>
						<view class="form-content">
							<text class="form-value">{{ genderText || '男' }}</text>
							<image src="@/static/myAccount/right_arrow_gray.png" class="form-arrow"></image>
						</view>
					</view>

					<!-- 常居地 -->
					<view class="form-item" @click="openLocationPicker">
						<view class="form-label">常居地</view>
						<view class="form-content">
							<text class="form-value">{{ selectedCity || '佛山市' }}</text>
							<image src="@/static/myAccount/right_arrow_gray.png" class="form-arrow"></image>
						</view>
					</view>

					<!-- 手机号码 -->
					<view class="form-item">
						<view class="form-label">手机号码</view>
						<view class="form-content">
							<text class="form-value">{{ phoneNumber || '18647474774' }}</text>
							<image src="@/static/myAccount/right_arrow_gray.png" class="form-arrow"></image>
						</view>
					</view>
				</view>
			</view>

			<!-- 保存按钮 -->
			<view class="save-button" @click="saveMessage">
				保存信息
			</view>
		</view>

		<!-- 弹出层 -->
		<!-- 昵称编辑弹窗 -->
		<uni-popup ref="nicknamePopup" type="center" borderRadius="20rpx">
			<view class="popup-content">
				<view class="popup-title">修改昵称</view>
				<uni-easyinput 
					type="nickname" 
					v-model="tempName" 
					placeholder="请输入昵称"
					class="nickname-input"
				></uni-easyinput>
				<view class="popup-buttons">
					<view class="popup-btn cancel" @click="cancelEdit">取消</view>
					<view class="popup-btn confirm" @click="confirmNickname">确定</view>
				</view>
			</view>
		</uni-popup>

		<!-- 日历组件 -->
		<uni-calendar 
			ref="calendar"
			:insert="false"
			@confirm="confirm"
		/>
		
		<!-- 地址选择器 -->
		<uni-popup ref="locationPopup" type="bottom">
			<view class="location-picker-popup">
				<view class="location-header">
					<text class="location-cancel" @click="cancelLocationSelect">取消</text>
					<text class="location-title">选择常居地</text>
					<text class="location-confirm" @click="confirmLocationSelect">确定</text>
				</view>
				<uni-data-picker 
					v-model="curData"
					:localdata="cityData"
					:clear-icon='false'
					mode="region"
					@change="onChange"
					:insert="true"
				></uni-data-picker>
			</view>
		</uni-popup>

		<!-- 性别选择器 -->
		<uni-popup ref="genderPopup" type="bottom">
			<view class="gender-picker-popup">
				<view class="gender-header">
					<text class="gender-cancel" @click="cancelGenderSelect">取消</text>
					<text class="gender-title">选择性别</text>
					<text class="gender-confirm" @click="confirmGenderSelect">确定</text>
				</view>
				<view class="gender-options">
					<view class="gender-option" :class="{active: tempGender === 'male'}" @click="selectGender('male')">
						<text>男</text>
					</view>
					<view class="gender-option" :class="{active: tempGender === 'female'}" @click="selectGender('female')">
						<text>女</text>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { changeUserInfo } from '../../service/uer_profile';
import { uploadUrl } from '../../service/config';
import cityDataJson from "@/static/cityData.json"
import { uploadImage } from '../../utils';
import { useUserStore } from '../../store/user';

const userStore = useUserStore()

const curData = ref()
const userInfo = ref()
const tempName = ref('')
const phoneNumber = ref('')

// 弹窗引用
const nicknamePopup = ref()
const locationPopup = ref()
const genderPopup = ref()

// 绑定选择的值
const selectedValues = ref([])

// 绑定省市名显示
const selectedProvince = ref('')
const selectedCity = ref('')

// 省市数据
const cityData = ref(cityDataJson)

onMounted(() => {
	userInfo.value = uni.getStorageSync('userInfo')
	phoneNumber.value = uni.getStorageSync('phoneNumber')
	name.value = userInfo.value?.name
	imagePath.value = userInfo.value?.icon
	uploadSuccessUrl.value = userInfo.value?.icon
	gender.value = userInfo.value?.gender
	birthday.value = formatDate(userInfo.value?.birthdate)  
	const cityName = getCity(userInfo.value?.residence || '')
	const provinceName = getProvinceName(userInfo.value?.residence || '')
	curData.value = findValueByText(cityName)
	selectedProvince.value = provinceName
	selectedCity.value = cityName
})

const findValueByText = (text) => {
	for (const province of cityDataJson) {
		for (const city of province.children) {
			if (city.text === text) {
				return city.value;
			}
		}
	}
	return null;
}

const getCity = (fullAddress) => {
	const parts = fullAddress.split(' ');
	return parts[parts.length - 1];
}

const getProvinceName = (fullAddress) => {
	const parts = fullAddress.split(' ');
	return parts[0];
}

// 当选择器值变化时，处理选中的省和市
const onChange = (e) => {
	console.log('地址选择变化:', e);
	
	if (e.detail && e.detail.value && e.detail.value.length >= 2) {
		// 获取选择的省市信息
		const selectedData = e.detail.value;
		
		// 保存选择的省市名
		selectedProvince.value = selectedData[0].text || ''
		selectedCity.value = selectedData[1].text || ''
		
		console.log('选择的省市:', selectedProvince.value, selectedCity.value);
	}
}

const name = ref('')
const imagePath = ref('')
const gender = ref('')
const tempGender = ref('')
const email = ref('')
const uploadSuccessUrl = ref('')

// 性别显示文本
const genderText = computed(() => {
	return gender.value === 'male' ? '男' : gender.value === 'female' ? '女' : '男'
})

// 返回上一页
const goBack = () => {
	uni.navigateBack()
}

// 编辑昵称
const editNickname = () => {
	tempName.value = name.value
	nicknamePopup.value.open()
}

const cancelEdit = () => {
	nicknamePopup.value.close()
}

const confirmNickname = () => {
	name.value = tempName.value
	nicknamePopup.value.close()
}

const chooseImg = async (res) => {
	console.log('-----选择图片：', res);
	const tempFilePaths = res.detail.avatarUrl;
	imagePath.value = tempFilePaths; 
	console.log('-----选择的图片路径：', tempFilePaths);
	const url = await uploadImage(tempFilePaths);
	uploadSuccessUrl.value = url
};

const saveMessage = async () => {
	if (!name.value) {
		return uni.showToast({
			title: "昵称为必填项",
			icon: "error",
			duration: 700
		})
	}

	if (!imagePath.value) {
		return uni.showToast({
			title: "头像为必填项",
			icon: "error",
			duration: 700
		})
	}

	if (!selectedCity.value) {
		return uni.showToast({
			title: "常居地为必填项",
			icon: "error",
			duration: 700
		})
	}
	
	uni.showLoading({
		title: "正在保存中"              
	})
	
	// 格式化日期为YYYY-MM-DD格式
	const formatBirthdate = (dateStr) => {
		if (!dateStr) return '2024-10-09'
		
		// 如果已经是YYYY-MM-DD格式，直接返回
		if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(dateStr)) {
			// 确保月份和日期是两位数
			const parts = dateStr.split('-')
			const year = parts[0]
			const month = parts[1].padStart(2, '0')
			const day = parts[2].padStart(2, '0')
			return `${year}-${month}-${day}`
		}
		
		// 其他格式转换
		const date = new Date(dateStr)
		if (isNaN(date.getTime())) {
			return '2024-10-09' // 默认日期
		}
		
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const day = String(date.getDate()).padStart(2, '0')
		return `${year}-${month}-${day}`
	}
	             
	const phoneNumber = uni.getStorageSync('phoneNumber')
	changeUserInfo({
		phone_number: phoneNumber,
		name: name.value || '',
		icon: uploadSuccessUrl.value || '',
		gender: gender.value || 'male',
		birthdate: formatBirthdate(birthday.value),
		residence: selectedProvince.value + ' ' + selectedCity.value || ''
	}).then((res) => {
		console.log('----', res);
		uni.setStorageSync('userInfo', res)
		uni.hideLoading()
		uni.showToast({
			duration: 1000,
			icon: 'success',
			title: '保存成功'
		})
		setTimeout(() => {
			uni.switchTab({
				url: '/pages/index/index'
			})
		}, 1000)
	}).catch((err) => {
		uni.hideLoading()
		uni.showToast({
			duration: 1000,
			icon: 'fail',
			title: '保存失败'
		})
	})
}

const birthday = ref('')
const calendar = ref()
const openCalendar = () => {
	calendar._rawValue.open()
}
const confirm = (e) => {
	birthday.value = e.fulldate
	console.log(birthday.value);
}

const formatDate = (dateString) => {
	if (!dateString) return '';
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1);
	const day = String(date.getDate());
	
	return `${year}-${month}-${day}`;
}

const openLocationPicker = () => {
	locationPopup.value.open()
}

const cancelLocationSelect = () => {
	locationPopup.value.close()
}

const confirmLocationSelect = () => {
	locationPopup.value.close()
}

const openGenderPicker = () => {
	tempGender.value = gender.value
	genderPopup.value.open()
}

const cancelGenderSelect = () => {
	genderPopup.value.close()
}

const confirmGenderSelect = () => {
	gender.value = tempGender.value
	genderPopup.value.close()
}

const selectGender = (selectedGender) => {
	tempGender.value = selectedGender
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	min-height: 100vh;
	background: #F5F5F5;
}

/* 顶部导航栏 */
.navbar {
	width: 100%;
	height: 180rpx;
	background: #4A90E2;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	padding-top: 88rpx;
	
	.nav-back, .nav-placeholder {
		width: 60rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.back-icon {
		width: 24rpx;
		height: 24rpx;
		transform: rotate(180deg);
	}
	
	.nav-title {
		font-size: 36rpx;
		font-weight: bold;
		color: #FFFFFF;
	}
}

/* 内容区域 */
.content {
	padding: 40rpx 30rpx;
}

/* 头像和表单容器 */
.info-container {
	width: 692rpx;
	background: #FFFFFF;
	border-radius: 30rpx;
	overflow: hidden;
	box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.08);
	margin: 0 auto 60rpx;
}

/* 头像区域 */
.avatar-section {
	display: flex;
	justify-content: center;
	padding: 50rpx 0 30rpx;
	
	.avatar-button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		
		&::after {
			border: none;
		}
		
		.avatar-img {
			width: 206rpx;
			height: 208rpx;
			border-radius: 103rpx;
			border: 2rpx solid #000000;
			box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
		}
	}
}

/* 表单区域 */
.form-section {
	padding: 0 40rpx 40rpx;
}

.form-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 35rpx 0;
	height: 120rpx;
	border-bottom: 1rpx solid #F0F0F0;
	
	&:last-child {
		border-bottom: none;
	}
	
	.form-label {
		font-size: 27rpx;
		color: #333333;
		font-weight: 400;
		flex: 0 0 auto;
	}
	
	.form-content {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex: 1;
		
		.form-value {
			font-size: 24rpx;
			color: #BABABA;
			margin-right: 20rpx;
		}
		
		.form-arrow {
			width: 12rpx;
			height: 21rpx;
		}
	}
}

/* 保存按钮 */
.save-button {
	width: 598rpx;
	height: 95rpx;
	background: linear-gradient(90deg, #FD8F36 0%, #FC5908 100%);
	border-radius: 17rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30rpx;
	font-weight: 500;
	color: #FFFFFF;
	box-shadow: 0 4rpx 16rpx rgba(252, 89, 8, 0.25);
	margin: 20rpx auto 0;
}

/* 弹窗样式 */
.popup-content {
	width: 600rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	padding: 40rpx;
	
	.popup-title {
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		text-align: center;
		margin-bottom: 40rpx;
	}
	
	.nickname-input {
		margin-bottom: 40rpx;
	}
	
	.popup-buttons {
		display: flex;
		gap: 20rpx;
		
		.popup-btn {
			flex: 1;
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 40rpx;
			font-size: 28rpx;
			
			&.cancel {
				background: #F5F5F5;
				color: #666666;
			}
			
			&.confirm {
				background: linear-gradient(90deg, #FD8F36 0%, #FC5908 100%);
				color: #FFFFFF;
			}
		}
	}
}

/* 地址选择器样式 */
.location-picker-popup {
	background: #FFFFFF;
	border-radius: 20rpx 20rpx 0 0;
	padding: 0;
	height: 50vh;
	max-height: 800rpx;
	
	:deep(.uni-data-picker) {
		padding: 40rpx;
		background: #FFFFFF;
		height: calc(100% - 120rpx);
	}
	
	:deep(.picker-view) {
		height: 100%;
		background: #FFFFFF;
	}
}

.location-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30rpx 40rpx;
	border-bottom: 1rpx solid #F0F0F0;
	background: #FFFFFF;
	
	.location-cancel, .location-confirm {
		font-size: 28rpx;
		color: #666666;
		padding: 10rpx 20rpx;
	}
	
	.location-confirm {
		color: #FC5908;
		font-weight: 500;
	}
	
	.location-title {
		font-size: 32rpx;
		font-weight: 500;
		color: #333333;
	}
}

/* 性别选择器样式 */
.gender-picker-popup {
	background: #FFFFFF;
	border-radius: 20rpx 20rpx 0 0;
	padding: 0;
	min-height: 300rpx;
}

.gender-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30rpx 40rpx;
	border-bottom: 1rpx solid #F0F0F0;
	background: #FFFFFF;
	
	.gender-cancel, .gender-confirm {
		font-size: 28rpx;
		color: #666666;
		padding: 10rpx 20rpx;
	}
	
	.gender-confirm {
		color: #FC5908;
		font-weight: 500;
	}
	
	.gender-title {
		font-size: 32rpx;
		font-weight: 500;
		color: #333333;
	}
}

.gender-options {
	display: flex;
	justify-content: space-between;
	padding: 60rpx 80rpx;
}

.gender-option {
	width: 200rpx;
	height: 80rpx;
	background: #F5F5F5;
	border-radius: 40rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28rpx;
	color: #333333;
	
	&.active {
		background: linear-gradient(90deg, #FD8F36 0%, #FC5908 100%);
		color: #FFFFFF;
	}
}
</style>
