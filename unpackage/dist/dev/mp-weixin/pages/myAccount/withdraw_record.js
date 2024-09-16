"use strict";
const common_vendor = require("../../common/vendor.js");
const service_point = require("../../service/point.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_navBar2 + _easycom_uni_col2 + _easycom_uni_row2 + _easycom_uni_load_more2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_col + _easycom_uni_row + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "withdraw_record",
  setup(__props) {
    common_vendor.onMounted(() => {
      getRecordList();
    });
    const recordList = common_vendor.ref([]);
    const status = common_vendor.ref("loading");
    const page = common_vendor.ref(1);
    const getRecordList = async () => {
      const params = common_vendor.ref({
        page: page.value
      });
      status.value = "loading";
      const { results, count } = await service_point.getWithdrawRecord(params.value);
      if (count == results.length) {
        status.value = "no-more";
      } else {
        status.value = "more";
      }
      recordList.value = recordList.value.push(...results);
    };
    const loadMore = () => {
      if (status.value == "more") {
        page.value++;
        getRecordList();
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "提取记录"
        }),
        b: common_vendor.p({
          span: 3
        }),
        c: common_vendor.p({
          span: 9
        }),
        d: common_vendor.p({
          span: 6
        }),
        e: common_vendor.p({
          span: 6
        }),
        f: common_vendor.f(recordList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: "ada4c0a1-7-" + i0 + "," + ("ada4c0a1-6-" + i0),
            c: common_vendor.t(common_vendor.unref(utils_index.obscureString)(item.user)),
            d: "ada4c0a1-8-" + i0 + "," + ("ada4c0a1-6-" + i0),
            e: common_vendor.t(item.transaction_amount),
            f: "ada4c0a1-9-" + i0 + "," + ("ada4c0a1-6-" + i0),
            g: common_vendor.t(common_vendor.unref(utils_index.convertTime)(item.transaction_date, "yyyy-MM-dd hh:mm:ss")),
            h: "ada4c0a1-10-" + i0 + "," + ("ada4c0a1-6-" + i0),
            i: item.id,
            j: "ada4c0a1-6-" + i0
          };
        }),
        g: common_vendor.p({
          span: 3
        }),
        h: common_vendor.p({
          span: 9
        }),
        i: common_vendor.p({
          span: 6
        }),
        j: common_vendor.p({
          span: 6
        }),
        k: common_vendor.o(loadMore),
        l: common_vendor.p({
          status: status.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ada4c0a1"], ["__file", "D:/code/money_celestial/pages/myAccount/withdraw_record.vue"]]);
wx.createPage(MiniProgramPage);
