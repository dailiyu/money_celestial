"use strict";
const common_vendor = require("../../common/vendor.js");
const service_deposit = require("../../service/deposit.js");
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
  __name: "deposit_record",
  setup(__props) {
    common_vendor.onMounted(() => {
      getRecordList();
    });
    const recordList = common_vendor.ref([]);
    const status = common_vendor.ref("loading");
    const page = common_vendor.ref(1);
    const getRecordList = async () => {
      status.value = "loading";
      const { results, count } = await service_deposit.getDepositList({ page: page.value });
      if (count == results.length) {
        status.value = "no-more";
      } else {
        status.value = "more";
      }
      recordList.value = results;
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
          title: "保证金记录"
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
          return common_vendor.e({
            a: "d6fe0577-7-" + i0 + "," + ("d6fe0577-6-" + i0),
            b: common_vendor.t(common_vendor.unref(utils_index.obscureString)(item.user)),
            c: "d6fe0577-8-" + i0 + "," + ("d6fe0577-6-" + i0),
            d: item.change_type == "increase"
          }, item.change_type == "increase" ? {
            e: common_vendor.t(item.change_amount)
          } : {}, {
            f: item.change_type == "decrease"
          }, item.change_type == "decrease" ? {
            g: common_vendor.t(item.change_amount)
          } : {}, {
            h: "d6fe0577-9-" + i0 + "," + ("d6fe0577-6-" + i0),
            i: common_vendor.t(common_vendor.unref(utils_index.convertTime)(item.created_at, "yyyy-MM-dd hh:mm:ss")),
            j: "d6fe0577-10-" + i0 + "," + ("d6fe0577-6-" + i0),
            k: item.id,
            l: "d6fe0577-6-" + i0
          });
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d6fe0577"], ["__file", "D:/code/money_celestial/pages/merchant/deposit_record.vue"]]);
wx.createPage(MiniProgramPage);
