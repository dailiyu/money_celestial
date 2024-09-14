"use strict";
const common_vendor = require("../../common/vendor.js");
const service_merchant = require("../../service/merchant.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_navBar2 + _easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_col + _easycom_uni_row)();
}
const _sfc_main = {
  __name: "deposit_record",
  setup(__props) {
    const recordList = common_vendor.ref([]);
    common_vendor.onMounted(async () => {
      const { results } = await service_merchant.getDepositList();
      recordList.value = results;
      console.log(results);
    });
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
        f: common_vendor.p({
          span: 3
        }),
        g: common_vendor.p({
          span: 9
        }),
        h: common_vendor.p({
          span: 6
        }),
        i: common_vendor.p({
          span: 6
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d6fe0577"]]);
wx.createPage(MiniProgramPage);
