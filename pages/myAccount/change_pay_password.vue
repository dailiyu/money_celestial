<template>
		<navBar title="修改支付密码" ></navBar>
    <view class="page">
        <view class="card">
<!--            <view>
                <button @click="onClear" style="background: #ff5500; color: #fff;">清除内容</button>
            </view> -->
			<view class="password" >输入新密码</view>
            <view class="body">
                <yi-code ref="code" :width="600" @onComplete="complete" @onChange="change"></yi-code>
            </view>
        </view>
		<view class="btn_full" >
						确认
					</view>
    </view>
</template>

<script setup>
import { ref } from 'vue';

const code = ref(null);

const onClear = () => {
    if (code.value) {
        code.value.clear();
    }
};

const complete = (code) => {
    console.log(`complete: ${code}`);
};

const change = (code) => {
    console.log(`change: ${code}`);
};
</script>

<style lang="scss"  scoped>
.page {
    display: flex;
    flex-wrap: wrap;

    .card {
        width: 720rpx;
        margin: 30rpx auto;
        border: 1px solid #f0f0f0;
        border-radius: 12rpx;
		.password{
			margin-left: 55rpx;
			font-weight: 600;
			margin-bottom: -10rpx;
		}
		
        .title {
            font-size: 14px;
            text-align: center;
            line-height: 30px;
            border-bottom: 1px solid #f0f0f0;
        }

        .body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 150rpx;
        }
    }
	.btn_full{
		margin-top: 700rpx;
	}
}
</style>
