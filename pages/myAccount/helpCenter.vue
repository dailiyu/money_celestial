<template>
<view class="content">
<view class="item">
	<view class="title line_height  left_margin">Q:&nbsp&nbsp商家和代理的保证金可以退还吗？</view>
	<view class="text line_height">
	   <text class="title left_margin">A:&nbsp&nbsp</text>可以退还，但条件不同：
    </view>
	<view class="text left_margin line_height">
		商家保证金：
	</view>
	<view class="text  ">
		商家申请退还保证金需要14天的解冻期，但必须先确保没有未处理的交易、投诉或售后问题。申请后，平台将在三个工作日内审核，审核通过后14日后保证金会退还。
	</view>
	<view class="text left_margin line_height">
		代理保证金：
	</view>
	<view class="text  ">
		代理申请退还保证金需要90天的解冻期，期间平台会评估代理的经营情况。申请退还保证金后，代理资格会自动取消，失去代理的相关权益。
	</view>
</view>
<view class="item">
	<view class="title line_height  left_margin">Q:&nbsp&nbsp为什么提取积分数量与到账积分数量存在差异？</view>
	<view class="text ">
	   <text class="title left_margin">A:&nbsp&nbsp</text>提取数量与到账数量存在差异是因为每次提取积分时，平台会收取3%的积分提取手续费。这笔费用用于平台的运营和维护，因此到账的实际数量会比提取的数量少3%。
    </view>
	<view class="text left_margin ">
		例如，您提取100积分，到账时将扣除3%的手续费，实际到账97积分。
	</view>
</view>
<view class="item">
	<view class="title line_height  left_margin">Q:&nbsp&nbsp商家保证金的详细说明是什么？</view>
	<view class="text line_height">
	   <text class="title left_margin">A:&nbsp&nbsp</text>商家保证金在满仓平台上具有重要作用，以下是详细说明：
    </view>
	<view class="text left_margin line_height">
		1. 送积分时的扣除规则：
	</view>
	<view class="text ">
		<text class="left_margin"></text> - 如果商家有足够的可用积分，赠送积分时将直接从可用积分中扣除。
		 <br/>
		 <text class="left_margin"></text>- 如果可用积分不足，平台会从商家的保证金中扣除相应的积分，确保商家能够继续赠送积分给消费者。
	</view>
	<view class="text left_margin line_height">
		2. 保证金与店铺等级： 
	</view>
	<view class="text left_margin ">
		 商家的保证金数量决定店铺的等级。保证金越高。
	</view>
</view>
<view class="item">
	<view class="title line_height  left_margin">Q:&nbsp&nbsp商家赠送积分时，如何扣除和分配积分？</view>
	<view class="text ">
	   <text class="title left_margin">A:&nbsp&nbsp</text>在满仓平台，商家赠送积分时，需从商家的可用积分中扣除一定比例，具体规则如下：
    </view>
	<view class="text  ">
		<text class="left_margin"></text>在满仓平台，商家消耗16%的可用积分，即可赠送相应的100个积分。这意味着商家通过较少的积分投入，就能为消费者提供更高的积分奖励。
	</view>
	<view class="text  ">
		<text class="left_margin"></text>例如：每赠送100个积分给消费者，平台会从商家的可用积分中扣除16个积分。
	</view>
	<view class="text left_margin line_height">
		使用方式：
	</view>
	<view class="text  ">
		<text class="left_margin"></text>- 商家赠送的积分将进入消费者的“我的积分”账户。这些积分会按照平台规则锁定，并逐日释放，直至全部解锁。
	</view>
		<view class="text  ">
			<text class="left_margin"></text>- 锁定的积分会按照每天0.05%的比例逐步释放，释放后的积分可供消费者使用或提取。
		</view>
</view>
<view class="item">
	<view class="title line_height  left_margin">Q:&nbsp&nbsp 如何获取积分账号？</view>
	<view class="text line_height">
	   <text class="title left_margin">A:&nbsp&nbsp</text>要获取积分账号，您需要下载D9钱包，并通过钱包生成您的钱包地址。这个钱包地址将作为您在平台上接收和管理积分的唯一标识。如需获取D9钱包的下载地址，请联系您的推荐人，他们将为您提供下载链接及相关支持。
		
	</view>
	
	
	
	
</view>
</view>

</template>

<script setup>
</script>

<style lang="scss" scoped>

.content{
	background-color:#ffffff;
	margin:29rpx;
	
	.item{
		
		font-size: 24rpx;
		line-height: 39rpx;
		text-align: justifyLeft;
		font-style: normal;
		.title{
			color: #FC5908;
			font-weight: 700;
		
		}
		.left_margin{
			margin-left: 38rpx;
		}
		.line_height{
			line-height: 48rpx;
		}
	}
}


</style>