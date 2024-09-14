"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "upload",
  props: {
    amount: {
      type: Number,
      default: 1
    }
  },
  emits: ["tempImgPaths"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const imageTempPaths = common_vendor.ref([]);
    const props = __props;
    const chooseImg = async () => {
      common_vendor.index.chooseImage({
        count: props.amount,
        success: (res) => {
          const tempFilePaths = res.tempFilePaths;
          imageTempPaths.value = tempFilePaths;
          console.log(tempFilePaths);
          emit("tempImgPaths", tempFilePaths);
        },
        fail: (err) => {
          console.log("选择图片失败：", err);
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: imageTempPaths.value.length != 0
      }, imageTempPaths.value.length != 0 ? {
        b: common_vendor.f(imageTempPaths.value, (image, index, i0) => {
          return {
            a: image
          };
        })
      } : {}, {
        c: imageTempPaths.value.length < props.amount
      }, imageTempPaths.value.length < props.amount ? {
        d: common_assets._imports_0$13,
        e: common_vendor.o(chooseImg)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0917ae16"]]);
wx.createComponent(Component);
