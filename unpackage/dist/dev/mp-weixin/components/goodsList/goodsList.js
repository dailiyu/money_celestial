"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "goodsList",
  setup(__props) {
    const _this = common_vendor.getCurrentInstance();
    const flowData = common_vendor.reactive({
      list: [],
      // 数据值
      column: 2,
      // 瀑布列数
      columnSpace: 2
      // 瀑布列宽间距
    });
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
    for (let i = 1; i <= flowData.column; i++) {
      flowData[`column_${i}`] = [];
    }
    common_vendor.onMounted(() => {
      initValue(0);
    });
    const widthCalc = common_vendor.computed(() => {
      return `${100 / flowData.column - flowData.columnSpace}%`;
    });
    const marginCalc = common_vendor.computed(() => {
      const columnWidth = 100 / flowData.column - flowData.columnSpace;
      return `${(100 - columnWidth.toFixed(5) * flowData.column) / (flowData.column - 1)}%`;
    });
    const getMinObj = (a, s) => {
      let m = a[0][s];
      let mo = a[0];
      for (let i = a.length - 1; i >= 0; i--) {
        if (a[i][s] < m)
          m = a[i][s];
      }
      mo = a.filter((i) => i[s] === m);
      return mo[0];
    };
    function getMinColumnHeight() {
      return new Promise((resolve) => {
        const heightArr = [];
        for (let i = 1; i <= flowData.column; i++) {
          common_vendor.index.createSelectorQuery().in(_this).select(`#cont_${i}`).boundingClientRect((res) => {
            heightArr.push({ column: i, height: res.height });
          }).exec(() => {
            if (flowData.column <= heightArr.length) {
              resolve(getMinObj(heightArr, "height"));
            }
          });
        }
      });
    }
    async function initValue(i) {
      if (i >= flowData.list.length)
        return false;
      const minHeightRes = await getMinColumnHeight();
      flowData[`column_${minHeightRes.column}`].push({
        ...flowData.list[i],
        index: i
      });
    }
    function imgLoad(item) {
      const i = item.index;
      initValue(i + 1);
    }
    function imgError(item) {
      const i = item.index;
      initValue(i + 1);
    }
    const toDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/merchant/goods_detail"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(flowData.column, (numVal, index, i0) => {
          return {
            a: common_vendor.f(flowData[`column_${index + 1}`], (item, j, i1) => {
              return {
                a: item.imgUrl,
                b: common_vendor.o(($event) => imgLoad(item), j),
                c: common_vendor.o(($event) => imgError(item), j),
                d: common_vendor.t(item.title),
                e: common_vendor.t(item.point),
                f: common_vendor.t(item.name),
                g: j,
                h: common_vendor.o(toDetail, j)
              };
            }),
            b: `cont_${index + 1}`,
            c: index === 0 ? 0 : marginCalc.value,
            d: numVal
          };
        }),
        b: widthCalc.value
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-feddcdaa"]]);
wx.createComponent(Component);
