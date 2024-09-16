"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "navBar",
  data() {
    return {
      statusBarHeight: ""
    };
  },
  props: {
    title: {
      type: String
    },
    iconShow: {
      type: Boolean,
      default: true
    },
    bgc: {
      type: String,
      default: "#FC5908"
    },
    isSkip: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.statusBarHeight = common_vendor.index.getWindowInfo().statusBarHeight + "px";
  },
  methods: {
    back() {
      common_vendor.index.navigateBack();
    },
    skip() {
      this.$emit("skip");
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.iconShow
  }, $props.iconShow ? {
    b: common_vendor.o($options.back),
    c: common_vendor.p({
      type: "left",
      size: "20",
      color: "#fff"
    })
  } : {}, {
    d: common_vendor.t($props.title),
    e: $props.isSkip
  }, $props.isSkip ? {
    f: common_vendor.o((...args) => $options.skip && $options.skip(...args))
  } : {}, {
    g: "calc(" + $data.statusBarHeight + " + 60rpx)",
    h: $props.bgc
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fba290dc"], ["__file", "D:/code/money_celestial/components/navBar/navBar.vue"]]);
wx.createComponent(Component);
