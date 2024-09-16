"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_upload2 = common_vendor.resolveComponent("upload");
  (_easycom_navBar2 + _easycom_uni_data_select2 + _easycom_upload2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_upload = () => "../../components/upload/upload.js";
if (!Math) {
  (_easycom_navBar + _easycom_uni_data_select + _easycom_upload)();
}
const _sfc_main = {
  __name: "upload_goods",
  setup(__props) {
    const shopIntro = common_vendor.ref("");
    const goodsName = common_vendor.ref("");
    const businessRange = common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    const range = common_vendor.ref([
      { value: "篮球", text: "篮球" },
      { value: "足球", text: "足球" },
      { value: "游泳", text: "游泳" }
    ]);
    const changeRange = (e) => {
      businessRange.value = e;
      console.log(e);
    };
    const isChecked = common_vendor.ref(false);
    const changeCheck = () => {
      isChecked.value = !isChecked.value;
    };
    const confirm = () => {
      if (!isChecked.value)
        return common_vendor.index.showToast({
          icon: "none",
          title: "请阅读完须知后勾选同意"
        });
    };
    const temProductImgPaths = common_vendor.ref([]);
    const acceptTempProductImgPath = async (ImgPaths) => {
      temProductImgPaths.value = ImgPaths;
    };
    const temDetailImgPath = common_vendor.ref([]);
    const acceptTemDetailImgPath = async (ImgPaths) => {
      temDetailImgPath.value = ImgPaths;
    };
    common_vendor.ref([]);
    common_vendor.ref([]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "发布商品"
        }),
        b: goodsName.value,
        c: common_vendor.o(($event) => goodsName.value = $event.detail.value),
        d: common_vendor.o(changeRange),
        e: common_vendor.o(($event) => businessRange.value = $event),
        f: common_vendor.p({
          localdata: range.value,
          placeholder: "请选择",
          clear: false,
          modelValue: businessRange.value
        }),
        g: common_vendor.t(temProductImgPaths.value.length),
        h: common_vendor.o(acceptTempProductImgPath),
        i: common_vendor.p({
          amount: 6
        }),
        j: common_vendor.t(temDetailImgPath.value.length),
        k: shopIntro.value,
        l: common_vendor.o(($event) => shopIntro.value = $event.detail.value),
        m: common_vendor.o(acceptTemDetailImgPath),
        n: common_vendor.p({
          amount: 6
        }),
        o: isChecked.value,
        p: common_vendor.o(changeCheck),
        q: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-452b451b"], ["__file", "D:/code/money_celestial/pages/merchant/upload_goods.vue"]]);
wx.createPage(MiniProgramPage);
