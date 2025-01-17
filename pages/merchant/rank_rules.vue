<template>
	<view>
		<navBar title="榜单规则"></navBar>
		<view class="content">
			<view class="" style="background-color: #fff; padding: 42rpx 48rpx;">
				<!-- <view class="title">
					关于满仓
				</view> -->
				<view class="sum">
					 一、榜单分类
				</view>
				<view class="detail">
					1. 拓新榜（榜单 A）  
				</view>
				<view class="detail">
					- 依据商家向新用户赠送积分的数量进行排名。
				</view>
				<view class="detail">
					2. 销量榜（榜单 B）
				</view>
				<view class="detail">
					- 依据商家总赠送积分次数进行排名。

				</view>
				<view class="detail">
					3. 总榜单  
				</view>
				<view class="sum">
					 二、计算规则
				</view>
				<view class="detail">
					- 总榜单得分 = 总赠送积分数量 ×（1 + A榜加成比例 + B榜加成比例）  
				</view>
				<view class="detail">
					- 加成比例： 
				</view>
				<view class="detail">
					- 榜单排名第1名→加 30%  
  
				</view>
				<view class="detail">
					 - 榜单排名第2名→加 29%  
				</view>
				<view class="detail">
					 - …依次递减至最低加 1%  

				</view>
				<view class="sum">
					三、奖励设置
				</view>
				<view class="detail">
					1. 头像框奖励  
				</view>
				<view class="detail">
					 - 拓新榜、销量榜、总榜单均设有月榜排名的头像框奖励。  

				</view>
				<view class="detail">
					- 头像框在次月初自动发放给上月排名相应位置的商家。
				</view>
				<view class="detail">
					- 头像框在有效期内会展示于满仓App内商家可见的各个位置，并在发放后保留一个月。

				</view>
				<view class="detail">
					2. 积分奖励  

				</view>
				<view class="detail">
					 - 月榜前三名（包括拓新榜、销量榜及总榜单）将额外获得积分奖励。  
				</view>
				<view class="detail">
					 - 奖励积分数量将根据实时数据进行调整，具体发放时间和规则以平台公告为准。
				</view>
				<view class="sum">
					四、排名与更新

				</view>
				<view class="detail">
					 - 所有榜单均为月榜，根据每月数据进行排名并于次月初刷新。 
				</view>
				<view class="detail">
					 - 月度排名结果一旦生成，平台会在一定时间内自动发放相关奖励。
				</view>
				<view class="sum">
					五、其他说明
				</view>
				<view class="detail">
					 - 如发现有任何违规、违法或违反平台规则的行为，满仓App有权采取包括但不限于取消奖励、封禁账号等处理措施。
				</view>
				<view class="detail">
					- 本规则自公布之日起生效，满仓App保留根据实际情况调整规则的权利，并享有最终解释权。
				</view>
				<view class="detail">
					如有任何疑问，请及时联系客服或关注满仓App公告。祝各位商家在满仓App平台取得优异成绩！
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.title {
	font-size: 36rpx;
	color: #FC5908;
	font-weight: bold;
	margin-bottom: 46rpx;
	text-align: center;
}
.detail {
	font-size: 24rpx;
	text-indent: 2em;
	margin-bottom: 20rpx;
}
.sum {
	color: #FC5908;
	font-size: 24rpx;
	text-indent: 2em;
	margin-bottom: 20rpx;
	font-weight: bold;
}
</style>
