<!-- 瀑布流布局 -->
<template>
  <view class="container">
    <view
      :id="`cont_${index + 1}`"
      class="cont-box"
      :style="{ width: widthCalc, 'margin-left': index === 0 ? 0 : marginCalc }"
      v-for="(numVal, index) in flowData.column"
      :key="numVal"
    >
      <view class="item-box" v-for="(item, j) in flowData[`column_${index + 1}`]" :key="j" @click="toDetail">
        <image class="img-tip" :src="item.imgUrl" mode="widthFix" lazy-load @load="imgLoad(item)" @error="imgError(item)" />
        <view class="tit-tip multi-line-omit">{{ item.title }}</view>
        <view class="desc-tip multi-line-omit">
			<text class="point_num">{{ item.point }}</text><text class="point_text">积分</text>
		</view>
		<view class="flex" style="padding: 0 20rpx;">
			<image src="" mode="aspectFill" class="head"></image>
			<view class="shop_name">
				{{ item.name }}
			</view>
		</view>
      </view>
    </view>
  </view>
</template>
 
<script setup>
import { reactive, computed, getCurrentInstance, onMounted } from "vue";
 
const _this = getCurrentInstance();
const flowData = reactive({
  list: [], // 数据值
  column: 2, // 瀑布列数
  columnSpace: 2 // 瀑布列宽间距
});
/* 数据赋值 */
flowData.list = [
  {
    imgUrl: "https://www.logosc.cn/uploads/resources/2023/03/17/1679045108_thumb.jpg",
    title: "自动驾驶汽车对交通和城市规划的未来影响与挑战",
    point: "50",
	name: "洛龙区宝龙店"
  },
  {
    imgUrl: "https://www.logosc.cn/uploads/resources/2023/03/17/1679044581_thumb.jpg",
    title: "可持续城市发展：构建环保城市的策略和实践",
    point: "50",
	name: "洛龙区宝龙店"
  },
  {
    imgUrl: "https://www.logosc.cn/uploads/resources/2023/03/17/1679045190_thumb.jpg",
    title: "消灭传染病：全球卫生领域的挑战与创新",
    point: "50",
	name: "洛龙区宝龙店"
  }
];
/* 初始化每一列的数据 */
for (let i = 1; i <= flowData.column; i++) {
  flowData[`column_${i}`] = [];
}
/* 生命周期函数-实例被挂载后调用 */
onMounted(() => {
  initValue(0);
});
/* 计算列宽 */
const widthCalc = computed(() => {
  return `${100 / flowData.column - flowData.columnSpace}%`;
});
/* 计算 margin 外边距 */
const marginCalc = computed(() => {
  const columnWidth = 100 / flowData.column - flowData.columnSpace;
  return `${(100 - columnWidth.toFixed(5) * flowData.column) / (flowData.column - 1)}%`;
});
/* 获取最小值的对象 */
const getMinObj = (a, s) => {
  let m = a[0][s];
  let mo = a[0];
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i][s] < m) m = a[i][s];
  }
  mo = a.filter(i => i[s] === m);
  return mo[0];
};
/* 计算每列的高度 */
function getMinColumnHeight() {
  return new Promise(resolve => {
    const heightArr = [];
    for (let i = 1; i <= flowData.column; i++) {
      uni
        .createSelectorQuery()
        .in(_this)
        .select(`#cont_${i}`)
        .boundingClientRect(res => {
          heightArr.push({ column: i, height: res.height });
        })
        .exec(() => {
          if (flowData.column <= heightArr.length) {
            resolve(getMinObj(heightArr, "height"));
          }
        });
    }
  });
}
/* 初始化瀑布流数据 */
async function initValue(i) {
  if (i >= flowData.list.length) return false;
  const minHeightRes = await getMinColumnHeight();
  flowData[`column_${minHeightRes.column}`].push({
    ...flowData.list[i],
    index: i
  });
}
/* 图片加载完成 */
function imgLoad(item) {
  const i = item.index;
  initValue(i + 1); // 加载下一条数据
}
/* 图片加载失败 */
function imgError(item) {
  const i = item.index;
  initValue(i + 1); // 加载下一条数据
}
const toDetail = ()=>{
	uni.navigateTo({
		url: '/pages/merchant/goods_detail'
	})
}
</script>
 
<style lang="scss" scoped>
.container {
  padding: 20rpx;
  .cont-box {
    $borderRadius: 20rpx;
    float: left;
    .item-box {
      width: 100%;
      padding-bottom: 20rpx;
      margin-bottom: 30rpx;
      border-radius: $borderRadius;
      box-shadow: 0rpx 3rpx 6rpx rgba(0, 46, 37, 0.08);
      .img-tip {
        width: 100%;
        border-radius: $borderRadius $borderRadius 0 0;
      }
      .tit-tip {
        text-align: justify;
        font-size: 24rpx;
        padding: 10rpx 20rpx 0;
        font-weight: 900;
      }
      .desc-tip {
        text-align: justify;
        font-size: 26rpx;
        padding: 5rpx 20rpx 0;
        margin-top: 15rpx;
		margin-bottom: 12rpx;
		.point_num {
			font-size: 24rpx;
			color: #F76E00;
			margin-right: 10rpx;
		}
		.point_text {
			font-size: 19rpx;
			color: #999999;
		}
      }
	  .head {
		  width: 30rpx;
		  height: 30rpx;
		  background-color: #ccc;
		  margin-right: 10rpx;
		  border-radius: 50%;
	  }
	  .shop_name {
		  font-size: 19rpx;
		  color: #999999;
	  }
    }
  }
}
/* 多行省略 */
.multi-line-omit {
  word-break: break-all; // 允许单词内自动换行，如果一个单词很长的话
  text-overflow: ellipsis; // 溢出用省略号显示
  overflow: hidden; // 超出的文本隐藏
  display: -webkit-box; // 作为弹性伸缩盒子模型显示
  -webkit-line-clamp: 2; // 显示的行
  -webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式--从上到下垂直排列
}
/* 单行省略 */
.one-line-omit {
  width: 100%; // 宽度100%：1vw等于视口宽度的1%；1vh等于视口高度的1%
  white-space: nowrap; // 溢出不换行
  overflow: hidden; // 超出的文本隐藏
  text-overflow: ellipsis; // 溢出用省略号显示
}
</style>